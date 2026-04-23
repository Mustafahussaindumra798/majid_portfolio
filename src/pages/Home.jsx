import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, Users, Briefcase, Zap, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const words = ["Full Stack Developer", "SaaS Builder", "Founder of Cloudexify", "Open Source Contributor"];
  const typingSpeed = isDeleting ? 50 : 100;

  const [stats, setStats] = useState({
    repos: 0,
    commits: 0,
    clients: "10+",
    experience: "2+",
    loading: true
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const repoRes = await fetch("https://api.github.com/users/danyalbut96-khan/repos?per_page=100");
        const repos = await repoRes.json();
        
        const commitRes = await fetch("https://github-contributions-api.jogruber.de/v4/danyalbut96-khan?y=2025");
        const commitData = await commitRes.json();

        setStats(prev => ({
          ...prev,
          repos: Array.isArray(repos) ? repos.length : 15,
          commits: commitData?.total?.["2025"] || 200,
          loading: false
        }));
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
        setStats(prev => ({ ...prev, repos: 15, commits: 200, loading: false }));
      }
    };
    fetchStats();
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        if (displayText.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <div className="relative pt-20 pb-32 flex flex-col items-center">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 text-xs font-bold uppercase tracking-widest mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Open for collaboration
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6"
        >
          Hi, I'm <span className="text-gradient">Muhammad Majid Khan</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="h-12 md:h-16 flex items-center justify-center text-2xl md:text-4xl font-bold"
        >
          <span className="text-primary">{displayText}</span>
          <span className="w-1 h-8 md:h-12 bg-primary ml-1 animate-pulse"></span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-lg text-secondary leading-relaxed max-w-2xl"
        >
          BSc Software Engineering @ COMSATS University · Building digital products from Karak, Pakistan
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row gap-6 items-center"
        >
          <a href="#projects">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-indigo-600 text-white rounded-2xl font-black text-lg shadow-2xl shadow-indigo-500/40 hover:shadow-indigo-500/60 transition-all flex items-center gap-3 group"
            >
              View My Work <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </a>
          <a href="https://wa.me/923411949277?text=Hi%20Majid%2C%20I%27m%20interested%20in%20hiring%20you!" target="_blank" rel="noopener noreferrer">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-[#25D366] text-white rounded-2xl font-black text-lg shadow-2xl shadow-green-500/40 hover:shadow-green-500/60 transition-all flex items-center gap-3"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.135 1.524 5.882L0 24l6.302-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.214-3.732.979.997-3.645-.234-.374A9.818 9.818 0 1112 21.818z"/>
              </svg>
              Hire Me
            </motion.button>
          </a>
          <a href="/cv.pdf" download>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 glass-premium rounded-2xl font-black text-lg hover:bg-white/10 transition-all"
            >
              Download CV
            </motion.button>
          </a>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="w-full py-32 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: "Projects Built", value: stats.repos, icon: <Github className="text-indigo-500" /> },
          { label: "Commits in 2025", value: stats.commits, icon: <Briefcase className="text-green-500" /> },
          { label: "Clients Served", value: stats.clients, icon: <Users className="text-yellow-500" /> },
          { label: "Years Experience", value: stats.experience, icon: <Star className="text-primary" /> },
        ].map((stat, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="glass-premium p-8 rounded-3xl text-center"
          >
            {stats.loading ? (
              <div className="animate-pulse flex flex-col items-center">
                <div className="h-10 w-20 bg-slate-200 dark:bg-slate-800 rounded-lg mb-4"></div>
                <div className="h-4 w-24 bg-slate-200 dark:bg-slate-800 rounded"></div>
              </div>
            ) : (
              <>
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-black mb-2">{stat.value}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-secondary">{stat.label}</div>
              </>
            )}
          </motion.div>
        ))}
      </div>

      {/* Testimonials Section */}
      <div className="w-full py-32" id="testimonials">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-4">What Clients Say</h2>
          <div className="w-24 h-2 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              text: "Great work on our business website — fast delivery and clean code.",
              author: "Ali Hassan",
              role: "Startup Founder",
              initials: "AH",
              color: "bg-blue-500"
            },
            {
              text: "Cloudexify built our salon site in record time. Very professional.",
              author: "Sarah K.",
              role: "Beauty Studio Owner",
              initials: "SK",
              color: "bg-pink-500"
            },
            {
              text: "Clean UI and responsive design. Highly recommend for web projects.",
              author: "Usman R.",
              role: "Digital Agency",
              initials: "UR",
              color: "bg-purple-500"
            }
          ].map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-premium p-8 rounded-[2rem] flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-yellow-500 text-yellow-500" />)}
                </div>
                <p className="text-lg italic leading-relaxed mb-8">"{testimonial.text}"</p>
              </div>
              <div className="flex items-center gap-4">
                <div className={`size-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold`}>
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-bold text-sm">{testimonial.author}</h4>
                  <p className="text-xs opacity-60">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

