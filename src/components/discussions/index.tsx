import React, { Suspense, useEffect, useState, useTransition } from 'react';
import DiscussionSkeleton from './discussion-skeleton';
import DiscussionCard from './discussion-card';
import DiscussionSidebar from './discussion-sidebar';
import type { Discussion, FilterType } from './types';

// Mock data - in production this would come from an API
const mockDiscussions: Discussion[] = [
  {
    id: '1',
    title: 'API Rate Limiting Implementation',
    lastMessage: '@sarah Could you clarify the retry strategy for 429 responses?',
    timestamp: '5m ago',
    channel: 'api-design',
    unreadCount: 3,
    participants: 4,
    labels: [{ text: 'backend', color: 'bg-blue-500' }],
    priority: 'high',
    mentions: true
  },
  {
    id: '2',
    title: 'OAuth Flow Documentation Update',
    lastMessage: 'The sequence diagram needs to be updated for the new flow',
    timestamp: '23m ago',
    channel: 'documentation',
    unreadCount: 0,
    participants: 3,
    labels: [{ text: 'docs', color: 'bg-green-500' }],
    priority: 'medium',
    saved: true
  },
  {
    id: '3',
    title: 'Breaking Change: Payment Intent Schema',
    lastMessage: 'We need to migrate existing integrations by Q2',
    timestamp: '1h ago',
    channel: 'breaking-changes',
    unreadCount: 5,
    participants: 8,
    labels: [{ text: 'urgent', color: 'bg-red-500' }],
    priority: 'high'
  }
];

export default function DiscussionsView() {
  const [filter, setFilter] = useState<FilterType>('all');
  const [searchTerm, setSearchTerm] = useState('');
  //const [isPending, startTransition] = useTransition();
  const [discussions, setDiscussions] = useState<Discussion[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulated data fetching with loading state
  useEffect(() => {
    const loadDiscussions = async () => {
      setIsLoading(true);
      try {
        // Simulate API call - replace with real API in production
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Filter discussions based on current filter and search
        const filtered = mockDiscussions.filter(discussion => {
          const matchesSearch = discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              discussion.lastMessage.toLowerCase().includes(searchTerm.toLowerCase());
          
          switch (filter) {
            case 'mentions':
              return discussion.mentions && matchesSearch;
            case 'saved':
              return discussion.saved && matchesSearch;
            default:
              return matchesSearch;
          }
        });
        
        setDiscussions(filtered);
      } catch (error) {
        console.error('Error loading discussions:', error);
        // In production, handle this error appropriately
      } finally {
        setIsLoading(false);
      }
    };
});

  const handleDiscussionClick = (id: string) => {
    console.log(`Opening discussion ${id}`);
    // In production, implement navigation or modal opening
  };

  return (
    <div className="flex h-full bg-gray-900">
      <DiscussionSidebar 
        currentFilter={filter} 
        onFilterChange={setFilter}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      {/* Main Content with Suspense boundary */}
      <div className="flex-1 overflow-auto">
        <div className="space-y-2 p-4">
          <Suspense fallback={<DiscussionSkeleton />}>
            {isLoading ? (
              <DiscussionSkeleton />
            ) : discussions.length > 0 ? (
              discussions.map((discussion) => (
                <DiscussionCard 
                  key={discussion.id} 
                  discussion={discussion}
                  onClick={handleDiscussionClick}
                />
              ))
            ) : (
              <div className="text-center py-8 text-gray-400">
                No discussions found {searchTerm && 'matching your search'}
              </div>
            )}
          </Suspense>
        </div>
      </div>
    </div>
  );
}