import React, { useState, useRef, useEffect } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchResult {
  id: string;
  title: string;
  category: 'Documentation' | 'Discussions' | 'API Reference';
  preview?: string;
}

interface SearchBarProps {
  className?: string;
  onSearch?: (term: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ 
  className = '',
  onSearch 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const [recentSearches] = useState<string[]>([
    'API documentation',
    'Stripe webhook setup',
    'Authentication flow'
  ]);
  
  const [searchResults] = useState<SearchResult[]>([
    {
      id: '1',
      title: 'Webhook Documentation',
      category: 'Documentation',
      preview: 'Learn how to set up and handle webhooks...'
    },
    {
      id: '2',
      title: 'API Authentication',
      category: 'API Reference',
      preview: 'Secure your API endpoints using...'
    },
    {
      id: '3',
      title: 'Integration Setup',
      category: 'Discussions',
      preview: 'Latest discussion about integration setup...'
    }
  ]);
  
  useEffect(() => {
    if (isExpanded) {
      inputRef.current?.focus();
    }
  }, [isExpanded]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch?.(term);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsExpanded(false);
      setSearchTerm('');
    }
  };

  return (
    <div className={`relative ${className}`}>
      <motion.div
        initial={false}
        animate={{ width: isExpanded ? '400px' : '40px' }}
        className="relative"
      >
        <motion.div
          className={`flex items-center bg-gray-900 border border-gray-700 rounded-lg 
                     ${isExpanded ? 'shadow-lg shadow-black/10' : ''}`}
        >
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 text-gray-400 hover:text-gray-100 transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>
          <AnimatePresence mode="wait">
            {isExpanded && (
              <motion.input
                ref={inputRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                placeholder="Search documentation, discussions..."
                value={searchTerm}
                onChange={handleSearchChange}
                onKeyDown={handleKeyDown}
                className="bg-transparent border-none outline-none text-gray-100 p-2 w-full 
                          placeholder:text-gray-500"
              />
            )}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {isExpanded && (searchTerm || recentSearches.length > 0) && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 mt-2 bg-gray-900 border border-gray-700 
                         rounded-lg shadow-xl z-50 overflow-hidden"
            >
              <div className="p-2">
                {searchTerm && (
                  <>
                    <div className="text-sm text-gray-400 px-3 py-2">Search Results</div>
                    {searchResults.map((result) => (
                      <button
                        key={result.id}
                        className="w-full text-left px-3 py-2 hover:bg-gray-800 rounded-md
                                  transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-gray-100">{result.title}</span>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-300 
                                               opacity-0 group-hover:opacity-100 transition-all" />
                        </div>
                        <div className="text-sm text-gray-500 mt-1">{result.preview}</div>
                        <div className="text-xs text-gray-400 mt-1">{result.category}</div>
                      </button>
                    ))}
                    <div className="border-t border-gray-800 my-2" />
                  </>
                )}
                {recentSearches.length > 0 && (
                  <>
                    <div className="text-sm text-gray-400 px-3 py-2">Recent Searches</div>
                    {recentSearches.map((search) => (
                      <button
                        key={search}
                        className="w-full text-left px-3 py-2 hover:bg-gray-800 rounded-md 
                                  text-gray-100 flex items-center justify-between group"
                      >
                        <span>{search}</span>
                        <X className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 
                                    transition-opacity" />
                      </button>
                    ))}
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SearchBar;