import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Home } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <Card variant="elevated" className="text-center py-16 space-y-4">
      <div className="w-16 h-16 rounded-2xl bg-rose-500/10 text-rose-500 mx-auto flex items-center justify-center">
        <Terminal size={32} />
      </div>

      <div className="font-mono text-3xl font-extrabold text-slate-900 dark:text-slate-100">
        404: Route Not Found
      </div>

      <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
        The requested command or path does not exist in this terminal session.
      </p>

      <div className="pt-4">
        <Link to="/about">
          <Button variant="primary" size="md" icon={<Home size={15} />}>
            Return to ~/about (Home)
          </Button>
        </Link>
      </div>
    </Card>
  );
};
