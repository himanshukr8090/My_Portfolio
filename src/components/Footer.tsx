import React from 'react';
import { Heart, Github, Linkedin, BookOpen, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/himanshukr8090',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/himanshukrsingh0',
      label: 'LinkedIn'
    },
    {
      icon: BookOpen,
      href: 'https://medium.com/@himanshukr8090',
      label: 'Medium Blog'
    },
    {
      icon: Mail,
      href: 'mailto:himanshukr8090@gmail.com',
      label: 'Email'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo/Name */}
          <div className="mb-6 md:mb-0">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
            >
              Himanshu Singh
            </button>
            <p className="text-slate-400 mt-1">DevOps Engineer</p>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4 mb-6 md:mb-0">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 hover:scale-110 border border-slate-700 hover:border-blue-400 group"
                aria-label={link.label}
              >
                <link.icon size={20} className="text-slate-400 group-hover:text-blue-400" />
              </a>
            ))}
          </div>
          
          {/* Made with love */}
          <div className="flex items-center gap-2 text-slate-400">
            <span>Made with</span>
            <Heart size={16} className="text-red-400" />
            <span>by Himanshu</span>
          </div>
        </div>
        
        {/* Bottom text */}
        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-400">
            Thanks for visiting! Let's build something amazing together.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;