
module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
	},
	extends: ['@nuxtjs/eslint-config-typescript', 'plugin:@typescript-eslint/recommended'],
	plugins: ['only-warn'],
	rules: {
		'indent': [1, 'tab'],
		'no-tabs': 0,
		'semi': [1, 'always'],
		'no-multiple-empty-lines': [ 1, { max: 2, maxEOF: 0 } ],
		'prefer-const': 1,
		'arrow-parens': [1, 'always'],
		'comma-dangle': [1, 'always-multiline'],
		'quote-props': [1, 'as-needed'],
		'object-curly-spacing': [1, 'always'],
		'object-curly-newline': [1, { multiline: true, consistent: true }],
		'no-trailing-spaces': 1,
		'no-console': [1, { allow: ['warn', 'error'] }],
		'quotes': [1, 'single'],
		'jsx-quotes': 1,
		'key-spacing': [ 1, { align: 'value' } ],

		'@typescript-eslint/key-spacing': [ 1, { align: 'value' } ],
		'@typescript-eslint/no-unused-vars': 1,
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/no-non-null-assertion': 0,
		'@typescript-eslint/ban-ts-comment': 0,
		'@typescript-eslint/ban-types': 1,

		'vue/script-indent': [1, 'tab', {
			baseIndent: 0,
			switchCase: 0,
			ignores: []
		}],
	},
}
