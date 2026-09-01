import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, Send, CheckCircle2, Terminal } from 'lucide-react';
import profileDataRaw from '@/data/profile.json';
import { ProfileData } from '@/types';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

const profileData = profileDataRaw as ProfileData;

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simple Form Submission trigger
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Contact Header & Info Grid */}
      <Card variant="elevated">
        <div className="mb-6">
          <Badge variant="primary" size="sm" className="mb-1">
            <Terminal size={12} />
            ./send-message.sh
          </Badge>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Mail size={22} className="text-brand-500" />
            Get In Touch
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
            Interested in discussing new projects, technical leadership, or contract opportunities? Reach out directly.
          </p>
        </div>

        {/* Contact Details Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <a
            href={`mailto:${profileData.email}`}
            className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 hover:border-brand-500/40 dark:hover:border-cyan-500/40 transition-all text-center group"
          >
            <div className="w-9 h-9 rounded-xl bg-brand-500/10 text-brand-600 dark:text-cyan-400 mx-auto flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Mail size={16} />
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-slate-100">Email</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
              {profileData.email}
            </div>
          </a>

          <a
            href={`tel:${profileData.phone}`}
            className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 hover:border-brand-500/40 dark:hover:border-cyan-500/40 transition-all text-center group"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Phone size={16} />
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-slate-100">Telephone</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
              {profileData.phone}
            </div>
          </a>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-center">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 mx-auto flex items-center justify-center mb-2">
              <MapPin size={16} />
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-slate-100">Location</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
              {profileData.location}
            </div>
          </div>

          <a
            href={profileData.website}
            target="_blank"
            rel="noreferrer"
            className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 hover:border-brand-500/40 dark:hover:border-cyan-500/40 transition-all text-center group"
          >
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 mx-auto flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Globe size={16} />
            </div>
            <div className="text-xs font-bold text-slate-900 dark:text-slate-100">Portfolio</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
              skduhariya.github.io
            </div>
          </a>
        </div>

        {/* Message Form */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4">
            Send a Direct Message
          </h3>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 text-center space-y-2 animate-fadeIn">
              <CheckCircle2 size={36} className="text-emerald-500 mx-auto" />
              <h4 className="text-base font-bold text-emerald-800 dark:text-emerald-300">
                Message Sent Successfully!
              </h4>
              <p className="text-xs text-emerald-700 dark:text-emerald-400">
                Thank you for reaching out. I'll get back to you shortly at <span className="font-semibold">{formData.email}</span>.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-3"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-2.5 rounded-xl text-sm bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-slate-100 placeholder-slate-400 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className="w-full px-4 py-2.5 rounded-xl text-sm bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-slate-100 placeholder-slate-400 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Opportunity / Project Consultation"
                  className="w-full px-4 py-2.5 rounded-xl text-sm bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-slate-100 placeholder-slate-400 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project, timeline, or query..."
                  className="w-full px-4 py-2.5 rounded-xl text-sm bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-slate-100 placeholder-slate-400 transition-all resize-y"
                />
              </div>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={loading}
                  icon={<Send size={15} />}
                  className="shadow-md shadow-brand-500/20"
                >
                  {loading ? 'Sending Message...' : 'Send Message'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </Card>
    </div>
  );
};
