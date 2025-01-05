import Content from './content/Content';
import { Sidebar } from './sidebar/SideBar';
import React from 'react';

interface LayoutUProps {
  children: React.ReactNode;
}

export default function LayoutU({ children }: LayoutUProps) {
  return (
    <div className="layout-student grid grid-cols-[220px_1fr_1fr_1fr_1fr] grid-rows-1">
      <Sidebar />
      <Content>{children}</Content>
    </div>
  );
}
