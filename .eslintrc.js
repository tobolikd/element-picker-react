// ESLint statically analyzes your code to quickly find problems.
// It is built into most of the IDEs and you can run linting automatically on file save.
// This file contains configuration of ESLint. It loads only recommended settings and plugins
// Feel free to adjust it to your needs if you decide to use it.
// Source and more info https://eslint.org/
// Linting can be run with `npm run lint` or `npm run lint:fix` if you want to fix problems automatically.

module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint/eslint-plugin', 'eslint-plugin-prettier'],
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'prettier',
	],
	settings: {
		react: {
			version: '18.2',
		},
	},
	env: {
		browser: true,
	},
	rules: {
		'prettier/prettier': ['error'],
	},
	overrides: [
		{
			files: ['webpack.config.js', '.eslintrc.js', '.prettierrc.js'],
			env: {
				browser: false,
				node: true,
			},
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
			},
		},
	],
}
