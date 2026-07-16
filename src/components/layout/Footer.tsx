import { Mail } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin, FaTwitter as Twitter } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="relative pt-16 pb-8 border-t border-white/10 bg-black/50 backdrop-blur-md mt-24">
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold tracking-tighter inline-block mb-2">
              <span className="text-white">G</span>
              <span className="text-primary">O.</span>
            </a>
            <p className="text-gray-400 text-sm max-w-xs">
              Building digital experiences that combine premium aesthetics with robust engineering.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: <Github size={18} />, href: "https://github.com/Raghuomkar24" },
              { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/gururaghavendra-omkar-495075258/" },
              { icon: <Twitter size={18} />, href: "https://twitter.com" },
              { icon: <Mail size={18} />, href: "omkargururaghavendra@gmail.com" }
            ].map((social, index) => (
              <a 
                key={index} 
                href={social.href} 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-primary/50 transition-all hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Gururaghavendra Omkar. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
