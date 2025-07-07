import React from 'react';
import { Github, Linkedin, Mail, Phone, FileText, BookOpen } from 'lucide-react';

const Hero: React.FC = () => {
  const contactLinks = [
    { icon: Mail, href: 'mailto:himanshukr8090@gmail.com', label: 'Email' },
    { icon: Phone, href: 'tel:+918102050569', label: 'Phone' },
    { icon: Github, href: 'https://github.com/himanshukr8090', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/himanshukrsingh0', label: 'LinkedIn' },
    { icon: BookOpen, href: 'https://medium.com/@himanshukr8090', label: 'Medium Blog' },
    { icon: FileText, href: 'https://drive.google.com/file/d/1T6bG53tADlYi8xCO-8VHYgnvxjlwvUFs/view?usp=drive_link', label: 'Resume' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="relative w-32 h-32 mx-auto mb-8 group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
            <img
              src="/Himanshu Singh.jpg"
              alt="Himanshu Kumar Singh"
              className="relative w-32 h-32 rounded-full object-cover border-4 border-slate-600 group-hover:border-blue-400 transition-all duration-300"
            />
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Himanshu Kumar Singh
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            DevOps Engineer | Cloud-Native | Kubernetes & AWS Enthusiast
          </p>

          {/* Bio */}
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-slate-400 leading-relaxed">
              I am a DevOps enthusiast with hands-on experience in automating, deploying, monitoring, 
              and scaling modern applications on cloud infrastructure. Passionate about cloud-native 
              technologies, CI/CD pipelines, and container orchestration using Kubernetes. My goal is 
              to simplify software delivery using modern DevOps practices and tools.
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg border border-slate-700 hover:border-blue-400"
              >
                <link.icon size={20} />
                <span className="hidden sm:inline">{link.label}</span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Explore My Work
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;