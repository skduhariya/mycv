import React from 'react';
import { Sparkles, Terminal, Code2, CheckCircle2 } from 'lucide-react';
import profileDataRaw from '@/data/profile.json';
import skillsDataRaw from '@/data/skills.json';
import servicesDataRaw from '@/data/services.json';
import { ProfileData, SkillsData, ServiceItem } from '@/types';
import { Card } from '@/components/ui/Card';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Badge } from '@/components/ui/Badge';
import { DynamicIcon } from '@/utils/iconHelper';
import { calculateYearsOfExperience } from '@/utils/formatters';
import { Carousel } from '@/components/ui/Carousel';

const profileData = profileDataRaw as ProfileData;
const skillsData = skillsDataRaw as SkillsData;
const servicesData = servicesDataRaw as ServiceItem[];

export const AboutPage: React.FC = () => {
  const dynamicExperience = calculateYearsOfExperience(profileData.careerStartDate);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero / Summary Section */}
      <Card variant="elevated" className="relative overflow-hidden">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="primary" size="sm">
            <Terminal size={12} />
            ~/about/bio.md
          </Badge>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
          Senior Full Stack Engineer & Software Architect
        </h2>

        <div className="space-y-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {profileData.bio.map((paragraph, index) => (
            <p key={index}>
              {paragraph.replace('{{yearsOfExperience}}', dynamicExperience)}
            </p>
          ))}
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
          {profileData.stats.map((stat, idx) => {
            const displayValue =
              stat.label.toLowerCase().includes('year') ? dynamicExperience : stat.value;

            return (
              <div
                key={idx}
                className="p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 text-center"
              >
                <div className="text-xl sm:text-2xl font-extrabold font-mono text-brand-600 dark:text-cyan-400">
                  {displayValue}
                </div>
                <div className="text-xs font-bold text-slate-900 dark:text-slate-200 mt-0.5">
                  {stat.label}
                </div>
                {stat.description && (
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 hidden sm:block">
                    {stat.description}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Card>

      {/* Executive Career Highlights & Milestones */}
      {profileData.highlights && profileData.highlights.length > 0 && (
        <Card variant="default">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="warning" size="sm">
              <Sparkles size={12} />
              executive.highlights
            </Badge>
          </div>

          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
            Key Career Milestones & Enterprise Impact
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profileData.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 hover:border-brand-500/40 dark:hover:border-cyan-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-brand-500/10 text-brand-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                      <DynamicIcon name={highlight.icon || 'sparkles'} className="w-5 h-5" />
                    </div>
                    {highlight.badge && (
                      <Badge variant="outline" size="sm" className="font-mono text-[11px] font-semibold text-brand-600 dark:text-cyan-400 border-brand-200 dark:border-cyan-800">
                        {highlight.badge}
                      </Badge>
                    )}
                  </div>

                  <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-1">
                    {highlight.title}
                  </h4>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
                    {highlight.client}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {highlight.impact}
                  </p>
                </div>

                {highlight.metric && (
                  <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                    <span>Impact Metric:</span>
                    <span className="font-bold text-brand-600 dark:text-cyan-400">{highlight.metric}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Skills Matrix with Scores / Ratings */}
      <Card variant="default">
        <div className="flex items-center justify-between gap-2 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <Badge variant="info" size="sm">
                <Code2 size={12} />
                skills.matrix.json
              </Badge>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-1">
              Core Technical Competencies & Proficiency
            </h3>
          </div>
        </div>

        <div className="space-y-8">
          {skillsData.categories.map((category, catIdx) => (
            <div key={catIdx} className="space-y-3">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-1.5">
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-500" />
                  {category.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="p-3.5 rounded-xl bg-slate-50/60 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/60 hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex flex-col justify-between"
                  >
                    <ProgressBar
                      label={skill.name}
                      score={skill.score}
                      maxScore={skill.maxScore}
                      icon={<DynamicIcon name={skill.icon} className="w-4 h-4 text-brand-500" />}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Services Breakdown */}
      <Card variant="default">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="warning" size="sm">
            <Sparkles size={12} />
            services.offering
          </Badge>
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6">
          What I Bring to the Team
        </h3>

        <Carousel
          items={servicesData}
          autoPlayInterval={6000}
          renderItem={(service) => (
            <div
              key={service.id}
              className="h-full p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-brand-500/40 dark:hover:border-cyan-500/40 transition-all select-none"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-3">
                  <DynamicIcon name={service.icon} className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {service.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-1.5 pt-3 border-t border-slate-200/60 dark:border-slate-700/60">
                {service.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="text-[11px] text-slate-600 dark:text-slate-400 flex items-start gap-1.5"
                  >
                    <CheckCircle2 size={12} className="text-brand-500 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        />
      </Card>
    </div>
  );
};
