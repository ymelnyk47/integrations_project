// src/components/integration-dashboard.tsx
"use client";

import React, { useState, useMemo } from 'react';
import { 
  Menu 
} from 'lucide-react';
import IntegrationList from '../components/integration-list';
import ActivityFeed from '../components/threads-feed';
import DeveloperChats from '../components/developer-chats';
import { menuItems } from '../config/menu-items';
import { sampleIntegrations, sampleActivities } from '../config/sample-data';

// Add sample chats data
const sampleChats = [
  {
    id: 1,
    developer: "Sarah Chen",
    avatar: "",
    lastMessage: "Can you review the webhook implementation?",
    timestamp: "5m ago",
    unread: 2,
    status: "online",
    integration: "Stripe Payment Integration"
  },
  {
    id: 2,
    developer: "Mike Wilson",
    avatar: "",
    lastMessage: "Updated the authentication flow docs",
    timestamp: "1h ago",
    unread: 0,
    status: "away",
    integration: "Salesforce CRM Sync"
  },
  {
    id: 3,
    developer: "John Doe",
    avatar: "",
    lastMessage: "Testing completed for the new endpoints",
    timestamp: "2h ago",
    unread: 1,
    status: "offline",
    integration: "HubSpot Marketing"
  }
] as const;

export default function IntegrationDashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');
  const [partnerFilter, setPartnerFilter] = useState('all');

  const filteredIntegrations = useMemo(() => {
    return sampleIntegrations.filter(integration => {
      const matchesSearch = integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          integration.partner.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPartner = partnerFilter === 'all' || integration.partner === partnerFilter;
      return matchesSearch && matchesPartner;
    });
  }, [searchTerm, partnerFilter]);

  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Sidebar */}
      <div className={`bg-gray-950 border-r border-gray-800 transition-all duration-300 ${
        sidebarCollapsed ? 'w-16' : 'w-64'
      }`}>
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          {!sidebarCollapsed && <span className="font-bold text-lg text-white">integration_project</span>}
          <button 
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-1 rounded hover:bg-gray-800 text-gray-300"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
        <nav className="p-2">
          {menuItems.map(item => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg mb-1 text-gray-300
                  ${activeTab === item.id ? 'bg-green-900 text-green-100' : 'hover:bg-gray-800'}
                  ${sidebarCollapsed ? 'justify-center' : 'justify-start'}`}
              >
                <IconComponent className="h-5 w-5" />
                {!sidebarCollapsed && (
                  <span className="flex-1 text-left">{item.label}</span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-100">
              {menuItems.find(item => item.id === activeTab)?.label}
            </h1>
            <p className="text-gray-400">Manage your system integrations and developer communications</p>
          </div>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500">
            New Integration
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Integrations List */}
          <div className="lg:col-span-2">
            <IntegrationList
              integrations={filteredIntegrations}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              partnerFilter={partnerFilter}
              setPartnerFilter={setPartnerFilter}
            />
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <DeveloperChats chats={sampleChats} />
            <ActivityFeed activities={sampleActivities} />
          </div>
        </div>
      </div>
    </div>
  );
}