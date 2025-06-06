module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'import'],
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended', // ESLint’s built‐in recommended rules
    'plugin:@typescript-eslint/recommended', // recommended for TS
    'plugin:react/recommended', // recommended for React
    // …any other shareable configs you use
  ],
  settings: {
    react: {
      version: 'detect', // for eslint-plugin-react
    },
  },
  rules: {
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-indent': ['error', 2],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: { var: 2, let: 2, const: 3 },
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: { parameters: 1, body: 1 },
        FunctionExpression: { parameters: 1, body: 1 },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoredNodes: [
          'JSXElement',
          'JSXElement *',
          'JSXFragment',
          'JSXFragment *',
        ],
        ignoreComments: false,
      },
    ],

    semi: ['error', 'always'],

    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],

    'max-len': [
      'error',
      {
        code: 100,
        tabWidth: 2,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreStrings: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],

    'no-trailing-spaces': 'error',

    'eol-last': ['error', 'always'],

    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {
          return: { after: true },
          throw: { after: true },
          try: { after: true },
        },
      },
    ],

    'import/newline-after-import': ['error', { count: 1 }],

    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],

    'linebreak-style': ['error', 'unix'],

    'react/react-in-jsx-scope': 'off',
  },
};
