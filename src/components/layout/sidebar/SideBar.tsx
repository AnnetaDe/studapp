import { SIDEBAR_DATA } from './sideBar.data';
import { SideBarHeader } from './sideBarHeader/SideBarHeader';
import SideMenu from './sideBarMenus/SideMenu';

export function Sidebar() {
  return (
    <aside className="sidebar grid grid-cols-1 gap-8  bg-gray-500 h-screen">
      <SideBarHeader />
      <SideMenu menu={SIDEBAR_DATA} />
    </aside>
  );
}
