import { motion } from 'motion/react';
import { useState } from 'react';
import quantumAtom from 'figma:asset/2dc6162f6781f52470269ba74a0edb5177fcac0f.png';
import qbitrixLogo from 'figma:asset/6ccd07d6525d4a191b25f964cd502ff0936372b5.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Header() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const navLinks = [
    { name: 'Our Vision', href: '#vision' },
    { name: 'Ecosystem', href: '#about' },
    { name: 'Products', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  // Generate particle positions
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 overflow-hidden">
      {/* Deep space gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0d1b3a] to-[#0f1e42]" />
      
      {/* Subtle glowing particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-[#00ffe0]"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              boxShadow: '0 0 8px rgba(0, 255, 224, 0.6)',
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Content container */}
      <div className="relative max-w-7xl mx-auto px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo section */}
          <motion.div 
            className="flex items-center gap-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-12 h-12">
              <img 
                src={quantumAtom} 
                alt="Qbitrix Quantum Atom" 
                className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(0,255,224,0.5)]"
              />
            </div>
            <img
              src={qbitrixLogo}
              alt="Qbitrix Logo"
              className="h-32 w-auto object-contain -ml-5"
            />
          </motion.div>

          {/* Navigation links */}
          <motion.nav 
            className="hidden md:flex items-center gap-10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="relative text-white/90 transition-colors duration-300 hover:text-white"
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                {link.name}
                {/* Animated underline */}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00ffe0] to-[#00d4ff]"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{
                    scaleX: hoveredLink === link.name ? 1 : 0,
                    opacity: hoveredLink === link.name ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
              </motion.a>
            ))}
          </motion.nav>
        </div>
      </div>

      {/* Bottom border glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00ffe0]/30 to-transparent" />
    </header>
  );
}
