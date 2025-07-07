import React from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Server, 
  Cloud, 
  Container, 
  GitBranch, 
  Terminal, 
  Cpu, 
  Shield,
  Code,
  Database,
  Zap
} from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'DevOps Tools',
      icon: Server,
      skills: ['Docker', 'Kubernetes', 'Jenkins', 'Ansible', 'ArgoCD', 'Terraform'],
      color: 'blue'
    },
    {
      title: 'Cloud Platforms',
      icon: Cloud,
      skills: ['AWS EC2', 'S3', 'Lambda', 'API Gateway', 'CloudWatch', 'AMI'],
      color: 'green'
    },
    {
      title: 'CI/CD & Automation',
      icon: Zap,
      skills: ['Jenkins', 'ArgoCD', 'Ansible', 'Terraform'],
      color: 'purple'
    },
    {
      title: 'Container Technologies',
      icon: Container,
      skills: ['Docker', 'Kubernetes', 'Helm', 'Istio', 'Container Registry'],
      color: 'cyan'
    },
    {
      title: 'Version Control',
      icon: GitBranch,
      skills: ['Git', 'GitHub', 'Git Bash', 'Git Flow'],
      color: 'orange'
    },
    {
      title: 'Operating Systems',
      icon: Terminal,
      skills: ['Linux Ubuntu', 'CentOS', 'RHEL', 'Windows Server'],
      color: 'red'
    },
    {
      title: 'Programming',
      icon: Code,
      skills: ['Python', 'Shell Scripting', 'Bash', 'PowerShell', 'YAML'],
      color: 'yellow'
    },
    {
      title: 'Monitoring & Observability',
      icon: Cpu,
      skills: ['Prometheus', 'Grafana', 'ELK Stack', 'Kiali'],
      color: 'indigo'
    }
  ];

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600 border-blue-500/30',
    green: 'from-green-500 to-green-600 border-green-500/30',
    purple: 'from-purple-500 to-purple-600 border-purple-500/30',
    cyan: 'from-cyan-500 to-cyan-600 border-cyan-500/30',
    orange: 'from-orange-500 to-orange-600 border-orange-500/30',
    red: 'from-red-500 to-red-600 border-red-500/30',
    yellow: 'from-yellow-500 to-yellow-600 border-yellow-500/30',
    indigo: 'from-indigo-500 to-indigo-600 border-indigo-500/30'
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`bg-slate-800/50 p-6 rounded-lg border ${colorClasses[category.color as keyof typeof colorClasses]} hover:scale-105 transition-all duration-300 hover:shadow-xl`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${colorClasses[category.color as keyof typeof colorClasses].split(' ')[0]} ${colorClasses[category.color as keyof typeof colorClasses].split(' ')[1]}`}>
                    <category.icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-md text-sm hover:bg-slate-600/50 transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;