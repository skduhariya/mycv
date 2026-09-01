import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, User, Layers, CheckCircle } from 'lucide-react';
import projectsDataRaw from '@/data/projects.json';
import { ProjectItem } from '@/types';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

const projectsData = projectsDataRaw as ProjectItem[];

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Back Navigation */}
      <div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* Main Project Container */}
      <Card variant="elevated">
        {/* Header Title & Badges */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="primary" size="sm">
                {project.category}
              </Badge>
              <Badge variant="outline" size="sm">
                <Calendar size={12} />
                {project.duration}
              </Badge>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
              {project.title}
            </h1>
            <div className="text-sm font-medium text-brand-600 dark:text-cyan-400 mt-1 flex items-center gap-1.5">
              <User size={14} />
              <span>Client / Organization: {project.client}</span>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-2">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                <Button variant="primary" size="sm" icon={<ExternalLink size={14} />}>
                  Live Demo
                </Button>
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                <Button variant="outline" size="sm" icon={<Github size={14} />}>
                  Source Code
                </Button>
              </a>
            )}
          </div>
        </div>

        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 mb-8 max-h-96">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&auto=format&fit=crop&q=80';
            }}
          />
        </div>

        {/* Overview & Architecture Description */}
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
              <Layers size={18} className="text-brand-500" />
              Project Architecture & Overview
            </h2>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technologies Stack Breakdown */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
              Technology Stack
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <span className="text-xs font-bold text-slate-900 dark:text-slate-200 block mb-2">
                  Frontend & UI
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.frontEnd.map(tech => (
                    <Badge key={tech} variant="primary" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {project.technologies.backEnd && project.technologies.backEnd.length > 0 && (
                <div>
                  <span className="text-xs font-bold text-slate-900 dark:text-slate-200 block mb-2">
                    Backend & APIs
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.backEnd.map(tech => (
                      <Badge key={tech} variant="success" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {project.technologies.database && project.technologies.database.length > 0 && (
                <div>
                  <span className="text-xs font-bold text-slate-900 dark:text-slate-200 block mb-2">
                    Database & Storage
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.database.map(tech => (
                      <Badge key={tech} variant="info" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Key Responsibilities & Implementation Details */}
          {project.responsibilities && project.responsibilities.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                <CheckCircle size={18} className="text-emerald-500" />
                Key Responsibilities & Deliverables
              </h2>
              <ul className="space-y-2">
                {project.responsibilities.map((resp, i) => (
                  <li
                    key={i}
                    className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0 mt-2" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};
