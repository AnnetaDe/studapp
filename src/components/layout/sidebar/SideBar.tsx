'use client';
import { SIDEBAR_DATA } from './sideBar.data';
import SideMenu from './sideBarMenus/SideMenu';

export function Sidebar({ isOpened }: { isOpened: boolean }) {
  isOpened ? 'translate-x-0' : '-translate-x-full';

  return (
    <aside
      className={` sidebar py-16 bg-slate-800 text-white h-full overflow-y-auto fixed  top-0 left-0 transition-transform max-w-50 ${
        isOpened ? 'translate-x-0' : '-translate-x-full'
      } w-50`}
    >
      <SideMenu menu={SIDEBAR_DATA} />
    </aside>
  );
}
