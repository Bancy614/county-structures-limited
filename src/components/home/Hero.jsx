import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useQuoteModal } from '@/components/QuoteModal';
import AnimatedCounter from '@/components/animations/AnimatedCounter';
import { Image } from '@/components/ui/image';
import { IMG } from '@/data/companyData';
import DateTimeWeather from '@/components/home/DateTimeWeather';

const stats = [
{ value: 14, suffix: '+', label: 'Years Experience' },
{ value: 50, suffix: '+', label: 'Projects Delivered' },
{ value: 450, suffix: 'K+', label: 'Safety Hours' }];


export default function Hero() {
  const { openQuote } = useQuoteModal();
  return (
    <section className="relative min-h-screen flex items-end pt-24 overflow-hidden bg-charcoal">
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0">
        <Image src={IMG.samarHero} alt="Samar Towers — premium residential apartment development by County Structures" fittingType="fill" className="w-full h-full object-cover animate-ken-burns" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-transparent to-transparent" />
      </div>

      {/* Structural grid overlay */}
      <div className="absolute inset-0 structural-grid-dark opacity-40" />

      {/* Animated vertical lines */}
      <div className="absolute inset-0 flex justify-between px-[5%] opacity-20">
        {[0, 1, 2, 3, 4].map((i) =>
        <motion.div key={i} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.5, delay: i * 0.2, ease: 'easeOut' }} className="w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent origin-top" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-9xl mx-auto px-6 pb-24 lg:pb-16">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="max-w-4xl">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <DateTimeWeather />
          </motion.div>

          <h1 className="font-heading font-black text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.0] tracking-tight drop-shadow-2xl py-2">COUNTY STRUCTURES</h1>

          <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl text-gold font-semibold leading-snug mt-2 mb-2 drop-shadow-lg">Building Premium Commercial & Residential Spaces Across Kenya.</h2>

          <p className="mt-5 text-base lg:text-lg text-white/70 max-w-2xl leading-relaxed">From structural design to project handover — County Structures  delivers excellence in every build, combining engineering precision with architectural vision since 2011.

          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button onClick={openQuote} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base shadow-2xl shadow-primary/40 hover:shadow-primary/60 hover:scale-105 transition-all group h-12 px-8">
              Request a Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link to="/projects">
              <Button variant="outline" size="lg" className="border-2 border-white/40 bg-white/10 text-white backdrop-blur hover:bg-primary hover:text-primary-foreground hover:border-primary font-semibold h-12 px-8 transition-all">
                View Projects
              </Button>
            </Link>
            <button className="flex items-center gap-2 text-white/70 hover:text-primary transition-colors group">
              <span className="w-11 h-11 rounded-full border-2 border-white/40 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all">
                <Play className="w-4 h-4 ml-0.5 hidden" />
              </span>
              <span className="text-sm font-semibold hidden">Watch Company Profile</span>
            </button>
          </div>
        </motion.div>

        {/* Live stats bar */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }} className="mt-16 flex flex-wrap gap-8 lg:gap-16 pt-8 border-t border-white/10">
          {stats.map((s) => <div key={s.label}>
              <div className="font-heading text-3xl lg:text-4xl font-bold text-white">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-white/50 mt-1">{s.label}</div>
            </div>)}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-white/40">
        <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>);

}