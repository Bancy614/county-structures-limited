import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, CalendarCheck, Building2, Users, LogOut, Plus, ArrowRight } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { useAuth } from '@/lib/AuthContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import StatCard from '@/components/admin/StatCard';
import AdminCharts from '@/components/admin/AdminCharts';
import RecentTable from '@/components/admin/RecentTable';
import SEO from '@/components/SEO';

export default function Admin() {
  const { user, logout } = useAuth();
  const [data, setData] = useState({ enquiries: [], appointments: [], projects: [], team: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      base44.entities.Enquiry.list('-created_date', 100),
      base44.entities.Appointment.list('-created_date', 100),
      base44.entities.Project.list(),
      base44.entities.TeamMember.list(),
    ]).then(([enquiries, appointments, projects, team]) => {
      setData({ enquiries, appointments, projects, team });
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-8 h-8 border-4 border-border border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  if (!user || user.role !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-6">
        <div className="text-center max-w-md">
          <h1 className="font-heading text-3xl font-bold mb-3">Access Denied</h1>
          <p className="text-muted-foreground mb-6">You need administrator privileges to access this dashboard.</p>
          <Link to="/"><Button>Return to Homepage</Button></Link>
        </div>
      </div>
    );
  }

  const pendingAppointments = data.appointments.filter((a) => a.status === 'Pending').length;

  const enquiryColumns = [
    { key: 'name', label: 'Name', render: (e) => e.name },
    { key: 'email', label: 'Email', render: (e) => <span className="text-muted-foreground">{e.email}</span> },
    { key: 'project_type', label: 'Type', render: (e) => e.project_type || '—' },
    { key: 'status', label: 'Status', render: (e) => <Badge variant={e.status === 'New' ? 'default' : 'secondary'}>{e.status}</Badge> },
    { key: 'created_date', label: 'Date', render: (e) => new Date(e.created_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }) },
  ];

  const appointmentColumns = [
    { key: 'name', label: 'Name', render: (a) => a.name },
    { key: 'service_type', label: 'Service', render: (a) => a.service_type || '—' },
    { key: 'preferred_date', label: 'Date', render: (a) => a.preferred_date ? new Date(a.preferred_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }) : '—' },
    { key: 'preferred_time', label: 'Time', render: (a) => a.preferred_time || '—' },
    { key: 'status', label: 'Status', render: (a) => <Badge variant={a.status === 'Pending' ? 'default' : 'secondary'}>{a.status}</Badge> },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Admin Dashboard" />
      {/* Admin header */}
      <header className="border-b border-border/40 bg-card sticky top-0 z-30 backdrop-blur-xl bg-card/95">
        <div className="max-w-9xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="font-heading text-xl font-bold">Admin Dashboard</h1>
            <p className="text-xs text-muted-foreground">{user.email} · {user.role}</p>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/"><Button variant="outline" size="sm">View Site</Button></Link>
            <Button onClick={() => logout()} variant="outline" size="sm" className="gap-2"><LogOut className="w-4 h-4" /> Logout</Button>
          </div>
        </div>
      </header>

      <div className="max-w-9xl mx-auto px-6 py-8 space-y-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard icon={Mail} label="Total Enquiries" value={data.enquiries.length} />
          <StatCard icon={CalendarCheck} label="Pending Appointments" value={pendingAppointments} color="bg-orange-500" />
          <StatCard icon={Building2} label="Projects" value={data.projects.length} color="bg-green-600" />
          <StatCard icon={Users} label="Team Members" value={data.team.length} color="bg-purple-600" />
        </div>

        {/* Charts */}
        <AdminCharts enquiries={data.enquiries} projects={data.projects} appointments={data.appointments} />

        {/* Tables */}
        <div className="grid lg:grid-cols-2 gap-6">
          <RecentTable title="Recent Enquiries" items={data.enquiries.slice(0, 5)} columns={enquiryColumns} />
          <RecentTable title="Recent Appointments" items={data.appointments.slice(0, 5)} columns={appointmentColumns} />
        </div>

        {/* Quick actions */}
        <div className="flex flex-wrap gap-3 pt-4">
          <Link to="/book-appointment"><Button className="gap-2"><Plus className="w-4 h-4" /> New Appointment</Button></Link>
          <Link to="/contact"><Button variant="outline" className="gap-2">View Contact Page <ArrowRight className="w-4 h-4" /></Button></Link>
        </div>
      </div>
    </div>
  );
}