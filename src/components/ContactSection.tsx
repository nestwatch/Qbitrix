import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-24 px-6 bg-gradient-to-b from-[#0a1628] to-[#050b15]">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-[#00ffe0] rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-[#2056a0] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">Get in Touch.</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00ffe0] to-transparent mx-auto mb-6" />
          <p className="text-white/80 max-w-2xl mx-auto">
            Questions, collaborations, or feedback? Reach us anytime.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/20">
              <h3 className="text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00ffe0]/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#00ffe0]" />
                  </div>
                  <div>
                    <p className="text-white/70 mb-1">General Inquiries and Support</p>
                    <a 
                      href="mailto:shijin@nest-watch.com"
                      className="text-white hover:text-[#00ffe0] transition-colors"
                    >
                      shijin@nest-watch.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional info */}
            <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/20">
              <h3 className="text-white mb-4">Why Connect?</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ffe0] mt-2 flex-shrink-0" />
                  <span>Partnership opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ffe0] mt-2 flex-shrink-0" />
                  <span>Research collaborations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ffe0] mt-2 flex-shrink-0" />
                  <span>Product inquiries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00ffe0] mt-2 flex-shrink-0" />
                  <span>Press and media</span>
                </li>
              </ul>
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
}
