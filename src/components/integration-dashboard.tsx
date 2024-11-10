"use client";

import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { menuItems } from '../config/menu-items';
import ViewContainer from './view-container';
import {
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
} from '../views';

export default function IntegrationDashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [previousTab, setPreviousTab] = useState<string | null>(null);

  const handleTabChange = (tabId: string) => {
    setPreviousTab(activeTab);
    setActiveTab(tabId);
  };

  const renderView = () => {
    switch(activeTab) {
      case 'dashboard':
        return <DashboardView />;
      case 'documentation':
        return <DocumentationView />;
      case 'discussions':
        return <DiscussionsView />;
      case 'environments':
        return <EnvironmentsView />;
      case 'contract':
        return <ContractView />;
      case 'security':
        return <SecurityView />;
      case 'monitoring':
        return <MonitoringView />;
      case 'audit':
        return <AuditView />;
      case 'settings':
        return <SettingsView />;
      case 'support':
        return <SupportView />;
      default:
        return <DashboardView />;
    }
  };

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
                onClick={() => handleTabChange(item.id)}
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
      <div className="flex-1">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-100">
                {menuItems.find(item => item.id === activeTab)?.label}
              </h1>
              <p className="text-gray-400">Manage your system integrations and developer communications</p>
            </div>
          </div>

          <ViewContainer currentView={activeTab} previousView={previousTab}>
            {renderView()}
          </ViewContainer>
        </div>
      </div>
    </div>
  );
}