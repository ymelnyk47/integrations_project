import { LucideIcon } from 'lucide-react';

export interface DocTileProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export type Theme = 'light' | 'dark' | 'system';

export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl';