import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Brain, Atom, Network } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-6 bg-gradient-to-b from-[#2056a0] to-[#0a1628]">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#00ffe0] rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">Who We Are.</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00ffe0] to-transparent mx-auto" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20"
          >
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              Qbitrix is a research-driven initiative pioneering AI and quantum technology for human progress. Our mission: to make intelligence serve humanity, not replace it.
            </p>
            <p className="text-white/80 leading-relaxed mb-6">
              We believe in the transformative power of emerging technologies when guided by ethical principles and human-centric design. Our team of researchers, engineers, and innovators work at the intersection of artificial intelligence, quantum computing, and real-world applications.
            </p>
            
            {/* Features */}
            <div className="space-y-4 mt-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#00ffe0]/20 flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-[#00ffe0]" />
                </div>
                <div>
                  <h3 className="text-white">AI-First Approach</h3>
                  <p className="text-white/70">Intelligent systems that learn and adapt to human needs</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#00ffe0]/20 flex items-center justify-center flex-shrink-0">
                  <Atom className="w-6 h-6 text-[#00ffe0]" />
                </div>
                <div>
                  <h3 className="text-white">Quantum Computing</h3>
                  <p className="text-white/70">Leveraging quantum principles for breakthrough solutions</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#00ffe0]/20 flex items-center justify-center flex-shrink-0">
                  <Network className="w-6 h-6 text-[#00ffe0]" />
                </div>
                <div>
                  <h3 className="text-white">Human-Centric Design</h3>
                  <p className="text-white/70">Technology that empowers, protects, and enhances lives</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
