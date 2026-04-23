import React from "react";
import { motion } from "framer-motion";
import { Code, Bot, Globe, Database, Zap } from "lucide-react";

// Import Assets
import php_logo_png from "../assets/php-logo.png";
import react_logo_jpg from "../assets/react-logo.jpg";
import node_js_logo_png from "../assets/node-js-logo.png";
import next_js_logo_png from "../assets/next-js-logo.png";
import python_logo_jpg from "../assets/python-logo.jpg";
import tailwind_css_logo_png from "../assets/tailwind-css-logo.png";
import js_logo_jpg from "../assets/js-logo.jpg";
import figma_jpg from "../assets/figma.jpg";
import cpp_jpg from "../assets/c++.jpg";
import java_jpg from "../assets/java.jpg";
import html_jpg from "../assets/html.jpg";
import postgresql_webp from "../assets/PostgreSQL.webp";
import rest_apis_webp from "../assets/REST APIs.webp";
import docker_webp from "../assets/docker.webp";
import github_logo_png from "../assets/github-logo.png";
import railway_webp from "../assets/railway.webp";
import vercel_webp from "../assets/vercel.webp";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-primary" />,
      skills: [
        { name: "Python", level: 92, icon: python_logo_jpg },
        { name: "C++", level: 85, icon: cpp_jpg },
        { name: "Java", level: 80, icon: java_jpg },
        { name: "JavaScript", level: 95, icon: js_logo_jpg },
      ],
    },
    {
      title: "Web Development",
      icon: <Globe className="text-primary" />,
      skills: [
        { name: "HTML / CSS", level: 98, icon: html_jpg },
        { name: "React", level: 95, icon: react_logo_jpg },
        { name: "Next.js", level: 95, icon: next_js_logo_png },
        { name: "Node.js", level: 92, icon: node_js_logo_png },
        { name: "Tailwind CSS", level: 96, icon: tailwind_css_logo_png },
      ],
    },
    {
      title: "Backend & APIs",
      icon: <Database className="text-primary" />,
      skills: [
        { name: "PHP", level: 88, icon: php_logo_png },
        { name: "REST APIs", level: 98, icon: rest_apis_webp },
        { name: "PostgreSQL", level: 88, icon: postgresql_webp },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <Zap className="text-primary" />,
      skills: [
        { name: "Figma", level: 90, icon: figma_jpg },
        { name: "GitHub", level: 95, icon: github_logo_png },
        { name: "Vercel", level: 92, icon: vercel_webp },
        { name: "Railway", level: 90, icon: railway_webp },
        { name: "Docker", level: 75, icon: docker_webp },
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
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-4">
                      {skill.icon && (
                        <div className="size-12 rounded-2xl bg-white dark:bg-white/5 p-2 shadow-lg border border-slate-200 dark:border-white/10 flex items-center justify-center">
                          <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                        </div>
                      )}
                      <span className="text-base font-black uppercase tracking-tighter text-secondary dark:text-white/80">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-xs font-bold px-4 py-1.5 bg-primary/10 rounded-full text-primary border border-primary/20">
                      {skill.level}%
                    </span>
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
