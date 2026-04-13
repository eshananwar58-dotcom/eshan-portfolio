import React from "react";
import { motion } from "motion/react";
import { Send, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl mb-12 leading-[1.15] tracking-tight font-semibold">
          let’s create<br />
          something that<br />
          <motion.span 
            whileHover={{ filter: "brightness(1.2)" }}
            transition={{ duration: 0.3 }}
            className="text-accent/90 italic font-normal cursor-default inline-block"
          >
            stands out
          </motion.span>
        </h2>
        
        <div className="mb-14 max-w-xl mx-auto">
          <p className="text-lg md:text-xl opacity-50 leading-relaxed">
            I help creators and brands turn ideas into high-retention edits that grab attention and keep people watching.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-8">
          <motion.a
            href="mailto:eshananwar58@gmail.com"
            whileHover={{ 
              scale: 1.03, 
              y: -2, 
              boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" 
            }}
            whileTap={{ scale: 0.97 }}
            className="w-full md:w-auto px-8 py-5 bg-primary text-secondary rounded-full font-bold uppercase tracking-[0.2em] text-[11px] flex items-center justify-center gap-3 hover:bg-accent hover:text-primary transition-all duration-500 shadow-lg shadow-primary/5"
          >
            Email Me <Send size={16} />
          </motion.a>
          
          <motion.a
            href="https://wa.me/919708445445?text=Hi%20Eshan%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.03, 
              y: -2, 
              boxShadow: "0 20px 40px -15px rgba(0,0,0,0.05)" 
            }}
            whileTap={{ scale: 0.97 }}
            className="w-full md:w-auto px-8 py-5 border border-primary/10 rounded-full font-bold uppercase tracking-[0.2em] text-[11px] flex items-center justify-center gap-3 hover:border-accent hover:text-accent transition-all duration-500"
          >
            Chat on WhatsApp <MessageCircle size={16} />
          </motion.a>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-[10px] opacity-20 font-medium tracking-[0.3em] uppercase"
        >
          Usually replies within a few hours ⚡
        </motion.p>
      </motion.div>
    </section>
  );
}
