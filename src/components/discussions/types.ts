export interface Discussion {
    id: string;
    title: string;
    lastMessage: string;
    timestamp: string;
    channel: string;
    unreadCount: number;
    participants: number;
    labels: Array<{
      text: string;
      color: string;
    }>;
    priority: 'high' | 'medium' | 'low';
    mentions?: boolean;
    saved?: boolean;
  }
  
  export type FilterType = 'all' | 'mentions' | 'saved';