'use client';
import { SIDEBAR_DATA } from './sideBar.data';
import SideMenu from './sideBarMenus/SideMenu';

export function Sidebar({ isOpened }: { isOpened: boolean }) {
  isOpened ? 'translate-x-0' : '-translate-x-full';

  return (
		<aside
			className={`sidebar fixed left-0 top-0 h-full max-w-56 overflow-y-auto py-16 text-white transition-transform ${
				isOpened ? 'translate-x-0' : '-translate-x-full'
			} bg-titanium w-56 border-slate-700`}
		>
			<SideMenu menu={SIDEBAR_DATA} />
		</aside>
	);
}
