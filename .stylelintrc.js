module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-styled-components',
    'stylelint-prettier/recommended',
  ],
  rules: {
    'declaration-empty-line-before': null,
  },
};
