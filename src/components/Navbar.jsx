import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Terminal, Cpu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const randomThemes = [
      { filter: "hue-rotate(0deg) saturate(1) brightness(1)", bg: "#121022" },
      { filter: "hue-rotate(45deg) saturate(1.15) brightness(0.98)", bg: "#f6f6f8" },
      { filter: "hue-rotate(90deg) saturate(1.1) brightness(1)", bg: "#f6f6f8" },
      { filter: "hue-rotate(200deg) saturate(1.2) brightness(0.97)", bg: "#f6f6f8" },
      { filter: "hue-rotate(280deg) saturate(1.05) brightness(1.02)", bg: "#f6f6f8" },
    ];

    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.filter = "none";
      document.documentElement.style.backgroundColor = "#121022";
    } else {
      document.documentElement.classList.remove("dark");
      const theme = randomThemes[Math.floor(Math.random() * randomThemes.length)];
      document.documentElement.style.filter = theme.filter;
      document.documentElement.style.backgroundColor = theme.bg;
    }
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDark]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`glass-premium rounded-[2rem] px-8 h-20 transition-all duration-500 flex items-center justify-between ${scrolled ? 'bg-background-light/90 dark:bg-background-dark/95 border-primary/20 shadow-2xl' : 'bg-transparent border-transparent'}`}>
          <Link to="/" className="flex items-center gap-3 group">
            <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform">
              <Cpu className="size-6" />
            </div>
            <h2 className="text-xl font-black tracking-tighter">MAJID<span className="text-primary italic">.KHAN</span></h2>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-5 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all hover:bg-primary/10 hover:text-primary ${
                  location.pathname === link.path ? "text-primary bg-primary/10" : "text-slate-600 dark:text-slate-400"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="size-12 rounded-2xl glass-premium flex items-center justify-center hover:bg-primary/10 transition-colors"
            >
              {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
            </button>
            
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:block bg-primary text-white px-8 h-12 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-primary/20"
              >
                Connect
              </motion.button>
            </Link>

            {/* Mobile Menu Button */}
            <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-32 left-6 right-6 p-8 glass-premium rounded-[2.5rem] bg-background-light dark:bg-background-dark border-primary/20 shadow-2xl flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-black uppercase tracking-widest ${location.pathname === link.path ? 'text-primary' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
