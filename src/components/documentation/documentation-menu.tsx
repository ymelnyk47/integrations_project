import React, { useState, useRef, useEffect } from 'react';
import { Github, Book, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/router';

const DocumentationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && event.target instanceof Node && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleViewAll = () => {
    router.push('/documentation');
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        <Book className="w-4 h-4" />
        <span>Documentation</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1">
            <button
              onClick={handleViewAll}
              className="w-full text-left flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <Book className="w-4 h-4 mr-3" />
              View All Documentation
            </button>
            
            <div className="border-t border-gray-100 my-1"></div>
            
            {/* Core Documentation */}
            <div className="px-4 py-2 text-xs font-semibold text-gray-500">Quick Links</div>
            
            <a href="/docs/getting-started" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              <Book className="w-4 h-4 mr-3" />
              Getting Started Guide
            </a>
            
            <a href="https://github.com/org/node-integration" 
               className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
               target="_blank"
               rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-3" />
              Node.js Integration
            </a>
            
            <a href="https://github.com/org/python-integration"
               className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
               target="_blank"
               rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-3" />
              Python Integration
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentationMenu;