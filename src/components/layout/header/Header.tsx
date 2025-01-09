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

export function Header({ toggle }: { toggle: () => void }) {
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
    <header className="bg-slate-600 w-screen p-4 h-20">
      <div className="flex justify-between items-center">
        <button
          onClick={() => toggle()}
          className="text-white text-lg p-2 "
        >
          <FontAwesomeIcon
            icon={faNavicon}
            fontSize={30}
          />
        </button>
        <Link
          className="p-2"
          href="/login"
          onClick={onLogOut}
        >
          <FontAwesomeIcon
            icon={faPersonRunning}
            fontSize={30}
            color="white"
          />
        </Link>
      </div>
    </header>
  );
}
