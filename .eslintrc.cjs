module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	parser: 'vue-eslint-parser',
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:vue/vue3-recommended',
		'prettier'
	],
	ignorePatterns: ['dist', '.eslintrc.cjs', './tsconfig.json'],
	parserOptions: {
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
		project: './tsconfig.json',
		extraFileExtensions: ['.vue']
	},
	plugins: ['vue'],
	rules: {
		'arrow-parens': ['error', 'always'],
		eqeqeq: ['error', 'always'],
		'max-len': [
			'error',
			{
				code: 120,
				ignoreComments: true,
				ignoreStrings: true
			}
		],
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': 'off',
		'import/no-unresolved': [
			'off',
			{
				caseSensitive: true
			}
		],
		'import/extensions': 'off'
	},
	settings: {}
};
