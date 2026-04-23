import React from "react";
import { motion } from "framer-motion";
import { Wrench, Type, Image as ImageIcon, ExternalLink, Zap, Box, Compass } from "lucide-react";

const Dashboard = () => {
  const tools = [
    {
      title: "Text Tools Pro",
      desc: "Industrial-strength suite for text manipulation, extraction, and validation.",
      icon: <Type className="size-10 text-primary" />,
      color: "blue",
      tags: ["Utility", "RegEx", "Speed"]
    },
    {
      title: "Background AI",
      desc: "Remove backgrounds with pixel-perfect precision using local edge-detection models.",
      icon: <ImageIcon className="size-10 text-indigo-500" />,
      color: "indigo",
      tags: ["AI", "Graphics", "ML"]
    },
    {
      title: "Dev Console",
      desc: "A monitoring dashboard for your API health and deployment metrics.",
      icon: <Box className="size-10 text-purple-500" />,
      color: "purple",
      tags: ["DevOps", "Status", "Live"]
    }
  ];

  return (
    <div className="py-20">
      <div className="flex flex-col md:flex-row items-end justify-between gap-10 mb-20">
         <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
         >
           <div className="flex items-center gap-3 mb-6">
              <Compass className="text-primary size-6 animate-spin-slow" />
              <span className="text-xs font-black uppercase tracking-widest text-primary">System Monitoring & Tools</span>
           </div>
           <h2 className="text-5xl font-black mb-6">Explore the <span className="text-primary italic">Forge</span>.</h2>
           <p className="text-lg text-secondary">Standalone internal tools and dashboards built during deep-tech development sprints.</p>
         </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
         {tools.map((t, i) => (
           <motion.div
             key={i}
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: i * 0.1 }}
             className="glass-premium p-10 rounded-[3rem] hover:border-primary/50 transition-all group h-full flex flex-col"
           >
             <div className="flex justify-between items-start mb-8">
                <div className="size-20 bg-background-dark/20 rounded-3xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                   {t.icon}
                </div>
                <div className="p-2 glass-premium rounded-xl opacity-40 group-hover:opacity-100 transition-opacity">
                   <ExternalLink className="size-4" />
                </div>
             </div>
             
             <h3 className="text-2xl font-black mb-4">{t.title}</h3>
             <p className="text-secondary text-sm leading-relaxed mb-8 flex-grow">{t.desc}</p>
             
             <div className="flex flex-wrap gap-2 mb-10">
                {t.tags.map(tag => (
                   <span key={tag} className="text-[10px] font-black uppercase tracking-tighter px-3 py-1 bg-primary/10 text-primary rounded-full">{tag}</span>
                ))}
             </div>

             <motion.button 
               whileHover={{ x: 5 }}
               className="w-full h-16 glass-premium rounded-2xl flex items-center justify-between px-8 font-black text-xs uppercase tracking-widest group-hover:bg-primary group-hover:text-white transition-all"
             >
                Initialize <Zap className="size-4" />
             </motion.button>
           </motion.div>
         ))}
      </div>
    </div>
  );
};

export default Dashboard;
