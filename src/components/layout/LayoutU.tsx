import Content from './content/Content';
import { Sidebar } from './sidebar/SideBar';
import React from 'react';

interface LayoutUProps {
  children: React.ReactNode;
}

export default function LayoutU({ children }: LayoutUProps) {
  return (
    <div className="layout-u grid grid-cols-[240px_1fr_1fr_1fr_1fr] ">
      <Sidebar />
      <Content>{children}</Content>
    </div>
  );
}
