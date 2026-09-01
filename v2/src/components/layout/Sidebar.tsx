import React from 'react';
import { Download, MapPin, Mail } from 'lucide-react';
import profileDataRaw from '@/data/profile.json';
import { ProfileData } from '@/types';
import { DynamicIcon } from '@/utils/iconHelper';
import { Button } from '@/components/ui/Button';
import { getAssetUrl } from '@/utils/formatters';

const profileData = profileDataRaw as ProfileData;

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-full lg:w-80 shrink-0">
      <div className="sticky top-20 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
        {/* Avatar with Status Indicator */}
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-4 group">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden ring-4 ring-slate-100 dark:ring-slate-800 shadow-md bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-mono font-bold text-slate-400">
              <img
                src={getAssetUrl(profileData.avatarUrl)}
                alt={profileData.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes('mypic.jpg')) {
                    target.src = getAssetUrl('images/mypic.jpg');
                  }
                }}
              />
            </div>
            {/* Status Pulse */}
            <div
              className="absolute -bottom-1 -right-1 flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-bold shadow-md border-2 border-white dark:border-slate-900"
              title={profileData.status}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>Available</span>
            </div>
          </div>

          {/* Name & Title */}
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            {profileData.name}
          </h1>
          <p className="text-sm font-semibold text-brand-600 dark:text-cyan-400 mt-1">
            {profileData.title}
          </p>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-2">
            <MapPin size={13} className="text-slate-400 shrink-0" />
            <span>{profileData.location}</span>
          </div>
        </div>

        {/* Dynamic Social Links Dock */}
        <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-3 text-center sm:text-left">
            Connect & Socials
          </h2>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {profileData.socialLinks.map(link => (
              <a
                key={link.id}
                href={link.url}
                target={link.url.startsWith('mailto:') ? '_self' : '_blank'}
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700/60 transition-all hover:scale-105 active:scale-95"
                title={`${link.label}: ${link.username || link.url}`}
              >
                <DynamicIcon name={link.icon} className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Download CV CTA */}
        <div className="mt-6">
          <a
            href={getAssetUrl(profileData.resumePdf)}
            download="Sandeep_Kumar_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="block w-full"
          >
            <Button
              variant="primary"
              size="md"
              icon={<Download size={16} />}
              className="w-full justify-center shadow-lg shadow-brand-500/20"
            >
              Download PDF Resume
            </Button>
          </a>
        </div>

        {/* Quick Contact Highlight */}
        <div className="mt-5 p-3.5 rounded-2xl bg-brand-50/50 dark:bg-cyan-950/20 border border-brand-100 dark:border-cyan-900/40 text-center">
          <p className="text-xs text-slate-600 dark:text-slate-300">
            Open to senior engineering roles & consulting.
          </p>
          <a
            href={`mailto:${profileData.email}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-brand-600 dark:text-cyan-400 hover:underline mt-1"
          >
            <Mail size={12} />
            {profileData.email}
          </a>
        </div>
      </div>
    </aside>
  );
};
