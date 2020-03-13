const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withMDX = require('@next/mdx')();

module.exports = withBundleAnalyzer(
  withMDX({
    env: {},
    pageExtensions: ['tsx', 'mdx'],
  }),
);
