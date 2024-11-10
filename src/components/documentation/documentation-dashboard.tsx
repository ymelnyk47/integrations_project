import React, { useState } from 'react';
import { 
  Search, Book, ArrowUpRight, Code, Clock, Eye, Edit, Activity 
} from 'lucide-react';

// Mock data - in production this will come from an API
const mockDocuments = [
  {
    id: '1',
    title: 'Getting UAT Environment Access to Finicity',
    description: 'Team documentation on setup and provisioning',
    category: 'guides',
    lastUpdated: '2h ago',
    views: 1234,
    author: 'Sarah Chen'
  },
  {
    id: '2',
    title: 'Main CardHub Documentation',
    description: 'Main Reference Docs',
    category: 'api',
    lastUpdated: '4h ago',
    views: 892,
    author: 'Mike Wilson'
  },
  {
    id: '3',
    title: 'Stripe Webhook Setup',
    description: 'Configure and manage webhooks with Stripe',
    category: 'integration',
    lastUpdated: '1d ago',
    views: 567,
    author: 'John Doe'
  },
  {
    id: '4',
    title: 'Mulesoft common error handling guide',
    description: 'API Errors with Mulesoft handling process',
    category: 'guides',
    lastUpdated: '2d ago',
    views: 789,
    author: 'Emma Smith'
  }
];

const mockActivities = [
  {
    id: '1',
    type: 'edit',
    docTitle: 'Getting UAT Environment Access to Finicity',
    user: 'Sarah Chen',
    timestamp: '10m ago'
  },
  {
    id: '2',
    type: 'create',
    docTitle: 'Sharing updates on the latest CardHub docs.',
    user: 'Mike Wilson',
    timestamp: '1h ago'
  },
  {
    id: '3',
    type: 'comment',
    docTitle: 'Stripe Webhook Setup',
    user: 'John Doe',
    timestamp: '2h ago'
  }
];

export const DocumentationDashboardContent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Metrics Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Docs', value: '234', icon: Book, change: 'Week +12%' },
          { label: 'Weekly Views', value: '15.2k', icon: Eye, change: 'Week +8%' },
          { label: 'Upcoming', value: '7', icon: Code, change: 'Week +1' },
          { label: 'Weekly Edits', value: '43', icon: Activity, change: 'Week +5%' }
        ].map((metric, i) => (
          <div key={i} className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <span className="text-sm text-gray-400">{metric.label}</span>
                <div className="text-2xl font-semibold text-white">{metric.value}</div>
              </div>
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <metric.icon className="w-5 h-5 text-blue-400" />
              </div>
            </div>
            <div className="mt-4 text-sm text-green-400">{metric.change}</div>
          </div>
        ))}
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search documentation..."
            className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-white"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg text-white"
        >
          <option value="all">All Categories</option>
          <option value="guides">Guides</option>
          <option value="api">API Reference</option>
          <option value="integration">Integration</option>
        </select>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Documents Section */}
        <div className="lg:col-span-2 space-y-4">
          {mockDocuments.map((doc) => (
            <div
              key={doc.id}
              className="group bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-blue-500/50 transition-all"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">
                  {doc.title}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-blue-400" />
              </div>
              <p className="mt-2 text-gray-400 text-sm">{doc.description}</p>
              <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{doc.lastUpdated}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>{doc.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Activity Feed */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
          <h2 className="text-lg font-medium text-white mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {mockActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg"
              >
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Edit className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-300">
                    <span className="font-medium">{activity.user}</span>
                    {' '}
                    {activity.type === 'edit' ? 'edited' : activity.type === 'create' ? 'created' : 'commented on'}
                    {' '}
                    <span className="text-blue-400">{activity.docTitle}</span>
                  </p>
                  <span className="text-xs text-gray-500">{activity.timestamp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationDashboardContent;