import { motion } from 'framer-motion';
import { Database, Server, Layout, BrainCircuit } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    icon: <Layout className="w-6 h-6 text-primary" />,
    skills: [
      { name: 'React.js / Next.js', level: 95 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Framer Motion & GSAP', level: 85 },
      { name: 'Three.js', level: 75 }
    ]
  },
  {
    title: 'Backend',
    icon: <Server className="w-6 h-6 text-secondary" />,
    skills: [
      { name: 'Java / Spring Boot', level: 90 },
      { name: 'Node.js / Express', level: 85 },
      { name: 'Python / Django', level: 80 },
      { name: 'RESTful APIs', level: 95 }
    ]
  },
  {
    title: 'Database & Cloud',
    icon: <Database className="w-6 h-6 text-accent" />,
    skills: [
      { name: 'MongoDB / PostgreSQL / MySQL', level: 85 },
      { name: 'AWS / Vercel', level: 80 },
      { name: 'Redis', level: 70 },
      { name: 'Docker / CI/CD', level: 75 }
    ]
  },
  {
    title: 'Other Skills',
    icon: <BrainCircuit className="w-6 h-6 text-purple-400" />,
    skills: [
      { name: 'AI Integration (OpenAI)', level: 85 },
      { name: 'System Design', level: 80 },
      { name: 'Agile & Git', level: 90 },
      { name: 'Communication', level: 95 }
    ]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical <span className="text-gradient">Arsenal</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise, continuously evolving to build cutting-edge solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-200">{skill.name}</span>
                      <span className="text-gray-400 text-sm font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 + (sIdx * 0.1) }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent relative"
                      >
                         <div className="absolute top-0 right-0 bottom-0 w-10 bg-white/30 blur-[5px]" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
