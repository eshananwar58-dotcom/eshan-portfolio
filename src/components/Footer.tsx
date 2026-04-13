import { motion } from "motion/react";
import { Video } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-32 pb-10 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Video size={24} className="text-secondary" />
            </div>
            <span className="font-display font-bold text-2xl">ESHAN ANWAR</span>
          </div>

          <div className="flex gap-12 text-sm font-bold uppercase tracking-widest opacity-60">
            <a href="#home" className="hover:text-accent transition-colors">Home</a>
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#portfolio" className="hover:text-accent transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-20 overflow-hidden flex flex-col items-center">
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-[10vw] md:text-[12vw] leading-none font-black text-center select-none uppercase"
          >
            LET’S WORK TOGETHER
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold opacity-40 mt-6 text-center"
          >
            through cinematic editing & storytelling
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-10 text-[10px] uppercase tracking-widest font-bold opacity-40">
          <p>© 2026 Eshan Anwar Video Editor</p>
          <p>Crafting stories through cinematic editing.</p>
        </div>
      </div>
    </footer>
  );
}
