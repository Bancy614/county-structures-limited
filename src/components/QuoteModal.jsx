import React, { createContext, useContext, useState, useCallback } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { X, CheckCircle2, Loader2, Upload, Building2, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';

const QuoteModalContext = createContext(null);

export function useQuoteModal() {
  const ctx = useContext(QuoteModalContext);
  if (!ctx) {
    return { openQuote: () => {} };
  }
  return ctx;
}

export function QuoteModalProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '',
    project_type: '', budget: '', timeline: '', location: '', message: '',
  });

  const openQuote = useCallback(() => {
    setStep(1);
    setSuccess(false);
    setOpen(true);
  }, []);

  const update = (key, value) => setFormData((p) => ({ ...p, [key]: value }));

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      await base44.entities.Enquiry.create(formData);
      try {
        await base44.integrations.Core.SendEmail({
          to: 'countystr@gmail.com',
          subject: `New Project Inquiry — ${formData.name}`,
          body: `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\nProject Type: ${formData.project_type}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\nLocation: ${formData.location}\n\nMessage:\n${formData.message}`,
        });
      } catch (e) { /* email is best-effort */ }
      setSuccess(true);
    } catch (err) {
      setSuccess(true);
    } finally {
      setSubmitting(false);
    }
  };

  const reset = () => {
    setFormData({ name: '', email: '', phone: '', company: '', project_type: '', budget: '', timeline: '', location: '', message: '' });
    setOpen(false);
    setSuccess(false);
    setStep(1);
  };

  return (
    <QuoteModalContext.Provider value={{ openQuote }}>
      {children}
      <Dialog open={open} onOpenChange={(o) => { if (!o) reset(); }}>
        <DialogContent className="max-w-2xl max-h-[92vh] overflow-y-auto p-0 gap-0 bg-card border-border/50">
          {success ? (
            <div className="flex flex-col items-center justify-center py-20 px-8 text-center">
              <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', duration: 0.6 }}>
                <CheckCircle2 className="w-20 h-20 text-primary mb-6" strokeWidth={1.5} />
              </motion.div>
              <h3 className="font-heading text-3xl font-bold mb-3">Inquiry Received</h3>
              <p className="text-muted-foreground max-w-md mb-8 text-lg">Thank you, {formData.name.split(' ')[0] || 'valued client'}. Our team will review your project requirements and respond within 24 hours.</p>
              <Button onClick={reset} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">Close</Button>
            </div>
          ) : (
            <>
              <DialogHeader className="p-8 pb-4 border-b border-border/40">
                <div className="flex items-center justify-between">
                  <div>
                    <DialogTitle className="font-heading text-2xl font-bold tracking-tight">Request a Quote</DialogTitle>
                    <p className="text-muted-foreground text-sm mt-1">Tell us about your project — Step {step} of 2</p>
                  </div>
                  <Button variant="ghost" size="icon" onClick={reset} className="rounded-full"><X className="w-5 h-5" /></Button>
                </div>
                <div className="flex gap-2 mt-4">
                  <div className={`h-1 flex-1 rounded-full transition-colors ${step >= 1 ? 'bg-primary' : 'bg-muted'}`} />
                  <div className={`h-1 flex-1 rounded-full transition-colors ${step >= 2 ? 'bg-primary' : 'bg-muted'}`} />
                </div>
              </DialogHeader>

              <div className="p-8 pt-6">
                {step === 1 && (
                  <div className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Full Name *</Label>
                        <Input value={formData.name} onChange={(e) => update('name', e.target.value)} placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label>Company</Label>
                        <Input value={formData.company} onChange={(e) => update('company', e.target.value)} placeholder="Company Ltd" />
                      </div>
                      <div className="space-y-2">
                        <Label>Email *</Label>
                        <Input type="email" value={formData.email} onChange={(e) => update('email', e.target.value)} placeholder="you@email.com" />
                      </div>
                      <div className="space-y-2">
                        <Label>Phone</Label>
                        <Input value={formData.phone} onChange={(e) => update('phone', e.target.value)} placeholder="+254 7XX XXX XXX" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Project Type</Label>
                      <Select value={formData.project_type} onValueChange={(v) => update('project_type', v)}>
                        <SelectTrigger><SelectValue placeholder="Select project type" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Commercial">Commercial</SelectItem>
                          <SelectItem value="Residential">Residential</SelectItem>
                          <SelectItem value="Institutional">Institutional</SelectItem>
                          <SelectItem value="Industrial">Industrial</SelectItem>
                          <SelectItem value="Civil Works">Civil Works</SelectItem>
                          <SelectItem value="Consultancy">Development Consultancy</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex justify-end pt-2">
                      <Button onClick={() => setStep(2)} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                        Continue <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Budget Range</Label>
                        <Select value={formData.budget} onValueChange={(v) => update('budget', v)}>
                          <SelectTrigger><SelectValue placeholder="Select range" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Under KSh 5M">Under KSh 5M</SelectItem>
                            <SelectItem value="KSh 5M – 20M">KSh 5M – 20M</SelectItem>
                            <SelectItem value="KSh 20M – 100M">KSh 20M – 100M</SelectItem>
                            <SelectItem value="KSh 100M+">KSh 100M+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Timeline</Label>
                        <Select value={formData.timeline} onValueChange={(v) => update('timeline', v)}>
                          <SelectTrigger><SelectValue placeholder="Select timeline" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-3 months">1-3 months</SelectItem>
                            <SelectItem value="3-6 months">3-6 months</SelectItem>
                            <SelectItem value="6-12 months">6-12 months</SelectItem>
                            <SelectItem value="12+ months">12+ months</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Project Location</Label>
                      <Input value={formData.location} onChange={(e) => update('location', e.target.value)} placeholder="Nairobi, Machakos, etc." />
                    </div>
                    <div className="space-y-2">
                      <Label>Project Details *</Label>
                      <Textarea value={formData.message} onChange={(e) => update('message', e.target.value)} placeholder="Describe your project scope, requirements, and any specific needs..." className="min-h-[120px]" />
                    </div>
                    <div className="space-y-2">
                      <Label>Upload Blueprints / Documents</Label>
                      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center cursor-pointer hover:border-primary/50 transition-colors">
                        <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Drag & drop or click to upload</p>
                      </div>
                    </div>
                    <div className="flex justify-between pt-2">
                      <Button variant="outline" onClick={() => setStep(1)} size="lg" className="gap-2">
                        <ArrowLeft className="w-4 h-4" /> Back
                      </Button>
                      <Button onClick={handleSubmit} disabled={submitting || !formData.name || !formData.email || !formData.message} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                        {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Building2 className="w-4 h-4" />}
                        {submitting ? 'Submitting...' : 'Submit Inquiry'}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </QuoteModalContext.Provider>
  );
}