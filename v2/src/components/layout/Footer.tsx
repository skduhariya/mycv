import React from 'react';
import profileDataRaw from '@/data/profile.json';
import { ProfileData } from '@/types';
import { DynamicIcon } from '@/utils/iconHelper';
import { VisitorCounter } from '@/components/ui/VisitorCounter';

const profileData = profileDataRaw as ProfileData;

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm py-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              {profileData.name}
            </span>
            <span>•</span>
            <span>{profileData.title}</span>
          </div>

          <div className="flex items-center gap-4">
            {profileData.socialLinks.map(link => (
              <a
                key={link.id}
                href={link.url}
                target={link.url.startsWith('mailto:') ? '_self' : '_blank'}
                rel="noreferrer"
                className="hover:text-brand-500 transition-colors flex items-center gap-1"
                title={link.label}
              >
                <DynamicIcon name={link.icon} className="w-3.5 h-3.5" />
                <span className="hidden md:inline">{link.label}</span>
              </a>
            ))}
          </div>

          {/* Right Section: Copyright & Minimalist Telemetry Badge */}
          <div className="flex items-center gap-3">
            <span>Copyright &copy; {currentYear} {profileData.name}.</span>
            <VisitorCounter />
          </div>
        </div>
      </div>
    </footer>
  );
};
