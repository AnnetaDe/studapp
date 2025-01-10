'use client';
import { useState } from 'react';
import { SIDEBAR_DATA } from './sideBar.data';
import { SideBarHeader } from './sideBarHeader/SideBarHeader';
import SideMenu from './sideBarMenus/SideMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNavicon } from '@fortawesome/free-solid-svg-icons';

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
