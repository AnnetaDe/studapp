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
			className={`grid h-screen ${isOpened ? 'grid-cols-[224px_1fr]' : 'grid-cols-[0_1fr]'} xs:grid-rows-[auto_1fr] xs:grid-cols-[224px] sm:${isOpened ? 'grid-cols-[224px_1fr]' : 'grid-cols-[0_1fr]'} md:${isOpened ? 'grid-cols-[224px_1fr]' : 'grid-cols-[0_1fr]'} relative transition-[grid-template-columns] duration-300 ease-in-out`}
		>
			<Sidebar isOpened={isOpened} />

			<Header
				toggle={toggleSidebar}
				isOpen={isOpened}
			/>
			<Content isOpened={isOpened}>{children}</Content>

			<footer className="fixed bottom-0 mx-auto w-screen bg-[rgba(51,59,82,1)] text-right text-slate-200">
				&copy;
			</footer>
		</div>
	);
}
