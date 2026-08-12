import React from 'react';
import { motion } from 'framer-motion';
import { IMG } from '@/data/companyData';

export default function PageHero({ title, subtitle, height = 'h-[50vh] min-h-[400px]' }) {
  return (
    <section className={`relative ${height} flex items-center justify-center overflow-hidden bg-charcoal`}>
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
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal" />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl lg:text-7xl font-bold text-white tracking-tight"
        >
          {title}
        </motion.h1>
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '4rem', opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-gold mx-auto my-5 rounded-full"
        />
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}