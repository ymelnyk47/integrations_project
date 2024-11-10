"use client";

import React from 'react';
import DashboardMetrics from './dashboard-metrics';
import IntegrationList from '../integration-list';
//import { ThreadsFeed } from '../threads-feed';
import { SearchBar } from '../search-bar';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [partnerFilter, setPartnerFilter] = React.useState('all');

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-100">Dashboard</h1>
          <p className="text-gray-400">Manage your system integrations and developer communications</p>
        </div>
        <SearchBar 
          onSearch={(term) => setSearchTerm(term)}
          className="w-96"
        />
      </div>

      {/* Metrics */}
      <DashboardMetrics />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Integrations */}
        <div className="lg:col-span-2">
          <IntegrationList
            integrations={IntegrationList}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            partnerFilter={partnerFilter}
            setPartnerFilter={setPartnerFilter}
          />
        </div>
    </div>
</div>
)
};

export default Dashboard;