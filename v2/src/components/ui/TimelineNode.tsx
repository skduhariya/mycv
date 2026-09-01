import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/utils/formatters';

interface TimelineNodeProps {
  role: string;
  organization: string;
  location?: string;
  duration: string;
  isCurrent?: boolean;
  url?: string;
  description: string;
  responsibilities?: string[];
  technologies?: string[];
  isLast?: boolean;
  className?: string;
}

export const TimelineNode: React.FC<TimelineNodeProps> = ({
  role,
  organization,
  location,
  duration,
  isCurrent = false,
  url,
  description,
  responsibilities = [],
  technologies = [],
  isLast = false,
  className,
}) => {
  return (
    <div className={cn('relative pl-7 sm:pl-9', !isLast && 'pb-10', className)}>
      {/* Connecting Vertical Line */}
      {!isLast && (
        <div className="absolute left-3 top-3 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800" />
      )}

      {/* Node Dot / Marker */}
      <div className="absolute left-1.5 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-slate-900 bg-brand-500 shadow-sm ring-4 ring-brand-500/20" />

      {/* Content Container */}
      <div className="bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800/80 p-5 sm:p-6 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 flex-wrap">
              {role}
              {isCurrent && (
                <Badge variant="success" size="sm">
                  Current Role
                </Badge>
              )}
            </h3>
            <div className="text-sm font-semibold text-brand-600 dark:text-brand-400 mt-0.5 flex items-center gap-1.5">
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline flex items-center gap-1"
                >
                  {organization}
                  <ExternalLink size={13} />
                </a>
              ) : (
                <span>{organization}</span>
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1 font-mono">
              <Calendar size={13} className="text-slate-400" />
              {duration}
            </span>
            {location && (
              <span className="flex items-center gap-1">
                <MapPin size={13} className="text-slate-400" />
                {location}
              </span>
            )}
          </div>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          {description}
        </p>

        {/* Responsibilities list */}
        {responsibilities.length > 0 && (
          <div className="mb-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-2">
              Key Contributions & Architecture
            </h4>
            <ul className="space-y-1.5">
              {responsibilities.map((resp, idx) => (
                <li
                  key={idx}
                  className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2"
                >
                  <span className="text-brand-500 font-bold shrink-0 mt-0.5">•</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technology Badges */}
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
            {technologies.map(tech => (
              <Badge key={tech} variant="outline" size="sm">
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
