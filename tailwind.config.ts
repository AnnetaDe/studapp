import { nextui } from '@nextui-org/theme';
import { COLORS } from './src/constants/colors.constants';
import type { Config } from 'tailwindcss';

const config: Config = {
	mode: 'jit',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/components/(input|progress|select|skeleton|spinner|form|listbox|divider|popover|button|ripple|scroll-shadow).js',
	],
	theme: {
		extend: {
			colors: COLORS,
		},
		screens: {
			xs: '475px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},

		backgroundImage: {
			titanium: 'linear-gradient(to right, rgba(40, 48, 72, 1), rgba(133, 147, 152, 0.3))',
			bluewood: 'linear-gradient(to right, rgba(40, 48, 72), rgba(253, 116, 108, 0.3))',
			ash: 'linear-gradient(to right, rgba(96, 108, 136, 0.7), rgba(63, 76, 107, 0.4))',
			witch: 'linear-gradient(to right, rgba(40, 48, 72, 0.9), rgba(195, 20, 50, 0.4) )',
		},
	},
	plugins: [nextui()],
};
export default config;
