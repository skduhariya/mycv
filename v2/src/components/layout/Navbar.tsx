import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  User,
  Briefcase,
  FolderGit2,
  BookOpen,
  Mail,
  Sun,
  Moon,
  Terminal,
  Menu,
  X,
} from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/utils/formatters';

interface NavItem {
  path: string;
  label: string;
  command: string;
  icon: React.ReactNode;
}

export const Navbar: React.FC = () => {
  const { toggleTheme, isDark } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems: NavItem[] = [
    { path: '/about', label: 'About', command: 'about', icon: <User size={16} /> },
    { path: '/experience', label: 'Experience', command: 'experience', icon: <Briefcase size={16} /> },
    { path: '/projects', label: 'Projects', command: 'projects', icon: <FolderGit2 size={16} /> },
    { path: '/blogs', label: 'Blogs', command: 'blogs', icon: <BookOpen size={16} /> },
    { path: '/contact', label: 'Contact', command: 'contact', icon: <Mail size={16} /> },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Terminal Brand Prompt */}
            <div className="flex items-center gap-2">
              <NavLink
                to="/about"
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-700 dark:text-slate-300 hover:border-brand-500/40 transition-colors"
              >
                <Terminal size={14} className="text-brand-500 shrink-0" />
                <span className="font-bold text-slate-900 dark:text-slate-100">sandeep@cv</span>
                <span className="text-slate-400">:~$</span>
              </NavLink>
            </div>

            {/* Desktop & Tablet Navigation Tabs */}
            <nav className="hidden sm:flex items-center gap-1 lg:gap-2">
              {navItems.map(item => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all select-none whitespace-nowrap',
                      isActive
                        ? 'bg-brand-600 text-white shadow-sm shadow-brand-500/20 font-semibold'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-900'
                    )
                  }
                >
                  {item.icon}
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </nav>

            {/* Right Header Actions: Theme Switcher & Mobile Menu Button */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                type="button"
                className="flex items-center gap-1.5 p-2 sm:px-3 sm:py-1.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 transition-all cursor-pointer shadow-xs"
                title={`Switch to ${isDark ? 'Light' : 'Dark'} mode`}
                aria-label="Toggle Theme"
              >
                {isDark ? (
                  <>
                    <Sun size={15} className="text-amber-400" />
                    <span className="hidden md:inline text-xs">Light</span>
                  </>
                ) : (
                  <>
                    <Moon size={15} className="text-slate-600" />
                    <span className="hidden md:inline text-xs">Dark</span>
                  </>
                )}
              </button>

              {/* Mobile Menu Toggle Button (Visible on < 640px) */}
              <button
                onClick={() => setMobileMenuOpen(prev => !prev)}
                type="button"
                className="sm:hidden p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-slate-200 dark:border-slate-800 bg-white/98 dark:bg-slate-950/98 backdrop-blur-lg px-4 pt-3 pb-5 space-y-1.5 shadow-xl animate-fadeIn">
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider px-3 py-1">
              Terminal Navigation
            </div>
            {navItems.map(item => {
              const isActive = location.pathname.startsWith(item.path);

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-brand-600 text-white font-semibold shadow-sm'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
                  )}
                >
                  <div className="flex items-center gap-2.5">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  <span className="font-mono text-xs opacity-75">
                    $ cd ~/{item.command}
                  </span>
                </NavLink>
              );
            })}
          </div>
        )}
      </header>

      {/* Mobile Floating Bottom Navigation Dock (< 640px) */}
      <nav className="sm:hidden fixed bottom-3 left-3 right-3 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border border-slate-200/90 dark:border-slate-800/90 rounded-2xl shadow-xl px-2 py-1.5 flex items-center justify-around">
        {navItems.map(item => {
          const isActive = location.pathname.startsWith(item.path);

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={cn(
                'flex flex-col items-center gap-1 px-2.5 py-1.5 rounded-xl text-[10px] font-medium transition-all',
                isActive
                  ? 'text-brand-600 dark:text-cyan-400 font-bold scale-105'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              )}
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </>
  );
};
