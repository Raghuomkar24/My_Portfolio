import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

export const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API Call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormState({ name: '', email: '', message: '' });
      alert("Message Sent Successfully! Confetti would trigger here.");
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In <span className="text-gradient">Touch</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold mb-6">Let's discuss your next project.</h3>
            <p className="text-gray-400 text-lg mb-8">
              Whether you have a great idea or need help with your current project, I'm ready to help you create something outstanding.
            </p>

            <div className="space-y-6">
               {[
                 { icon: <Mail className="text-primary" />, title: 'Email', value: 'omkargururaghavendra@gmail.com' },
                 { icon: <Phone className="text-secondary" />, title: 'Phone', value: '+91 9353914970' },
                 { icon: <MapPin className="text-accent" />, title: 'Location', value: 'Bengaluru, Karnataka' }
               ].map((info, idx) => (
                 <div key={idx} className="flex items-center gap-6 glass-card p-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-400 font-medium">{info.title}</h4>
                      <p className="text-lg font-bold">{info.value}</p>
                    </div>
                 </div>
               ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 flex flex-col gap-6 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[50px]" />
               
               <div className="relative z-10">
                 <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                 <input 
                   type="text" 
                   id="name"
                   required
                   value={formState.name}
                   onChange={e => setFormState({...formState, name: e.target.value})}
                   className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                   placeholder="John Doe"
                 />
               </div>

               <div className="relative z-10">
                 <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                 <input 
                   type="email" 
                   id="email"
                   required
                   value={formState.email}
                   onChange={e => setFormState({...formState, email: e.target.value})}
                   className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors"
                   placeholder="john@example.com"
                 />
               </div>

               <div className="relative z-10">
                 <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                 <textarea 
                   id="message"
                   required
                   rows={5}
                   value={formState.message}
                   onChange={e => setFormState({...formState, message: e.target.value})}
                   className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                   placeholder="Tell me about your project..."
                 />
               </div>

               <button 
                 type="submit" 
                 disabled={isSubmitting}
                 className="relative z-10 w-full py-4 bg-primary text-white font-bold rounded-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:scale-100 mt-2"
               >
                 {isSubmitting ? (
                   <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                 ) : (
                   <>
                     Send Message <Send size={18} />
                   </>
                 )}
               </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
