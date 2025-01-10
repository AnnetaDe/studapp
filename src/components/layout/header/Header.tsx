'use client';
import { authService } from '@/services/auth.service';
import {
  faExternalLinkSquareAlt,
  faNavicon,
  faPersonRunning,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import { useState } from 'react';
import { SideBarHeader } from '../sidebar/sideBarHeader/SideBarHeader';
import { Button } from '@/ui/Button/Button';
import { ButtonMenu } from '@/ui/Button/ButtonMenu';

export function Header({ toggle, isOpen }: { toggle: () => void; isOpen: boolean }) {
  const mutateLogout = useMutation({
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      console.log('Logged out');
    },
  });
  const onLogOut = () => {
    mutateLogout.mutate();
  };

  return (
    <header className="bg-slate-600 w-screen px-2 py-2 h-14 fixed top-0 ">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <ButtonMenu
            toggle={toggle}
            isOpen={isOpen}
          />

          <SideBarHeader />
        </div>
        <Link
          className=" flex bg-slate-700 rounded-full overflow-hidden items-center justify-center ring-0 ring-gray-300 w-[40px] h-[40px] transform transition-all hover:ring-8 focus:ring-4 ring-opacity-30 duration-200 shadow-md"
          href="/login"
          onClick={onLogOut}
        >
          <FontAwesomeIcon
            icon={faPersonRunning}
            fontSize={28}
            color="white"
          />
        </Link>
      </div>
    </header>
  );
}
