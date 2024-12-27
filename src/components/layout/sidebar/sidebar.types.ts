import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface ISidebarNavItem {
  icon: IconDefinition;
  label: string;
  link: string;
  isBottomBorder?: boolean;
}

export interface ISideBarTeacherItem {
  id: string;
  avatar?: string;
  label: string;
  link?: string;
  recentPosts?: boolean;
}

export interface ISideBarSettingsItem {
  icon: IconDefinition;
  label: string;
  link: string;
}
