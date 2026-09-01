import React from 'react';
import { Eye } from 'lucide-react';
import { cn } from '@/utils/formatters';

interface VisitorCounterProps {
  counterId?: string;
  className?: string;
}

export const VisitorCounter: React.FC<VisitorCounterProps> = ({
  counterId = '6597537',
  className,
}) => {
  // Uses HTTPS with the user's exact counter page ID (6597537) to preserve historical visitor counts
  const counterUrl = `https://hitwebcounter.com/counter/counter.php?page=${counterId}&style=0038&nbdigits=5&type=ip&initCount=10`;

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-2xs select-none',
        className
      )}
      title="Live Visitor Count"
    >
      <Eye size={12} className="text-emerald-500 shrink-0" />
      <div className="flex items-center overflow-hidden rounded bg-slate-950 px-1 py-0.5 border border-slate-800">
        <img
          src={counterUrl}
          alt="Visitor Count"
          title="Live visitor count"
          className="h-3 w-auto object-contain block opacity-90"
          onError={(e) => {
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
      </div>
    </div>
  );
};
