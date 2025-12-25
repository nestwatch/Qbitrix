import { motion } from 'motion/react';
import { ArrowLeft, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AccountDeletion() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1628] via-[#153a5f] to-[#0a1628]">
      {/* Background decoration */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#00ffe0] rounded-full blur-[150px]" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-[#2056a0] rounded-full blur-[150px]" />
      </div>

      <div className="relative">
        {/* Header */}
        <div className="sticky top-0 z-50 backdrop-blur-xl bg-[#0a1628]/80 border-b border-white/10">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-[#00ffe0] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-6 py-12"
        >
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 md:p-12 border border-white/20">
            <div className="flex items-center gap-3 mb-2">
              <Trash2 className="w-6 h-6 text-[#00ffe0]" />
              <h1 className="text-white">GeoQuest – Account & Data Deletion</h1>
            </div>
            
            <div className="space-y-8 text-white/80 mt-8">
              <section>
                <p className="text-lg mb-6">
                  Users can delete their account and associated personal data directly from within the GeoQuest app by navigating to:
                </p>
                
                <div className="bg-gradient-to-r from-[#0a1628]/60 to-[#153a5f]/60 rounded-lg p-6 border border-[#00ffe0]/20 mb-6">
                  <div className="text-[#00ffe0] font-medium text-lg">
                    Settings → Delete My Profile
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-white mb-4">When an account is deleted:</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00ffe0] mt-2 flex-shrink-0" />
                    <p>Email address and authentication credentials are permanently removed</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00ffe0] mt-2 flex-shrink-0" />
                    <p>User profile and progress data are deleted</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00ffe0] mt-2 flex-shrink-0" />
                    <p>Anonymous analytics data may be retained in aggregated form</p>
                  </div>
                </div>
              </section>

              <section>
                <div className="bg-gradient-to-r from-[#2056a0]/30 to-[#153a5f]/30 rounded-lg p-6 border border-white/10">
                  <h3 className="text-white mb-2">Need Help?</h3>
                  <p>
                    For support, contact: 
                    <a 
                      href="mailto:support@qbitrix.com" 
                      className="text-[#00ffe0] hover:text-[#00ffe0]/80 transition-colors ml-1 underline decoration-[#00ffe0]/30 hover:decoration-[#00ffe0]/60"
                    >
                      support@qbitrix.com
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}