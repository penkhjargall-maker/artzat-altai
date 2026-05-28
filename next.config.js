/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  i18n: {
    locales: ['mn', 'en'],
    defaultLocale: 'mn',
  },
}

module.exports = nextConfig
