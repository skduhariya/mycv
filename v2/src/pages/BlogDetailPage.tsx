import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, BookOpen, ExternalLink, Lightbulb } from 'lucide-react';
import blogsDataRaw from '@/data/blogs.json';
import { BlogItem } from '@/types';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { CodeBlock } from '@/components/ui/CodeBlock';

const blogsData = blogsDataRaw as BlogItem[];

export const BlogDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const blog = blogsData.find(b => b.id === id);

  if (!blog) {
    return <Navigate to="/blogs" replace />;
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Back to Blogs */}
      <div>
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to All Articles</span>
        </Link>
      </div>

      <Card variant="elevated" className="space-y-6">
        {/* Article Header */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3">
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

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-3">
            {blog.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {blog.summary}
          </p>
        </div>

        {/* Definition Card */}
        <div className="p-5 rounded-2xl bg-brand-50/60 dark:bg-slate-800/80 border border-brand-200/60 dark:border-slate-700">
          <h2 className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-cyan-400 mb-2 flex items-center gap-1.5">
            <BookOpen size={14} />
            Definition & Core Concept
          </h2>
          <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed italic">
            "{blog.definition}"
          </p>
        </div>

        {/* In-Depth Explanation */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            Architectural Explanation
          </h2>
          {blog.explanation.map((para, i) => (
            <p key={i} className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        {/* Interactive Code Snippets */}
        {blog.snippets && blog.snippets.length > 0 && (
          <div className="space-y-4 pt-2">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              Code Examples & Implementation
            </h2>
            {blog.snippets.map((snippet, idx) => (
              <CodeBlock
                key={idx}
                title={snippet.title}
                language={snippet.language}
                code={snippet.code}
              />
            ))}
          </div>
        )}

        {/* Key Takeaways */}
        {blog.takeaways && blog.takeaways.length > 0 && (
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 mt-6">
            <h2 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
              <Lightbulb size={16} className="text-amber-500" />
              Key Engineering Takeaways
            </h2>
            <ul className="space-y-2">
              {blog.takeaways.map((takeaway, i) => (
                <li
                  key={i}
                  className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2"
                >
                  <span className="text-brand-500 font-bold shrink-0 mt-0.5">•</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* JSFiddle Link if available */}
        {blog.jsfiddleUrl && (
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
            <a
              href={blog.jsfiddleUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 dark:text-cyan-400 hover:underline"
            >
              <span>View Interactive Demo on JSFiddle</span>
              <ExternalLink size={13} />
            </a>
          </div>
        )}
      </Card>
    </div>
  );
};
