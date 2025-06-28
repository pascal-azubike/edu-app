import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.config({
		extends: ['next/core-web-vitals', 'next/typescript'],
		overrides: [
			{
				files: ['*.ts', '*.tsx'],
				parserOptions: {
					project: ['./tsconfig.json'],
				},
			},
			{ files: ['*.tsx', '*.test.ts', '*test.tsx'], rules: { 'max-lines-per-function': 'off' } },
			{
				files: ['*.test.ts', '*test.tsx'],
				rules: {
					'@typescript-eslint/no-magic-numbers': 'off',
					'max-lines': 'off',
					'@typescript-eslint/no-non-null-assertion': 'off',
				},
			},
		],
		parserOptions: {
			ecmaFeatures: {
				jsx: true,
			},
		},
		plugins: ['react', 'react-hooks', 'jest', 'jsx-a11y'],
		settings: {
			react: {
				version: 'detect',
			},
		},
		rules: {
			'no-param-reassign': 'off',
			'jest/no-disabled-tests': 'warn',
			'block-scoped-var': 'error',
			complexity: 'warn',
			'consistent-return': 'off',
			curly: ['error', 'all'],
			'default-param-last': 'off',
			eqeqeq: 'error',
			'max-classes-per-file': ['error', 2],
			'max-lines': 'off',
			'max-lines-per-function': ['warn', { max: 150, skipBlankLines: true, skipComments: true }],
			'max-depth': ['warn', 4],
			'max-params': 'off',
			'new-cap': 'off',
			'no-console': 'warn',
			'no-continue': 'off',
			'no-else-return': 'error',
			'no-empty-function': 'off',
			'no-loop-func': 'off',
			'no-magic-numbers': 'off',
			'no-plusplus': 'off',
			'no-return-assign': ['error', 'except-parens'],
			'no-shadow': 'off',
			'no-restricted-syntax': 'off',
			'no-return-await': 'off',
			'no-self-compare': 'error',
			'no-template-curly-in-string': 'warn',
			'no-useless-constructor': 'off',
			'no-useless-rename': 'error',
			'no-underscore-dangle': 'off',
			'no-unused-expressions': 'error',
			'no-use-before-define': 'off',
			'no-void': 'off',
			'no-warning-comments': ['error', { terms: ['todo', 'fixme'], location: 'anywhere' }],
			'prefer-arrow-callback': ['error', { allowNamedFunctions: true, allowUnboundThis: true }],
			'prefer-const': 'warn',
			'prefer-template': 'error',

			'@typescript-eslint/array-type': ['warn', { default: 'generic', readonly: 'generic' }],
			'@typescript-eslint/ban-tslint-comment': 'off',
			// Interfaces break MST types
			'@typescript-eslint/consistent-type-definitions': 'off',
			'@typescript-eslint/default-param-last': 'error',
			'@typescript-eslint/max-params': 'error',
			'@typescript-eslint/naming-convention': [
				'error',
				{
					selector: 'default',
					format: ['camelCase'],
					leadingUnderscore: 'allow',
					trailingUnderscore: 'allow',
				},
				{
					selector: 'import',
					format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
				},

				{
					selector: 'variable',
					format: ['camelCase', 'UPPER_CASE'],
				},
				{
					selector: 'variable',
					modifiers: ['global', 'const'],
					format: ['UPPER_CASE'],
				},
				{
					selector: 'variable',
					modifiers: ['global'],
					types: ['function'],
					format: ['UPPER_CASE', 'PascalCase'],
				},
				{
					selector: 'variable',
					filter: {
						// For some reason order of properties is important here
						regex: '^.*(?:Model|Schema)$', // end in Model or Schema
						match: true,
					},
					format: ['camelCase', 'PascalCase'],
				},
				{
					selector: 'variable',
					filter: {
						// For some reason order of properties is important here
						regex: '^.*(?:[Cc]ontext|dynamic)$', // end in Context
						match: true,
					},
					format: ['camelCase'],
				},

				{
					selector: 'typeLike',
					format: ['PascalCase'],
				},
				{
					selector: 'enumMember',
					format: ['UPPER_CASE'],
				},
				{
					selector: 'function',
					format: ['camelCase', 'PascalCase'],
				},
				{
					selector: 'objectLiteralProperty',
					format: ['camelCase', 'UPPER_CASE'],
				},
				{
					selector: 'objectLiteralProperty',
					format: null,
					filter: {
						// For some reason order of properties is important here
						regex: '^(?:_id|--.*|data-.*)$',
						match: true,
					},
				},
				{
					selector: 'objectLiteralProperty',
					filter: {
						// For some reason order of properties is important here
						regex: '^.*(?:Model|Schema|Component)$', // end in Model or Schema
						match: true,
					},
					format: ['camelCase', 'PascalCase'],
				},

				{
					selector: 'typeProperty',
					format: ['camelCase', 'PascalCase'],
					filter: {
						// For some reason order of properties is important here
						regex: '^.*(?:Model|Schema)$', // end in Model or Schema
						match: true,
					},
				},
				{
					selector: 'typeProperty',
					format: ['camelCase', 'UPPER_CASE'],
					filter: {
						// For some reason order of properties is important here
						regex: '^(?:_id)$',
						match: false,
					},
				},

				{
					selector: 'parameter',
					format: ['camelCase'],
					leadingUnderscore: 'allow',
				},
				{
					selector: 'parameter',
					filter: {
						// For some reason order of properties is important here
						regex: '^.*(?:Model|Schema)$', // end in Model or Schema
						match: true,
					},
					format: ['camelCase', 'PascalCase'],
					leadingUnderscore: 'allow',
				},
				{
					selector: 'parameterProperty',
					format: ['camelCase', 'UPPER_CASE'],
					filter: {
						// For some reason order of properties is important here
						regex: '^(?:_id)$',
						match: false,
					},
				},
				{
					selector: 'parameterProperty',
					filter: {
						// For some reason order of properties is important here
						regex: '^.*(?:Model|Schema)$', // end in Model or Schema
						match: true,
					},
					format: ['camelCase', 'PascalCase'],
				},
			],
			'@typescript-eslint/no-continue': 'off',
			'@typescript-eslint/no-empty-function': ['error', { allow: ['private-constructors'] }],
			'@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
			'@typescript-eslint/no-explicit-any': 'error',
			'@typescript-eslint/no-inferrable-types': 'off',
			'@typescript-eslint/no-loop-func': 'warn',
			'@typescript-eslint/no-magic-numbers': [
				'error',
				{
					ignore: [-100, -1, 0, 1, 2, 10, 60, 100, 1000],
					ignoreEnums: true,
					ignoreTypeIndexes: true,
					enforceConst: true,
				},
			],
			'@typescript-eslint/no-non-null-assertion': 'warn',
			'@typescript-eslint/no-underscore-dangle': 'off',
			'@typescript-eslint/no-unused-expressions': 'error',
			'@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: false }],
			'@typescript-eslint/no-use-before-define': 'off',
			'@typescript-eslint/no-useless-constructor': ['error'],
			'@typescript-eslint/no-shadow': 'error',
			'@typescript-eslint/return-await': 'error',
			'@typescript-eslint/strict-boolean-expressions': 'error',
			'@typescript-eslint/switch-exhaustiveness-check': 'error',

			'import/extensions': ['error', 'ignorePackages', { ts: 'never', tsx: 'never', js: 'never' }],
			'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
			'import/prefer-default-export': 'off',

			'sonarjs/cognitive-complexity': 'off',
			// 'sonarjs/no-duplicate-string': ['error', { threshold: 7 }],
			'sonarjs/no-nested-template-literals': 'off',
			'sonarjs/prefer-immediate-return': 'off',

			'react/jsx-indent': ['warn', 'tab'],
			'react/jsx-indent-props': ['warn', 'tab'],
			'react/jsx-wrap-multilines': ['error', { prop: false }],
			'react/jsx-closing-bracket-location': [1, { nonEmpty: 'after-props' }],
			'react/destructuring-assignment': [0, 'never', { ignoreClassFields: true }],
			'react/jsx-curly-newline': 'off',
			'react/jsx-one-expression-per-line': 'off',
			'react/prop-types': 'off',
			'react/react-in-jsx-scope': 'off', // eslint does not support using react-jsx as tsconfig setting
			'react/jsx-props-no-spreading': ['off', { html: 'ignore', explicitSpread: 'ignore' }], // eslint does not support our specific use-case - 20.02.2020
			'react/require-default-props': 'off', // eslint does not support defining default props in destructured function parameters - 3.12.2019
			'no-html-link-for-pages': 'off',
		},
	}),
];

export default eslintConfig;
