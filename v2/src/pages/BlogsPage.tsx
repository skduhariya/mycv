import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, Clock, ArrowRight, Terminal } from 'lucide-react';
import blogsDataRaw from '@/data/blogs.json';
import { BlogItem } from '@/types';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

const blogsData = blogsDataRaw as BlogItem[];

export const BlogsPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <Card variant="elevated">
        <div className="flex items-center justify-between mb-6">
          <div>
            <Badge variant="primary" size="sm" className="mb-1">
              <Terminal size={12} />
              cat ~/blogs/index.json
            </Badge>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <BookOpen size={22} className="text-brand-500" />
              Technical Writing & Engineering Insights
            </h2>
          </div>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
          Deep dives into JavaScript fundamentals, frontend design patterns, dependency injection, and performance architecture.
        </p>

        {/* Articles List */}
        <div className="space-y-6">
          {blogsData.map(blog => (
            <div
              key={blog.id}
              className="p-6 rounded-2xl bg-slate-50/70 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500/40 dark:hover:border-cyan-500/40 transition-all group"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-2">
                <Badge variant="primary" size="sm">
                  {blog.technology}
                </Badge>
                <span className="flex items-center gap-1">
                  <Calendar size={13} />
                  {blog.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock size={13} />
                  {blog.readingTime}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-brand-600 dark:group-hover:text-cyan-400 transition-colors mb-2">
                <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {blog.summary}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-slate-200/60 dark:border-slate-800">
                <span className="text-xs font-mono text-slate-400">
                  Topic: {blog.topic}
                </span>
                <Link
                  to={`/blogs/${blog.id}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-brand-600 dark:text-cyan-400 hover:underline"
                >
                  Read Article & Code
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
