import React from "react";
import { motion } from "framer-motion";
import { Code, Bot, Globe, Shield, Terminal, Zap, Database, Search } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-primary" />,
      skills: [
        { name: "Python", level: 92 },
        { name: "C++", level: 85 },
        { name: "Java", level: 80 },
        { name: "JavaScript", level: 95 },
      ],
    },
    {
      title: "Web Development",
      icon: <Globe className="text-primary" />,
      skills: [
        { name: "HTML / CSS", level: 98 },
        { name: "React / Next.js", level: 95 },
        { name: "Node.js", level: 92 },
        { name: "Tailwind CSS", level: 96 },
      ],
    },
    {
      title: "Backend & APIs",
      icon: <Database className="text-primary" />,
      skills: [
        { name: "FastAPI", level: 94 },
        { name: "REST APIs", level: 98 },
        { name: "PostgreSQL", level: 88 },
        { name: "Auth / JWT", level: 90 },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <Zap className="text-primary" />,
      skills: [
        { name: "GitHub", level: 95 },
        { name: "Vercel", level: 92 },
        { name: "Railway", level: 90 },
        { name: "Docker", level: 75 },
      ],
    },
  ];

  return (
    <div className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mb-24"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="size-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary">
            <Bot className="size-6" />
          </div>
          <h2 className="text-4xl font-black">Advanced Technical Stack</h2>
        </div>
        <p className="text-lg text-secondary leading-relaxed italic">
          "Mastering the tools of tomorrow, to solve the problems of today."
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-premium p-10 rounded-[3rem]"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="size-10 bg-primary/20 rounded-xl flex items-center justify-center">
                {category.icon}
              </div>
              <h3 className="text-2xl font-black">{category.title}</h3>
            </div>
            <div className="space-y-8">
              {category.skills.map((skill, j) => (
                <div key={j}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-black uppercase tracking-tighter opacity-80">{skill.name}</span>
                    <span className="text-xs font-bold px-3 py-1 bg-primary/10 rounded-full text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2.5 bg-slate-900/10 dark:bg-white/5 rounded-full overflow-hidden border border-slate-900/5 dark:border-white/5 shadow-inner">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: i * 0.1 + j * 0.1 }}
                      className="h-full bg-gradient-to-r from-primary via-indigo-500 to-purple-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
