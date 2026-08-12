import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { useQuoteModal } from '@/components/QuoteModal';
import Reveal from '@/components/animations/Reveal';
import { IMG } from '@/data/companyData';

export default function FinalCTA() {
  const { openQuote } = useQuoteModal();
  return (
    <section className="relative py-24 lg:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <Image src={IMG.hallAnimate} alt="ASDF Training Hall construction progress by County Structures" fittingType="fill" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/40" />
      </div>
      <div className="absolute inset-0 structural-grid-dark opacity-20" />

      <div className="relative max-w-9xl mx-auto px-6">
        <div className="max-w-2xl">
          <Reveal>
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-px w-16 bg-primary mb-6 origin-left" />
            <h2 className="font-heading text-4xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05]">
              Ready to Build<br />Something <span className="text-gradient-gold">Extraordinary?</span>
            </h2>
            <p className="mt-6 text-lg lg:text-xl text-white/70 leading-relaxed max-w-xl">
              From feasibility studies to final handover, our multidisciplinary team is ready to bring your vision to life. Let's discuss your next project.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button onClick={openQuote} size="lg" className="bg-gold text-charcoal hover:bg-gold/90 font-semibold shadow-xl shadow-gold/20 hover:scale-105 transition-all group">
                Request a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a href="tel:+254721466368">
                <Button variant="outline" size="lg" className="border-white/30 bg-white/5 text-white backdrop-blur hover:bg-white/10 hover:text-white hover:border-white/50 group">
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" /> +254 721 466 368
                </Button>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}