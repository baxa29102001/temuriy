/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config")


const nextConfig = {
  i18n,
  images: {
    domains: ['360tcrp.uz']
  },
  reactStrictMode: false,
}

module.exports = nextConfig


