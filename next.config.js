const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withMDX = require('@next/mdx')();

module.exports = withBundleAnalyzer(
  withMDX({
    env: {
      ROOT: __dirname,
    },
    webpack(config, options) {
      config.resolve.extensions.push('.mdx');
      return config;
    },
    exportTrailingSlash: true,
    exportPathMap: async function() {
      const paths = {
        '/': { page: '/' },
        '/about': { page: '/about' },
      };
      return paths;
    },
  }),
);
