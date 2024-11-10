import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, BookOpen, Users, ArrowUpRight, LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, icon: Icon }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300, damping: 30 }}
    className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-gray-700 
               transition-all duration-200 hover:shadow-lg hover:shadow-green-900/10"
  >
    <div className="flex justify-between items-start">
      <div className="space-y-2">
        <span className="text-sm text-gray-400">{title}</span>
        <div className="text-2xl font-semibold text-white">{value}</div>
      </div>
      <div className="p-2 rounded-lg bg-green-900/20">
        <Icon className="w-5 h-5 text-green-400" />
      </div>
    </div>
    <div className="flex items-center mt-4">
      <ArrowUpRight className="w-4 h-4 text-green-400 mr-1" />
      <span className="text-sm text-green-400">{change}</span>
      <span className="text-sm text-gray-500 ml-1">vs last week</span>
    </div>
  </motion.div>
);

const DashboardMetrics: React.FC = () => {
  const metrics = [
    {
      title: 'Active Discussions',
      value: '12',
      change: '+3',
      icon: MessageSquare
    },
    {
      title: 'Documentation Updates',
      value: '8',
      change: '+2',
      icon: BookOpen
    },
    {
      title: 'Active Contributors',
      value: '24',
      change: '+5',
      icon: Users
    },
    {
      title: 'Open Threads',
      value: '15',
      change: '+4',
      icon: MessageSquare
    }
  ] as const;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {metrics.map((metric, i) => (
        <MetricCard key={i} {...metric} />
      ))}
    </div>
  );
};

export default DashboardMetrics;