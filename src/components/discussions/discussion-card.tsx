import React from 'react';
import { AlertCircle, Star } from 'lucide-react';
import type { Discussion } from './types';

interface DiscussionCardProps {
  discussion: Discussion;
  onClick?: (id: string) => void;
}

const DiscussionCard = React.memo(({ discussion, onClick }: DiscussionCardProps) => (
  <div 
    onClick={() => onClick?.(discussion.id)}
    className="group p-4 rounded-lg bg-gray-950 border border-gray-800 hover:border-gray-700 
               transition-colors duration-200 cursor-pointer transform-gpu hover:scale-[1.01]"
  >
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="flex items-center space-x-2">
          <h3 className="text-gray-100 font-medium">{discussion.title}</h3>
          {discussion.priority === 'high' && (
            <AlertCircle className="w-4 h-4 text-red-400" />
          )}
          {discussion.saved && (
            <Star className="w-4 h-4 text-yellow-400" />
          )}
        </div>
        
        <div className="mt-1 text-sm text-gray-400">{discussion.lastMessage}</div>
        
        <div className="mt-2 flex items-center space-x-2 text-xs">
          <span className="text-gray-500">#{discussion.channel}</span>
          <span className="text-gray-600">•</span>
          <span className="text-gray-500">{discussion.timestamp}</span>
          <span className="text-gray-600">•</span>
          <span className="text-gray-500">{discussion.participants} participants</span>
        </div>
      </div>

      {discussion.unreadCount > 0 && (
        <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-900/50 text-green-100">
          {discussion.unreadCount}
        </span>
      )}
    </div>
    
    <div className="mt-2 flex items-center space-x-2">
      {discussion.labels.map((label, index) => (
        <span
          key={index}
          className={`px-2 py-1 rounded-full text-xs ${label.color} bg-opacity-15 
                   text-white`}
        >
          {label.text}
        </span>
      ))}
    </div>
  </div>
));

DiscussionCard.displayName = 'DiscussionCard';

export default DiscussionCard;