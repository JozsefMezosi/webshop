const path = require("path");
/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@form/components", "@tailwind/config"],
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
