import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="bg-primary text-secondary py-32 overflow-hidden relative">
      {/* Scrolling Text Background */}
      <div className="absolute inset-0 flex flex-col justify-center opacity-10 pointer-events-none select-none">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="text-[20vw] font-display font-black whitespace-nowrap leading-none text-accent"
        >
          about . about . about . about . about .
        </motion.div>
        <motion.div 
          animate={{ x: [-1000, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="text-[20vw] font-display font-black whitespace-nowrap leading-none text-outline text-accent"
        >
          about . about . about . about . about .
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[150px] aspect-[3/4] md:max-w-[220px] rounded-[30px] overflow-hidden relative z-10 shadow-2xl shadow-black/50"
            >
              <img 
                src="https://lh3.googleusercontent.com/d/1Grg43nEg_ImqC6t9GKEl2FTs_6axL_4F" 
                alt="Eshan Anwar"
                className="w-full h-full object-cover object-[85%_50%] grayscale brightness-110 contrast-110 scale-[200%]"
                referrerPolicy="no-referrer"
              />
              
              {/* Radial Graphic Behind */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60" />
            </motion.div>
            
            {/* Abstract Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10">
              <div className="w-full h-full border border-secondary/20 rounded-full animate-pulse" />
              <div className="absolute inset-10 border border-secondary/10 rounded-full animate-ping" />
            </div>
            
            {/* Crosshair Icons */}
            <div className="absolute -top-10 -left-10 w-8 h-8 border-t border-l border-accent" />
            <div className="absolute -top-10 -right-10 w-8 h-8 border-t border-r border-accent" />
            <div className="absolute -bottom-10 -left-10 w-8 h-8 border-b border-l border-accent" />
            <div className="absolute -bottom-10 -right-10 w-8 h-8 border-b border-r border-accent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-6xl mb-8">Crafting Stories Through Motion</h2>
            <p className="text-xl text-secondary/60 leading-relaxed">
              I believe that the magic happens in the edit. My approach combines rhythmic pacing with cinematic storytelling to create videos that don't just look good, but feel right. From high-energy social media reels to polished commercial ads, I bring a unique vision to every timeline.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
