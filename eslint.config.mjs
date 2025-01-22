import withNuxt from './.nuxt/eslint.config.mjs';
import 'eslint-plugin-only-warn';

export default withNuxt(
  {
    rules: {
      '@stylistic/semi': [1, 'always'],
    },
  },
);
