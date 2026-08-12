import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useQuoteModal } from '@/components/QuoteModal';
import AnimatedCounter from '@/components/animations/AnimatedCounter';
import { IMG } from '@/data/companyData';
import DateTimeWeather from '@/components/home/DateTimeWeather';

const stats = [
  { value: 14, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 450, suffix: 'K+', label: 'Safety Hours' },
];

export default function Hero() {
  const { openQuote } = useQuoteModal();
  return (
    <section className="relative h-screen min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={IMG.heroPhoto}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={IMG.heroVideo} type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/40 to-charcoal" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center pt-20">
        {/* DateTimeWeather */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex justify-center mb-8">
          <DateTimeWeather />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
          <h1 className="font-heading font-black text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.0] tracking-tight">
            COUNTY STRUCTURES
          </h1>

          {/* Gold divider */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '5rem', opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-1 bg-gold mx-auto my-6 rounded-full"
          />

          <h2 className="font-body text-lg sm:text-xl lg:text-2xl text-white/90 font-light leading-snug max-w-3xl mx-auto">
            Building Premium Commercial & Residential Spaces Across Kenya
          </h2>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button onClick={openQuote} size="lg" className="bg-gold text-charcoal hover:bg-gold/90 font-bold text-base shadow-2xl hover:scale-105 transition-all h-12 px-8">
              Request a Quote <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
            <Link to="/projects">
              <Button variant="outline" size="lg" className="border-2 border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-charcoal hover:border-white font-semibold h-12 px-8 transition-all">
                View Projects
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Stats bar at bottom */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }} className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-charcoal/50 backdrop-blur-sm">
        <div className="max-w-9xl mx-auto px-6 py-5 flex flex-wrap justify-center gap-8 lg:gap-16">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-heading text-2xl lg:text-3xl font-bold text-white">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-white/50 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}