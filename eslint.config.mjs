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
        extends: ['next'],
    }),
    ...compat.extends('next/core-web-vitals', 'next/typescript', 'plugin:prettier/recommended'),
    {
        rules: {
            '@typescript-eslint/no-unused-expressions': [
                'warn',

                {
                    allowShortCircuit: true,
                    allowTernary: true,
                    allowTaggedTemplates: true,
                },
                {
                    rules: {
                        '@typescript-eslint/no-explicit-any': 'off',
                    },
                },
            ],
        },
    },
];

export default eslintConfig;
