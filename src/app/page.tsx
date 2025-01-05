import Content from '@/components/layout/content/Content';
import { Header } from '@/components/layout/header/Header';
import React from 'react';

interface LayoutUProps {
  children: React.ReactNode;
}

export default function LayoutU({ children }: LayoutUProps) {
  return (
    <div className="layout-student grid grid-cols-[220px_1fr_1fr_1fr_1fr] grid-rows-1">public</div>
  );
}
