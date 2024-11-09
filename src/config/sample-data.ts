// src/config/sample-data.ts
import { ActivityItem } from "@/components/threads-feed";

export interface Integration {
  id: number;
  name: string;
  partner: string;
  status: 'active' | 'pending' | 'inactive';
  lastActivity: string;
  docs: number;
  threads: number;
  daysToLive: number;
  teamSize: number;
  integrationProgress: number;
  environment: 'development' | 'staging' | 'production';
  apiVersion: string;
  lastUpdated: string;
  endpoints: number;
}

export const sampleIntegrations: Integration[] = [
  {
    id: 1,
    name: "Stripe Payment Integration",
    partner: "Stripe",
    status: "active",
    lastActivity: "10 minutes ago",
    docs: 12,
    threads: 3,
    daysToLive: 5,
    teamSize: 4,
    integrationProgress: 75,
    environment: "staging",
    apiVersion: "2023-10-16",
    lastUpdated: "2024-02-15",
    endpoints: 8
  },
  {
    id: 2,
    name: "Salesforce CRM Sync",
    partner: "Salesforce",
    status: "pending",
    lastActivity: "2 hours ago",
    docs: 8,
    threads: 1,
    daysToLive: 12,
    teamSize: 3,
    integrationProgress: 45,
    environment: "development",
    apiVersion: "v58.0",
    lastUpdated: "2024-02-14",
    endpoints: 12
  },
  {
    id: 3,
    name: "HubSpot Marketing",
    partner: "HubSpot",
    status: "inactive",
    lastActivity: "1 day ago",
    docs: 15,
    threads: 4,
    daysToLive: 3,
    teamSize: 5,
    integrationProgress: 90,
    environment: "production",
    apiVersion: "v3",
    lastUpdated: "2024-02-10",
    endpoints: 6
  }
];

export const sampleActivities: ActivityItem[] = [
  {
    id: 1,
    type: 'document',
    content: 'Updated API documentation for payment webhooks',
    timestamp: '10 minutes ago',
    integration: 'Stripe Payment Integration',
    user: 'Sarah Chen',
    icon: 'document'
  },
  {
    id: 2,
    type: 'status',
    content: 'Integration status changed to Active',
    timestamp: '1 hour ago',
    integration: 'Stripe Payment Integration',
    user: 'Mike Wilson',
    icon: 'status'
  },
  {
    id: 3,
    type: 'message',
    content: 'New thread: Authentication flow clarification needed',
    timestamp: '2 hours ago',
    integration: 'Salesforce CRM Sync',
    user: 'John Doe',
    icon: 'message'
  },
  {
    id: 4,
    type: 'deployment',
    content: 'Deployed to staging environment',
    timestamp: '3 hours ago',
    integration: 'HubSpot Marketing',
    user: 'Deploy Bot',
    icon: 'deployment'
  },
  {
    id: 5,
    type: 'security',
    content: 'Updated API access permissions',
    timestamp: '4 hours ago',
    integration: 'Salesforce CRM Sync',
    user: 'Security Team',
    icon: 'security'
  }
];

// Common partner options for reuse
export const partners = [
  "Stripe",
  "Salesforce",
  "HubSpot"
] as const;

// Common environment options for reuse
export const environments = [
  "development",
  "staging",
  "production"
] as const;

// Common status options for reuse
export const statuses = [
  "active",
  "pending",
  "inactiv"
] as const;

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
  
  export const sampleChats: DeveloperChat[] = [
    {
      id: 1,
      developer: "Sarah Chen",
      avatar: "",
      lastMessage: "Can you review the webhook implementation?",
      timestamp: "5m ago",
      unread: 2,
      status: "online",
      integration: "Stripe Payment Integration"
    },
    {
      id: 2,
      developer: "Mike Wilson",
      avatar: "",
      lastMessage: "Updated the authentication flow docs",
      timestamp: "1h ago",
      unread: 0,
      status: "away",
      integration: "Salesforce CRM Sync"
    },
    {
      id: 3,
      developer: "John Doe",
      avatar: "",
      lastMessage: "Testing completed for the new endpoints",
      timestamp: "2h ago",
      unread: 1,
      status: "offline",
      integration: "HubSpot Marketing"
    }
  ];