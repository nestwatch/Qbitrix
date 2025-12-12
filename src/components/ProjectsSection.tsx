import { motion } from 'motion/react';
import { Card } from './ui/card';
import { ArrowRight, Home, GraduationCap, Heart, Atom } from 'lucide-react';

const projects = [
  {
    name: 'Nest Watch',
    tagline: 'Smart house sitting platform powered by AI',
    description: 'Connect homeowners with trusted house sitters. AI-driven matching ensures security and peace of mind for both parties.',
    icon: Home,
    iconColor: '#00ffe0',
    glowColor: 'rgba(0, 255, 224, 0.15)',
  },
  {
    name: 'EduQuest',
    tagline: 'Personalized learning through AI',
    description: 'An adaptive educational platform that tailors content to each learner\'s unique pace, style, and goals.',
    icon: GraduationCap,
    iconColor: '#00d4ff',
    glowColor: 'rgba(0, 212, 255, 0.15)',
  },
  {
    name: 'Ayush',
    tagline: 'Holistic wellness through technology',
    description: 'AI-powered wellness companion for mental health, meditation, and personalized health insights.',
    icon: Heart,
    iconColor: '#ff5e9d',
    glowColor: 'rgba(255, 94, 157, 0.15)',
  },
  {
    name: 'Quantum Lab',
    tagline: 'Research & development hub',
    description: 'Our core R&D initiative exploring quantum algorithms and next-generation computing solutions.',
    icon: Atom,
    iconColor: '#a78bfa',
    glowColor: 'rgba(167, 139, 250, 0.15)',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 px-6 bg-gradient-to-b from-[#0a1628] via-[#153a5f] to-[#0a1628] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-40 left-1/4 w-96 h-96 bg-[#00ffe0] rounded-full blur-[150px]" />
        <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-white rounded-full blur-[150px]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00ffe0] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">Our Ecosystem</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00ffe0] to-transparent mx-auto mb-6" />
          <p className="text-white/80 max-w-3xl mx-auto">
            A suite of innovative products and research initiatives, each leveraging AI and quantum computing for real-world impact.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-white/40 transition-all duration-500 h-full rounded-3xl p-8 hover:shadow-[0_0_50px_rgba(0,255,224,0.2)] hover:-translate-y-1">
                  {/* Gradient overlay on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at top left, ${project.glowColor}, transparent 60%)`,
                    }}
                  />
                  
                  {/* Border glow effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, ${project.iconColor}20, transparent)`,
                    }}
                  />

                  {/* Icon */}
                  <div className="relative mb-6 flex items-start">
                    <div 
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                      style={{
                        boxShadow: `0 0 20px ${project.iconColor}40`,
                      }}
                    >
                      <Icon 
                        className="w-8 h-8 transition-colors duration-500" 
                        style={{ color: project.iconColor }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative space-y-4">
                    <h3 className="text-white">{project.name}</h3>
                    
                    <p 
                      className="transition-colors duration-300"
                      style={{ color: project.iconColor }}
                    >
                      {project.tagline}
                    </p>
                    
                    <p className="text-white/70 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Coming Soon Label - Bottom Right */}
                  <div className="relative mt-8 flex justify-end">
                    <span className="text-white/60">Coming Soon</span>
                  </div>

                  {/* Corner accent */}
                  <div 
                    className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at top right, ${project.iconColor}, transparent 70%)`,
                    }}
                  />
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
