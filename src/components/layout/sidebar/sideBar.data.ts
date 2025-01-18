import type { ISidebarNavItem } from './sidebar.types';
import { PUBLIC_PAGE_CONFIG, STUDENT_PAGE_CONFIG } from '@/config/pages.config';
import { faBrain, faCompass, faRocket, faTrophy } from '@fortawesome/free-solid-svg-icons';

export const SIDEBAR_DATA: ISidebarNavItem[] = [
	{
		icon: faTrophy,
		label: 'Profile',
		link: STUDENT_PAGE_CONFIG.PROFILE,
		isBottomBorder: false,
	},

	{
		icon: faRocket,
		label: 'Dashboard',
		link: STUDENT_PAGE_CONFIG.DASHBOARD,
		isBottomBorder: false,
	},
	{
		icon: faCompass,
		label: 'Explore',
		link: PUBLIC_PAGE_CONFIG.EXPLORE,
		isBottomBorder: false,
	},

	{
		icon: faBrain,
		label: 'Tests',
		link: PUBLIC_PAGE_CONFIG.GENERATE,
		isBottomBorder: true,
	},
];
