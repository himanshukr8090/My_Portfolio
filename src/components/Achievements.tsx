import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Award, Trophy, Star, Target } from 'lucide-react';

const Achievements: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      icon: Trophy,
      title: 'Attendance Topper Certificate',
      description: 'Awarded for outstanding attendance record in CSE Department, 4th semester',
      category: 'Academic Excellence',
      color: 'yellow'
    },
    {
      icon: Star,
      title: 'Recon 5.0 Participation',
      description: 'Participated in Tech Innovation Showcase by JIET Jodhpur, demonstrating cutting-edge technology solutions',
      category: 'Innovation',
      color: 'blue'
    },
    {
      icon: Target,
      title: 'DevOps Expertise',
      description: 'Successfully implemented multiple production-grade CI/CD pipelines and cloud infrastructure projects',
      category: 'Technical Achievement',
      color: 'green'
    },
    {
      icon: Award,
      title: 'Open Source Contributor',
      description: 'Active contributor to DevOps community through GitHub projects and technical blog posts',
      category: 'Community',
      color: 'purple'
    }
  ];

  const colorClasses = {
    yellow: 'from-yellow-500 to-yellow-600 border-yellow-500/30',
    blue: 'from-blue-500 to-blue-600 border-blue-500/30',
    green: 'from-green-500 to-green-600 border-green-500/30',
    purple: 'from-purple-500 to-purple-600 border-purple-500/30'
  };

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Achievements & Recognition
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`bg-slate-800/50 p-6 rounded-lg border ${colorClasses[achievement.color as keyof typeof colorClasses]} hover:scale-105 transition-all duration-300 hover:shadow-xl group`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${colorClasses[achievement.color as keyof typeof colorClasses].split(' ')[0]} ${colorClasses[achievement.color as keyof typeof colorClasses].split(' ')[1]} group-hover:scale-110 transition-transform`}>
                    <achievement.icon size={24} className="text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-white">{achievement.title}</h3>
                    </div>
                    
                    <div className="mb-3">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        achievement.color === 'yellow' ? 'bg-yellow-600/20 text-yellow-300' :
                        achievement.color === 'blue' ? 'bg-blue-600/20 text-blue-300' :
                        achievement.color === 'green' ? 'bg-green-600/20 text-green-300' :
                        'bg-purple-600/20 text-purple-300'
                      }`}>
                        {achievement.category}
                      </span>
                    </div>
                    
                    <p className="text-slate-300 leading-relaxed">
                      {achievement.description}
                    </p>
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

export default Achievements;