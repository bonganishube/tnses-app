import Reveal from "./Reveal";

/**
 * Partner / funder logo strip.
 *
 * TODO: drop real partner marks into `public/brands` (SVG or transparent PNG,
 * roughly 158x48) and list them here — the section renders itself only once
 * this array has entries, so it stays hidden rather than showing placeholders.
 *
 * e.g. { name: "UNICEF", img: "/brands/unicef.svg" }
 *
 * The previous placeholders pointed at tailwindui.com URLs that now 404, which
 * is why this section was rendering broken images.
 */
const brands: { name: string; img: string }[] = [];

export const Brands = () => {
  if (brands.length === 0) return null;

  // Repeated so the -50% translate loops seamlessly regardless of logo count.
  const marqueeItems = [...brands, ...brands, ...brands, ...brands];

  return (
    <section
      className="w-full border-b border-secondaryColor/5 bg-white py-16 lg:py-20"
      id="brands"
    >
      <div className="container mx-auto px-4">
        <Reveal>
          <p className="text-center font-tertiary text-xs tracking-[0.25em] text-slate-500">
            TRUSTED BY MARKET LEADERS
          </p>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <div className="edge-fade pause-on-hover mt-10 w-full overflow-hidden">
          <div
            data-marquee
            className="flex w-max animate-marquee items-center gap-14 pr-14 sm:gap-20 sm:pr-20"
          >
            {marqueeItems.map((brand, index) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={`${brand.name}-${index}`}
                src={brand.img}
                alt={brand.name}
                width={158}
                height={40}
                loading="lazy"
                aria-hidden={index >= brands.length}
                className="h-8 w-auto shrink-0 opacity-40 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:h-9"
              />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};
