import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Photo/Visual Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
               <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-3xl blur-[60px] opacity-20 animate-pulse" />
               <div className="glass-card h-full w-full relative z-10 flex items-center justify-center overflow-hidden p-2 group">
                  <div className="absolute inset-0 bg-[url('https://github.com/Raghuomkar24.png')] bg-cover bg-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 rounded-2xl" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent rounded-2xl" />
                  
                  <div className="relative z-10 text-center mt-auto pb-8">
                     <h3 className="text-2xl font-bold font-mono">Gururaghavendra</h3>
                     <p className="text-primary font-medium text-sm tracking-widest uppercase mt-1">Software Engineer</p>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Text/Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="glass-card">
              <p className="text-gray-300 leading-relaxed text-lg">
                I am an innovative software developer with a BE in Information Science. As a passionate problem-solver with a strong foundation in full-stack development and machine learning, I focus on building scalable, performant, and beautifully designed applications.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg mt-4">
                My objective is to leverage cutting-edge technologies to solve complex problems and create digital products that leave a lasting impact. Whether it's freelancing for international clients or contributing to innovative startups, I thrive on continuous learning and excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
               {[
                 { icon: <Briefcase className="text-primary" />, title: 'Experience', desc: '1 Years' },
                 { icon: <Code className="text-secondary" />, title: 'Projects', desc: '30+ Completed' },
                 { icon: <GraduationCap className="text-accent" />, title: 'Education', desc: 'BE ISE' }
               ].map((item, i) => (
                 <div key={i} className="glass-card flex flex-col items-center justify-center text-center group cursor-default">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                 </div>
               ))}
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};
