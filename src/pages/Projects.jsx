import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Reveal from '@/components/animations/Reveal';
import SEO from '@/components/SEO';
import PageHero from '@/components/PageHero';
import { projects, IMG } from '@/data/companyData';

const filters = ['All', 'Commercial', 'Residential', 'Institutional', 'Industrial'];

export default function Projects() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <SEO
        title="Projects"
        description="Explore our portfolio of commercial, residential, institutional, and industrial construction projects across Kenya — from office buildings and guest houses to university infrastructure and abattoir facilities."
        keywords="construction projects Kenya, project portfolio, commercial buildings, residential projects, institutional construction, County Structures projects"
        image={IMG.site}
      />

      {/* Hero */}
      <PageHero title="Projects" subtitle="Explore our portfolio of commercial, residential, institutional, and industrial construction projects across Kenya." />

      {/* Filters + Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-9xl mx-auto px-6">
          <Reveal>
            <div className="flex flex-wrap gap-2 mb-10">
              {filters.map((f) => (
                <button key={f} onClick={() => setActive(f)} className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all ${active === f ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20' : 'bg-card border border-border/40 hover:border-primary/40'}`}>{f}</button>
              ))}
            </div>
          </Reveal>
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <motion.div key={p.slug} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                <Link to={`/projects/${p.slug}`} className="group relative block rounded-xl overflow-hidden aspect-[4/3] shadow-lg cursor-pointer">
                  <Image src={p.image} alt={p.title} fittingType="fill" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 mb-2 text-xs font-mono uppercase tracking-wider text-white/60">
                      <span className="px-2 py-0.5 rounded bg-primary/90 text-charcoal font-semibold">{p.category}</span>
                      <span className={`flex items-center gap-1 ${p.status === 'Completed' ? 'text-green-400' : 'text-amber-400'}`}><span className="w-1.5 h-1.5 rounded-full bg-current" /> {p.status}</span>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-white leading-tight mb-1">{p.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-white/60"><span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {p.location}</span><span className="hidden sm:flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {p.service_type}</span></div>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"><ArrowUpRight className="w-4 h-4 text-white" /></div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications bar */}
      <section className="py-16 bg-secondary/30 border-y border-border/40">
        <div className="max-w-9xl mx-auto px-6 flex flex-wrap items-center justify-center gap-8 lg:gap-16 text-center">
          {['NCA Registered Contractor', 'NEMA Certified', 'EBK Registered Engineers', 'OH&S Compliant'].map((c) => (
            <div key={c} className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-primary" /> {c}</div>
          ))}
        </div>
      </section>
    </div>
  );
}