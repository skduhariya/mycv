import React from 'react';
import { Briefcase, GraduationCap, Trophy, Sparkles, Terminal } from 'lucide-react';
import experienceDataRaw from '@/data/experience.json';
import awardsDataRaw from '@/data/awards.json';
import educationDataRaw from '@/data/education.json';
import { ExperienceItem, AwardItem, EducationItem } from '@/types';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { TimelineNode } from '@/components/ui/TimelineNode';
import { DynamicIcon } from '@/utils/iconHelper';

const experienceData = experienceDataRaw as ExperienceItem[];
const awardsData = awardsDataRaw as AwardItem[];
const educationData = educationDataRaw as EducationItem[];

export const ExperiencePage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Professional Experience Section */}
      <Card variant="elevated">
        <div className="flex items-center justify-between mb-6">
          <div>
            <Badge variant="primary" size="sm" className="mb-1">
              <Terminal size={12} />
              git log --experience
            </Badge>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Briefcase size={22} className="text-brand-500" />
              Professional Career Timeline
            </h2>
          </div>
        </div>

        <div className="mt-6">
          {experienceData.map((exp, idx) => (
            <TimelineNode
              key={exp.id}
              role={exp.role}
              organization={exp.company}
              location={exp.location}
              duration={exp.duration}
              isCurrent={exp.isCurrent}
              url={exp.companyUrl}
              description={exp.description}
              responsibilities={exp.responsibilities}
              technologies={exp.technologies}
              isLast={idx === experienceData.length - 1}
            />
          ))}
        </div>
      </Card>

      {/* Honors & Awards Section */}
      <Card variant="default">
        <div className="flex items-center gap-2 mb-6">
          <Badge variant="warning" size="sm">
            <Trophy size={12} />
            honors.and.awards
          </Badge>
        </div>

        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
          <Sparkles size={22} className="text-amber-500" />
          Honors, Recognition & Awards
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {awardsData.map(award => (
            <div
              key={award.id}
              className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 hover:border-amber-500/40 dark:hover:border-amber-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                    <DynamicIcon name={award.icon || 'trophy'} className="w-5 h-5" />
                  </div>
                  {award.period && (
                    <Badge variant="outline" size="sm" className="font-mono text-[11px]">
                      {award.period}
                    </Badge>
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-1">
                  {award.title}
                </h3>
                <div className="text-xs font-semibold text-brand-600 dark:text-cyan-400 mb-3">
                  {award.issuer}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Education & Academic Foundation */}
      <Card variant="default">
        <div className="flex items-center gap-2 mb-6">
          <Badge variant="info" size="sm">
            <GraduationCap size={12} />
            education.history
          </Badge>
        </div>

        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 mb-6">
          Education & Academic Background
        </h2>

        <div>
          {educationData.map((edu, idx) => (
            <TimelineNode
              key={edu.id}
              role={edu.degree}
              organization={edu.institution}
              location={edu.location || edu.university}
              duration={edu.duration}
              url={edu.institutionUrl}
              description={edu.description}
              isLast={idx === educationData.length - 1}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};
