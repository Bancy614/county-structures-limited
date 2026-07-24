import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass, Ruler, HardHat, ClipboardCheck, ShieldCheck, Leaf, Calculator, FileText, ArrowRight } from 'lucide-react';
import Reveal, { RevealStagger, RevealItem } from '@/components/animations/Reveal';

const services = [
  { icon: Compass, title: 'Feasibility Studies', desc: 'Comprehensive viability analysis for development projects.', category: 'Consultancy' },
  { icon: Leaf, title: 'Environmental Impact Assessment', desc: 'NEMA-registered ESIA, monitoring, and environmental audits.', category: 'Consultancy' },
  { icon: ClipboardCheck, title: 'Project Planning & Management', desc: 'End-to-end project lifecycle management and supervision.', category: 'Consultancy' },
  { icon: Ruler, title: 'Structural & Architectural Design', desc: 'Reinforced concrete and steel structures to British design codes.', category: 'Consultancy' },
  { icon: Calculator, title: 'Cost Estimation & Budgeting', desc: 'Accurate cost planning and contract administration.', category: 'Consultancy' },
  { icon: FileText, title: 'Contract Administration', desc: 'FIDIC and World Bank contract specifications expertise.', category: 'Consultancy' },
  { icon: HardHat, title: 'Construction Contracting', desc: 'Full implementation of builds — ground up to handover.', category: 'Construction' },
  { icon: ShieldCheck, title: 'Quality & Safety Management', desc: 'OH&S compliant safety culture on every site.', category: 'Construction' },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-9xl mx-auto px-6">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-px bg-primary" />
                <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">What We Do</span>
              </div>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold tracking-tight max-w-2xl">
                From Consultancy to Construction.<br />
                <span className="text-muted-foreground">Complete Building Solutions.</span>
              </h2>
            </div>
            <Link to="/services" className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors shrink-0">
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <RevealItem key={s.title}>
              <Link to="/services" className="group block h-full">
                <div className="relative h-full p-6 rounded-xl border border-border/40 bg-card hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  {/* Category badge */}
                  <span className="absolute top-6 right-6 text-[10px] font-mono uppercase tracking-wider text-muted-foreground/50">{s.category}</span>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all">
                    <s.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2 leading-tight">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}