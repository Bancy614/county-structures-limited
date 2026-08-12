import React from 'react';
import { motion } from 'framer-motion';
import { MessagesSquare, PencilRuler, HardHat, KeyRound } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';

const steps = [
  {
    icon: MessagesSquare,
    title: 'Consultation & Concept',
    desc: 'We discuss your goals, budget constraints, and project timelines to establish a viable roadmap.',
    phase: 'Phase 01',
  },
  {
    icon: PencilRuler,
    title: 'Design & Pre-Construction',
    desc: 'Our team handles all architectural drafting, material sourcing, and local regulatory permitting.',
    phase: 'Phase 02',
  },
  {
    icon: HardHat,
    title: 'Execution & Management',
    desc: 'On-site construction begins, managed by our lead project managers to ensure quality and safety.',
    phase: 'Phase 03',
  },
  {
    icon: KeyRound,
    title: 'Handover & Walkthrough',
    desc: 'A comprehensive final inspection guarantees the completed project meets our strict quality standards.',
    phase: 'Phase 04',
  },
];

export default function BuildProcess() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-9xl mx-auto px-6">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-px bg-primary" />
              <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">Our Build Process</span>
              <div className="w-8 h-px bg-primary" />
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold tracking-tight">
              Transparency From<br /><span className="text-gradient-gold">The Ground Up</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">We believe in clarity at every phase — from the first conversation to the final handover.</p>
          </div>
        </Reveal>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal connecting line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-border">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="h-full bg-primary origin-left"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.15}>
                <div className="relative text-center lg:text-left">
                  {/* Icon node */}
                  <div className="relative inline-flex lg:flex">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground border-2 border-primary/30 flex items-center justify-center shadow-lg relative z-10 mx-auto lg:mx-0 transition-colors">
                      <s.icon className="w-7 h-7 text-primary-foreground" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="mt-6">
                    <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">{s.phase}</span>
                    <h3 className="font-heading text-xl font-bold mt-1 mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}