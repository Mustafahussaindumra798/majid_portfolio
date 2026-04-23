import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="py-20 max-w-4xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs mb-10 hover:translate-x-1 transition-transform">
        <ArrowLeft className="size-4" /> Home
      </Link>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-premium p-10 md:p-16 rounded-[3rem]"
      >
        <div className="flex items-center gap-4 mb-10">
          <ShieldCheck className="size-10 text-primary" />
          <h1 className="text-4xl font-black">Privacy Policy</h1>
        </div>

        <div className="space-y-8 text-secondary leading-relaxed">
          <section>
            <h2 className="text-xl font-bold mb-4">1. Data Collection</h2>
            <p>We only collect information that you voluntarily provide through our contact form, such as your name and email address. This data is used solely to respond to your inquiries.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">2. Cookies</h2>
            <p>Our portfolio uses minimal local storage to remember your theme preference (Dark/Light mode). We do not use tracking cookies or third-party marketing analytics.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">3. Third-Party Services</h2>
            <p>We may link to external sites like GitHub or LinkedIn. We are not responsible for their privacy practices. Our backend is hosted on secure platforms like Railway.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">4. Security</h2>
            <p>We implement professional-grade security measures to protect your information, but remember that no method of transmission over the internet is 100% secure.</p>
          </section>

          <div className="pt-10 border-t border-white/5 text-xs italic">
            Last updated: March 18, 2024
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
