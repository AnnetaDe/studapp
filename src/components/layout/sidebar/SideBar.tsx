'use client';
import { useState } from 'react';
import { SIDEBAR_DATA } from './sideBar.data';
import { SideBarHeader } from './sideBarHeader/SideBarHeader';
import SideMenu from './sideBarMenus/SideMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNavicon } from '@fortawesome/free-solid-svg-icons';

export function Sidebar({ isOpened, toggle }: { isOpened: boolean; toggle: () => void }) {
  isOpened ? 'translate-x-0' : '-translate-x-full';

  return (
    <aside
      className={`sidebar bg-slate-800 text-white h-screen overflow-y-auto fixed top-0 left-0 transition-transform ${
        isOpened ? 'translate-x-0' : '-translate-x-full'
      } w-64`}
    >
      <button
        onClick={toggle}
        className="absolute top-4 right-[10px] text-white p-2 rounded-full"
      >
        <FontAwesomeIcon
          icon={faNavicon}
          fontSize={30}
        />
      </button>
      {/* <button onClick={toggle}>
        <FontAwesomeIcon
          icon={faNavicon}
          fontSize={30}
        />
      </button> */}
      <SideBarHeader />
      <SideMenu menu={SIDEBAR_DATA} />
    </aside>
  );
}
