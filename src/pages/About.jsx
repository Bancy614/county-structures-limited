import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Eye, ShieldCheck, Heart, Lightbulb, Leaf, Award, BadgeCheck, Ruler, HardHat, CheckCircle2, ArrowRight } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Reveal from '@/components/animations/Reveal';
import AnimatedCounter from '@/components/animations/AnimatedCounter';
import SEO from '@/components/SEO';
import { stats, timeline, certifications, values, IMG } from '@/data/companyData';

const certIconMap = { Award, Leaf, ShieldCheck, Ruler, HardHat, BadgeCheck };
const valueIconMap = { ShieldCheck, Heart, Lightbulb, Leaf };

export default function About() {
  return (
    <div>
      <SEO
        title="About Us"
        description="County Structures Limited — a premier Kenyan development consultancy and construction services firm since 2011. Learn about our mission, vision, values, team, and commitment to engineering excellence."
        keywords="about County Structures, construction company Kenya, development consultancy, company history, mission vision values, NCA registered contractor"
        image={IMG.plans}
      />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden bg-charcoal">
        <div className="absolute inset-0">
          <Image src={IMG.samarHero} alt="County Structures premium project showcase" fittingType="fill" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/30" />
        </div>
        <div className="relative max-w-9xl mx-auto px-6 pb-12">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-5xl lg:text-7xl font-bold text-white tracking-tight">About Us</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-3 text-lg text-white/60 max-w-2xl">A multidisciplinary team building Kenya's future — one structure at a time.</motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-9xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {stats.slice(0, 6).map((s, i) => (
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

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="max-w-9xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-2 mb-4"><div className="w-8 h-px bg-primary" /><span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">Our Journey</span><div className="w-8 h-px bg-primary" /></div>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold tracking-tight">Milestones & Growth</h2>
            </div>
          </Reveal>
          <div className="relative">
            <div className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-12">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.1}>
                  <div className={`relative flex items-start gap-6 lg:gap-0 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background z-10 mt-2" />
                    <div className={`pl-12 lg:pl-0 lg:w-1/2 ${i % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                      <span className="font-heading text-3xl font-bold text-primary block mb-2">{t.year}</span>
                      <h3 className="font-heading text-xl font-bold mb-2">{t.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 lg:py-32 bg-background">
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
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="max-w-9xl mx-auto px-6">
          <Reveal><div className="text-center mb-14"><div className="flex items-center justify-center gap-2 mb-4"><div className="w-8 h-px bg-primary" /><span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">Core Values</span><div className="w-8 h-px bg-primary" /></div><h2 className="font-heading text-4xl lg:text-5xl font-bold tracking-tight">What Drives Us</h2></div></Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = valueIconMap[v.icon] || ShieldCheck;
              return (
                <Reveal key={v.title} delay={i * 0.1}>
                  <div className="p-7 rounded-xl border border-border/40 bg-card hover:border-primary/40 hover:shadow-lg transition-all text-center h-full">
                    <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-5 mx-auto"><Icon className="w-7 h-7" strokeWidth={1.5} /></div>
                    <h3 className="font-heading text-lg font-bold mb-2">{v.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-9xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-2 mb-4"><div className="w-8 h-px bg-primary" /><span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">Accreditations</span><div className="w-8 h-px bg-primary" /></div>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold tracking-tight">Certifications & Registrations</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Our professional credentials reflect our commitment to quality, safety, and regulatory compliance.</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((c, i) => {
              const Icon = certIconMap[c.icon] || Award;
              return (
                <Reveal key={c.name} delay={i * 0.08}>
                  <div className="flex items-start gap-4 p-7 rounded-xl border border-border/40 bg-card hover:border-primary/40 hover:shadow-lg transition-all h-full">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-bold mb-1">{c.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
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
            <Link to="/ohs-policy" className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:scale-105 transition-all">
              Read Full OH&S Policy <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/5 border-t border-border/40 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">Partner With Us</h2>
          <p className="text-muted-foreground mb-8 text-lg">Ready to build something extraordinary? Let's discuss your next project.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:scale-105 transition-all">
            Start Your Build <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}