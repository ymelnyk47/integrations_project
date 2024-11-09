// src/components/activity-feed.tsx
"use client";

import React from 'react';
import { FileText, MessageSquare, CheckCircle, Globe, Shield } from 'lucide-react';

export interface ActivityItem {
  id: number;
  type: 'document' | 'message' | 'status' | 'deployment' | 'security';
  content: string;
  timestamp: string;
  integration: string;
  user?: string;
  icon: keyof typeof activityIcons;
}

const activityIcons = {
  document: FileText,
  message: MessageSquare,
  status: CheckCircle,
  deployment: Globe,
  security: Shield,
} as const;

interface ActivityFeedProps {
  activities: ActivityItem[];
}

export default function ActivityFeed({ activities }: ActivityFeedProps) {
  return (
    <div className="bg-gray-950 rounded-lg border border-gray-800">
      <div className="p-4 border-b border-gray-800">
        <h2 className="text-lg font-semibold text-gray-100">Recent Activity</h2>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          {activities.map((activity) => {
            const IconComponent = activityIcons[activity.icon];
            return (
              <div 
                key={activity.id}
                className="flex items-start space-x-3 p-3 rounded-lg bg-gray-900 border border-gray-800"
              >
                <div className={`p-2 rounded-full ${
                  activity.type === 'document' ? 'bg-blue-900 text-blue-200' :
                  activity.type === 'message' ? 'bg-purple-900 text-purple-200' :
                  activity.type === 'status' ? 'bg-green-900 text-green-200' :
                  activity.type === 'deployment' ? 'bg-yellow-900 text-yellow-200' :
                  'bg-red-900 text-red-200'
                }`}>
                  <IconComponent className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-200">{activity.content}</p>
                  <div className="flex items-center mt-1 space-x-2">
                    <span className="text-xs text-gray-500">{activity.integration}</span>
                    <span className="text-gray-600">•</span>
                    <span className="text-xs text-gray-500">{activity.timestamp}</span>
                  </div>
                  {activity.user && (
                    <span className="text-xs text-gray-400 mt-1 block">
                      by {activity.user}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}