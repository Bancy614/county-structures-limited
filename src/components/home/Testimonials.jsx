import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from '@/components/animations/Reveal';

const testimonials = [
  {
    quote: "County Structures delivered our training hall on time and within budget. Their engineering precision and project management were exceptional throughout.",
    name: 'Virginia Muteti',
    title: 'Client — Guest House Project',
    project: 'Machakos Town',
  },
  {
    quote: "The team's multidisciplinary approach — from environmental assessment to construction — made our abattoir project seamless. True professionals.",
    name: "Tai's Farm Limited",
    title: 'EIA & Construction Client',
    project: 'Kenya',
  },
  {
    quote: "From structural design to final handover, County Structures exceeded our expectations. Their attention to safety and quality is unmatched in the region.",
    name: 'Samar Ltd',
    title: 'Client — Samar Towers',
    project: 'Nairobi',
  },
  {
    quote: "Very good work so far.",
    name: 'Dr. David Kitavi',
    title: 'County Director Technical Training',
    project: 'Machakos County Government',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 lg:py-32 bg-charcoal text-white relative overflow-hidden">
      <div className="absolute inset-0 structural-grid-dark opacity-30" />
      {/* Decorative quote mark */}
      <Quote className="absolute top-12 left-6 lg:left-20 w-24 h-24 lg:w-40 lg:h-40 text-primary/5" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-8 h-px bg-primary" />
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">Client Testimonials</span>
            <div className="w-8 h-px bg-primary" />
          </div>
        </Reveal>

        <div className="relative min-h-[280px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
              </div>
              <blockquote className="font-heading text-2xl lg:text-3xl font-medium leading-snug tracking-tight mb-8 max-w-3xl">
                "{testimonials[index].quote}"
              </blockquote>
              <div className="font-bold text-lg text-primary">{testimonials[index].name}</div>
              <div className="text-sm text-white/50 mt-1">{testimonials[index].title} · {testimonials[index].project}</div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button onClick={prev} className="w-11 h-11 rounded-full border border-white/20 hover:border-primary hover:bg-primary hover:text-charcoal transition-all flex items-center justify-center" aria-label="Previous testimonial">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setIndex(i)} className={`h-2 rounded-full transition-all ${i === index ? 'w-8 bg-primary' : 'w-2 bg-white/30'}`} aria-label={`Go to testimonial ${i + 1}`} />
            ))}
          </div>
          <button onClick={next} className="w-11 h-11 rounded-full border border-white/20 hover:border-primary hover:bg-primary hover:text-charcoal transition-all flex items-center justify-center" aria-label="Next testimonial">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}