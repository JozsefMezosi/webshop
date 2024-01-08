/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: [
    "@frontend/form-components",
    "@frontend/authentication-view",
    "@frontend/authentication",
    "@frontend/authentication-server",
    "@frontend/toast-context",
    "@frontend/graphql-client",
    "@frontend/product-management",
  ],
  images: {
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "j0dkae8vdhvgqooh.public.blob.vercel-storage.com",
      },
    ],
  },
};
