import React from 'react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import Reveal from '@/components/animations/Reveal';

const BANNER_IMG = 'https://media.base44.com/images/public/6a63f94e8a295d2bd7187207/db98037dc_generated_5dfc5510.png';

const values = [
  { title: 'Excellence', desc: 'Delivering beyond expectations on every project, from concept to handover.' },
  { title: 'Integrity', desc: 'Transparent processes, honest communication, and ethical practices.' },
  { title: 'Innovation', desc: 'BIM, modern engineering methods, and sustainable solutions.' },
  { title: 'Safety First', desc: 'Zero-compromise OH&S culture across all sites and operations.' },
];

export default function CoreValues() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image src={BANNER_IMG} alt="Architectural blueprint background" fittingType="fill" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/90" />
      </div>
      <div className="absolute inset-0 structural-grid-dark opacity-30" />

      <div className="relative max-w-9xl mx-auto px-6">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-px bg-primary" />
              <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">Our Foundation</span>
              <div className="w-8 h-px bg-primary" />
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Core Values That Build<br /><span className="text-gradient-gold">Lasting Structures</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1}>
              <div className="relative group h-full">
                <div className="absolute inset-0 glass rounded-xl" />
                <div className="relative p-8 rounded-xl h-full flex flex-col">
                  <div className="font-mono text-5xl font-bold text-gold/30 mb-4">0{i + 1}</div>
                  <h3 className="font-heading text-xl font-bold text-white mb-3">{v.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{v.desc}</p>
                  <div className="mt-6 h-px w-0 bg-primary group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}