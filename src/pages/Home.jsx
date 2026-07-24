import React from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/home/Hero';
import CompanyOverview from '@/components/home/CompanyOverview';
import CoreValues from '@/components/home/CoreValues';
import ServicesGrid from '@/components/home/ServicesGrid';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import BuildProcess from '@/components/home/BuildProcess';
import Testimonials from '@/components/home/Testimonials';
import FinalCTA from '@/components/home/FinalCTA';

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <Hero />
      <CompanyOverview />
      <CoreValues />
      <ServicesGrid />
      <FeaturedProjects />
      <BuildProcess />
      <Testimonials />
      <FinalCTA />
    </motion.div>
  );
}