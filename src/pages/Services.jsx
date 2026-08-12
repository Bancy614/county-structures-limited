import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Compass, Leaf, ClipboardCheck, Ruler, Calculator, FileText, HardHat, ShieldCheck, Award, BadgeCheck, Heart, Lightbulb, CheckCircle2 } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import { Image } from '@/components/ui/image';
import SEO from '@/components/SEO';
import { useQuoteModal } from '@/components/QuoteModal';
import { services, buildProcess, IMG } from '@/data/companyData';

const iconMap = { Compass, Leaf, ClipboardCheck, Ruler, Calculator, FileText, HardHat, ShieldCheck, Award, BadgeCheck, Heart, Lightbulb };

const consultancyServices = services.filter((s) => s.category === 'Development Consultancy');
const constructionServices = services.filter((s) => s.category === 'Construction Services');

const whyChooseUs = [
  { icon: Award, title: 'NCA Registered', desc: 'Officially registered contractor with the National Construction Authority.' },
  { icon: ShieldCheck, title: 'EBK Registered Engineers', desc: 'Professional engineers registered with the Engineers Board of Kenya.' },
  { icon: Leaf, title: 'NEMA Lead Experts', desc: '400+ environmental impact assessments completed across Kenya.' },
  { icon: FileText, title: 'FIDIC & World Bank', desc: 'Experienced in international contract specifications and standards.' },
  { icon: Ruler, title: 'British Design Codes', desc: 'Structural design compliant with British standards and codes.' },
  { icon: HardHat, title: 'Integrated Services', desc: 'From feasibility to handover — all under one roof.' },
];

function ServiceCard({ service, index }) {
  const Icon = iconMap[service.icon] || Compass;
  return (
    <Reveal delay={index * 0.06}>
      <div className="group p-7 rounded-xl border border-border/40 bg-card hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
        <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
          <Icon className="w-6 h-6" strokeWidth={1.5} />
        </div>
        <h3 className="font-heading text-lg font-bold mb-2">{service.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.short_desc}</p>
        <ul className="space-y-1.5">
          {service.features.slice(0, 4).map((f) => (
            <li key={f} className="text-xs text-muted-foreground flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" /> {f}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default function Services() {
  const { openQuote } = useQuoteModal();

  return (
    <div>
      <SEO
        title="Our Services"
        description="Comprehensive development consultancy and construction services — feasibility studies, environmental impact assessment, structural design, project management, construction contracting, supervision, and quality control across Kenya."
        keywords="construction services Kenya, development consultancy, feasibility studies, environmental impact assessment, structural design, project management, construction contracting, NEMA, NCA contractor"
        image={IMG.site}
      />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden bg-charcoal">
        <div className="absolute inset-0">
          <Image src={IMG.heroPhoto} alt="County Structures construction site at sunrise — premium commercial and residential development across Kenya" fittingType="fill" className="w-full h-full object-cover animate-ken-burns" />
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
            <h2 className="font-heading text-4xl lg:text-5xl font-bold tracking-tight mb-4">Expert Advisory Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mb-12">From feasibility studies to contract administration, our consultancy services provide the strategic foundation for successful development projects.</p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {consultancyServices.map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}
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
            <h2 className="font-heading text-4xl lg:text-5xl font-bold tracking-tight mb-4">Building & Implementation</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mb-12">As an NCA-registered contractor, we deliver construction projects from ground-breaking to handover with precision, quality, and safety.</p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {constructionServices.map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-9xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-8 h-px bg-primary" />
                <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">Our Process</span>
                <div className="w-8 h-px bg-primary" />
              </div>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold tracking-tight">How We Deliver</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">A proven four-phase approach ensuring every project meets our standards of excellence.</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {buildProcess.map((step, i) => {
              const Icon = iconMap[step.icon] || Compass;
              return (
                <Reveal key={step.step} delay={i * 0.1}>
                  <div className="relative p-7 rounded-xl border border-border/40 bg-card hover:border-primary/40 hover:shadow-lg transition-all h-full">
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                        <Icon className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                      <span className="font-heading text-3xl font-bold text-border">{step.step}</span>
                    </div>
                    <h3 className="font-heading text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 lg:py-32 bg-charcoal text-white">
        <div className="max-w-9xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-8 h-px bg-primary" />
                <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">Why Choose Us</span>
                <div className="w-8 h-px bg-primary" />
              </div>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold tracking-tight">The County Structures Advantage</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="p-7 rounded-xl border border-white/10 hover:border-primary/40 bg-white/5 transition-all h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/5 border-t border-border/40 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">Need a Specific Service?</h2>
          <p className="text-muted-foreground mb-8 text-lg">Contact our team directly for a tailored consultation on your project requirements.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button onClick={openQuote} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:scale-105 transition-all">
              Request a Quote <ArrowRight className="w-4 h-4" />
            </button>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-foreground/15 hover:border-primary hover:text-primary font-semibold transition-all">
              Get In Touch <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}