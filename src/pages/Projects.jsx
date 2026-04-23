import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Code, Filter, Sparkles, Database, Layout } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "APIs", "Web", "AI"];

  const projects = [
    {
      title: "Taskflow",
      category: "Web",
      description: "Taskflow is a modern task management dashboard with list, board, and calendar views for productivity tracking.",
      tech: ["Next.js", "Tailwind CSS", "CSS"],
      image: "https://s.wordpress.com/mshots/v1/https://todo-eta-six-26.vercel.app?w=1200",
      live: "https://todo-eta-six-26.vercel.app/",
      github: "#"
    },
    {
      title: "Sarwaan Digital",
      category: "Web",
      description: "Admissions landing page for Sarwaan Digital with course highlights, campus details, and strong CTA placement.",
      tech: ["Next.js", "Tailwind CSS", "CSS"],
      image: "https://s.wordpress.com/mshots/v1/https://sarwaan.vercel.app?w=1200",
      live: "https://sarwaan.vercel.app/",
      github: "#"
    },
    {
      title: "Cyanide VPN",
      category: "Web",
      description: "A sleek VPN dashboard showcasing connection status, country selection, and upload/download metrics.",
      tech: ["Next.js", "Tailwind CSS", "CSS"],
      image: "https://s.wordpress.com/mshots/v1/https://cyanidevpn.vercel.app?w=1200",
      live: "https://cyanidevpn.vercel.app/",
      github: "#"
    },
    {
      title: "Makeup Studio",
      category: "Web",
      description: "A beauty studio homepage with elegant pink branding, booking actions, and featured review statistics.",
      tech: ["Next.js", "Tailwind CSS", "CSS"],
      image: "https://s.wordpress.com/mshots/v1/https://ayanoormakeupstudio.vercel.app?w=1200",
      live: "https://ayanoormakeupstudio.vercel.app/",
      github: "#"
    },
    {
      title: "Royal Fitness",
      category: "Web",
      description: "A premium gym landing page presenting services, trainer info, and join-now membership callouts.",
      tech: ["Next.js", "Tailwind CSS", "CSS"],
      image: "https://s.wordpress.com/mshots/v1/https://royalfitnesgym.vercel.app?w=1200",
      live: "https://royalfitnesgym.vercel.app/",
      github: "#"
    },
    {
      title: "Text Tools",
      category: "Web",
      description: "A modern text utilities interface for uppercase/lowercase conversion, word count, and text cleanup.",
      tech: ["Next.js", "Tailwind CSS", "CSS"],
      image: "https://s.wordpress.com/mshots/v1/https://text-frontend-lyart.vercel.app?w=1200",
      live: "https://text-frontend-lyart.vercel.app/",
      github: "#"
    },
    {
      title: "ClearCut",
      category: "AI",
      description: "AI-powered image background remover with drag-and-drop upload and instant transparent output.",
      tech: ["Python", "Tailwind CSS", "CSS"],
      image: "https://s.wordpress.com/mshots/v1/https://bg-remover-frontend-ochre.vercel.app?w=1200",
      live: "https://bg-remover-frontend-ochre.vercel.app/",
      github: "#"
    }
  ];

  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="py-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="max-w-xl"
        >
          <div className="flex items-center gap-3 mb-4">
             <Filter className="text-primary size-5" />
             <span className="text-xs font-black uppercase tracking-widest text-primary">Portfolio Selection</span>
          </div>
          <h2 className="text-5xl font-black mb-6">Proven <span className="text-primary">Impact</span> Through Code.</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            A diverse collection of systems and interfaces built with performance and user experience as the core.
          </p>
        </motion.div>

        <div className="flex bg-slate-100 dark:bg-white/5 p-2 rounded-2xl border border-slate-200 dark:border-white/5 shadow-inner">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-xl text-sm font-black transition-all ${filter === cat ? 'bg-primary text-white shadow-lg' : 'text-slate-500 hover:text-primary'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((p, i) => (
            <motion.div
              layout
              key={p.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group glass-premium rounded-[3rem] overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10">
                   <div className="flex gap-4">
                     <a href={p.live} className="size-14 bg-white text-dark rounded-2xl flex items-center justify-center hover:scale-110 transition-transform"><ExternalLink className="size-6" /></a>
                     <a href={p.github} className="size-14 glass-premium text-white rounded-2xl flex items-center justify-center hover:scale-110 transition-transform"><Github className="size-6" /></a>
                   </div>
                </div>
                <div className="absolute top-6 right-6 px-4 py-2 glass-premium rounded-xl text-xs font-black uppercase text-white tracking-widest shadow-2xl">
                   {p.category}
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map(t => (
                    <span key={t} className="px-4 py-2 bg-slate-800/50 border border-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-8">
                  <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-2xl text-sm font-black transition hover:bg-primary/90">
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;
