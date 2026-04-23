import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Database, Layout, Sparkles, MessageSquare, HelpCircle, FileText } from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      title: "API Development",
      desc: "Architecting robust backend systems that scale flawlessly with your business needs. Specialized in FastAPI and Node.js.",
      icon: <Database className="size-10 text-primary" />,
      features: ["Real-time Data", "Auth Integrations", "Optimized Querying"]
    },
    {
      title: "AI Tools & RAG",
      desc: "Harnessing the power of LLMs to build contextual, generative, and highly intelligent automation pipelines.",
      icon: <Sparkles className="size-10 text-indigo-500" />,
      features: ["Vector Search", "Gemini/GPT Integration", "Data Analysis"]
    },
    {
      title: "Modern Web Apps",
      desc: "Creating pixel-perfect, high-performance interfaces with a heavy focus on user psychology and interaction design.",
      icon: <Layout className="size-10 text-purple-500" />,
      features: ["React/Next.js", "Framer Motion", "Mobile First"]
    }
  ];

  return (
    <div className="py-20 space-y-40">
      {/* Services Grid */}
      <section>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-5xl font-black mb-6">Expert <span className="text-primary">Capabilities</span></h2>
          <p className="text-lg text-secondary italic">"I provide the engineering excellence required to turn ambitious concepts into market-ready realities."</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {mainServices.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-premium p-12 rounded-[3.5rem] hover:rotate-2 transition-transform h-full flex flex-col"
            >
              <div className="size-20 bg-background-dark/20 rounded-3xl flex items-center justify-center mb-8 shadow-inner border border-white/5">
                {s.icon}
              </div>
              <h3 className="text-2xl font-black mb-6">{s.title}</h3>
              <p className="text-secondary text-sm leading-relaxed mb-8 flex-grow">{s.desc}</p>
              <ul className="space-y-4 pt-8 border-t border-white/5">
                {s.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-xs font-black uppercase tracking-tighter opacity-80">
                    <CheckCircle className="size-4 text-primary" /> {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Marquee / Grid Preview */}
      <section className="py-20">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
           <div className="lg:col-span-1">
              <h3 className="text-4xl font-black mb-6 flex items-center gap-3"><MessageSquare className="text-primary" /> Kind Words</h3>
              <p className="text-secondary mb-8">What founders and collaborators say about working with me on deep-tech projects.</p>
           </div>
           <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { name: "Sarah J.", role: "CEO @ FutureFlow", text: "Anon's ability to simplify complex AI requirements into a working API saved our project months of R&D." },
                { name: "David M.", role: "Lead Dev @ CloudScape", text: "The cleanest React architecture I've seen. Performance scores across all our pages jumped by 30%." }
              ].map((t, i) => (
                <div key={i} className="glass-premium p-10 rounded-3xl border-l-[6px] border-primary">
                   <p className="text-lg italic mb-6">"{t.text}"</p>
                   <div className="flex items-center gap-4">
                      <div className="size-10 bg-slate-800 rounded-full"></div>
                      <div>
                        <div className="font-bold">{t.name}</div>
                        <div className="text-xs text-primary font-black uppercase tracking-tighter">{t.role}</div>
                      </div>
                   </div>
                </div>
              ))}
           </div>
         </div>
      </section>

      {/* FAQ & Quick Links */}
       <section className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h3 className="text-4xl font-black mb-10 flex items-center gap-3"><HelpCircle className="text-primary" /> FAQ</h3>
            <div className="space-y-6">
              {[
                { q: "What's your typical tech stack?", a: "I primary use Python (FastAPI) for backends and React/Next.js for frontends." },
                { q: "Do you handle solo projects?", a: "Yes, I specialize in end-to-end MVP development for early-stage startups." }
              ].map((faq, i) => (
                <details key={i} className="group glass-premium rounded-2xl">
                   <summary className="p-6 cursor-pointer font-bold list-none flex justify-between items-center group-open:text-primary transition-colors">
                      {faq.q}
                      <span className="group-open:rotate-180 transition-transform">▼</span>
                   </summary>
                   <div className="p-6 pt-0 text-secondary text-sm leading-relaxed border-t border-white/5">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
          <div className="glass-premium p-12 rounded-[3rem] bg-primary/10 border-primary/20 h-fit">
            <h3 className="text-2xl font-black mb-6 flex items-center gap-3"><FileText className="text-primary" /> Blog / Insights</h3>
            <p className="text-secondary mb-8 font-medium">Coming soon: I'll be sharing articles on AI integration, modern React patterns, and SaaS architecture.</p>
            <div className="h-40 bg-background-dark/40 rounded-2xl flex items-center justify-center border border-white/5 border-dashed">
               <span className="text-xs font-black uppercase tracking-widest opacity-30">Writing in Progress...</span>
            </div>
          </div>
       </section>
    </div>
  );
};

export default Services;
