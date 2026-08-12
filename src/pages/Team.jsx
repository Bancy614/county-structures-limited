import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Award, GraduationCap, BadgeCheck, ChevronDown, Linkedin, Download, ArrowRight } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { Link } from 'react-router-dom';
import Reveal from '@/components/animations/Reveal';
import SEO from '@/components/SEO';
import { IMG } from '@/data/companyData';

const team = [
  {
    name: 'Duncan Ngari Mbugua',
    title: 'Project Manager / Supervisor',
    profession: 'Civil / Structural Engineer',
    email: 'mbugua.danny@gmail.com',
    bio: 'Over ten years of experience in structural design and project management. Expertise in reinforced concrete and steel structures according to British design codes, with extensive experience in construction project management, feasibility studies, and supervision services.',
    qualifications: ['Registered Engineer with EBK', 'Member, Institution of Engineers of Kenya', 'Construction Adjudication — CIArb', 'BIM for Construction Management — NCA', 'Concrete & Structural Integrity — NCA', 'OSHAcademy Certified'],
    education: ['B.Sc. Civil Engineering, University of Nairobi (2000-2005)', 'Kijabe High School, Kenya (1995-1998)'],
  },
  {
    name: 'Patrick Kyalo Kituta',
    title: 'Environment Expert',
    profession: 'Environmental Consultant',
    email: 'pkituta@gmail.com',
    bio: 'Lead Environmental Expert with extensive experience in over 400 ESIA/EA projects including airstrips, hospitals, roads, dams, and water supply systems. Consultant on World Bank projects including COVID-19 Emergency Response and health systems.',
    qualifications: ['Lead Environmental Expert (NEMA)', 'Member, Environmental Institute of Kenya (EIK)', 'Environmental & Social Impact Assessments', 'Community Mobilization & Training', 'Project Management & Policy Advisory'],
    education: ['M.A. Environmental Policy, University of Nairobi', 'B.Sc. Environmental Science, Egerton University'],
  },
  {
    name: 'Teresia Mutua',
    title: 'Registered Architect',
    profession: 'Architect',
    email: 'mutuaterry9@gmail.com',
    bio: 'Registered architect contributing to site supervision, inspection, quality control, and preparation of progress reports. Provides architectural advice and design solutions on site, with expertise in design research, conceptualization, detailing, and BIM.',
    qualifications: ['AAK Corporate Member', 'Design Research & Conceptualization', 'BIM, Interior Design & Problem Solving', 'Site Supervision & Quality Control'],
    education: ['B. Architecture, JKUAT (2015-2021)', 'B. Architectural Studies, JKUAT (2015-2019)'],
  },
  {
    name: 'Eng. Wilson Wamahiu Munene',
    title: 'Civil / Structural Engineer',
    profession: 'Registered Professional Engineer',
    email: 'muneneww@gmail.com',
    bio: 'Over 14 years of experience in design, supervision, and construction of civil and structural engineering projects. Expertise in reinforced concrete structures, steel structures, and general project design administration. Familiar with FIDIC and World Bank contract specifications.',
    qualifications: ['IEK Member (No. M3358)', 'Registered Professional Engineer (A4173)', 'FIDIC & World Bank Contract Expertise', 'Reinforced Concrete & Steel Structures'],
    education: ['B.Sc. (Hons) Civil & Structural Engineering, University of Nairobi (2000-2005)'],
  },
  {
    name: 'Hannington O. Agisa',
    title: 'Business Development Manager',
    profession: 'Sales & Strategy',
    email: 'agisaho@gmail.com',
    bio: 'Accomplished business development professional with 20+ years at Coca-Cola Beverages Africa. Expertise in sales strategy, territory management, key account management, and market expansion across Kenya and East Africa.',
    qualifications: ['Sales Strategy & Execution', 'Key Account Management', 'Market Expansion & Product Launches', 'Consumer Insights & Market Research'],
    education: ['Diploma, Sales & Marketing — ICM UK', 'Certificate, Personnel Management — Kabete Tech', 'Coke Academy Advanced Trainings'],
  },
  {
    name: 'Tabitha Wavinya Muthini',
    title: 'Land Use Planner & Environmental Expert',
    profession: 'Spatial Planner / Environmental Consultant',
    email: 'tabithawavinya500@gmail.com',
    bio: 'Motivated and environmentally conscious graduate with hands-on experience in land use planning, environmental assessments, and policy implementation. NEMA Registered Associate Expert with experience conducting Environmental Impact Assessments and Environmental Audits, guiding clients through the NEMA licensing and approval process.',
    qualifications: ['NEMA Registered Associate Expert', 'Environmental Impact Assessment & Environmental Audits', 'Land Use Planning & Spatial Planning', 'GIS and Mapping (ArcGIS)', 'Stakeholder Engagement & Regulatory Compliance', 'Report Writing & Data Analysis'],
    education: ['B.A. in Spatial Planning, Jaramogi Oginga Odinga University of Science and Technology (2016-2020)'],
  },
];

function TeamCard({ member }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div layout className="group rounded-2xl border border-border/40 bg-card hover:border-primary/40 hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="p-7">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shrink-0 font-heading text-2xl font-bold text-primary">
            {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-heading text-lg font-bold leading-tight">{member.name}</h3>
            <p className="text-sm text-primary font-medium">{member.title}</p>
            <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider mt-1">{member.profession}</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{member.bio}</p>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
              <div className="pt-4 border-t border-border/40 space-y-4">
                <div>
                  <h4 className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary font-semibold mb-2"><BadgeCheck className="w-4 h-4" /> Qualifications & Memberships</h4>
                  <ul className="space-y-1.5">{member.qualifications.map((q) => <li key={q} className="text-xs text-muted-foreground flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" /> {q}</li>)}</ul>
                </div>
                <div>
                  <h4 className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary font-semibold mb-2"><GraduationCap className="w-4 h-4" /> Education</h4>
                  <ul className="space-y-1.5">{member.education.map((q) => <li key={q} className="text-xs text-muted-foreground flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" /> {q}</li>)}</ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-2 mt-5 pt-4 border-t border-border/40">
          <button onClick={() => setExpanded(!expanded)} className="flex-1 flex items-center justify-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors">
            {expanded ? 'Show Less' : 'View Bio'} <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
          </button>
          <a href={`mailto:${member.email}`} className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all" aria-label="Email"><Mail className="w-4 h-4" /></a>
          <a href="#" className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all" aria-label="LinkedIn"><Linkedin className="w-4 h-4" /></a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <div>
      <SEO
        title="Our Team"
        description="Meet the multidisciplinary team at County Structures Limited — registered engineers, architects, environmental experts, and business development professionals driving every project."
        keywords="construction team Kenya, civil engineers, architects, environmental experts, County Structures team, EBK registered engineers"
        image={IMG.plans}
      />
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden bg-charcoal">
        <div className="absolute inset-0">
          <Image src={IMG.heroPhoto} alt="County Structures construction site at sunrise — premium commercial and residential development across Kenya" fittingType="fill" className="w-full h-full object-cover animate-ken-burns" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/30" />
        </div>
        <div className="relative max-w-9xl mx-auto px-6 pb-12">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-5xl lg:text-7xl font-bold text-white tracking-tight">Our Team</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-3 text-lg text-white/60 max-w-2xl">Highly qualified professionals — architects, engineers, and specialists driving every project.</motion.p>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-9xl mx-auto px-6">
          <Reveal><p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-14">Our multidisciplinary team brings together decades of combined experience across civil engineering, architecture, environmental science, and construction management.</p></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((m, i) => (<Reveal key={m.name} delay={i * 0.08}><TeamCard member={m} /></Reveal>))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/5 border-t border-border/40 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">Build With Our Team</h2>
          <p className="text-muted-foreground mb-8 text-lg">Our multidisciplinary experts are ready to bring your vision to life. Let's discuss your next project.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:scale-105 transition-all">
            Start Your Build <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}