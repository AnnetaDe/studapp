import type { ISidebarNavItem } from './sidebar.types';
import { PUBLIC_PAGE_CONFIG, STUDENT_PAGE_config } from '@/config/public.config';
import { faBrain, faCompass, faRocket, faTrophy } from '@fortawesome/free-solid-svg-icons';

export const SIDEBAR_DATA: ISidebarNavItem[] = [
  {
    icon: faRocket,
    label: 'Dashboard',
    link: STUDENT_PAGE_config.DASHBOARD,
    isBottomBorder: false,
  },
  {
    icon: faCompass,
    label: 'Explore',
    link: PUBLIC_PAGE_CONFIG.EXPLORE,
    isBottomBorder: false,
  },
  {
    icon: faTrophy,
    label: 'Awards',
    link: PUBLIC_PAGE_CONFIG.AWARDS,
    isBottomBorder: false,
  },

  {
    icon: faBrain,
    label: 'Tests',
    link: STUDENT_PAGE_config.GENERATE,
    isBottomBorder: true,
  },
];
