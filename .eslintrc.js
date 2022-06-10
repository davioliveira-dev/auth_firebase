module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	extends: ['plugin:react/recommended', 'xo'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'no-constant-binary-expression': 'off',
	},
};
