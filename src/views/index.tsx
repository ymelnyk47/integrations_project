"use client";

import React from 'react';
import { PlusCircle } from 'lucide-react';
import IntegrationList from '../components/integration-list';
import DeveloperChatComponent from '../components/discussions/developer-chats';
import ActivityFeed from '../components/threads-feed';
import { SearchBar } from '../components/search-bar';
import { sampleIntegrations, sampleChats, sampleActivities } from '../config/sample-data';
import DocumentationDashboard from '../components/documentation/documentation-dashboard';

// Placeholder component for views under development
function PlaceholderView({ title }: { title: string }) {
  return (
    <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <p className="text-gray-400 mt-2">This section is under development.</p>
    </div>
  );
}

// Individual view components
export function DashboardView() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [partnerFilter, setPartnerFilter] = React.useState('all');

  return (
    <div className="space-y-6">
      {/* Header with search and new integration button */}
      <div className="flex justify-between items-center">
        <div className="flex-1 max-w-2xl">
          <SearchBar />
        </div>
        <button className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 
                       text-white rounded-lg transition-colors">
          <PlusCircle className="w-5 h-5 mr-2" />
          New Integration
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content - Integration List */}
        <div className="lg:col-span-2">
          <IntegrationList
            integrations={sampleIntegrations}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            partnerFilter={partnerFilter}
            setPartnerFilter={setPartnerFilter}
          />
        </div>
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Developer Chats */}
          <DeveloperChatComponent chats={sampleChats} />
          
          {/* Activity Feed */}
          <ActivityFeed activities={sampleActivities} />
        </div>
      </div>
    </div>
  );
}

export function DocumentationView() {
  return (
    <div className="w-full p-6">
      <DocumentationDashboard />
    </div>
  );
}

export function DiscussionsView() {
  return (
    <div className="space-y-6">
      {/* Header with search */}
      <div className="flex justify-between items-center">
        <div className="flex-1 max-w-2xl">
          <SearchBar />
        </div>
        <button className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 
                       text-white rounded-lg transition-colors">
          <PlusCircle className="w-5 h-5 mr-2" />
          New Discussion
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content - Discussions List */}
        <div className="lg:col-span-2">
          <ActivityFeed activities={sampleActivities} />
        </div>
        {/* Sidebar */}
        <div className="space-y-6">
          <DeveloperChatComponent chats={sampleChats} />
        </div>
      </div>
    </div>
  );
}

// Placeholder views for sections under development
export function SecurityView() {
  return <PlaceholderView title="Security & Access" />;
}

export function EnvironmentsView() {
  return <PlaceholderView title="Environments" />;
}

export function ContractView() {
  return <PlaceholderView title="Contract" />;
}

export function MonitoringView() {
  return <PlaceholderView title="Monitoring" />;
}

export function AuditView() {
  return <PlaceholderView title="Audit Logs" />;
}

export function SettingsView() {
  return <PlaceholderView title="Settings" />;
}

export function SupportView() {
  return <PlaceholderView title="Support" />;
}

// Export all views as a convenient object
export const Views = {
  DashboardView,
  SecurityView,
  DocumentationView,
  DiscussionsView,
  EnvironmentsView,
  ContractView,
  MonitoringView,
  AuditView,
  SettingsView,
  SupportView
};