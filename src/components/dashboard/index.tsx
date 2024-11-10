import React from 'react';
import { SearchBar } from '../search-bar';
import DashboardMetrics from './dashboard-metrics';
import { motion } from 'framer-motion';

const Dashboard: React.FC = () => {
  const handleSearch = (term: string) => {
    console.log('Searching:', term);
    // Implement your search logic here
  };

  return (
    <div className="min-h-screen bg-gray-950">
      <header className="sticky top-0 z-10 bg-gray-950/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-white">Dashboard</h1>
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <DashboardMetrics />
          
          {/* Add your discussions/threads component here */}
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Recent Discussions</h2>
            {/* Add your discussions content here */}
          </div>
        </motion.div>
      </main>
    </div>
  );
}