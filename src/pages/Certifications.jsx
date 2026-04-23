import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar, ShieldCheck } from "lucide-react";

// Import Assets
import certAiAgents from "../assets/cert-ai-agents.jpg";
import certN8N from "../assets/cert-n8n.jpg";

const Certifications = () => {
  const certifications = [
    {
      title: "AI Agents Mastery",
      issuer: "Advanced AI Academy",
      date: "Feb 2024",
      image: certAiAgents,
      link: "#",
      description: "Comprehensive certification in building autonomous AI agents and LLM orchestration."
    },
    {
      title: "Workflow Automation with N8N",
      issuer: "Automation Experts",
      date: "Jan 2024",
      image: certN8N,
      link: "#",
      description: "Mastered complex workflow automations and API integrations using N8N."
    }
  ];

  return (
    <div className="py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mb-24"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="size-14 bg-primary/20 rounded-2xl flex items-center justify-center text-primary shadow-lg shadow-primary/20">
            <Award className="size-8" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter">Verified <span className="text-primary italic">Expertise</span></h1>
        </div>
        <p className="text-xl text-secondary leading-relaxed max-w-2xl">
          Continuous learning is the core of innovation. Here are the professional milestones that validate my technical journey.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-[3rem] glass-premium border border-white/10"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img 
                src={cert.image} 
                alt={cert.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent opacity-60" />
            </div>

            <div className="p-10 relative">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="size-5 text-primary" />
                <span className="text-xs font-black uppercase tracking-widest text-primary/80">{cert.issuer}</span>
              </div>
              <h3 className="text-3xl font-black mb-4 group-hover:text-primary transition-colors">{cert.title}</h3>
              <p className="text-secondary mb-8 line-clamp-2">{cert.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                  <Calendar className="size-4" />
                  {cert.date}
                </div>
                <motion.a 
                  href={cert.link}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-sm font-black text-primary uppercase tracking-widest"
                >
                  Verify <ExternalLink className="size-4" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
