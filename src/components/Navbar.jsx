import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Cpu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isDark) {
      document.body.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Certifications", path: "/#certifications" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`glass-premium rounded-[2rem] px-8 h-20 transition-all duration-500 flex items-center justify-between ${scrolled ? 'bg-background-light/90 dark:bg-background-dark/95 border-primary/20 shadow-2xl' : 'bg-transparent border-transparent'}`}>
          <Link to="/" className="flex items-center gap-3 group">
            <div className="size-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform">
              <Cpu className="size-6" />
            </div>
            <h2 className="text-xl font-black tracking-tighter">MAJID<span className="text-primary italic">.KHAN</span></h2>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 ml-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-5 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all hover:bg-primary/10 hover:text-primary nav-link ${
                  location.pathname === link.path ? "text-primary bg-primary/10 active" : "text-secondary"
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
                className="hidden md:block bg-indigo-600 text-white px-8 h-12 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-indigo-500/20"
              >
                Connect
              </motion.button>
            </Link>

            {/* Mobile Menu Button */}
            <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="size-6 text-primary mobile-menu-icon" /> : <Menu className="size-6 text-primary mobile-menu-icon" />}
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
            className="lg:hidden absolute top-32 left-6 right-6 p-8 glass-premium rounded-[2.5rem] bg-white dark:bg-[#111] border-primary/20 shadow-2xl flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-black uppercase tracking-widest ${location.pathname === link.path ? 'text-primary' : 'text-secondary'}`}
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

