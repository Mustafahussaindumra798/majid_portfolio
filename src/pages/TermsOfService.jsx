import React from "react";
import { motion } from "framer-motion";
import { FileText, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
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
          <FileText className="size-10 text-primary" />
          <h1 className="text-4xl font-black">Terms of Service</h1>
        </div>

        <div className="space-y-8 text-secondary leading-relaxed">
          <section>
            <h2 className="text-xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p>By accessing this portfolio, you agree to be bound by these terms. This site is intended as a professional showcase of software engineering capabilities.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">2. Intellectual Property</h2>
            <p>The code, designs, and content exhibited here are the intellectual property of M. Majid Khan unless otherwise stated. Projects may be linked to their respective open-source licenses.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">3. Use of Information</h2>
            <p>Information provided on this site is for general information purposes only. While I strive for accuracy, I make no warranties about the completeness or reliability of the tools showcased.</p>
          </section>

          <div className="pt-10 border-t border-white/5 text-xs italic">
            Last updated: March 18, 2024
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TermsOfService;
