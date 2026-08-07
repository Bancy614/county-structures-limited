import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, ExternalLink, ArrowRight } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Reveal from '@/components/animations/Reveal';
import SEO from '@/components/SEO';
import { galleryImages, IMG, photoAlbums } from '@/data/companyData';

const filters = ['All', 'Commercial', 'Residential', 'Institutional', 'Industrial', 'Construction', 'Design'];

export default function Gallery() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === 'All' ? galleryImages : galleryImages.filter((g) => g.category === active);

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const nextImage = useCallback(() => {
    setLightbox((prev) => {
      if (prev === null) return null;
      const idx = filtered.findIndex((g) => g.title === prev.title);
      return filtered[(idx + 1) % filtered.length];
    });
  }, [filtered]);
  const prevImage = useCallback(() => {
    setLightbox((prev) => {
      if (prev === null) return null;
      const idx = filtered.findIndex((g) => g.title === prev.title);
      return filtered[(idx - 1 + filtered.length) % filtered.length];
    });
  }, [filtered]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    if (lightbox) {
      window.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, closeLightbox, nextImage, prevImage]);

  const aspectClass = (aspect) => {
    if (aspect === 'tall') return 'aspect-[3/4]';
    if (aspect === 'wide') return 'aspect-[4/3] md:col-span-2';
    return 'aspect-square';
  };

  return (
    <div>
      <SEO
        title="Gallery"
        description="Explore our project gallery — commercial, residential, institutional, and industrial construction projects across Kenya by County Structures Limited."
        keywords="construction gallery Kenya, project portfolio, building photos, construction images, County Structures projects"
        image={IMG.site} />
      

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden bg-charcoal">
        <div className="absolute inset-0">
          <Image src={IMG.samarHero} alt="County Structures premium project showcase" fittingType="fill" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/30" />
        </div>
        <div className="relative max-w-9xl mx-auto px-6 pb-12">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-5xl lg:text-7xl font-bold text-white tracking-tight">Project Gallery</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-3 text-lg text-white/60 max-w-2xl">A visual showcase of our work — from commercial developments to residential landmarks across Kenya.</motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-9xl mx-auto px-6">
          <Reveal>
            <div className="flex flex-wrap gap-2 mb-10">
              {filters.map((f) =>
              <button key={f} onClick={() => setActive(f)} className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all ${active === f ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20' : 'bg-card border border-border/40 hover:border-primary/40'}`}>{f}</button>
              )}
            </div>
          </Reveal>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-auto gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((g, i) =>
              <motion.div
                key={g.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className={`group relative rounded-xl overflow-hidden shadow-lg cursor-pointer ${aspectClass(g.aspect)}`}
                onClick={() => setLightbox(g)}>
                
                  <Image src="https://media.base44.com/images/public/6a63f94e8a295d2bd7187207/e5adfec14_GuestHouse.png" alt={g.title} fittingType="fill" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-semibold">{g.category}</span>
                    <h3 className="font-heading text-sm font-bold text-white leading-tight mt-1">{g.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Photo Albums */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-9xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4"><div className="w-8 h-px bg-primary" /><span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">Full Albums</span><div className="w-8 h-px bg-primary" /></div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold tracking-tight">Project Photo Albums</h2>
              <p className="mt-3 text-white/60 max-w-2xl mx-auto">Explore our full Google Photos albums for detailed construction progress, design renders, and completed project photography.</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {photoAlbums.map((album, i) =>
            <Reveal key={album.title} delay={i * 0.1}>
                <a href={album.url} target="_blank" rel="noopener noreferrer" className="block p-7 rounded-xl glass hover:border-primary/40 border border-white/10 transition-all group h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <ExternalLink className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2 text-white">{album.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-4">{album.desc}</p>
                  <span className="inline-flex items-center gap-2 text-sm text-primary font-semibold">View Album <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                </a>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}>
          
            <button onClick={closeLightbox} className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white z-10 transition-colors" aria-label="Close">
              <X className="w-6 h-6" />
            </button>
            <button onClick={(e) => {e.stopPropagation();prevImage();}} className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white z-10 transition-colors" aria-label="Previous">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={(e) => {e.stopPropagation();nextImage();}} className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white z-10 transition-colors" aria-label="Next">
              <ChevronRight className="w-6 h-6" />
            </button>
            <motion.div
            key={lightbox.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}>
            
              <img src={lightbox.url} alt={lightbox.title} className="w-full h-auto max-h-[80vh] object-contain rounded-lg" />
              <div className="text-center mt-4">
                <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">{lightbox.category}</span>
                <h3 className="font-heading text-xl font-bold text-white mt-1">{lightbox.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}