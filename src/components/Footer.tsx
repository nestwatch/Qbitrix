import { motion } from 'motion/react';
import globeLogo from 'figma:asset/531b1f5e657405e7dec0e8caf5e1b94f2c2ea8e6.png';
import quantumAtom from 'figma:asset/2dc6162f6781f52470269ba74a0edb5177fcac0f.png';
import qbitrixLogo from 'figma:asset/6ccd07d6525d4a191b25f964cd502ff0936372b5.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050b15] border-t border-white/10">
      {/* Gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#00ffe0] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Logo and tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="relative w-10 h-10">
              <img 
                src={quantumAtom} 
                alt="Qbitrix Quantum Atom" 
                className="w-full h-full object-contain"
              />
            </div>
            <img 
              src={qbitrixLogo} 
              alt="Qbitrix" 
              className="h-16 object-cover scale-200"
            />
          </div>
          <p className="text-white/60">
            Pioneering AI & Quantum Technologies for Good
          </p>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-8"
        >
          <a
            href="/geoquest-privacy-policy"
            className="text-white/70 hover:text-[#00ffe0] transition-colors"
          >
            Privacy Policy
          </a>
          <span className="text-white/30">•</span>
          <a
            href="#terms"
            className="text-white/70 hover:text-[#00ffe0] transition-colors"
          >
            Terms of Use
          </a>
          <span className="text-white/30">•</span>
          <a
            href="#support"
            className="text-white/70 hover:text-[#00ffe0] transition-colors"
          >
            Support
          </a>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-white/50"
        >
          <p>© {currentYear} Qbitrix Inc. All rights reserved.</p>
        </motion.div>
      </div>

      {/* Background glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#00ffe0]/5 blur-[80px] pointer-events-none" />
    </footer>
  );
}