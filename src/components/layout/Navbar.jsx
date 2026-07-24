import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, ChevronDown, Sun, Moon, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useQuoteModal } from '@/components/QuoteModal';
import { useTheme } from 'next-themes';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services', mega: true },
  { label: 'Projects', path: '/projects' },
  { label: 'Our Team', path: '/team' },
  { label: 'Contact', path: '/contact' },
];

const servicesMega = [
  {
    category: 'Development Consultancy',
    items: [
      { title: 'Feasibility Studies', path: '/services' },
      { title: 'Environmental Impact Assessment', path: '/services' },
      { title: 'Project Planning & Management', path: '/services' },
      { title: 'Structural & Architectural Design', path: '/services' },
      { title: 'Cost Estimation & Budgeting', path: '/services' },
      { title: 'Contract Administration', path: '/services' },
    ],
  },
  {
    category: 'Construction Services',
    items: [
      { title: 'Architectural & Structural Design', path: '/services' },
      { title: 'Construction Contracting & Implementation', path: '/services' },
      { title: 'Construction Supervision', path: '/services' },
      { title: 'Quality Control & Assurance', path: '/services' },
      { title: 'Construction Safety & Health Management', path: '/services' },
    ],
  },
];

function Logo({ dark }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <div className="relative w-10 h-10 rounded-lg bg-primary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
        <svg viewBox="0 0 100 100" className="w-7 h-7" fill="none">
          <path d="M20 72 L20 28 L34 28 L50 52 L66 28 L80 28 L80 72 L68 72 L68 46 L54 68 L46 68 L32 46 L32 72 Z" fill="#121212" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-heading font-bold text-lg tracking-tight ${dark ? 'text-white' : 'text-foreground'}`}>County Structures</span>
        <span className={`text-[10px] font-mono tracking-widest uppercase ${dark ? 'text-white/60' : 'text-muted-foreground'}`}>Development & Construction</span>
      </div>
    </Link>
  );
}

function ThemeToggle({ dark }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-9 h-9" />;
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${dark ? 'text-white hover:bg-white/10' : 'text-foreground hover:bg-black/5'}`}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { openQuote } = useQuoteModal();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setMegaOpen(false); }, [location]);

  const dark = !scrolled;

  return (
    <>
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top utility bar */}
      <div className={`hidden md:block transition-all duration-300 ${scrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-9 opacity-100'} ${dark ? 'bg-black/30 text-white/70' : 'bg-charcoal text-white/70'}`}>
        <div className="max-w-9xl mx-auto px-6 h-9 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-6">
            <a href="tel:+254721466368" className="flex items-center gap-2 hover:text-primary transition-colors"><Phone className="w-3 h-3" /> +254 721 466 368</a>
            <a href="mailto:countystr@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors"><Mail className="w-3 h-3" /> countystr@gmail.com</a>
          </div>
          <span>NCA Registered Contractor · Est. 2011 · Machakos & Nairobi, Kenya</span>
        </div>
      </div>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`transition-all duration-300 ${scrolled ? 'bg-card/95 backdrop-blur-xl shadow-sm border-b border-border/40' : ''}`}
      >
        <nav className={`max-w-9xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
          <div className={dark ? '[&_*]:text-white' : ''}>
            <Logo dark={dark} />
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.mega ? (
                <div key={link.label} className="relative" onMouseEnter={() => setMegaOpen(true)} onMouseLeave={() => setMegaOpen(false)}>
                  <Link
                    to={link.path}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${dark ? 'text-white/80 hover:text-white' : 'text-foreground/70 hover:text-foreground'}`}
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${megaOpen ? 'rotate-180' : ''}`} />
                  </Link>
                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[640px]"
                      >
                        <div className="glass-light dark:glass rounded-2xl border border-border/40 shadow-2xl p-6 grid grid-cols-2 gap-6">
                          {servicesMega.map((col) => (
                            <div key={col.category}>
                              <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-primary mb-3">{col.category}</h4>
                              <ul className="space-y-1">
                                {col.items.map((item) => (
                                  <li key={item.title}>
                                    <Link to={item.path} className="flex items-center justify-between text-sm text-foreground/70 hover:text-foreground hover:translate-x-1 transition-all py-1.5">
                                      {item.title}
                                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${dark ? 'text-white/80 hover:text-white' : 'text-foreground/70 hover:text-foreground'} ${location.pathname === link.path ? (dark ? 'text-white' : 'text-foreground') : ''}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <div className={dark ? '[&_*]:text-white' : ''}>
              <ThemeToggle dark={dark} />
            </div>
            <Button
              onClick={openQuote}
              size="sm"
              className="hidden sm:flex bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all"
            >
              Request a Quote
            </Button>
            <button
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden p-2 ${dark ? 'text-white' : 'text-foreground'}`}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </motion.header>
    </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-sm bg-card shadow-2xl lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-border/40">
                <Logo dark={false} />
                <button onClick={() => setMobileOpen(false)} className="p-2"><X className="w-6 h-6" /></button>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.path}
                    className="block py-3 text-lg font-heading font-medium border-b border-border/20 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="p-6 border-t border-border/40 space-y-4">
                <Button onClick={openQuote} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold" size="lg">
                  Request a Quote
                </Button>
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                  <a href="tel:+254721466368" className="flex items-center gap-1.5"><Phone className="w-4 h-4" /> +254 721 466 368</a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}