import React from "react";
import { motion } from "framer-motion";
import { User, Target, Lightbulb, Rocket, ChevronRight } from "lucide-react";

const About = () => {
  const journeys = [
    {
      year: "2024",
      title: "Current Focus: AI & SaaS",
      desc: "Building specialized API solutions and AI-driven productivity tools for businesses.",
      active: true
    },
    {
      year: "2023",
      title: "Enterprise Solutions",
      desc: "Developed scalable backend architectures for e-commerce and fintech platforms.",
      active: false
    },
    {
      year: "2021",
      title: "The Start of SaaS",
      desc: "Launched first three micro-SaaS products and discovered the power of independent tools.",
      active: false
    }
  ];

  return (
    <div className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Left Side: Story */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest mb-6">
            <User className="size-3" /> All About Me
          </div>
          <h2 className="text-5xl font-black mb-8">Deeply Rooted in <span className="text-primary">Innovation</span> & Problems Solving.</h2>
          
          <div className="space-y-6 text-lg text-secondary leading-relaxed">
            <p>
              I am <span className="text-primary font-bold">Muhammad Majid Khan</span>, a software engineer who believes that every complex problem has a simple, elegant solution waiting to be discovered.
            </p>
            <p>
              My journey started with a fascination for how code can bridge the gap between imagination and reality. Over the years, I've mastered languages like <span className="font-bold text-primary">Python, C++, Java, and JavaScript</span> to build tools that matter.
            </p>
            <p>
              Today, my focus is on <span className="font-bold text-primary">AI and SaaS infrastructure</span>. I don't just build apps; I create systems that are high-performance, scalable, and delightful to use.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6">
            {[
              { label: "Mindset", value: "Problem-Solver", icon: <Target className="text-primary" /> },
              { label: "Focus", value: "SaaS Tools", icon: <Rocket className="text-primary" /> },
            ].map((box, i) => (
              <div key={i} className="glass-premium p-6 rounded-2xl">
                <div className="mb-4">{box.icon}</div>
                <div className="text-slate-500 uppercase text-[10px] font-black tracking-widest mb-1">{box.label}</div>
                <div className="text-lg font-bold">{box.value}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-premium p-10 md:p-16 rounded-[3rem]"
        >
          <h3 className="text-2xl font-black mb-12 flex items-center gap-3">
             The Journey <ChevronRight className="size-6 text-primary" />
          </h3>
          <div className="relative space-y-12">
            <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-primary/20"></div>
            {journeys.map((j, i) => (
              <div key={i} className="relative pl-10">
                <div className={`absolute left-0 top-1.5 size-4 rounded-full border-4 border-background-dark z-10 ${j.active ? 'bg-primary ring-4 ring-primary/20' : 'bg-slate-700'}`}></div>
                <div className="text-sm font-black text-primary mb-2 tracking-tighter uppercase">{j.year}</div>
                <h4 className={`text-xl font-bold mb-2 ${j.active ? 'text-primary' : 'text-secondary opacity-50'}`}>{j.title}</h4>
                <p className="text-secondary text-sm leading-relaxed">{j.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-primary/10 rounded-3xl border border-primary/20">
            <div className="flex items-center gap-4">
              <Lightbulb className="size-8 text-primary" />
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                "Simple is better than complex. Complex is better than complicated."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
