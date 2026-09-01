import React from 'react';
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Globe,
  Package,
  Code,
  Layout,
  Server,
  Database,
  Cpu,
  Zap,
  Layers,
  Sparkles,
  Shield,
  Users,
  CheckCircle,
  Wrench,
  FileText,
  ExternalLink,
  Phone,
  Briefcase,
  GraduationCap,
  Download,
  Moon,
  Sun,
  ArrowLeft,
  Copy,
  Check,
  Send,
  MessageSquare,
} from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const DynamicIcon: React.FC<IconProps> = ({ name, className = 'w-4 h-4', size = 16 }) => {
  const normalized = name.toLowerCase().trim();

  switch (normalized) {
    case 'github':
      return <Github className={className} size={size} />;
    case 'linkedin':
      return <Linkedin className={className} size={size} />;
    case 'twitter':
    case 'x':
      return <Twitter className={className} size={size} />;
    case 'mail':
    case 'email':
      return <Mail className={className} size={size} />;
    case 'phone':
    case 'tel':
      return <Phone className={className} size={size} />;
    case 'map-pin':
    case 'location':
      return <MapPin className={className} size={size} />;
    case 'globe':
    case 'website':
    case 'portfolio':
      return <Globe className={className} size={size} />;
    case 'npm':
    case 'package':
      return <Package className={className} size={size} />;
    case 'code':
    case 'javascript':
    case 'typescript':
      return <Code className={className} size={size} />;
    case 'layout':
    case 'html':
    case 'css':
      return <Layout className={className} size={size} />;
    case 'server':
    case 'node':
      return <Server className={className} size={size} />;
    case 'database':
    case 'sql':
    case 'postgres':
    case 'mysql':
      return <Database className={className} size={size} />;
    case 'cpu':
    case 'java':
    case 'spring':
    case 'springboot':
    case 'kotlin':
      return <Cpu className={className} size={size} />;
    case 'zap':
    case 'react':
    case 'angular':
      return <Zap className={className} size={size} />;
    case 'figma':
    case 'layers':
      return <Layers className={className} size={size} />;
    case 'sparkles':
      return <Sparkles className={className} size={size} />;
    case 'shield':
      return <Shield className={className} size={size} />;
    case 'users':
      return <Users className={className} size={size} />;
    case 'check-circle':
    case 'check':
      return <CheckCircle className={className} size={size} />;
    case 'tool':
    case 'git':
      return <Wrench className={className} size={size} />;
    case 'briefcase':
      return <Briefcase className={className} size={size} />;
    case 'graduation-cap':
    case 'education':
      return <GraduationCap className={className} size={size} />;
    case 'download':
      return <Download className={className} size={size} />;
    case 'file-text':
      return <FileText className={className} size={size} />;
    case 'external-link':
      return <ExternalLink className={className} size={size} />;
    case 'sun':
      return <Sun className={className} size={size} />;
    case 'moon':
      return <Moon className={className} size={size} />;
    case 'arrow-left':
      return <ArrowLeft className={className} size={size} />;
    case 'copy':
      return <Copy className={className} size={size} />;
    case 'copied':
      return <Check className={className} size={size} />;
    case 'send':
      return <Send className={className} size={size} />;
    case 'discord':
    case 'chat':
    case 'message':
      return <MessageSquare className={className} size={size} />;
    default:
      return <Code className={className} size={size} />;
  }
};
