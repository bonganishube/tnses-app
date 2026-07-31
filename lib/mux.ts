import Mux from "@mux/mux-node";

let client: Mux | null = null;

/** True when both Mux credentials are present in the environment. */
export const isMuxConfigured = () =>
  Boolean(process.env.MUX_TOKEN_ID && process.env.MUX_TOKEN_SECRET);

/**
 * Returns the Mux video API, constructing the client on first use.
 *
 * This must stay lazy. `next build` imports every route module during its
 * "Collecting page data" step, so a `new Mux(...)` at module scope runs at
 * build time — and the SDK constructor throws when its tokens are missing,
 * failing the entire build rather than just the video feature. Deferring it to
 * request time means a missing secret degrades one endpoint instead.
 */
export const getMuxVideo = () => {
  const tokenId = process.env.MUX_TOKEN_ID;
  const tokenSecret = process.env.MUX_TOKEN_SECRET;

  if (!tokenId || !tokenSecret) {
    throw new Error(
      "Mux is not configured. Set MUX_TOKEN_ID and MUX_TOKEN_SECRET to enable video uploads."
    );
  }

  client ??= new Mux({ tokenId, tokenSecret });
  return client.video;
};
