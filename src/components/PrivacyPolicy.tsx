import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PrivacyPolicy() {
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
            <h1 className="text-white mb-2">Privacy Policy for GeoQuest</h1>
            <p className="text-white/60 mb-8">Last Updated: November 4, 2025</p>

            <div className="space-y-8 text-white/80">
              {/* Section 1 */}
              <section>
                <h2 className="text-white mb-3">1. Introduction</h2>
                <p>
                  GeoQuest ("we," "our," or "us") respects your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our mobile application.
                </p>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-white mb-3">2. Information We Collect</h2>
                
                <h3 className="text-white mb-2 mt-4">2.1 Account Information</h3>
                <p className="mb-2">When you sign in with Apple or Google, we collect:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Your unique user identifier (Apple ID or Google ID)</li>
                  <li>Your email address (if provided by OAuth provider)</li>
                  <li>Your display name (if provided by OAuth provider)</li>
                </ul>

                <h3 className="text-white mb-2 mt-4">2.2 Game Data</h3>
                <p className="mb-2">We collect and store:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Game scores and statistics</li>
                  <li>Selected avatar/profile picture</li>
                  <li>Username (if you choose to set one)</li>
                  <li>Game history and achievements</li>
                </ul>

                <h3 className="text-white mb-2 mt-4">2.3 Technical Information</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Device type and operating system</li>
                  <li>App usage analytics (via AdMob)</li>
                  <li>Crash reports (for app stability)</li>
                </ul>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-white mb-3">3. How We Use Your Information</h2>
                <p className="mb-2">We use your information to:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Provide authentication and account management</li>
                  <li>Store and display your game progress and scores</li>
                  <li>Enable multiplayer gaming features</li>
                  <li>Display personalized ads (via Google AdMob)</li>
                  <li>Improve app performance and user experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-white mb-3">4. Data Storage and Security</h2>
                
                <h3 className="text-white mb-2 mt-4">4.1 Data Location</h3>
                <p>
                  Your data is stored on secure servers operated by Appwrite, located in New York City, USA. We use industry-standard security measures to protect your data.
                </p>

                <h3 className="text-white mb-2 mt-4">4.2 Data Retention</h3>
                <p>
                  We retain your data as long as your account is active. When you delete your account, all associated data is permanently deleted within 30 days.
                </p>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-white mb-3">5. Data Sharing</h2>
                <p className="mb-3">We do NOT sell your personal information. We only share data with:</p>

                <h3 className="text-white mb-2 mt-4">5.1 Service Providers</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Appwrite</strong> - For data storage and authentication</li>
                  <li><strong>Google AdMob</strong> - For displaying advertisements</li>
                  <li><strong>Apple/Google</strong> - For authentication services</li>
                </ul>

                <h3 className="text-white mb-2 mt-4">5.2 Legal Requirements</h3>
                <p>
                  We may disclose your information if required by law or to protect our rights.
                </p>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="text-white mb-3">6. Your Rights (GDPR Compliance)</h2>
                <p className="mb-3">You have the right to:</p>

                <h3 className="text-white mb-2 mt-4">6.1 Access Your Data</h3>
                <p>View all your personal data within the app (Profile screen)</p>

                <h3 className="text-white mb-2 mt-4">6.2 Delete Your Data</h3>
                <p>Delete your account and all associated data at any time via the Profile screen → Settings → Delete Account</p>

                <h3 className="text-white mb-2 mt-4">6.3 Data Portability</h3>
                <p>Request a copy of your data by contacting us at: shijinjayaprakash@gmail.com</p>

                <h3 className="text-white mb-2 mt-4">6.4 Withdraw Consent</h3>
                <p>You can withdraw consent by deleting your account</p>

                <h3 className="text-white mb-2 mt-4">6.5 Object to Processing</h3>
                <p>Contact us to object to specific data processing activities</p>
              </section>

              {/* Section 7 */}
              <section>
                <h2 className="text-white mb-3">7. Children's Privacy</h2>
                <p>
                  GeoQuest is intended for users aged 13 and above. We do not knowingly collect personal information from children under 13. If we discover that we have collected data from a child under 13, we will delete it immediately.
                </p>
              </section>

              {/* Section 8 */}
              <section>
                <h2 className="text-white mb-3">8. International Data Transfers</h2>
                <p className="mb-2">
                  If you are located in the European Economic Area (EEA), UK, or Switzerland, your data may be transferred to and processed in the United States. We ensure appropriate safeguards are in place through:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Standard Contractual Clauses (SCCs)</li>
                  <li>Adequate security measures</li>
                  <li>Your explicit consent when creating an account</li>
                </ul>
              </section>

              {/* Section 9 */}
              <section>
                <h2 className="text-white mb-3">9. Cookies and Tracking</h2>
                <p className="mb-2">We use:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Authentication Cookies</strong> - To keep you logged in</li>
                  <li><strong>AdMob Tracking</strong> - For personalized advertising (you can opt-out in device settings)</li>
                  <li><strong>Analytics</strong> - To understand app usage and improve features</li>
                </ul>
              </section>

              {/* Section 10 */}
              <section>
                <h2 className="text-white mb-3">10. Third-Party Links</h2>
                <p>
                  GeoQuest may contain links to third-party websites or services (e.g., Qbitrix.com in About Us). We are not responsible for their privacy practices.
                </p>
              </section>

              {/* Section 11 */}
              <section>
                <h2 className="text-white mb-3">11. Updates to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of significant changes through the app or via email.
                </p>
              </section>

              {/* Section 12 */}
              <section>
                <h2 className="text-white mb-3">12. Contact Us</h2>
                <p className="mb-2">For privacy-related questions, requests, or concerns, contact us at:</p>
                <div className="ml-4 space-y-1">
                  <p><strong>Email:</strong> support@qbitrix.com</p>
                  <p><strong>Data Controller:</strong> Shijin Jayaprakash</p>
                  <p><strong>Address:</strong> 1207-1900 Lakeshore Blvd W, Toronto, ON, M6S1A4</p>
                </div>
              </section>

              {/* Section 13 */}
              <section>
                <h2 className="text-white mb-3">13. Specific Rights for EU/EEA Users</h2>
                <p className="mb-2">Under GDPR, EU/EEA users have additional rights:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Right to rectification (correct inaccurate data)</li>
                  <li>Right to restriction of processing</li>
                  <li>Right to object to automated decision-making</li>
                  <li>Right to lodge a complaint with your local data protection authority</li>
                </ul>
              </section>

              {/* Section 14 */}
              <section>
                <h2 className="text-white mb-3">14. Data Processing Legal Basis</h2>
                <p className="mb-2">We process your data based on:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Consent</strong> - When you create an account</li>
                  <li><strong>Contract</strong> - To provide app services</li>
                  <li><strong>Legitimate Interest</strong> - For app improvement and security</li>
                  <li><strong>Legal Obligation</strong> - When required by law</li>
                </ul>
              </section>

              {/* Acknowledgment */}
              <section className="mt-12 pt-8 border-t border-white/20">
                <p className="text-center italic">
                  By using GeoQuest, you acknowledge that you have read and understood this Privacy Policy.
                </p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
