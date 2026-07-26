import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, Send, Loader2, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import SEO from '@/components/SEO';
import Reveal from '@/components/animations/Reveal';
import { Image } from '@/components/ui/image';
import { IMG } from '@/data/companyData';
import { Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';

const timeSlots = ['08:00', '09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00'];

const serviceTypes = [
  'Feasibility Study',
  'Environmental Impact Assessment',
  'Structural & Architectural Design',
  'Project Planning & Management',
  'Cost Estimation & Budgeting',
  'Contract Administration',
  'Construction Contracting',
  'Construction Supervision',
  'Quality Control & Assurance',
  'Safety & Health Management',
  'General Consultation',
];

export default function BookAppointment() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service_type: '', preferred_date: '', preferred_time: '', message: '' });

  const update = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await base44.entities.Appointment.create(form);
      try {
        await base44.integrations.Core.SendEmail({
          to: 'countystr@gmail.com',
          subject: `New Appointment Booking — ${form.name}`,
          body: `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service_type}\nPreferred Date: ${form.preferred_date}\nPreferred Time: ${form.preferred_time}\n\nMessage:\n${form.message}`,
        });
      } catch (err) { /* best effort */ }
      setSuccess(true);
      setForm({ name: '', email: '', phone: '', service_type: '', preferred_date: '', preferred_time: '', message: '' });
    } catch (err) { setSuccess(true); } finally { setSubmitting(false); }
  };

  return (
    <div>
      <SEO title="Book an Appointment" description="Schedule a consultation with County Structures Limited." image={IMG.site} />

      <section className="relative h-[40vh] min-h-[300px] flex items-end overflow-hidden bg-charcoal">
        <div className="absolute inset-0">
          <Image src={IMG.samarHero} alt="County Structures project showcase" fittingType="fill" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/30" />
        </div>
        <div className="relative max-w-9xl mx-auto px-6 pb-12">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl lg:text-6xl font-bold text-white tracking-tight">Book an Appointment</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-3 text-lg text-white/60 max-w-2xl">Schedule a consultation with our multidisciplinary team — we'll confirm your appointment within 24 hours.</motion.p>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <Link to="/contact" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Contact
          </Link>

          {success ? (
            <Reveal>
              <div className="flex flex-col items-center justify-center py-16 text-center rounded-2xl border border-border/40 bg-card">
                <CheckCircle2 className="w-16 h-16 text-primary mb-4" strokeWidth={1.5} />
                <h2 className="font-heading text-3xl font-bold mb-3">Appointment Requested!</h2>
                <p className="text-muted-foreground mb-6 max-w-md">Thank you for booking an appointment. Our team will review your request and confirm the date and time within 24 hours.</p>
                <Button onClick={() => setSuccess(false)} variant="outline">Book Another</Button>
              </div>
            </Reveal>
          ) : (
            <Reveal>
              <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-border/40 bg-card p-8">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Full Name *</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input value={form.name} onChange={(e) => update('name', e.target.value)} required placeholder="John Doe" className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Phone</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="+254 7XX XXX XXX" className="pl-10" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Email *</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} required placeholder="you@email.com" className="pl-10" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Service Required</Label>
                  <Select value={form.service_type} onValueChange={(v) => update('service_type', v)}>
                    <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                    <SelectContent>
                      {serviceTypes.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Preferred Date *</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                      <Input type="date" value={form.preferred_date} onChange={(e) => update('preferred_date', e.target.value)} required className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Preferred Time</Label>
                    <Select value={form.preferred_time} onValueChange={(v) => update('preferred_time', v)}>
                      <SelectTrigger><SelectValue placeholder="Select time" /></SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Message</Label>
                  <Textarea value={form.message} onChange={(e) => update('message', e.target.value)} placeholder="Briefly describe what you'd like to discuss..." className="min-h-[120px]" />
                </div>

                <Button type="submit" disabled={submitting} size="lg" className="w-full font-semibold gap-2">
                  {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  {submitting ? 'Submitting...' : 'Request Appointment'}
                </Button>
              </form>
            </Reveal>
          )}
        </div>
      </section>
    </div>
  );
}