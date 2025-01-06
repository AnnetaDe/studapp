import type { ISidebarNavItem } from './sidebar.types';
import { STUDENT_PAGE_config } from '@/config/public.config';
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
    link: STUDENT_PAGE_config.EXPLORE,
    isBottomBorder: false,
  },
  {
    icon: faTrophy,
    label: 'Awards',
    link: STUDENT_PAGE_config.AWARDS,
    isBottomBorder: false,
  },

  {
    icon: faBrain,
    label: 'Tests',
    link: STUDENT_PAGE_config.GENERATE,
    isBottomBorder: true,
  },
];
