import { SIDEBAR_DATA } from './sideBar.data';
import { SideBarHeader } from './sideBarHeader/SideBarHeader';
import SideMenu from './sideBarMenus/SideMenu';

export function Sidebar() {
  return (
    <aside className="sidebar bg-gray-500 h-screen ">
      <SideBarHeader />
      <SideMenu menu={SIDEBAR_DATA} />
    </aside>
  );
}
