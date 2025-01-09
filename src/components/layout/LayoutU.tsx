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
      className={`layout-u grid ${
        isOpened ? 'grid-cols-[240px_1fr]' : 'grid-cols-[80px_1fr]'
      } h-screen relative transition-all duration-300`}
    >
      <Sidebar
        isOpened={isOpened}
        toggle={toggleSidebar}
      />
      <Content>
        <Header toggle={toggleSidebar} />
        {children}
      </Content>
    </div>
  );
}
