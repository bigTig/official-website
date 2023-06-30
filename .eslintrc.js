module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-uses-react': 2,
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: 'useRecoilCallback',
      },
    ],
    semi: 2, // 强制句尾使用分号
    eqeqeq: 2, // 必须使用===
    'no-plusplus': 0, // 允许使用++或--
    'import/extensions': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'array-bracket-spacing': 2, // 在数组括号内强制实现一致的间距
    'block-spacing': 2, // 代码块间距
    'comma-spacing': 2, // 在变量声明，数组文字，对象文字，函数参数和序列中的逗号前后加上一致的间距
    'comma-style': 2, // ,在当前行结尾
    'func-names': 2, // 强制使用命名函数表达式(禁止使用匿名函数)
    'lines-between-class-members': 2, // 强制在类成员之间填充空行
    'spaced-comment': 2, // 强制注释符号与文案间距的一致性
    'no-underscore-dangle': 0, // 允许悬挂下划线在标识符的开头或末尾
    'no-unused-expressions': [
      2,
      {
        // 消除对程序状态没有影响的未使用的表达式
        allowShortCircuit: true, // 允许在表达式中使用短路评估
        allowTernary: true, // 允许在表达式中使用三元运算符
      },
    ],
    quotes: [
      2,
      'single',
      {
        // 强制使用‘’，
        avoidEscape: true, // 允许转义字符串使用单引号或双引号
        allowTemplateLiterals: true, // 允许变量字符串使用反引号
      },
    ],
    'no-multiple-empty-lines': 2, // 不允许多行空行
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'react/jsx-filename-extension': 'off',
    'operator-linebreak': 'off',
    'max-len': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'implicit-arrow-linebreak': 'off',
    'object-curly-newline': 'off',
    'no-confusing-arrow': 'off',
    'react/jsx-boolean-value': 'off',
    'jsx-a11y/alt-text': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'linebreak-style': ['off', 'windows'],
    'react/function-component-definition': 'off',
    'no-console': 'off',
    'no-undef': 'off',
    'react/no-unstable-nested-components': 0,
    'function-paren-newline': 'off',
    'react/require-default-props': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-props-no-spreading': 'off',
    'prefer-destructuring': 'off',
    'react/jsx-curly-newline': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'arrow-body-style': 'off',
    'prefer-regex-literals': 'off',
  },
};
