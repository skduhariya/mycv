import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Sidebar } from '@/components/layout/Sidebar';
import { Footer } from '@/components/layout/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';

export const Layout: React.FC = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-20 sm:pb-10">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Persistent Sticky Left Profile Sidebar */}
          <Sidebar />

          {/* Dynamic Routed Content Stage */}
          <div className="flex-1 w-full min-w-0">
            <Outlet />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
