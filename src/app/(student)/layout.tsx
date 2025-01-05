import React from 'react';

import { Header } from '@/components/layout/header/Header';
import { Sidebar } from '@/components/layout/sidebar/SideBar';
import Content from '@/components/layout/content/Content';
import LayoutU from '@/components/layout/LayoutU';

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="student-layout">
      <Header />
      <LayoutU>{children}</LayoutU>
    </div>
  );
}
