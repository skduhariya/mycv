import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind classes safely with clsx
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Formats a score out of maxScore to 1 decimal place
 */
export function formatScore(score: number, maxScore: number = 10): string {
  return `${score.toFixed(1)} / ${maxScore}`;
}

/**
 * Calculates percentage from a numeric score
 */
export function calculatePercentage(score: number, maxScore: number = 10): number {
  return Math.min(Math.max((score / maxScore) * 100, 0), 100);
}

/**
 * Calculates completed years of experience dynamically based on start date (e.g. Nov 2015)
 * Returns format like '10+' (before Nov 2026) and '11+' (after Nov 2026)
 */
export function calculateYearsOfExperience(startDateStr: string = '2015-11-01'): string {
  const startDate = new Date(startDateStr);
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  const monthDiff = now.getMonth() - startDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < startDate.getDate())) {
    years--;
  }

  return `${Math.max(years, 0)}+`;
}

