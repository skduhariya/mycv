import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FolderGit2, ArrowRight, ExternalLink, Terminal } from 'lucide-react';
import projectsDataRaw from '@/data/projects.json';
import { ProjectItem } from '@/types';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/utils/formatters';

const projectsData = projectsDataRaw as ProjectItem[];

export const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Enterprise', 'Web Apps', 'Mobile & Hybrid', 'Design & Agency'];

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter(p => p.category === activeCategory);

  return (
    <div className="space-y-8 animate-fadeIn">
      <Card variant="elevated">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <Badge variant="primary" size="sm" className="mb-1">
              <Terminal size={12} />
              ls -la ~/projects
            </Badge>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <FolderGit2 size={22} className="text-brand-500" />
              Featured Projects & Case Studies
            </h2>
          </div>

          <span className="text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-700">
            {filteredProjects.length} Projects Loaded
          </span>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap gap-1.5 pb-4 border-b border-slate-200 dark:border-slate-800 mb-6">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer select-none',
                activeCategory === category
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/60'
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col justify-between hover:border-brand-500/50 dark:hover:border-cyan-500/50 hover:shadow-lg transition-all"
            >
              {/* Project Image */}
              <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80';
                  }}
                />
                <div className="absolute top-3 right-3">
                  <Badge variant="default" size="sm" className="backdrop-blur-md bg-slate-900/80 text-slate-200 border-slate-700">
                    {project.category}
                  </Badge>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-brand-600 dark:text-cyan-400 mb-1">
                    Client: {project.client} • {project.duration}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-brand-600 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 mb-4">
                    {project.shortDesc}
                  </p>
                </div>

                <div>
                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1 mb-5">
                    {project.technologies.frontEnd.slice(0, 3).map(tech => (
                      <Badge key={tech} variant="outline" size="sm">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.frontEnd.length > 3 && (
                      <span className="text-[10px] text-slate-500 self-center px-1">
                        +{project.technologies.frontEnd.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Actions & Links */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800/80">
                    <Link
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 dark:text-cyan-400 hover:underline"
                    >
                      View Case Study
                      <ArrowRight size={13} />
                    </Link>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                        title="Open live website"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
