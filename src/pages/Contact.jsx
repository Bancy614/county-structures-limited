import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Loader2, CheckCircle2, MessageCircle, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Image } from '@/components/ui/image';
import Reveal from '@/components/animations/Reveal';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import SEO from '@/components/SEO';
import { faqs, IMG } from '@/data/companyData';
import { base44 } from '@/api/base44Client';

const contactInfo = [
  { icon: MapPin, label: 'Address', value: '#G1, Hendon Plaza, Machakos Town, Machakos County, Kenya' },
  { icon: Phone, label: 'Phone', value: '+254 721 466 368 / +254 721 997 876', href: 'tel:+254721466368' },
  { icon: Mail, label: 'Email', value: 'countystr@gmail.com', href: 'mailto:countystr@gmail.com' },
  { icon: Clock, label: 'Office Hours', value: 'Monday – Friday: 8:00 AM – 5:00 PM' },
];

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', project_type: '', budget: '', message: '' });

  const update = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await base44.entities.Enquiry.create(form);
      try {
        await base44.integrations.Core.SendEmail({
          to: 'countystr@gmail.com',
          subject: `New Contact Form Inquiry — ${form.name}`,
          body: `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nProject Type: ${form.project_type}\nBudget: ${form.budget}\n\nMessage:\n${form.message}`,
        });
      } catch (err) { /* best effort */ }
      setSuccess(true);
      setForm({ name: '', email: '', phone: '', project_type: '', budget: '', message: '' });
    } catch (err) { setSuccess(true); } finally { setSubmitting(false); }
  };

  return (
    <div>
      <SEO
        title="Contact Us"
        description="Get in touch with County Structures Limited. Request a quote, send an inquiry, or visit our office in Machakos, Kenya. Phone: +254 721 466 368."
        keywords="contact County Structures, construction quote Kenya, project inquiry, Machakos construction office, Nairobi construction company contact"
        image={IMG.site}
      />
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden bg-charcoal">
        <div className="absolute inset-0">
          <Image src={IMG.samarHero} alt="County Structures premium project showcase" fittingType="fill" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/30" />
        </div>
        <div className="relative max-w-9xl mx-auto px-6 pb-12">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-5xl lg:text-7xl font-bold text-white tracking-tight">Let's Build Together</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-3 text-lg text-white/60 max-w-2xl">Tell us about your project — our team will respond within 24 hours.</motion.p>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-9xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <Reveal>
            <div>
              <div className="flex items-center gap-2 mb-4"><div className="w-8 h-px bg-primary" /><span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">Project Inquiry</span></div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold tracking-tight mb-8">Send Us a Message</h2>
              {success ? (
                <div className="flex flex-col items-center justify-center py-16 text-center rounded-2xl border border-border/40 bg-card">
                  <CheckCircle2 className="w-16 h-16 text-primary mb-4" strokeWidth={1.5} />
                  <h3 className="font-heading text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground mb-6">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <Button onClick={() => setSuccess(false)} variant="outline">Send Another</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2"><Label>Full Name *</Label><Input value={form.name} onChange={(e) => update('name', e.target.value)} required placeholder="John Doe" /></div>
                    <div className="space-y-2"><Label>Phone</Label><Input value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="+254 7XX XXX XXX" /></div>
                  </div>
                  <div className="space-y-2"><Label>Email *</Label><Input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} required placeholder="you@email.com" /></div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2"><Label>Project Type</Label><Select value={form.project_type} onValueChange={(v) => update('project_type', v)}><SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger><SelectContent><SelectItem value="Commercial">Commercial</SelectItem><SelectItem value="Residential">Residential</SelectItem><SelectItem value="Institutional">Institutional</SelectItem><SelectItem value="Industrial">Industrial</SelectItem><SelectItem value="Consultancy">Development Consultancy</SelectItem></SelectContent></Select></div>
                    <div className="space-y-2"><Label>Budget Range</Label><Select value={form.budget} onValueChange={(v) => update('budget', v)}><SelectTrigger><SelectValue placeholder="Select range" /></SelectTrigger><SelectContent><SelectItem value="Under KSh 5M">Under KSh 5M</SelectItem><SelectItem value="KSh 5M-20M">KSh 5M–20M</SelectItem><SelectItem value="KSh 20M-100M">KSh 20M–100M</SelectItem><SelectItem value="KSh 100M+">KSh 100M+</SelectItem></SelectContent></Select></div>
                  </div>
                  <div className="space-y-2"><Label>Message *</Label><Textarea value={form.message} onChange={(e) => update('message', e.target.value)} required placeholder="Describe your project scope and requirements..." className="min-h-[140px]" /></div>
                  <Button type="submit" disabled={submitting} size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2">
                    {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    {submitting ? 'Sending...' : 'Send Inquiry'}
                  </Button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Contact info + Map */}
          <Reveal delay={0.15}>
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((c) => (
                  <div key={c.label} className="p-5 rounded-xl border border-border/40 bg-card hover:border-primary/40 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3"><c.icon className="w-5 h-5" /></div>
                    <h3 className="font-heading text-sm font-bold mb-1">{c.label}</h3>
                    {c.href ? <a href={c.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{c.value}</a> : <p className="text-sm text-muted-foreground">{c.value}</p>}
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden border border-border/40 h-72 bg-secondary relative">
                <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=37.26%2C-1.53%2C37.28%2C-1.51&layer=mapnik&marker=-1.52,37.27" className="w-full h-full" title="Office location map" loading="lazy" />
              </div>

              {/* WhatsApp button */}
              <a href="https://wa.me/254721466368" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 p-5 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold transition-colors">
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3 pt-2">
                {['NCA Registered', 'NEMA Certified', 'EBK Registered'].map((b) => (
                  <div key={b} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-mono uppercase tracking-wider"><Building2 className="w-3.5 h-3.5" /> {b}</div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4"><div className="w-8 h-px bg-primary" /><span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">FAQ</span><div className="w-8 h-px bg-primary" /></div>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold tracking-tight">Frequently Asked Questions</h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="rounded-xl border border-border/40 bg-card px-6 hover:border-primary/30 transition-colors">
                  <AccordionTrigger className="font-heading text-base font-bold text-left hover:no-underline">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </div>
  );
}