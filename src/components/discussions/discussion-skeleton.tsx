import React from 'react';

export default function DiscussionSkeleton() {
  return (
    <div className="animate-pulse" role="status" aria-label="Loading discussions">
      {[1, 2, 3].map((i) => (
        <div 
          key={i} 
          className="p-4 rounded-lg bg-gray-950 border border-gray-800 mb-2"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="h-5 bg-gray-800 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-800 rounded w-1/2"></div>
              <div className="mt-2 flex space-x-2">
                <div className="h-3 bg-gray-800 rounded w-20"></div>
                <div className="h-3 bg-gray-800 rounded w-24"></div>
              </div>
            </div>
            {/* Simulated unread count */}
            <div className="h-6 w-6 bg-gray-800 rounded-full"></div>
          </div>
          {/* Simulated labels */}
          <div className="mt-2 flex space-x-2">
            <div className="h-5 bg-gray-800 rounded w-16"></div>
            <div className="h-5 bg-gray-800 rounded w-16"></div>
          </div>
        </div>
      ))}
    </div>
  );
}