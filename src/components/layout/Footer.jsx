import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Our Team', path: '/team' },
  { label: 'Contact', path: '/contact' },
];

const services = [
  'Development Consultancy',
  'Structural & Architectural Design',
  'Construction Contracting',
  'Project Management',
  'Environmental Impact Assessment',
  'Construction Supervision',
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-charcoal text-white/70 relative overflow-hidden">
      <div className="structural-grid-dark absolute inset-0 opacity-50" />
      <div className="relative max-w-9xl mx-auto px-6 pt-20 pb-8">
        {/* CTA strip */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-16 mb-16 border-b border-white/10">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white tracking-tight">Make Your Statement.</h2>
            <p className="mt-2 text-white/60">Ready to build something extraordinary? Let's start the conversation.</p>
          </div>
          <Link to="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold group">
              Start Your Build <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none">
                  <path d="M20 72 L20 28 L34 28 L50 52 L66 28 L80 28 L80 72 L68 72 L68 46 L54 68 L46 68 L32 46 L32 72 Z" fill="#121212" />
                </svg>
              </div>
              <div className="leading-none">
                <span className="font-heading font-bold text-lg text-white">County Structures</span>
                <span className="block text-[10px] font-mono tracking-widest uppercase text-white/40 mt-0.5">Development & Construction</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/50 mb-5">
              Premier development consultancy and construction services firm. Building premium commercial & residential spaces across Kenya since 2011.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary hover:text-charcoal flex items-center justify-center transition-all" aria-label="Social media">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-px bg-primary group-hover:w-4 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-5">Our Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm hover:text-primary transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-5">Contact Us</h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-white/60">#G1, Hendon Plaza, Machakos Town, Machakos County, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+254721466368" className="text-white/60 hover:text-primary transition-colors">+254 721 466 368</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:countystr@gmail.com" className="text-white/60 hover:text-primary transition-colors break-all">countystr@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span className="text-white/60">Mon – Fri: 8:00 AM – 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">© {year} County Structures Limited. All rights reserved. NCA Registered Contractor.</p>
          <div className="flex items-center gap-6 text-xs text-white/40">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">OH&S Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}