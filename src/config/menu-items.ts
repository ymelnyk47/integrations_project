// src/config/menu-items.ts
import { 
    LayoutDashboard,
    FileText,
    MessageCircle,
    Globe,
    File,
    Shield,
    BarChart,
    History,
    Settings,
    HelpCircle
  } from 'lucide-react';
  
  import { LucideIcon } from 'lucide-react';
  
  interface MenuItem {
    id: string;
    icon: LucideIcon;
    label: string;
  }
  
  export const menuItems: MenuItem[] = [
    {
      id: 'dashboard',
      icon: LayoutDashboard,
      label: 'Dashboard'
    },
    {
      id: 'documentation',
      icon: FileText,
      label: 'Documentation'
    },
    {
      id: 'discussions',
      icon: MessageCircle,
      label: 'Discussions'
    },
    {
      id: 'environments',
      icon: Globe,
      label: 'Environments'
    },
    {
      id: 'contract',
      icon: File,
      label: 'Contract'
    },
    {
      id: 'security',
      icon: Shield,
      label: 'Security & Access'
    },
    {
      id: 'monitoring',
      icon: BarChart,
      label: 'Monitoring'
    },
    {
      id: 'audit',
      icon: History,
      label: 'Audit Logs'
    },
    {
      id: 'settings',
      icon: Settings,
      label: 'Settings'
    },
    {
      id: 'support',
      icon: HelpCircle,
      label: 'Support'
    }
  ];
  
  export type MenuItemId = MenuItem['id'];