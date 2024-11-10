import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { menuItems } from '../config/menu-items';
import UserMenu from '../components/user-menu';
import { useBreakpoint } from '../hooks/use-breakpoints';

// Using const for component declaration ensures the function isn't accidentally reassigned
const IntegrationDashboard = () => {
  // Using boolean state with descriptive name - more performant than strings for conditionals
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const breakpoint = useBreakpoint();
  
  // Responsive behavior
  useEffect(() => {
    // Auto-collapse on mobile
    setIsSidebarCollapsed(breakpoint === 'sm');
  }, [breakpoint]);

  // Modern event handler using arrow function
  const handleTabChange = (tabId: string) => setActiveTab(tabId);

  // Using template literals for dynamic classes - better performance than string concatenation
  const sidebarClasses = `
    fixed lg:relative
    h-screen
    bg-gray-950 
    border-r border-gray-800 
    transition-all duration-300 ease-in-out
    z-50
    ${isSidebarCollapsed ? 'w-16' : 'w-64'}
  `;

  const mainContentClasses = `
    flex-1 
    transition-all duration-300 ease-in-out
    ${isSidebarCollapsed ? 'ml-16' : 'ml-64'} 
    lg:ml-0
  `;

  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Sidebar with improved positioning and transitions */}
      <aside className={sidebarClasses}>
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          {!isSidebarCollapsed && (
            <span className="font-bold text-lg text-white">integration_project</span>
          )}
          <button 
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className="p-1 rounded hover:bg-gray-800 text-gray-300
                     transition-colors duration-200"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
        
        <nav className="p-2 overflow-y-auto h-[calc(100vh-4rem)]">
          {menuItems.map(item => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id)}
                className={`
                  w-full flex items-center space-x-2 px-3 py-2 rounded-lg mb-1
                  transition-all duration-200 ease-in-out
                  ${activeTab === item.id ? 'bg-green-900/50 text-green-100' : 'text-gray-300 hover:bg-gray-800'}
                  ${isSidebarCollapsed ? 'justify-center' : 'justify-start'}
                `}
              >
                <IconComponent className="h-5 w-5 flex-shrink-0" />
                {!isSidebarCollapsed && (
                  <span className="flex-1 text-left truncate">{item.label}</span>
                )}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className={mainContentClasses}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-100">
                {menuItems.find(item => item.id === activeTab)?.label}
              </h1>
              <p className="text-gray-400">Manage your system integrations and developer communications</p>
            </div>
            <UserMenu user={{
              name: "Sarah Chen",
              email: "sarah@company.com",
              role: "Admin",
            }} />
          </div>
          
          {/* Content would go here */}
        </div>
      </main>
    </div>
  );
};

export default IntegrationDashboard;