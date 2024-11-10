import type { FC } from 'react';

// Simple placeholder component for views that aren't fully implemented yet
const PlaceholderView: FC<{ title: string }> = ({ title }) => (
  <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
    <h2 className="text-xl font-semibold text-white">{title}</h2>
    <p className="text-gray-400 mt-2">This section is under development.</p>
  </div>
);

export const DashboardView: FC = () => (
  <div className="space-y-6">
    {/* Your dashboard content */}
    <PlaceholderView title="Dashboard" />
  </div>
);

export const DocumentationView: FC = () => (
  <PlaceholderView title="Documentation" />
);

export const DiscussionsView: FC = () => (
  <PlaceholderView title="Discussions" />
);

export const EnvironmentsView: FC = () => (
  <PlaceholderView title="Environments" />
);

export const ContractView: FC = () => (
  <PlaceholderView title="Contract" />
);

export const SecurityView: FC = () => (
  <PlaceholderView title="Security" />
);

export const MonitoringView: FC = () => (
  <PlaceholderView title="Monitoring" />
);

export const AuditView: FC = () => (
  <PlaceholderView title="Audit" />
);

export const SettingsView: FC = () => (
  <PlaceholderView title="Settings" />
);

export const SupportView: FC = () => (
  <PlaceholderView title="Support" />
);