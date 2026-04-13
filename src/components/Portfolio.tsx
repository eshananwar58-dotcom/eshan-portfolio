import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play } from "lucide-react";
import { Project } from "../types";

const projects: Project[] = [
  // Long Form
  {
    id: "1",
    title: "Cinematic Journey",
    category: "Short Film",
    image: "https://lh3.googleusercontent.com/d/1GL5iVMPkqWbD4PQF-nb3eJqC4jEZP9Wc",
    format: 'long',
    isFeatured: true,
    link: "https://youtu.be/Zz32INbZ5JA",
  },
  {
    id: "2",
    title: "Brand Story",
    category: "Commercial",
    image: "https://lh3.googleusercontent.com/d/1pVN6V3hLXskWdbBi21yTxLjZlCQ0weoO",
    format: 'long',
    link: "https://youtu.be/3dzJQiVDx_4",
  },
  {
    id: "3",
    title: "Sonic Waves",
    category: "Music Video",
    image: "https://lh3.googleusercontent.com/d/12xmK0MN_qSWGb61COZ0RH26--C_ws7rZ",
    format: 'long',
    link: "https://youtu.be/dXtrkfic6Y0",
  },
  // Short Form
  {
    id: "4",
    title: "Urban Pulse",
    category: "Street Reel",
    image: "https://lh3.googleusercontent.com/d/1GXtdE7wwxo9vBkt7f7WGaZ1YOK4zTyw1",
    format: 'short',
    link: "https://youtube.com/shorts/B41GnOzXTuY?feature=share",
  },
  {
    id: "5",
    title: "Fast Lane",
    category: "Automotive Ad",
    image: "https://lh3.googleusercontent.com/d/1dLqW8gDeh4EzF7j8shsB04XJulrQ0aZO",
    format: 'short',
    link: "https://youtube.com/shorts/lO4Ci311i_4",
  },
  {
    id: "6",
    title: "Vibrant Motion",
    category: "Motion Graphics",
    image: "https://lh3.googleusercontent.com/d/137SqhYf5EyajAJYP6OZdzTJMXwTc4Xf4",
    format: 'short',
    link: "https://youtube.com/shorts/yvpb_sUQR5A?feature=share",
  },
  {
    id: "8",
    title: "Neon Nights",
    category: "Cyberpunk Reel",
    image: "https://lh3.googleusercontent.com/d/1IxOnRuNPoGX3THctfzRxgNvICgFADcui",
    format: 'short',
    link: "https://youtube.com/shorts/9d8f3msjppM?feature=share",
  },
  {
    id: "14",
    title: "Midnight City",
    category: "Cinematic Reel",
    image: "https://lh3.googleusercontent.com/d/102N9mqf_MMiytrvgsS6S9d-I_b_jVwgr",
    format: 'short',
    link: "https://youtube.com/shorts/N9bzDtV_GD4",
  },
  {
    id: "15",
    title: "Nature Escape",
    category: "Travel Reel",
    image: "https://lh3.googleusercontent.com/d/1KE44bx7-5taHbMsAXuFDY6nnAthRkdtN",
    format: 'short',
    link: "https://youtu.be/BB3f0zk7qc8",
  },
  {
    id: "16",
    title: "Tech Horizon",
    category: "Product Showcase",
    image: "https://lh3.googleusercontent.com/d/19wwoGO1THqCJjWeilYXS8JC0gWqMfWhw",
    format: 'short',
    link: "https://youtube.com/shorts/HmEezu9XMZU",
  },
  {
    id: "17",
    title: "Golden Hour",
    category: "Lifestyle Reel",
    image: "https://lh3.googleusercontent.com/d/1VB2efn2gLaXlxW7Ij1ldLV-cwya7mybl",
    format: 'short',
    link: "https://youtube.com/shorts/sdl6UoYQJ28",
  },
  // Motion Graphics
  {
    id: "9",
    title: "Abstract Flow",
    category: "Title Sequence",
    image: "https://lh3.googleusercontent.com/d/1rwiTcyj4cz043r8Fcdn0ta763_7kxg2w",
    format: 'motion',
    link: "https://youtu.be/cGQNl_eRojo",
  },
  {
    id: "10",
    title: "Digital Pulse",
    category: "Logo Animation",
    image: "https://lh3.googleusercontent.com/d/1Cy-rQdGVDPbd9-gD4pu5EdIDMGjsz2tK",
    format: 'motion',
    link: "https://youtu.be/RmVMoV-Nito",
  },
  {
    id: "11",
    title: "Cyber Grid",
    category: "UI Animation",
    image: "https://lh3.googleusercontent.com/d/1bWku2z1OjQlXQeB7zvS9eqCUpMrpI3gp",
    format: 'motion',
    link: "https://youtu.be/tJFV6XFrTnM",
  },
  // Graphics
  {
    id: "12",
    title: "Poster",
    category: "Poster Design",
    image: "https://lh3.googleusercontent.com/d/1l2fLJyPk2pmMvNjE56UYfSUAWnKpEBxn",
    format: 'graphics',
    link: "https://www.instagram.com/p/CsQpfr7v6fF/?igsh=d215aWR6dGM3bWts",
  },
  {
    id: "13",
    title: "Typography",
    category: "Typography Design",
    image: "https://lh3.googleusercontent.com/d/1hzz2sEyjeCKWe8ylkQ36oRZtxgWp2bWU",
    format: 'graphics',
    link: "https://www.instagram.com/p/CxRSjdCI4Iv/?utm_source=ig_web_copy_link",
  },
  {
    id: "14",
    title: "UI UX design",
    category: "UI/UX Design",
    image: "https://lh3.googleusercontent.com/d/1vtjHJRj4lvSstSHbjqeBnY9_CNvJFj8r",
    format: 'graphics',
    link: "https://www.instagram.com/p/CsVM_HkPzyo/?utm_source=ig_web_copy_link",
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState<'all' | 'long' | 'short' | 'motion' | 'graphics'>('all');

  const longForm = projects.filter(p => p.format === 'long');
  const shortForm = projects.filter(p => p.format === 'short');
  const motionGraphics = projects.filter(p => p.format === 'motion');
  const graphics = projects.filter(p => p.format === 'graphics');

  const filters = [
    { id: 'all', label: 'All', count: projects.length },
    { id: 'long', label: 'Long Form', count: longForm.length },
    { id: 'short', label: 'Short Form', count: shortForm.length },
    { id: 'motion', label: 'Motion Graphics', count: motionGraphics.length },
    { id: 'graphics', label: 'Graphics', count: graphics.length },
  ] as const;

  return (
    <section id="portfolio" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute -left-8 top-2 hidden md:block"
          >
            <span className="text-[10px] font-mono opacity-30 [writing-mode:vertical-rl] rotate-180 tracking-[0.3em]">
              PROJECTS / 2024
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl md:text-[10rem] leading-[0.8] uppercase tracking-tighter mb-12"
          >
            port<span className="text-accent">folio</span>
          </motion.h2>
          
          <div className="flex flex-wrap gap-x-10 gap-y-6">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className="group relative py-2 text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-300"
              >
                <span className={`flex items-center gap-3 transition-all duration-300 ${filter === f.id ? "text-accent" : "opacity-40 group-hover:opacity-100"}`}>
                  {f.label}
                  <span className={`text-[9px] font-mono transition-colors duration-300 ${filter === f.id ? "text-accent/50" : "opacity-50"}`}>
                    {f.count.toString().padStart(2, '0')}
                  </span>
                </span>
                {filter === f.id && (
                  <motion.div 
                    layoutId="activeFilter"
                    className="absolute -bottom-2 left-0 w-full h-[2px] bg-accent"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-sm lg:text-right"
        >
          <div className="inline-block px-3 py-1 border border-primary/10 rounded-full text-[10px] font-bold uppercase tracking-widest opacity-40 mb-6">
            Curated Selection
          </div>
          <p className="text-sm leading-relaxed opacity-60">
            A showcase of high-impact storytelling and cinematic visual engineering. Each project is a testament to rhythmic pacing and technical precision.
          </p>
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Long Form Section */}
          {(filter === 'all' || filter === 'long') && (
            <div className="mb-32">
              <div className="flex items-center gap-4 mb-12">
                <div className="h-px flex-1 bg-primary/10" />
                <h3 className="text-2xl font-display font-bold uppercase tracking-widest opacity-40">Long Form</h3>
                <div className="h-px flex-1 bg-primary/10" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {longForm.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className={`group relative rounded-[40px] overflow-hidden aspect-video bg-primary/5`}
                  >
                    <a 
                      href={project.link || "#"} 
                      target={project.link ? "_blank" : undefined}
                      rel={project.link ? "noopener noreferrer" : undefined}
                      className="block w-full h-full"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full h-full transition-all duration-700"
                      >
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0"
                          referrerPolicy="no-referrer"
                        />
                      </motion.div>

                      <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-accent rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-100 shadow-xl">
                          <Play size={32} className="text-primary fill-primary ml-1" />
                        </div>
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest">
                            <span>View Project</span>
                            <div className="w-8 h-px bg-accent/30" />
                          </div>
                        </div>
                      </div>

                      {project.isFeatured && (
                        <div className="absolute top-8 right-8">
                          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-secondary">
                            <span className="text-xs font-bold">NEW</span>
                          </div>
                        </div>
                      )}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Short Form Section */}
          {(filter === 'all' || filter === 'short') && (
            <div className="mb-32">
              <div className="flex items-center gap-4 mb-12">
                <div className="h-px flex-1 bg-primary/10" />
                <h3 className="text-2xl font-display font-bold uppercase tracking-widest opacity-40">Short Form</h3>
                <div className="h-px flex-1 bg-primary/10" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {shortForm.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group relative rounded-[30px] overflow-hidden aspect-[9/16] bg-primary/5"
                  >
                    <a 
                      href={project.link || "#"} 
                      target={project.link ? "_blank" : undefined}
                      rel={project.link ? "noopener noreferrer" : undefined}
                      className="block w-full h-full"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full h-full transition-all duration-700"
                      >
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                          referrerPolicy="no-referrer"
                        />
                      </motion.div>

                      <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-accent rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-100 shadow-xl">
                          <Play size={24} className="text-primary fill-primary ml-1" />
                        </div>
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <div className="flex items-center gap-2 text-accent text-[10px] font-bold uppercase tracking-widest">
                            <span>View Project</span>
                            <div className="w-6 h-px bg-accent/30" />
                          </div>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Motion Graphics Section */}
          {(filter === 'all' || filter === 'motion') && (
            <div className="mb-32">
              <div className="flex items-center gap-4 mb-12">
                <div className="h-px flex-1 bg-primary/10" />
                <h3 className="text-2xl font-display font-bold uppercase tracking-widest opacity-40">Motion Graphics</h3>
                <div className="h-px flex-1 bg-primary/10" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {motionGraphics.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group relative rounded-[40px] overflow-hidden aspect-video bg-primary/5"
                  >
                    <a 
                      href={project.link || "#"} 
                      target={project.link ? "_blank" : undefined}
                      rel={project.link ? "noopener noreferrer" : undefined}
                      className="block w-full h-full"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full h-full transition-all duration-700"
                      >
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                          referrerPolicy="no-referrer"
                        />
                      </motion.div>

                      <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-accent rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-100 shadow-xl">
                          <Play size={32} className="text-primary fill-primary ml-1" />
                        </div>
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest">
                            <span>View Project</span>
                            <div className="w-8 h-px bg-accent/30" />
                          </div>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Graphics Section */}
          {(filter === 'all' || filter === 'graphics') && (
            <div className="mt-32">
              <div className="flex items-center gap-4 mb-12">
                <div className="h-px flex-1 bg-primary/10" />
                <h3 className="text-2xl font-display font-bold uppercase tracking-widest opacity-40">Graphics</h3>
                <div className="h-px flex-1 bg-primary/10" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {graphics.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group relative rounded-[40px] overflow-hidden aspect-square bg-primary/5"
                  >
                    <a 
                      href={project.link || "#"} 
                      target={project.link ? "_blank" : undefined}
                      rel={project.link ? "noopener noreferrer" : undefined}
                      className="block w-full h-full"
                    >
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full h-full transition-all duration-700"
                      >
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                          referrerPolicy="no-referrer"
                        />
                      </motion.div>

                      <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest">
                            <span>View Project</span>
                            <div className="w-8 h-px bg-accent/30" />
                          </div>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
