"use client";

import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { menuItems } from '../config/menu-items';
import UserMenu from '../components/user-menu';
import Dashboard from '../components/dashboard/index';
import ViewContainer from '../components/view-container';

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
        return <Dashboard />;
      // Add other views as needed
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Sidebar */}
      <div 
        className={`bg-gray-950 border-r border-gray-800 transition-all duration-300 ${
          sidebarCollapsed ? 'w-16' : 'w-64'
        }`}
      >
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          {!sidebarCollapsed && (
            <span className="font-bold text-lg text-white">integration_project</span>
          )}
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
                  ${activeTab === item.id ? 'bg-green-900/50 text-green-100' : 'hover:bg-gray-800'}
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
      <div className="flex-1 overflow-hidden">
        <div className="flex justify-end p-4">
          <UserMenu user={{
            name: "Sarah Chen",
            email: "sarah@company.com",
            role: "Admin"
          }} />
        </div>
        <ViewContainer currentView={activeTab} previousView={previousTab}>
          {renderView()}
        </ViewContainer>
      </div>
    </div>
  );
}