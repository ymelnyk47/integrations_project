import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (term: string) => void;
  className?: string;
}

const SearchBar = ({ onSearch, className = '' }: SearchBarProps) => (
  <div className={`relative ${className}`}>
    <input
      type="text"
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Search documentation..."
      className="w-full pl-10 pr-4 py-2 text-sm
        bg-white dark:bg-gray-800 
        border border-gray-200 dark:border-gray-700 
        rounded-lg
        focus:outline-none focus:ring-2 focus:ring-blue-500 
        dark:text-white
        placeholder-gray-500 dark:placeholder-gray-400"
    />
    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
  </div>
);

export default SearchBar;