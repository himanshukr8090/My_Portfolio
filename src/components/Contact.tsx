import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin, BookOpen, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }).toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'himanshukr8090@gmail.com',
      link: 'mailto:himanshukr8090@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 8102050569',
      link: 'tel:+918102050569'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'India',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: 'GitHub',
      link: 'https://github.com/himanshukr8090'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/himanshukrsingh0'
    },
    {
      icon: BookOpen,
      title: 'Medium Blog',
      link: 'https://medium.com/@himanshukr8090'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Get In Touch
          </h2>
          
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a conversation about DevOps and cloud technologies. 
                  Feel free to reach out!
                </p>
              </div>
              
              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-3 bg-blue-600/20 rounded-lg">
                      <info.icon size={20} className="text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-slate-300 hover:text-blue-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-300">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Social Links */}
              <div>
                <h4 className="text-white font-medium mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 hover:scale-110 border border-slate-700 hover:border-blue-400 group"
                    >
                      <social.icon size={20} className="text-slate-400 group-hover:text-blue-400" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Send Message</h3>
              
              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-600/20 border border-green-600/30 rounded-lg flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-400" />
                  <p className="text-green-300">Thank you! Your message has been sent successfully.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-600/20 border border-red-600/30 rounded-lg flex items-center gap-3">
                  <AlertCircle size={20} className="text-red-400" />
                  <p className="text-red-300">Sorry, there was an error sending your message. Please try again.</p>
                </div>
              )}
              
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-400 text-white transition-colors disabled:opacity-50"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-400 text-white transition-colors disabled:opacity-50"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-400 text-white transition-colors resize-none disabled:opacity-50"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 hover:scale-105 font-medium disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;