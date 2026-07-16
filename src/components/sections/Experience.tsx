import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const EXPERIENCES = [
  {
    role: 'Intern',
    company: 'Jspiders Rajajinagar',
    date: 'Jan-2026 - June-2026',
    description: 'Completed Full Stack Java Development training at JSpiders, Gained hands-on experience in Java, Spring Boot, React.js, SQL, and REST APIs.'
  },
  {
    role: 'Software Engineering Intern',
    company: 'Think n Solutions',
    date: 'July-2026 - Present',
    description: 'Contributing to the development and maintenance of scalable web applications using modern technologies.'
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional <span className="text-gradient">Journey</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2" />

          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className={`relative flex items-center justify-between md:justify-normal mb-16 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Dot */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute left-[20px] md:left-1/2 w-10 h-10 -translate-x-1/2 rounded-full bg-surface border-4 border-primary flex items-center justify-center z-10 shadow-[0_0_15px_rgba(139,92,246,0.5)]"
              >
                 <Briefcase size={16} className="text-primary" />
              </motion.div>

              {/* Empty Space for Grid Alignment */}
              <div className="hidden md:block md:w-5/12" />

              {/* Content Card */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`w-full md:w-5/12 pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}
              >
                 <div className="glass-card relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2" />
                    
                    <div className="flex items-center gap-2 text-primary font-mono text-sm mb-2">
                       <Calendar size={14} />
                       <span>{exp.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{exp.role}</h3>
                    <h4 className="text-gray-400 font-medium mb-4">{exp.company}</h4>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                 </div>
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
