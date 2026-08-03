import React from 'react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { ShieldCheck, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Reveal from '@/components/animations/Reveal';
import { IMG } from '@/data/companyData';

const targets = [
  'Providing safe and healthy working conditions for the prevention of work-related injury and ill health.',
  'Provide a framework for setting our OH&S objectives;',
  'Fulfilling our social, financial and legal obligations;',
  'Eliminating hazards and reducing OH&S risks;',
  'Protecting the environment;',
  'Continual improvement of the Safety Management System;',
  'Consulting and participating with Workers, and, where they exist, Workers\u2019 Representatives on OH&S issues.',
];

const considerations = [
  'Broader business objectives: aligning contractual and transactional policies with OH&S',
  'Opportunities for improving the Health and Safety of Workers.',
];

const specifics = [
  'All supervisors must conduct safety training, including demonstration, to all employees under their control.',
  'Maintain a company safety training plan for all employees and supervisors, that include safe work procedures and responsibilities.',
  'Develop and implement an executive level safety and health education plan.',
];

export default function OHSPolicy() {
  return (
    <div>
      <SEO
        title="OH&S Policy"
        description="County Structures Limited — Occupational Health & Safety Policy. Our commitment to providing safe and healthy working conditions, eliminating hazards, and continual improvement of our Safety Management System."
        keywords="OH&S Policy, Occupational Health and Safety, safety management system, County Structures safety policy"
      />

      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-end overflow-hidden bg-charcoal">
        <div className="absolute inset-0">
          <Image src={IMG.samarHero} alt="County Structures construction site" fittingType="fill" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/30" />
        </div>
        <div className="relative max-w-9xl mx-auto px-6 pb-12">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl lg:text-6xl font-bold text-white tracking-tight">OH&S Policy</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-3 text-lg text-white/60 max-w-2xl">Occupational Health & Safety — County Structures Limited</motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <Link to="/about" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" /> Back to About
            </Link>

            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck className="w-6 h-6 text-primary" />
              <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">Safety Policy</span>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              This OH&S Policy shall be consistent with the purpose and context of our Organisation. It provides a framework for the setting and review of objectives in addition to our commitment to satisfy applicable prevailing laws and other requirements as well as our commitment to continually improve our Safety Management System.
            </p>

            <h2 className="font-heading text-2xl font-bold mb-4 flex items-center gap-3"><span className="w-8 h-px bg-primary" /> Our Target</h2>
            <ul className="space-y-3 mb-10 pl-4">
              {targets.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground"><ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>{item}</span></li>
              ))}
            </ul>

            <h2 className="font-heading text-2xl font-bold mb-4 flex items-center gap-3"><span className="w-8 h-px bg-primary" /> The Policy Also Takes Account Of</h2>
            <ul className="space-y-3 mb-10 pl-4">
              {considerations.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground"><ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>{item}</span></li>
              ))}
            </ul>

            <h2 className="font-heading text-2xl font-bold mb-4 flex items-center gap-3"><span className="w-8 h-px bg-primary" /> Specifics</h2>
            <ul className="space-y-3 mb-10 pl-4">
              {specifics.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground"><ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span>{item}</span></li>
              ))}
            </ul>

            <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20 mt-10">
              <p className="text-muted-foreground leading-relaxed">
                The OH&S Policy will be reviewed periodically to ensure that it remains relevant and appropriate to the Organisation. This Policy is communicated to all interested parties as well as being made available to the wider community through publication on our Website, Company Notice board.
              </p>
            </div>

            <div className="mt-12 text-center">
              <Link to="/about" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:scale-105 transition-all">
                Back to About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}