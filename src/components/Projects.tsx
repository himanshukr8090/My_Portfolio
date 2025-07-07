import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Zap, Container, Cloud, Shield } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'BookInfo App Deployment & Monitoring',
      description: 'Complete microservices deployment on AWS with Kubernetes, using ArgoCD, Istio, Kiali, Prometheus, and Grafana for comprehensive monitoring and management.',
      icon: Cloud,
      tech: ['ArgoCD', 'Istio', 'Kiali', 'Prometheus', 'Grafana', 'AWS', 'Kubernetes'],
      features: [
        'Microservices architecture on AWS',
        'Service mesh with Istio',
        'GitOps deployment with ArgoCD',
        'Comprehensive monitoring stack'
      ]
    },
    {
      title: 'Ansible Cluster Setup',
      description: 'Built an Ansible Cluster using Docker containers and Kubernetes Pods on RHEL 9 without using any pre-built images, demonstrating infrastructure automation skills.',
      icon: Container,
      tech: ['Ansible', 'Docker', 'Kubernetes', 'RHEL 9'],
      features: [
        'Custom container orchestration',
        'Zero pre-built images approach',
        'RHEL 9 native deployment',
        'Automated cluster provisioning'
      ]
    },
    {
      title: 'Jenkins Dynamic Infrastructure',
      description: 'Automated Jenkins job execution using dynamic infrastructure by integrating with Docker and Kubernetes. Jenkins dynamically launches containers and pods for flexible CI/CD pipelines.',
      icon: Zap,
      tech: ['Jenkins', 'Docker', 'Kubernetes', 'CI/CD'],
      features: [
        'Dynamic container provisioning',
        'Auto-scaling build agents',
        'Flexible pipeline execution',
        'Resource optimization'
      ]
    },
    {
      title: 'Dockerized Web App on EKS',
      description: 'Used Ansible to deploy a Dockerized Flask Web App on an Amazon EKS Cluster. Complete manual setup and deployment process without shortcuts.',
      icon: Cloud,
      tech: ['Ansible', 'EKS', 'Docker', 'Flask', 'AWS'],
      features: [
        'Manual EKS cluster setup',
        'Ansible automation',
        'Flask web application',
        'Production-ready deployment'
      ]
    },
    {
      title: 'Automated Docker CI/CD',
      description: 'Built a full CI setup manually with Jenkins to automate Docker image creation and push to a self-hosted Docker registry, eliminating external dependencies.',
      icon: Container,
      tech: ['Jenkins', 'Docker', 'Registry', 'CI/CD'],
      features: [
        'Custom Jenkins setup',
        'Self-hosted Docker registry',
        'Automated image building',
        'Complete CI pipeline'
      ]
    },
    {
      title: 'End-to-End CI/CD Pipeline',
      description: 'Implemented a complete CI/CD pipeline from scratch using Jenkins, Ansible, and Docker without DockerHub or prebuilt images.',
      icon: Shield,
      tech: ['Jenkins', 'Ansible', 'Docker', 'CI/CD'],
      features: [
        'Custom build environment',
        'Automated deployment',
        'Zero external dependencies',
        'Complete pipeline automation'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                    <project.icon size={24} className="text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>
                
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-slate-300 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs border border-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;