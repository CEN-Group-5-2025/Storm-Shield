import eslint from '@eslint/js'
import preferArrow from 'eslint-plugin-prefer-arrow'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      prettier,
      react,
      preferArrow,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'react/react-in-jsx-scope': 'off',

      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/no-redeclare': 'off',
      '@typescript-eslint/space-before-function-paren': 'off',
      'prefer-const': 'warn',
      'prettier/prettier': ['warn', { endOfLine: 'auto' }],
      'preferArrow/prefer-arrow-functions': [
        'warn',
        {
          disallowPrototype: false,
          singleReturnOnly: false,
          classPropertiesAllowed: false,
        },
      ],
      'prefer-arrow-callback': ['warn', { allowNamedFunctions: false }],
      'func-style': ['warn', 'expression', { allowArrowFunctions: true }],
      'react/prop-types': ['off'],
      '@typescript-eslint/no-unused-expressions': ['off'],
    },
  },
)
