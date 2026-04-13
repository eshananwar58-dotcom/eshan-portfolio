import { motion } from "motion/react";
import { Video } from "lucide-react";

export default function Navbar() {
  const navItems = ["Home", "About", "Portfolio", "Contact"];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 bg-secondary/80 backdrop-blur-md border-b border-primary/5 px-6 py-4 flex justify-between items-center"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
          <Video size={16} className="text-secondary" />
        </div>
        <span className="font-display font-bold text-lg hidden sm:block">ESHAN ANWAR</span>
      </div>

      <div className="flex gap-8">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm font-medium hover:text-accent transition-colors relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
          </a>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold opacity-60">
        <span className="text-accent">✦</span> Available for work
      </div>
    </motion.nav>
  );
}
