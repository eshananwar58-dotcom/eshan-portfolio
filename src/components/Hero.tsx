import { motion } from "motion/react";
import { Instagram, ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-6 max-w-7xl mx-auto relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-[1px] bg-accent" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Video Editor & Storyteller</span>
          </motion.div>

          <div className="overflow-hidden mb-8">
            <motion.h1 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-9xl leading-[0.85] uppercase font-bold"
            >
              Eshan<br />Anwar
            </motion.h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl"
          >
            <p className="text-xl md:text-2xl text-primary/60 mb-10 leading-relaxed">
              I design high-retention videos that grab attention.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-secondary rounded-full font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:bg-accent hover:text-primary transition-all duration-500"
              >
                View Work <Play size={14} fill="currentColor" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-primary/10 rounded-full font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:border-accent hover:text-accent transition-all duration-500"
              >
                Get in Touch <ArrowRight size={14} />
              </motion.a>
            </div>
            
            <div className="border-t border-primary/10 pt-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex items-center gap-4 flex-wrap"
              >
                <h3 className="text-sm md:text-base font-bold uppercase tracking-widest opacity-40">Short-form</h3>
                <span className="w-1 h-1 rounded-full bg-accent opacity-40" />
                <h3 className="text-sm md:text-base font-bold uppercase tracking-widest opacity-40">Long-form</h3>
                <span className="w-1 h-1 rounded-full bg-accent opacity-40" />
                <h3 className="text-sm md:text-base font-bold uppercase tracking-widest opacity-40">Ads</h3>
                <span className="w-1 h-1 rounded-full bg-accent opacity-40" />
                <h3 className="text-sm md:text-base font-bold uppercase tracking-widest opacity-40">Content that converts</h3>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Visual */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <div 
              className="aspect-[4/5] bg-secondary rounded-[40px] overflow-hidden relative group shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]"
            >
              <img 
                src="https://i.ibb.co/Myqq7x2D/Untitled-design.png" 
                alt="Artist Portrait"
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 saturate-[0.85] contrast-[1.05] brightness-[0.9] grayscale-[0.1]"
                referrerPolicy="no-referrer"
              />
              {/* Cinematic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[40px]" />
            </div>
            
            {/* Background Decorative Element - Softer and more integrated */}
            <div className="absolute -inset-12 bg-accent/5 rounded-[60px] -z-10 blur-[100px] opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
