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
        isOpened ? 'grid-cols-[200px_1fr]' : 'grid-cols-[0_1fr]'
      } h-dvr relative transition-all duration-300`}
    >
      <Sidebar isOpened={isOpened} />

      <Header
        toggle={toggleSidebar}
        isOpen={isOpened}
      />
      <Content>{children}</Content>

      <footer className="w-screen text-white p-2 text-right mx-auto   fixed bottom-0">
        &copy; 2021 All rights reserved
      </footer>
    </div>
  );
}
