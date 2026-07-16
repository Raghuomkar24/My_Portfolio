import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Tilt } from 'react-tilt';
import { Download, ArrowRight, Mail } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';

const defaultTiltOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.05,   // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,   // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex flex-col items-start z-10"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
          >
            <span className="text-sm font-medium text-gray-300">👋 Hello, I'm</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Gururaghavendra <br/>
            <span className="text-gradient">Omkar</span>
          </h1>

          <div className="text-xl md:text-2xl text-gray-400 font-medium h-12 mb-8">
            <TypeAnimation
              sequence={[
                'Software Developer',
                2000,
                'Full Stack Developer',
                2000,
                'Machine Learning Enthusiast',
                2000,
                'Information Science Engineer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-400 mb-10 max-w-lg leading-relaxed">
            I craft world-class digital experiences. Blending premium design with robust engineering to build solutions that stand out.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#contact" className="group relative px-8 py-3 bg-primary rounded-full overflow-hidden font-medium text-white transition-all hover:scale-105 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]">
              <span className="relative z-10 flex items-center gap-2">
                Hire Me <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a href="/Gururaghavendra_.pdf" target="_blank" className="px-8 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-md font-medium transition-all hover:scale-105 flex items-center gap-2">
              <Download size={18} /> Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-12">
            {[
              { icon: <Github size={20} />, href: "https://github.com/Raghuomkar24" },
              { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/gururaghavendra-omkar-495075258/" },
              { icon: <Mail size={20} />, href: "omkargururaghavendra@gmail.com" }
            ].map((social, index) => (
              <a 
                key={index} 
                href={social.href} 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-primary/50 transition-all hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Content - 3D Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="relative z-10 perspective-1000 flex justify-center lg:justify-end"
        >
          <Tilt options={defaultTiltOptions} className="w-full max-w-md aspect-[4/5] neon-border rounded-2xl relative p-1 group">
             <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-50 blur-sm"></div>
             
             <div className="relative h-full w-full bg-[#0a0a0a]/90 backdrop-blur-2xl rounded-xl border border-white/10 p-8 flex flex-col justify-between overflow-hidden">
                {/* Internal Card Decor */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[50px] group-hover:bg-primary/30 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 rounded-full blur-[50px] group-hover:bg-secondary/30 transition-all duration-500" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary p-[1px]">
                       <div className="w-full h-full bg-[#0a0a0a] rounded-[11px] flex items-center justify-center font-bold text-xl">
                         {'</>'}
                       </div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-primary">
                      Status: Available
                    </div>
                  </div>

                  <div className="mt-auto space-y-4 relative z-10">
                     <h3 className="text-2xl font-bold">Frontend / Backend</h3>
                     <div className="space-y-2">
                       {['React.js & Next.js', 'Java & Spring Boot', 'Tailwind & GSAP'].map((skill, i) => (
                         <div key={i} className="flex items-center gap-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                           <span className="text-sm text-gray-300 font-mono">{skill}</span>
                         </div>
                       ))}
                     </div>
                  </div>
                </div>
             </div>
          </Tilt>
        </motion.div>

      </div>
    </section>
  );
};
