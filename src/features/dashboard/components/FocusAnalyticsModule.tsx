import React from 'react';
import { useFocusAnalytics } from '../../../hooks/useFocusAnalytics';
import { Activity, AlertTriangle, Clock, Trophy, Loader2 } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';

export const FocusAnalyticsModule: React.FC = () => {
  const { data, isLoading, error } = useFocusAnalytics();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-white rounded-2xl shadow-sm border border-gray-200 min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600 mb-4" />
        <p className="text-gray-600 font-medium">Loading focus analytics...</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-white rounded-2xl shadow-sm border border-red-100 min-h-[400px]">
        <AlertTriangle className="w-8 h-8 text-red-500 mb-4" />
        <p className="text-red-500 font-medium">Failed to load analytics data.</p>
      </div>
    );
  }

  const formatTime = (minutes: number) => {
    if (minutes < 60) return `${minutes}m`;
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return m > 0 ? `${h}h ${m}m` : `${h}h`;
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 50) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Focus Analytics</h2>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex items-start space-x-4">
          <div className="p-3 bg-gray-50 text-blue-600 rounded-xl">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">Focus Score</p>
            <div className="flex items-baseline space-x-2">
              <h3 className={`text-3xl font-black ${getScoreColor(data.focusScore)}`}>
                {data.focusScore}
              </h3>
              <span className="text-sm text-gray-400 font-medium">/ 100</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex items-start space-x-4">
          <div className="p-3 bg-red-50 text-red-600 rounded-xl">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">Total Distractions</p>
            <h3 className="text-3xl font-black text-gray-800">{data.totalDistractions}</h3>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex items-start space-x-4">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">Avg Focus Time</p>
            <h3 className="text-3xl font-black text-gray-800">{formatTime(data.averageFocusTime)}</h3>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex items-start space-x-4">
          <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">Longest Session</p>
            <h3 className="text-3xl font-black text-gray-800">{formatTime(data.longestSession)}</h3>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Daily Distractions (Last 7 Days)</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.dailyDistractions} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#6B7280', fontSize: 12 }} 
                  dy={10} 
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#6B7280', fontSize: 12 }} 
                  allowDecimals={false} 
                />
                <Tooltip 
                  cursor={{ fill: '#F3F4F6' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} 
                />
                <Bar 
                  dataKey="count" 
                  name="Distractions" 
                  fill="#EF4444" 
                  radius={[4, 4, 0, 0]} 
                  maxBarSize={40} 
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Weekly Distractions Trend</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.weeklyDistractions} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#6B7280', fontSize: 12 }} 
                  dy={10} 
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#6B7280', fontSize: 12 }} 
                  allowDecimals={false} 
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="count" 
                  name="Distractions" 
                  stroke="#3B82F6" 
                  strokeWidth={3}
                  dot={{ r: 4, strokeWidth: 2, fill: '#fff' }}
                  activeDot={{ r: 6, fill: '#3B82F6' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
