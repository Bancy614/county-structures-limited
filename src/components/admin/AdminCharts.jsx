import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';

const CHART_COLORS = ['#3b51e5', '#de1c59', '#ebb02e', '#ff6a00', '#10b981', '#8b5cf6'];

export default function AdminCharts({ enquiries, projects, appointments }) {
  const enquiriesByStatus = Object.entries(
    enquiries.reduce((acc, e) => { acc[e.status || 'New'] = (acc[e.status || 'New'] || 0) + 1; return acc; }, {})
  ).map(([name, value]) => ({ name, value }));

  const projectsByCategory = Object.entries(
    projects.reduce((acc, p) => { acc[p.category] = (acc[p.category] || 0) + 1; return acc; }, {})
  ).map(([name, count]) => ({ name, count }));

  const monthlyData = Object.entries(
    enquiries.reduce((acc, e) => {
      const d = new Date(e.created_date);
      const key = d.toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {})
  ).map(([month, count]) => ({ month, count })).slice(-6);

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="p-6 rounded-2xl border border-border/40 bg-card">
        <h3 className="font-heading text-lg font-bold mb-4">Enquiries by Status</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={enquiriesByStatus} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
              {enquiriesByStatus.map((_, i) => <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />)}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="p-6 rounded-2xl border border-border/40 bg-card">
        <h3 className="font-heading text-lg font-bold mb-4">Projects by Category</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={projectsByCategory}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-20" />
            <XAxis dataKey="name" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip />
            <Bar dataKey="count" fill="#3b51e5" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="p-6 rounded-2xl border border-border/40 bg-card lg:col-span-2">
        <h3 className="font-heading text-lg font-bold mb-4">Enquiries Trend (Last 6 Months)</h3>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={monthlyData}>
            <defs>
              <linearGradient id="enquiryGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b51e5" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#3b51e5" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" className="opacity-20" />
            <XAxis dataKey="month" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip />
            <Area type="monotone" dataKey="count" stroke="#3b51e5" strokeWidth={2} fill="url(#enquiryGradient)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}