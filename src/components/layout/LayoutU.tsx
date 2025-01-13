'use client';
import Content from './content/Content';
import { Header } from './header/Header';
import { Sidebar } from './sidebar/SideBar';
import React, { useState } from 'react';

interface LayoutUProps {
  children: React.ReactNode;
}

export default function LayoutU({ children }: LayoutUProps) {
  const [isOpened, setIsOpened] = useState(false);
  const toggleSidebar = () => {
    setIsOpened(prev => !prev);
  };

  return (
		<div
			className={`h-screen grid${
				isOpened ? 'grid-cols-[240px_1fr]' : 'grid-cols-[0_1fr]'
			} relative transition-all duration-300`}
		>
			<Sidebar isOpened={isOpened} />

			<Header
				toggle={toggleSidebar}
				isOpen={isOpened}
			/>
			<Content isOpened={isOpened}>{children}</Content>

			<footer className="fixed bottom-0 mx-auto w-screen bg-slate-800 text-right text-slate-200">
				&copy;
			</footer>
		</div>
	);
}
