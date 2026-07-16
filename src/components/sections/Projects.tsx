import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { ExternalLink, MonitorPlay } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';

const PROJECTS = [
  {
    title: 'AI Food Tracking App',
    description: 'A revolutionary health tracking application using OpenAI to analyze food images and calculate nutritional value instantly. Features a sleek, modern UI with real-time feedback.',
    image: 'https://images.unsplash.com/photo-1543352634-99a5d50ae78e?q=80&w=1000&auto=format&fit=crop',
    tech: ['React Native', 'Node.js', 'OpenAI API', 'MongoDB'],
    live: '#',
    github: '#'
  },
  {
    title: 'PlacePrep AI',
    description: 'An intelligent platform designed to help students prepare for placements. It conducts mock interviews using AI, providing detailed analytics and improvement suggestions.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop',
    tech: ['Next.js', 'Python', 'FastAPI', 'PostgreSQL'],
    live: '#',
    github: '#'
  },
  {
    title: 'Collaborative Coding Platform',
    description: 'Real-time collaborative code editor supporting multiple languages. Includes integrated terminal, live cursor tracking, and instant chat for seamless team development.',
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1000&auto=format&fit=crop',
    tech: ['React', 'WebSockets', 'Node.js', 'Redis'],
    live: '#',
    github: '#'
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A selection of my best work, showcasing complex problem solving, premium design, and scalable architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <Tilt 
                options={{ max: 15, scale: 1.02, speed: 400, glare: true, 'max-glare': 0.2 }}
                className="glass-card h-full flex flex-col group p-4"
              >
                 <div className="relative aspect-[16/10] overflow-hidden rounded-xl mb-6">
                    <div className="absolute inset-0 bg-primary/20 z-10 group-hover:opacity-0 transition-opacity duration-500 mix-blend-overlay" />
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Hover Actions */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-4 backdrop-blur-sm">
                       <a href={project.live} className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:scale-110 transition-transform" title="Live Demo">
                          <ExternalLink size={20} />
                       </a>
                       <a href={project.github} className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all border border-white/30" title="Source Code">
                          <Github size={20} />
                       </a>
                    </div>
                 </div>

                 <div className="flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-6 flex-grow">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((tech, tIdx) => (
                        <span key={tIdx} className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 border border-white/10 text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                 </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <a href="https://github.com/Raghuomkar24" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-primary/50 bg-primary/10 hover:bg-primary/20 transition-all hover:scale-105 font-medium text-primary">
              <MonitorPlay size={18} /> View All Projects
           </a>
        </div>
      </div>
    </section>
  );
};
