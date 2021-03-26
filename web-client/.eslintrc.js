module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier',
    ],
    plugins: ['react', '@typescript-eslint', 'prettier'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'react/react-in-jsx-scope': 'off',
        'prettier/prettier': ['error', { singleQuote: true }],
    },
    env: {
        browser: true,
        amd: true,
        node: true,
    },
    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
};
