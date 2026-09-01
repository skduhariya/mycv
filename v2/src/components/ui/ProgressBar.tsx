import React from 'react';
import { cn, formatScore, calculatePercentage } from '@/utils/formatters';
import { getScoreColorClass } from '@/utils/skillCalculator';

interface ProgressBarProps {
  label: string;
  score: number;
  maxScore?: number;
  icon?: React.ReactNode;
  showScore?: boolean;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  score,
  maxScore = 10,
  icon,
  showScore = true,
  className,
}) => {
  const percentage = calculatePercentage(score, maxScore);
  const { barColor, badgeBg } = getScoreColorClass(score);

  return (
    <div className={cn('space-y-2', className)}>
      {/* Header with robust flex wrap handling */}
      <div className="flex items-start justify-between gap-3 text-xs sm:text-sm">
        {/* Label & Icon with min-w-0 for smooth multi-line wrapping */}
        <div className="flex items-start gap-2 min-w-0 flex-1">
          {icon && <span className="shrink-0 mt-0.5 text-brand-500">{icon}</span>}
          <span className="font-medium text-slate-800 dark:text-slate-200 leading-snug break-words">
            {label}
          </span>
        </div>

        {/* Score Badge - strictly non-shrinking and aligned */}
        {showScore && (
          <span
            className={cn(
              'shrink-0 font-mono text-xs font-semibold px-2 py-0.5 rounded-md border text-center shadow-2xs whitespace-nowrap self-start',
              badgeBg
            )}
          >
            {formatScore(score, maxScore)}
          </span>
        )}
      </div>

      {/* Progress Track & Bar */}
      <div className="w-full h-2 sm:h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-300/40 dark:border-slate-700/50">
        <div
          className={cn(
            'h-full rounded-full transition-all duration-700 ease-out shadow-sm',
            barColor
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
