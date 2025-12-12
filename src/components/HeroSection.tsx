import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import quantumAtom from 'figma:asset/2dc6162f6781f52470269ba74a0edb5177fcac0f.png';
import heroImage from 'figma:asset/9eba949e02f9fb6d409a9f0fc58fe69003e21302.png';

export function HeroSection() {
  // Generate 3D quantum particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 3,
  }));

  // Generate orbital rings data
  const orbits = Array.from({ length: 3 }, (_, i) => ({
    id: i,
    size: 150 + i * 100,
    duration: 15 + i * 5,
    opacity: 0.3 - i * 0.08,
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#153a5f] to-[#2056a0]" />

      {/* Animated 3D quantum particle visualization */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: `radial-gradient(circle, rgba(0, 255, 224, 0.8), rgba(0, 212, 255, 0.3))`,
              boxShadow: '0 0 15px rgba(0, 255, 224, 0.6)',
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 1, 0.2],
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

      {/* Decorative background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#00ffe0] rounded-full blur-[120px] opacity-10" />
        <div className="absolute bottom-40 left-1/4 w-80 h-80 bg-[#2056a0] rounded-full blur-[100px] opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#00ffe0]/5 to-[#2056a0]/5 rounded-full blur-[80px]" />
      </div>

      {/* Orbital rings decoration */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        {orbits.map((orbit) => (
          <motion.div
            key={orbit.id}
            className="absolute rounded-full border border-[#00ffe0]"
            style={{
              width: `${orbit.size}px`,
              height: `${orbit.size}px`,
              opacity: orbit.opacity,
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: orbit.duration,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Main Content - Split Screen Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Animated logo/badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/20 rounded-full px-6 py-3"
            >
              <img 
                src={quantumAtom} 
                alt="Quantum" 
                className="w-8 h-8 object-contain drop-shadow-[0_0_10px_rgba(0,255,224,0.6)]"
              />
              <span className="text-[#00ffe0]">Powered by AI & Quantum</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-white mb-6">
                AI & Quantum Technologies for Good.
              </h1>
            </motion.div>

            <motion.p
              className="text-white/90 text-xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We build intelligent systems that empower people, protect privacy, and advance science. Our ecosystem combines cutting-edge AI with quantum computing to solve real-world challenges.
            </motion.p>

          </motion.div>

          {/* Right side - Quantum visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Main visualization container */}
            <div className="relative aspect-square max-w-lg mx-auto mt-12">
              {/* Quantum computing image */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <ImageWithFallback
                  src={heroImage}
                  alt="Quantum Computing Visualization"
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* Floating atoms/particles around the image */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-[#00ffe0]/30 to-[#00d4ff]/30 backdrop-blur-md border border-white/20 flex items-center justify-center"
                  style={{
                    left: `${[10, 80, 15, 75, 45][i]}%`,
                    top: `${[20, 30, 70, 80, 5][i]}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.5,
                  }}
                >
                  <img 
                    src={quantumAtom} 
                    alt="" 
                    className="w-6 h-6 object-contain opacity-80"
                  />
                </motion.div>
              ))}

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.line
                  x1="10%" y1="20%" x2="80%" y2="30%"
                  stroke="rgba(0, 255, 224, 0.3)"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ duration: 2, delay: 1 }}
                />
                <motion.line
                  x1="15%" y1="70%" x2="75%" y2="80%"
                  stroke="rgba(0, 255, 224, 0.3)"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.5 }}
                  transition={{ duration: 2, delay: 1.2 }}
                />
              </svg>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#00ffe0] rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-[#00ffe0] rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
