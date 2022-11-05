// Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it
// with its own rules that take the maximum line length into account, wrapping code when necessary.
// Prettier is configured to run as a part of ESLint via `eslint-plugin-prettier`.
// This file contains some settings we find useful but if you do not agree with them or want to use your own
// feel free to disable/overwrite them.
// Source and more info: https://prettier.io/
// Linting can be run with `npm run lint` or `npm run lint:fix` if you want to fix problems automatically.

module.exports = {
	semi: false,
	useTabs: true,
	singleQuote: true,
	trailingComma: 'all',
	printWidth: 120,
	quoteProps: 'consistent',
}
