'use client';
import { authService } from '@/services/auth.service';
import { faPersonRunning } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import { useState } from 'react';
import { HeaderLeft } from '../sidebar/sideBarHeader/HeaderLeft';
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
		<header className="fixed top-0 z-50 h-12 w-screen bg-[rgba(51,59,82,0.8)] px-2 py-1">
			<div className="mx-2 flex items-center justify-between">
				<div className="flex items-center gap-4">
					<ButtonMenu
						toggle={toggle}
						isOpen={isOpen}
					/>

					<HeaderLeft />
				</div>
				<Link
					className="ml-2 flex h-[40px] w-[40px] transform items-center justify-center overflow-hidden rounded-full bg-slate-800 shadow-md ring-0 ring-gray-300 ring-opacity-30 transition-all duration-200 hover:ring-8 focus:ring-4"
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
