import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Heart, Lightbulb, Handshake, Leaf } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Reveal from '@/components/animations/Reveal';
import AnimatedCounter from '@/components/animations/AnimatedCounter';

const OVERVIEW_IMG = 'https://media.base44.com/images/public/6a63f94e8a295d2bd7187207/db98037dc_generated_5dfc5510.png';

const stats = [
  { value: 2011, label: 'Established', prefix: '' },
  { value: 2015, label: 'Incorporated', prefix: '' },
  { value: 5, suffix: '+', label: 'Expert Professionals' },
  { value: 400, suffix: '+', label: 'ESIA/EA Projects' },
];

const values = [
  { icon: ShieldCheck, title: 'Excellence', desc: 'Delivering beyond expectations on every project, from concept to handover.' },
  { icon: Heart, title: 'Integrity', desc: 'Transparent processes, honest communication, and ethical practices.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'BIM, modern engineering methods, and sustainable building solutions.' },
  { icon: Leaf, title: 'Sustainability', desc: 'Environmental responsibility in every project we undertake.' },
];

export default function About() {
  return (
    <div>
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden bg-charcoal">
        <div className="absolute inset-0">
          <Image src={OVERVIEW_IMG} alt="Architectural blueprints" fittingType="fill" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/30" />
        </div>
        <div className="relative max-w-9xl mx-auto px-6 pb-12">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-5xl lg:text-7xl font-bold text-white tracking-tight">About Us</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-3 text-lg text-white/60 max-w-2xl">A multidisciplinary team building Kenya's future — one structure at a time.</motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-9xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="font-heading text-4xl lg:text-5xl font-bold text-primary"><AnimatedCounter value={s.value} prefix={s.prefix || ''} suffix={s.suffix || ''} /></div>
              <div className="text-xs font-mono uppercase tracking-widest text-white/50 mt-2">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Company story */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <div className="flex items-center gap-2 mb-6"><div className="w-8 h-px bg-primary" /><span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">Our Story</span></div>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold tracking-tight mb-8">Engineering Excellence Since 2011</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>County Structures Limited is a premier development consultancy and construction services firm with a rich history dating back to 2011. Officially incorporated in 2015, our company has built a strong reputation for delivering exceptional structural, architectural, construction, and project management solutions across Kenya.</p>
              <p>Our team comprises highly qualified professionals — including architects, engineers, and accountants — ensuring comprehensive and multidisciplinary approaches to every project. The firm is also registered by the National Construction Authority as a contractor.</p>
              <p className="font-heading text-xl text-foreground font-bold">County Structures Limited: Make Your Statement.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="max-w-9xl mx-auto px-6 grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="p-10 rounded-2xl bg-card border border-border/40 h-full">
              <Target className="w-12 h-12 text-primary mb-6" strokeWidth={1.5} />
              <h3 className="font-heading text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">To deliver excellence in every project we undertake, combining engineering precision with architectural vision, while exceeding client expectations through innovative solutions, timely delivery, and unwavering dedication to quality.</p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="p-10 rounded-2xl bg-card border border-border/40 h-full">
              <Eye className="w-12 h-12 text-primary mb-6" strokeWidth={1.5} />
              <h3 className="font-heading text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">To be East Africa's most trusted development consultancy and construction partner — recognized for structural integrity, innovation, and transformative spaces that define communities.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-9xl mx-auto px-6">
          <Reveal><div className="text-center mb-14"><div className="flex items-center justify-center gap-2 mb-4"><div className="w-8 h-px bg-primary" /><span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">Core Values</span><div className="w-8 h-px bg-primary" /></div><h2 className="font-heading text-4xl lg:text-5xl font-bold tracking-tight">What Drives Us</h2></div></Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="p-7 rounded-xl border border-border/40 hover:border-primary/40 hover:shadow-lg transition-all text-center h-full">
                  <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-5 mx-auto"><v.icon className="w-7 h-7" strokeWidth={1.5} /></div>
                  <h3 className="font-heading text-lg font-bold mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OH&S Policy */}
      <section className="py-24 lg:py-32 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <div className="flex items-center gap-2 mb-6"><div className="w-8 h-px bg-primary" /><span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">OH&S Policy</span></div>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold tracking-tight mb-6">Safety Is Non-Negotiable</h2>
            <p className="text-white/70 leading-relaxed text-lg mb-8">Our OH&S Policy is consistent with the purpose and context of our organisation. It provides a framework for setting and reviewing objectives, satisfying applicable laws, and continually improving our Safety Management System.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {['Safe & healthy working conditions', 'Framework for OH&S objectives', 'Eliminating hazards & reducing risks', 'Protecting the environment', 'Continual improvement of safety systems', 'Worker consultation & participation'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-white/80"><ShieldCheck className="w-5 h-5 text-primary shrink-0" /> {item}</div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}