import { nextui } from '@nextui-org/theme';
import { COLORS } from './src/constants/colors.constants';
import type { Config } from 'tailwindcss';

const config: Config = {
    mode: 'jit',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/components/(input|progress|select|spinner|form|listbox|divider|popover|button|ripple|scroll-shadow).js',
    ],
    theme: {
        extend: {
            colors: COLORS,
        },
    },
    plugins: [nextui()],
};
export default config;
