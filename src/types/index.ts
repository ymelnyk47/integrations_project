import { LucideIcon } from 'lucide-react';

export type ViewType = 
  | 'dashboard'
  | 'documentation'
  | 'discussions'
  | 'environments'
  | 'contract'
  | 'security'
  | 'monitoring'
  | 'audit'
  | 'settings'
  | 'support';

export interface MenuItem {
  id: ViewType;
  icon: LucideIcon;
  label: string;
}

export interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
}

export interface DeveloperChat {
  id: number;
  developer: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  status: 'online' | 'offline' | 'away';
  integration: string;
}

export type ActivityType = 'document' | 'message' | 'status' | 'deployment' | 'security';

export interface ActivityItem {
  id: number;
  type: ActivityType;
  content: string;
  timestamp: string;
  integration: string;
  user?: string;
  icon: ActivityType;
}