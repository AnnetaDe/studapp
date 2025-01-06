import React from 'react';
import LayoutU from '@/components/layout/LayoutU';
// import ProtectedRoute from '@/routes/protected';

interface LayoutProps {
  children: React.ReactNode;
}

export default function TeacherLayout({ children }: LayoutProps) {
  return (
    <div className="teacher-layout">
      {/* <ProtectedRoute> */}
      <LayoutU>{children}</LayoutU>
      {/* </ProtectedRoute> */}
    </div>
  );
}
