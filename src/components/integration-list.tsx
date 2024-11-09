// src/components/integration-list.tsx
"use client";

import React from 'react';
import { 
  Search, 
  BookOpen, 
  MessageSquare, 
  Users, 
  Link, 
  ArrowUpRight, 
  Settings, 
  CheckCircle, 
  AlertCircle, 
  Clock 
} from 'lucide-react';
import { Integration } from '@/types/integration';

interface IntegrationListProps {
  integrations: Integration[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  partnerFilter: string;
  setPartnerFilter: (partner: string) => void;
}

export default function IntegrationList({
  integrations,
  searchTerm,
  setSearchTerm,
  partnerFilter,
  setPartnerFilter
}: IntegrationListProps) {
  const getProgressBarColor = (progress: number) => {
    if (progress >= 75) return 'bg-green-500';
    if (progress >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="bg-gray-950 rounded-lg border border-gray-800">
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search integrations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-800 text-gray-300 rounded-lg 
                focus:ring-green-500 focus:border-green-500 placeholder-gray-500"
            />
          </div>
          <select 
            className="bg-gray-900 border border-gray-800 text-gray-300 rounded-lg px-4 py-2"
            value={partnerFilter}
            onChange={(e) => setPartnerFilter(e.target.value)}
          >
            <option value="all">All Partners</option>
            {Array.from(new Set(integrations.map(i => i.partner))).map(partner => (
              <option key={partner} value={partner}>{partner}</option>
            ))}
          </select>
        </div>

        {/* Integration Cards */}
        <div className="space-y-4">
          {integrations.map(integration => (
            <div 
              key={integration.id} 
              className="border border-gray-800 rounded-lg p-4 hover:bg-gray-900 transition-colors bg-gray-950"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold text-lg text-white">{integration.name}</h3>
                  {integration.status === 'active' ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-yellow-500" />
                  )}
                </div>
                <span className="text-sm text-gray-400">Last active: {integration.lastActivity}</span>
              </div>
              
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-400 mb-1">
                  <span>Integration Progress</span>
                  <span>{integration.integrationProgress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`${getProgressBarColor(integration.integrationProgress)} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${integration.integrationProgress}%` }}
                  />
                </div>
              </div>

              {/* Integration Details */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="flex items-center space-x-1 text-sm text-gray-400">
                  <BookOpen className="h-4 w-4" />
                  <span>{integration.docs} docs</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-gray-400">
                  <MessageSquare className="h-4 w-4" />
                  <span>{integration.threads} threads</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-gray-400">
                  <Users className="h-4 w-4" />
                  <span>{integration.teamSize} team members</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-gray-400">
                  <Link className="h-4 w-4" />
                  <span>{integration.endpoints} endpoints</span>
                </div>
              </div>

              {/* Environment Badge */}
              <div className="mb-4">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  integration.environment === 'production' ? 'bg-green-900 text-green-100' :
                  integration.environment === 'staging' ? 'bg-yellow-900 text-yellow-100' :
                  'bg-gray-700 text-gray-100'
                }`}>
                  {integration.environment}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <button className="flex items-center px-3 py-1.5 bg-green-900 text-green-100 rounded hover:bg-green-800 transition-colors text-sm font-medium">
                  <BookOpen className="h-4 w-4 mr-1" />
                  View Docs
                  <ArrowUpRight className="h-4 w-4 ml-1" />
                </button>
                <button className="flex items-center px-3 py-1.5 bg-gray-700 text-gray-100 rounded hover:bg-gray-600 transition-colors text-sm font-medium">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  Message Team
                </button>
                <button className="flex items-center px-3 py-1.5 bg-gray-700 text-gray-100 rounded hover:bg-gray-600 transition-colors text-sm font-medium">
                  <Settings className="h-4 w-4 mr-1" />
                  Integration Status
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}