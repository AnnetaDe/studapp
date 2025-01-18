'use client';
import { SIDEBAR_DATA } from './sideBar.data';
import SideMenu from './sideBarMenus/SideMenu';

export function Sidebar({ isOpened }: { isOpened: boolean }) {
  isOpened ? 'translate-x-0' : '-translate-x-full';

  return (
		<aside
			className={`sidebar fixed left-0 top-0 h-full w-full overflow-y-auto py-16 text-white transition-all duration-300 ease-in-out sm:w-56 md:w-56 ${
				isOpened ? 'translate-x-0' : '-translate-x-full'
			} w-56 border-slate-700 bg-titanium`}
		>
			<SideMenu menu={SIDEBAR_DATA} />
		</aside>
	);
}
