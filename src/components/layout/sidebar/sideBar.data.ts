import type { ISidebarNavItem, ISideBarSettingsItem } from './sidebar.types';
import { STUDENT_PAGE_config } from '@/config/public.config';
import {
  faBrain,
  faCalendar,
  faCompass,
  faGear,
  faRocket,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';

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
    icon: faCalendar,
    label: 'Schedule',
    link: STUDENT_PAGE_config.SCHEDULE,
    isBottomBorder: false,
  },
  {
    icon: faBrain,
    label: 'Tests',
    link: STUDENT_PAGE_config.TESTS,
    isBottomBorder: true,
  },
];

export const SIDEBAR_SETTINGS: ISideBarSettingsItem = {
  icon: faGear,
  label: 'Settings',
  link: STUDENT_PAGE_config.SETTINGS,
};
