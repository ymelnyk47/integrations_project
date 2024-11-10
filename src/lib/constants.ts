import { LucideIcon, Terminal, Code, Database, Book, Cloud } from 'lucide-react';

interface Integration {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export const CORE_INTEGRATIONS: Integration[] = [
  {
    id: 'node',
    icon: Terminal,
    title: "Node.js",
    description: "Build Node.js applications",
    href: "/docs/node"
  },
  {
    id: 'python',
    icon: Code,
    title: "Python",
    description: "Python SDK integration",
    href: "/docs/python"
  },
  {
    id: 'api',
    icon: Database,
    title: "REST API",
    description: "Direct API access",
    href: "/docs/api"
  }
];

export const THEME_MAP = {
  light: { label: 'Light' },
  dark: { label: 'Dark' },
  system: { label: 'System' }
} as const;