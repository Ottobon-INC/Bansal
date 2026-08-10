import React from 'react';
import { FocusAnalyticsModule } from '../components/FocusAnalyticsModule';
import { Helmet } from 'react-helmet-async';

const StudentDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Student Dashboard | Bansal Junior College</title>
        <meta name="description" content="View your focus analytics and study progress." />
      </Helmet>

      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-black text-gray-800 tracking-tight mb-2">Welcome back, Student!</h1>
          <p className="text-gray-600">Here's your study analytics and focus report.</p>
        </div>

        <FocusAnalyticsModule />
      </div>
    </div>
  );
};

export default StudentDashboard;
