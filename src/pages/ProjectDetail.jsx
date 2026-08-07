import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Building2, Ruler, Clock, Wallet, CheckCircle2, ArrowRight, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import Reveal from '@/components/animations/Reveal';
import SEO from '@/components/SEO';
import { useQuoteModal } from '@/components/QuoteModal';
import { projects, IMG } from '@/data/companyData';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const { openQuote } = useQuoteModal();
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImage(0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist or has been moved.</p>
          <Link to="/projects">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Projects
            </Button>
          </Link>
        </div>
      </div>);

  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  const metaItems = [
  { icon: Building2, label: 'Client', value: project.client },
  { icon: MapPin, label: 'Location', value: project.location },
  { icon: CheckCircle2, label: 'Status', value: project.status },
  { icon: Ruler, label: 'Category', value: project.category },
  { icon: Clock, label: 'Duration', value: project.duration },
  { icon: Wallet, label: 'Budget', value: project.budget }];


  return (
    <div>
      <SEO
        title={project.title}
        description={project.description}
        keywords={`${project.title}, ${project.category}, ${project.location}, construction project Kenya, County Structures`}
        image={project.image}
        type="article" />
      

      {/* Breadcrumb */}
      <div className="bg-secondary/50 border-b border-border/40 pt-28 md:pt-36">
        <div className="max-w-9xl mx-auto px-6 py-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
          <span>/</span>
          <span className="text-foreground truncate">{project.title}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end overflow-hidden bg-charcoal">
        <div className="absolute inset-0">
          <Image src={project.image} alt={project.title} fittingType="fill" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/30" />
        </div>
        <div className="relative max-w-9xl mx-auto px-6 pb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-mono uppercase tracking-wider font-semibold">{project.category}</span>
            <span className={`flex items-center gap-1.5 text-sm font-mono uppercase tracking-wider ${project.status === 'Completed' ? 'text-green-400' : 'text-amber-400'}`}>
              <span className="w-2 h-2 rounded-full bg-current" /> {project.status}
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl lg:text-6xl font-bold text-white tracking-tight max-w-4xl">{project.title}</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-3 text-lg text-white/60 flex items-center gap-2"><MapPin className="w-4 h-4" /> {project.location}</motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-9xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            <Reveal>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-px bg-primary" />
                  <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">Project Overview</span>
                </div>
                <h2 className="font-heading text-3xl font-bold tracking-tight mb-6">About This Project</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            </Reveal>

            {project.challenge &&
            <Reveal>
                <div className="p-8 rounded-2xl bg-secondary/30 border border-border/40">
                  <h3 className="font-heading text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-destructive/10 text-destructive flex items-center justify-center"><AlertTriangle className="w-4 h-4" /></span>
                    The Challenge
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
                </div>
              </Reveal>
            }

            {project.solution &&
            <Reveal>
                <div className="p-8 rounded-2xl bg-secondary/30 border border-border/40">
                  <h3 className="font-heading text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center"><CheckCircle2 className="w-4 h-4" /></span>
                    Our Solution
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                </div>
              </Reveal>
            }

            {project.services_used && project.services_used.length > 0 &&
            <Reveal>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-px bg-primary" />
                    <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">Services Provided</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.services_used.map((s) =>
                  <span key={s} className="px-4 py-2 rounded-full bg-card border border-border/40 text-sm font-medium hover:border-primary/40 transition-colors">{s}</span>
                  )}
                  </div>
                </div>
              </Reveal>
            }

            {/* Gallery */}
            {project.gallery && project.gallery.filter(img => img !== project.image).length > 0 &&
            <Reveal>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-px bg-primary" />
                    <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">Project Gallery</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {project.gallery.filter(img => img !== project.image).map((img, i) =>
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`relative rounded-lg overflow-hidden aspect-square group ${activeImage === i ? 'ring-2 ring-primary' : ''}`}>
                    
                        <Image src={img} alt={`${project.title} — image ${i + 1}`} fittingType="fill" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      </button>
                  )}
                  </div>
                </div>
              </Reveal>
            }
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Reveal delay={0.1}>
              <div className="sticky top-28 p-8 rounded-2xl bg-card border border-border/40 shadow-lg space-y-6">
                <div>
                  <h3 className="font-heading text-lg font-bold mb-5">Project Details</h3>
                  <div className="space-y-4">
                    {metaItems.map((m) =>
                    <div key={m.label} className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                          <m.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{m.label}</p>
                          <p className="text-sm font-medium">{m.value}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {project.area &&
                <div className="pt-4 border-t border-border/40">
                    <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Floor Area</p>
                    <p className="text-2xl font-heading font-bold text-primary">{project.area}</p>
                  </div>
                }

                <Button onClick={openQuote} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2">
                  Start a Similar Project <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Prev/Next navigation */}
      <section className="py-16 bg-secondary/30 border-y border-border/40">
        <div className="max-w-9xl mx-auto px-6 grid grid-cols-2 gap-4">
          <Link to={`/projects/${prevProject.slug}`} className="group p-6 rounded-xl bg-card border border-border/40 hover:border-primary/40 transition-colors">
            <span className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2"><ArrowLeft className="w-4 h-4" /> Previous Project</span>
            <h4 className="font-heading font-bold group-hover:text-primary transition-colors line-clamp-1">{prevProject.title}</h4>
          </Link>
          <Link to={`/projects/${nextProject.slug}`} className="group p-6 rounded-xl bg-card border border-border/40 hover:border-primary/40 transition-colors text-right">
            <span className="flex items-center justify-end gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">Next Project <ArrowRight className="w-4 h-4" /></span>
            <h4 className="font-heading font-bold group-hover:text-primary transition-colors line-clamp-1">{nextProject.title}</h4>
          </Link>
        </div>
      </section>
    </div>);

}