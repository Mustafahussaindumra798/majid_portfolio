import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Cpu, Shield, FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-40 border-t border-slate-200 dark:border-primary/20 bg-background-light backdrop-blur-xl pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-8">
              <div className="size-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
                <Cpu className="size-6" />
              </div>
              <h2 className="text-xl font-black tracking-tighter">MAJID<span className="text-primary italic">.KHAN</span></h2>
            </Link>
            <p className="text-secondary text-lg leading-relaxed max-w-sm">
              Creating high-end digital experiences. For all submissions and inquiries, reach out via the official channel.
            </p>
            <div className="mt-6 flex items-center gap-2 text-primary font-black">
              <Mail className="size-4" /> danyalbut96@gmail.com
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-8">Navigation</h4>
            <ul className="space-y-4">
              {["Home", "About", "Skills", "Projects", "Services", "Contact", "Dashboard"].map((item) => (
                <li key={item}>
                  <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-sm font-bold text-secondary hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-8">Social Connect</h4>
            <ul className="space-y-4 text-secondary">
              <li>
                <a href="https://github.com/danyalbut96-khan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors">
                  <Github className="size-4" /> GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/muhammad-majid-khan-a01a16365" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors">
                  <Linkedin className="size-4" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:danyalbut96@gmail.com" className="flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors">
                  <Mail className="size-4" /> Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-200 dark:border-primary/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-bold text-secondary dark:text-slate-400">
            © {new Date().getFullYear()} — Portfolio by <span className="text-indigo-600 dark:text-primary">Muhammad Majid Khan</span>
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-secondary dark:text-slate-400">
             <Link to="/privacy" className="hover:text-primary flex items-center gap-1 transition-colors"><Shield className="size-3" /> Privacy Policy</Link>
             <Link to="/terms" className="hover:text-primary flex items-center gap-1 transition-colors"><FileText className="size-3" /> Terms of Service</Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-100 dark:border-white/5 text-center">
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
            Engineered with Precision by 
            <a href="https://cloudexify.site" target="_blank" rel="noopener noreferrer"
               className="ml-2 text-indigo-600 dark:text-primary hover:underline transition-all">
              CloudExify
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

