import React, { useCallback, useMemo } from 'react';
import { Book, Search, LucideIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { CORE_INTEGRATIONS, THEME_MAP } from '../lib/constants';
import SearchBar from './search-bar';
import ThemeSelector from './theme-selector';

interface DocTileProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

const DocTile = React.memo(({ icon: Icon, title, description, href }: DocTileProps) => (
  <a
    href={href}
    className="group relative flex items-start p-4 sm:p-6 
      bg-white dark:bg-gray-800 
      border-b last:border-b-0 sm:border sm:border-gray-200 sm:dark:border-gray-700 
      sm:rounded-lg sm:m-0 
      transition-all duration-200 
      hover:bg-gray-50 dark:hover:bg-gray-750
      active:scale-[0.99] sm:hover:scale-[1.02]
      will-change-transform"
  >
    <div className="shrink-0 p-2 sm:p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
    </div>
    
    <div className="ml-4 min-w-0">
      <h3 className="font-medium text-gray-900 dark:text-white text-base sm:text-lg truncate">
        {title}
      </h3>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
        {description}
      </p>
    </div>
  </a>
));

DocTile.displayName = 'DocTile';

const DocumentationPage = () => {
  // Use matchMedia instead of custom breakpoint hook for simplicity
  const isMobile = typeof window !== 'undefined' ? 
    window.matchMedia('(max-width: 640px)').matches : false;

  const gridClassName = useMemo(() => 
    isMobile ? 'divide-y divide-gray-200 dark:divide-gray-700' :
    'grid gap-4 sm:grid-cols-2 lg:grid-cols-3'
  , [isMobile]);

  const handleSearch = useCallback((term: string) => {
    // Implement search logic
    console.log('Searching:', term);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="sticky top-0 z-10 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
              Documentation
            </h1>
            
            <div className="flex items-center gap-3">
              <ThemeSelector />
              <SearchBar 
                onSearch={handleSearch}
                className="w-full sm:w-64"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className={gridClassName}>
          {CORE_INTEGRATIONS.map((integration) => (
            <DocTile key={integration.id} {...integration} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default DocumentationPage;