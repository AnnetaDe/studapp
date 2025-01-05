import React from 'react';
import Content from '@/components/layout/content/Content';
import { Header } from '@/components/layout/header/Header';
import { Sidebar } from '@/components/layout/sidebar/SideBar';
import LayoutU from '@/components/layout/LayoutU';

interface LayoutProps {
  children: React.ReactNode;
}

export default function TeacherLayout({ children }: LayoutProps) {
  return (
    <div className="teacher-layout">
      <Header />
      <LayoutU>{children}</LayoutU>
    </div>
  );
}
