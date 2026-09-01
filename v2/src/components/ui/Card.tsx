import React from 'react';
import { cn } from '@/utils/formatters';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'glass';
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  hoverEffect = true,
  className,
  ...props
}) => {
  const variantStyles = {
    default: 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100',
    elevated: 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-md dark:shadow-2xl dark:shadow-slate-950/50',
    glass: 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-slate-200/80 dark:border-slate-800/80',
  };

  return (
    <div
      className={cn(
        'rounded-2xl border p-5 sm:p-6 transition-all duration-200',
        variantStyles[variant],
        hoverEffect && 'hover:border-brand-500/40 dark:hover:border-cyan-500/40 hover:shadow-lg dark:hover:shadow-cyan-950/20',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
