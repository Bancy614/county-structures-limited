import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass, Leaf, ClipboardCheck, Ruler, Calculator, FileText, HardHat, ShieldCheck } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import { Image } from '@/components/ui/image';

const CTA_IMG = 'https://media.base44.com/images/public/6a63f94e8a295d2bd7187207/19bf1f8a6_generated_16dbb96d.png';

const consultancy = [
  { icon: Compass, title: 'Feasibility Studies', desc: 'Comprehensive viability analysis for development projects of any scale.' },
  { icon: Leaf, title: 'Environmental Impact Assessment', desc: 'NEMA-registered ESIA, monitoring, and environmental audits.' },
  { icon: ClipboardCheck, title: 'Project Planning & Management', desc: 'End-to-end project lifecycle management and supervision.' },
  { icon: Ruler, title: 'Structural & Architectural Design', desc: 'Reinforced concrete and steel structures to British design codes.' },
  { icon: Calculator, title: 'Cost Estimation & Budgeting', desc: 'Accurate cost planning and contract administration.' },
  { icon: FileText, title: 'Contract Administration', desc: 'FIDIC and World Bank contract specifications expertise.' },
];

const construction = [
  { icon: Ruler, title: 'Architectural & Structural Design', desc: 'Complete design services from concept to detailed drawings.' },
  { icon: HardHat, title: 'Construction Contracting & Implementation', desc: 'Full builds from ground up to handover — on time, on budget.' },
  { icon: ClipboardCheck, title: 'Construction Supervision', desc: 'Expert on-site supervision ensuring quality and compliance.' },
  { icon: ShieldCheck, title: 'Quality Control & Assurance', desc: 'Rigorous quality standards at every construction phase.' },
  { icon: ShieldCheck, title: 'Safety & Health Management', desc: 'OH&S compliant safety culture across all sites.' },
];

export default function Services() {
  return (
    <div>
      {/* Hero banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden bg-charcoal">
        <div className="absolute inset-0">
          <Image src={CTA_IMG} alt="Construction site" fittingType="fill" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/30" />
        </div>
        <div className="relative max-w-9xl mx-auto px-6 pb-12">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-5xl lg:text-7xl font-bold text-white tracking-tight">Our Services</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-3 text-lg text-white/60 max-w-2xl">Complete development consultancy and construction solutions — from feasibility to handover.</motion.p>
        </div>
      </section>

      {/* Development Consultancy */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-9xl mx-auto px-6">
          <Reveal>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-primary" />
              <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">Development Consultancy</span>
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold tracking-tight mb-12">Expert Advisory Services</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {consultancy.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="group p-7 rounded-xl border border-border/40 bg-card hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <s.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Services */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="max-w-9xl mx-auto px-6">
          <Reveal>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-primary" />
              <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">Construction Services</span>
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold tracking-tight mb-12">Building & Implementation</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {construction.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="group p-7 rounded-xl border border-border/40 bg-card hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <s.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-4">Need a Specific Service?</h2>
          <p className="text-white/60 mb-8">Contact our team directly for a tailored consultation on your project requirements.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:scale-105 transition-all">
            Get In Touch <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </section>
    </div>
  );
}