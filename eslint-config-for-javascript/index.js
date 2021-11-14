module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['import'],
  rules: {
    // disable unnecessary recommended rules
    'no-console': 0,
    'no-constant-condition': 0,

    // best practices
    'accessor-pairs': 2,
    'array-callback-return': 2,
    'consistent-return': 2,
    'dot-location': [2, 'property'],
    'eqeqeq': [2, 'smart'],
    'no-caller': 2,
    'no-global-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-label': 2,
    'no-invalid-this': 2,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-new': 2,
    'no-new-wrappers': 2,
    'no-proto': 2,
    'no-return-assign': 2,
    'no-return-await': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-void': 2,
    'no-unused-expressions': 2,
    'no-unsafe-negation': 2,
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-useless-return': 2,
    'no-with': 2,
    'prefer-promise-reject-errors': [2, { allowEmptyReject: true }],
    'yoda': 2,
    'require-atomic-updates': 2,
    'comma-dangle': [2, {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'only-multiline',
    }],

    // ES
    'no-var': 2,
    'prefer-const': 2,
    'arrow-parens': [2, 'always'],
    'arrow-spacing': 2,
    'generator-star-spacing': 2,
    'no-confusing-arrow': 2,
    'no-duplicate-imports': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-rename': 2,
    'object-shorthand': 2,
    'prefer-numeric-literals': 2,
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'prefer-template': 2,
    'rest-spread-spacing': 2,
    'yield-star-spacing': 2,
    'template-tag-spacing': 2,

    // variables
    'no-shadow-restricted-names': 2,
    'no-undef-init': 2,
    'no-use-before-define': [2, 'nofunc'],

    // node-related
    'global-require': 2,
    'handle-callback-err': 2,
    'no-buffer-constructor': 2,
    'no-mixed-requires': 2,
    'no-new-require': 2,
    'no-path-concat': 2,
    'no-process-exit': 2,

    // stylistic issues
    'curly': [2, 'multi-line', 'consistent'],
    'indent': [2, 2, { flatTernaryExpressions: true, SwitchCase: 1 }],
    'linebreak-style': [2, 'unix'],
    'quotes': [2, 'single', { avoidEscape: true }],
    'semi': [2, 'always'],
    'array-bracket-spacing': 2,
    'block-spacing': 2,
    'brace-style': [2, '1tbs', { allowSingleLine: true }],
    'camelcase': 2,
    'comma-spacing': 2,
    'comma-style': 2,
    'eol-last': 2,
    'func-call-spacing': 2,
    'func-name-matching': 2,
    'implicit-arrow-linebreak': 2,
    'key-spacing': 2,
    'keyword-spacing': 2,
    'new-parens': 2,
    'newline-before-return': 2,
    'no-array-constructor': 2,
    'no-empty': 2,
    'no-lonely-if': 2,
    'no-new-object': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': [2, { max: 2 }],
    'no-trailing-spaces': 2,
    'no-unneeded-ternary': 2,
    'object-curly-spacing': [2, 'always'],
    'operator-linebreak': [2, 'before'],
    'semi-spacing': 2,
    'space-before-blocks': 2,
    'space-before-function-paren': [2, { anonymous: 'always', named: 'never' }],
    'space-in-parens': 2,
    'space-infix-ops': 2,
    'space-unary-ops': 2,
    'switch-colon-spacing': 2,
    'max-len': [
      1,
      {
        'code': 120,
        'ignoreComments': true,
        'ignoreUrls': true,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true,
        'ignoreRegExpLiterals': true
      }
    ],

    // import
    'import/named': 2,
    'import/default': 0,
    'import/namespace': 0,
    'import/export': 2,
    'import/no-named-as-default': 2,
    'import/no-named-as-default-member': 2,
    'import/no-deprecated': 0,
    'import/no-mutable-exports': 2,
    'import/first': 2,
    'import/no-duplicates': 2,
    'import/order': [2, {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      pathGroups: [
        {
          pattern: '*.+(png|svg)',
          group: 'sibling',
          patternOptions: { matchBase: true },
          position: 'after',
        },
        {
          pattern: '*.+(scss|sass|css)',
          group: 'sibling',
          patternOptions: { matchBase: true },
          position: 'after',
        },
      ],
    }],
    'import/newline-after-import': 2,
    'import/no-restricted-paths': 0,
    'import/no-absolute-path': 2,
    'import/no-dynamic-require': 2,
    'import/no-internal-modules': [0, {
      allow: [],
    }],
    'import/no-unassigned-import': 0,
    'import/no-named-default': 2,
    'import/no-anonymous-default-export': [1, {
      allowArray: false,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowLiteral: false,
      allowObject: false,
    }],
    'import/group-exports': 0,
    'import/no-default-export': 0,
    'import/no-named-export': 0,
    'import/no-self-import': 1,
    'import/no-cycle': 0,
    'import/no-relative-parent-imports': 0,
  }
};