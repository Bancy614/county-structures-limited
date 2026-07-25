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
import SEO from '@/components/SEO';

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <SEO
        description="County Structures Limited — a premier Kenyan development consultancy and construction services firm. Building premium commercial & residential spaces across Kenya since 2011."
        keywords="Construction Company Kenya, Building Contractors Kenya, Civil Engineering Kenya, Architectural Design Kenya, Project Management Kenya, Development Consultancy Kenya, NCA contractor"
      />
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