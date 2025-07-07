import React from 'react';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed text-left">
                As a passionate DevOps engineer, I bridge the gap between development and operations, 
                creating seamless workflows that enable rapid, reliable software delivery. My expertise 
                spans across cloud platforms, container orchestration, and infrastructure automation.
              </p>
              
              <p className="text-lg text-slate-300 leading-relaxed text-left">
                I thrive on solving complex problems and optimizing systems for scalability and efficiency. 
                Whether it's setting up CI/CD pipelines, managing Kubernetes clusters, or automating 
                infrastructure with Terraform, I'm committed to implementing best practices that drive 
                innovation and reliability.
              </p>

              <div className="flex flex-wrap gap-4 justify-start">
                <div className="px-4 py-2 bg-green-600/20 text-green-300 rounded-lg border border-green-600/30">
                  Cloud-Native Expert
                </div>
                <div className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-lg border border-blue-600/30">
                  DevOps Enthusiast
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-3">Core Expertise</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Cloud Infrastructure (AWS, Azure)</li>
                  <li>• Container Orchestration (Kubernetes, Docker)</li>
                  <li>• CI/CD Pipeline Design & Implementation</li>
                  <li>• Infrastructure as Code (Terraform, Ansible)</li>
                  <li>• Monitoring & Observability</li>
                  <li>• Security & Compliance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;