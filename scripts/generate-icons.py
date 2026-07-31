#!/usr/bin/env python3
"""
Regenerates the app icons from the TNSES mark: a navy square inset in an
orange rounded square, using the brand colours from tailwind.config.ts.

The source public/logo.png is not upscaled — the mark is redrawn as geometry at
each size so it stays crisp at 16px, and the inner square is made truly square
and optically centred (in logo.png it is 269x284 and sits off-centre, which
reads as lopsided once shrunk to a favicon).

Outputs:
  app/favicon.ico    multi-size ICO (16/32/48) for /favicon.ico
  app/icon.png       512x512, picked up automatically by the App Router
  app/apple-icon.png 180x180, opaque square (iOS applies its own mask)

Requires Pillow, which is not a project dependency:
    python3 -m venv .venv && .venv/bin/pip install Pillow
    .venv/bin/python scripts/generate-icons.py
"""

import io
import struct
from pathlib import Path
from PIL import Image, ImageDraw

ORANGE = (255, 97, 0, 255)      # primaryColor  #FF6100
NAVY = (23, 34, 67, 255)        # secondaryColor #172243

# Proportions taken from public/logo.png, whose navy block is 269x284 in a
# 500x500 canvas: 30.6% of the area, i.e. an equivalent square ratio of 0.553,
# leaving an orange frame of ~22.4% of the width per side.
INNER_RATIO = 0.553
OUTER_RADIUS_RATIO = 0.18
# Sharp, like the mark itself. Any radius here costs four blended corner pixels
# at 16px for a softening nobody can see at that size.
INNER_RADIUS_RATIO = 0.0
SUPERSAMPLE = 8

APP = Path(__file__).resolve().parent.parent / "app"


def draw_mark(size: int, *, rounded: bool = True) -> Image.Image:
    """
    Render the mark at `size`, supersampled then area-averaged down.

    Two details matter at 16px:
      * the inner square is snapped to whole final pixels with equal margins,
        so its edges stay crisp instead of smearing across two pixels;
      * downscaling uses BOX (area average) rather than LANCZOS, whose
        overshoot puts a brown halo around the navy/orange boundary.
    """
    # Snap the inner square to whole pixels so its edges stay crisp, sizing it
    # for the closest match to INNER_RATIO. Forcing both margins to be equal
    # would quantise 16px to either 25% or 39% navy against a 30.6% target, so
    # the leftover pixel is allowed to land on one side; the extra goes right
    # and bottom, the same direction the original mark leans.
    inner_px = max(1, round(size * INNER_RATIO))
    offset_px = (size - inner_px) // 2

    s = size * SUPERSAMPLE
    canvas = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    draw = ImageDraw.Draw(canvas)

    if rounded:
        draw.rounded_rectangle(
            [0, 0, s - 1, s - 1],
            radius=round(size * OUTER_RADIUS_RATIO) * SUPERSAMPLE,
            fill=ORANGE,
        )
    else:
        draw.rectangle([0, 0, s - 1, s - 1], fill=ORANGE)

    o = offset_px * SUPERSAMPLE
    i = inner_px * SUPERSAMPLE
    draw.rounded_rectangle(
        [o, o, o + i - 1, o + i - 1],
        radius=round(inner_px * INNER_RADIUS_RATIO) * SUPERSAMPLE,
        fill=NAVY,
    )

    return canvas.resize((size, size), Image.BOX)


def write_ico(path: Path, images: list[Image.Image]) -> None:
    """
    Assemble a multi-size ICO from separately rendered frames.

    Pillow's ICO writer resizes one source image and silently drops any
    requested size larger than it, so the container is built by hand here to
    keep each frame's own supersampled render.
    """
    payloads = []
    for im in images:
        buf = io.BytesIO()
        im.save(buf, format="PNG", optimize=True)
        payloads.append(buf.getvalue())

    offset = 6 + 16 * len(payloads)
    header = struct.pack("<HHH", 0, 1, len(payloads))
    directory = b""
    for im, data in zip(images, payloads):
        w = 0 if im.width >= 256 else im.width
        h = 0 if im.height >= 256 else im.height
        directory += struct.pack("<BBBBHHII", w, h, 0, 0, 1, 32, len(data), offset)
        offset += len(data)

    path.write_bytes(header + directory + b"".join(payloads))


def main() -> None:
    # Browser tab / bookmark icon
    icon = draw_mark(512)
    icon.save(APP / "icon.png", optimize=True)

    # iOS home screen: opaque, square, no rounding of our own
    apple = draw_mark(180, rounded=False).convert("RGB")
    apple.save(APP / "apple-icon.png", optimize=True)

    # Legacy /favicon.ico, with the sizes browsers actually ask for
    write_ico(APP / "favicon.ico", [draw_mark(n) for n in (16, 32, 48)])

    print("wrote app/icon.png, app/apple-icon.png, app/favicon.ico")


if __name__ == "__main__":
    main()
