import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowUpRight, Calendar } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';
import { Image } from '@/components/ui/image';
import { projects as allProjects } from '@/data/companyData';

const projects = allProjects
  .filter((p) => p.featured)
  .map((p, i) => ({ ...p, large: i === 0 || i === 3 }));

const filters = ['All', 'Commercial', 'Residential', 'Institutional', 'Industrial'];

export default function FeaturedProjects() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-9xl mx-auto px-6">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-px bg-primary" />
                <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">Featured Portfolio</span>
              </div>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold tracking-tight">
                Projects That Define<br /><span className="text-muted-foreground">Our Capability</span>
              </h2>
            </div>
            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${active === f ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20' : 'bg-card border border-border/40 hover:border-primary/40'}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Masonry-style grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filtered.map((p, i) => (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={p.large ? 'md:col-span-2' : ''}
              >
                <Link to={`/projects/${p.slug}`} className="group relative block rounded-xl overflow-hidden aspect-[4/3] shadow-lg">
                  <Image src={p.image} alt={p.title} fittingType="fill" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
                  {/* Hover glass overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="glass rounded-full px-5 py-2.5 text-white text-sm font-semibold flex items-center gap-2">
                      View Project Details <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 mb-2 text-xs font-mono uppercase tracking-wider text-white/60">
                      <span className="px-2 py-0.5 rounded bg-primary/90 text-charcoal font-semibold">{p.category}</span>
                      <span className={`flex items-center gap-1 ${p.status === 'Completed' ? 'text-green-400' : 'text-amber-400'}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current" /> {p.status}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg lg:text-xl font-bold text-white leading-tight mb-1">{p.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-white/60">
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {p.location}</span>
                      <span className="hidden sm:flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {p.service_type}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal>
          <div className="mt-12 text-center">
            <Link to="/projects" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-foreground/15 hover:border-primary hover:bg-primary hover:text-primary-foreground font-semibold transition-all group">
              Explore All Projects
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}