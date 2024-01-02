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
};
