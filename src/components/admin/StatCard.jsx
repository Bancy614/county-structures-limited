import React from 'react';
import { motion } from 'framer-motion';

export default function StatCard({ icon: Icon, label, value, color = 'bg-primary' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 rounded-2xl border border-border/40 bg-card hover:border-primary/40 transition-colors"
    >
      <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4`}>
        <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
      </div>
      <div className="text-3xl font-heading font-bold">{value}</div>
      <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-1">{label}</div>
    </motion.div>
  );
}