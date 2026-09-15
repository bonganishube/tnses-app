import Stripe from "stripe";

let client: Stripe | null = null;

/** True when the Stripe secret key is present in the environment. */
export const isStripeConfigured = () => Boolean(process.env.STRIPE_API_KEY);

/**
 * Returns the Stripe client, constructing it on first use.
 *
 * This must stay lazy. `next build` imports every route module during its
 * "Collecting page data" step, so a `new Stripe(...)` at module scope runs at
 * build time and throws "Neither apiKey nor config.authenticator provided"
 * when STRIPE_API_KEY is absent, failing the whole build rather than just
 * checkout. Deferring it to request time means a missing secret degrades the
 * payment endpoints instead.
 */
export const getStripe = () => {
  const apiKey = process.env.STRIPE_API_KEY;

  if (!apiKey) {
    throw new Error(
      "Stripe is not configured. Set STRIPE_API_KEY to enable checkout."
    );
  }

  client ??= new Stripe(apiKey, {
    apiVersion: "2024-12-18.acacia",
    typescript: true,
  });

  return client;
};
