const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["utfs.io"],
    },
    experimental: {
      missingSuspenseWithCSRBailout: false,
    },
    webpack: (config) => {
      // TEMPORARY: authentication is disabled. Point Clerk at local stubs so the
      // app runs without Clerk credentials. Remove this block to restore Clerk.
      config.resolve.alias["@clerk/nextjs/server"] = path.resolve(
        __dirname,
        "lib/auth-stub/server.ts"
      );
      config.resolve.alias["@clerk/nextjs"] = path.resolve(
        __dirname,
        "lib/auth-stub/client.tsx"
      );
      return config;
    },
  };
  
  module.exports = nextConfig;
  