/**
 * Returns color classes for skill rating levels
 */
export function getScoreColorClass(score: number): {
  barColor: string;
  badgeBg: string;
  textColor: string;
} {
  if (score >= 9.0) {
    return {
      barColor: 'bg-emerald-500',
      badgeBg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
      textColor: 'text-emerald-500',
    };
  } else if (score >= 8.0) {
    return {
      barColor: 'bg-cyan-500',
      badgeBg: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
      textColor: 'text-cyan-500',
    };
  } else if (score >= 7.0) {
    return {
      barColor: 'bg-blue-500',
      badgeBg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
      textColor: 'text-blue-500',
    };
  } else {
    return {
      barColor: 'bg-indigo-500',
      badgeBg: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20',
      textColor: 'text-indigo-500',
    };
  }
}
