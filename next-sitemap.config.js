/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: `https://${process.env.NEXT_PUBLIC_DOMAIN}${process.env.NEXT_PUBLIC_BASE_PATH || ''}`,
  generateRobotsTxt: true, // (optional)
  // ...other options
  output: 'export',
}