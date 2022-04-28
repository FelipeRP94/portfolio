/** @type {import('next').NextConfig} */

const withImages = require("next-images");
const withFonts = require("next-fonts");

module.exports = withFonts(
  withImages({
    reactStrictMode: true,
  })
);
