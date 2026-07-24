import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Building2, Leaf, Award } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Reveal from '@/components/animations/Reveal';

const OVERVIEW_IMG = 'https://media.base44.com/images/public/6a63f94e8a295d2bd7187207/db98037dc_generated_5dfc5510.png';

const pillars = [
  { icon: ShieldCheck, title: 'NCA Registered', desc: 'Registered contractor with the National Construction Authority of Kenya' },
  { icon: Building2, title: 'Multidisciplinary', desc: 'Architects, engineers, and accountants under one roof' },
  { icon: Leaf, title: 'Environmental Experts', desc: 'NEMA-registered environmental impact assessment specialists' },
  { icon: Award, title: '14+ Years', desc: 'Delivering exceptional solutions across Kenya since 2011' },
];

export default function CompanyOverview() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="max-w-9xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <Reveal>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                <Image src={OVERVIEW_IMG} alt="Architectural blueprints on a mahogany table with surveyor tools" fittingType="fill" className="w-full h-full object-cover" />
              </div>
              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 lg:-right-10 bg-card border border-border/40 rounded-xl p-5 shadow-xl"
              >
                <div className="font-heading text-4xl font-bold text-primary">2011</div>
                <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mt-1">Established</div>
                <div className="text-xs font-mono text-muted-foreground">Incorporated 2015</div>
              </motion.div>
            </div>
          </Reveal>

          {/* Content side */}
          <div>
            <Reveal>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-px bg-primary" />
                <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">Company Overview</span>
              </div>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Engineering Excellence.<br />
                <span className="text-muted-foreground">Architectural Vision.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                County Structures Limited is a premier development consultancy and construction services firm with a rich history dating back to 2011. Officially incorporated in 2015, our company has built a strong reputation for delivering exceptional structural, architectural, construction, and project management solutions across Kenya.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our team comprises highly qualified professionals — including architects, engineers, and accountants — ensuring comprehensive and multidisciplinary approaches to every project. The firm is registered by the National Construction Authority as a contractor.
              </p>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-4">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={0.15 + i * 0.08}>
                  <div className="flex items-start gap-3 p-4 rounded-xl border border-border/40 hover:border-primary/40 hover:bg-primary/5 transition-all group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <p.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-sm mb-1">{p.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}