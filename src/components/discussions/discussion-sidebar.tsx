import React, { useCallback } from 'react';
import { MessageSquare, Hash, AtSign, Bookmark, Search } from 'lucide-react';
import type { FilterType } from './types';

interface DiscussionSidebarProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

// Filter options with their respective icons
const filterOptions = [
  { id: 'all', icon: Hash, label: 'All Discussions' },
  { id: 'mentions', icon: AtSign, label: 'Mentions' },
  { id: 'saved', icon: Bookmark, label: 'Saved' }
] as const;

const DiscussionSidebar = React.memo(({ 
  currentFilter, 
  onFilterChange,
  searchTerm,
  onSearchChange
}: DiscussionSidebarProps) => {
  // Memoized search handler for performance
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  }, [onSearchChange]);

  return (
    <div className="w-64 bg-gray-950 border-r border-gray-800 flex flex-col">
      {/* Header Section */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center space-x-2 mb-4">
          <MessageSquare className="w-5 h-5 text-gray-400" />
          <h2 className="text-lg font-semibold text-gray-100">Discussions</h2>
        </div>
        
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500 pointer-events-none" />
          <input
            type="text"
            placeholder="Search discussions..."
            className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-800 rounded-lg 
                     text-sm text-gray-300 placeholder-gray-500 focus:outline-none 
                     focus:ring-2 focus:ring-green-500 transition-colors duration-200"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      
      {/* Filter Navigation */}
      <nav className="p-2 space-y-1 flex-1">
        {filterOptions.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => onFilterChange(id)}
            className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg text-sm
              transition-colors duration-200
              ${currentFilter === id 
                ? 'bg-green-900/50 text-green-100' 
                : 'text-gray-300 hover:bg-gray-800'}`}
          >
            <Icon className="w-4 h-4" />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      {/* Status Footer */}
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center text-sm text-gray-400">
          <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
          <span>3 Active Discussions</span>
        </div>
      </div>
    </div>
  );
});

DiscussionSidebar.displayName = 'DiscussionSidebar';

export default DiscussionSidebar;