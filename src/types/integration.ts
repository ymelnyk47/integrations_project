// types/integration.ts
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