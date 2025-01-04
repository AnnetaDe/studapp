import { SIDEBAR_DATA, SIDEBAR_SETTINGS } from './sideBar.data';
import { SideBarHeader } from './sideBarHeader/SideBarHeader';
import { SettingsItem } from './sideBarMenus/SettingsItem';
import SideMenu from './sideBarMenus/SideMenu';

export function Sidebar() {
  return (
    <aside className="sidebar bg-gray-500 h-screen block ">
      <SideBarHeader />

      <SideMenu menu={SIDEBAR_DATA} />
      <SettingsItem data={SIDEBAR_SETTINGS} />
    </aside>
  );
}
