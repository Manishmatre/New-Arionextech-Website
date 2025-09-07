import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeftIcon,
  CalendarIcon,
  UserGroupIcon,
  StarIcon,
  CheckCircleIcon,
  ArrowTopRightOnSquareIcon,
  CurrencyDollarIcon,
  HeartIcon,
  DevicePhoneMobileIcon,
  VideoCameraIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  BellIcon,
  PlayIcon
} from '@heroicons/react/24/outline';

const HealthcareMobileApp: React.FC = () => {
  const projectInfo = {
    title: 'Healthcare Mobile App',
    client: 'MediCare Plus',
    category: 'Mobile Development',
    duration: '6 months',
    teamSize: 4,
    budget: '$95,000',
    completionDate: 'February 2024',
    status: 'Live & Growing',
    rating: 5,
    projectUrl: 'https://medicare-plus-app.com',
    githubUrl: 'https://github.com/arionextech/medicare-plus-app'
  };

  const technologies = [
    { name: 'React Native', category: 'Mobile Framework', icon: '⚛️' },
    { name: 'Firebase', category: 'Backend', icon: '🔥' },
    { name: 'WebRTC', category: 'Video Calls', icon: '📹' },
    { name: 'HealthKit', category: 'Health Data', icon: '❤️' },
    { name: 'Node.js', category: 'API Server', icon: '🟢' },
    { name: 'MongoDB', category: 'Database', icon: '🍃' },
    { name: 'Socket.io', category: 'Real-time', icon: '⚡' },
    { name: 'Stripe', category: 'Payments', icon: '💳' }
  ];

  const features = [
    {
      title: 'Video Consultations',
      description: 'High-quality video calls with doctors featuring screen sharing, recording, and prescription sharing.',
      icon: <VideoCameraIcon className="h-8 w-8" />,
      details: ['HD video quality', 'Screen sharing', 'Call recording', 'Real-time chat', 'File sharing']
    },
    {
      title: 'Health Records Management',
      description: 'Secure digital health records with easy access to medical history, test results, and prescriptions.',
      icon: <DocumentTextIcon className="h-8 w-8" />,
      details: ['Digital health records', 'Test result integration', 'Prescription history', 'Medical imaging', 'Export capabilities']
    },
    {
      title: 'Appointment Booking',
      description: 'Seamless appointment scheduling with calendar integration, reminders, and rescheduling options.',
      icon: <CalendarIcon className="h-8 w-8" />,
      details: ['Real-time availability', 'Calendar sync', 'Automated reminders', 'Easy rescheduling', 'Waitlist management']
    },
    {
      title: 'Health Tracking',
      description: 'Comprehensive health monitoring with vital signs tracking, medication reminders, and progress analytics.',
      icon: <HeartIcon className="h-8 w-8" />,
      details: ['Vital signs monitoring', 'Medication reminders', 'Symptom tracking', 'Progress analytics', 'Health goals']
    },
    {
      title: 'Smart Notifications',
      description: 'Intelligent notification system for appointments, medications, and health alerts with customizable settings.',
      icon: <BellIcon className="h-8 w-8" />,
      details: ['Medication alerts', 'Appointment reminders', 'Health notifications', 'Emergency alerts', 'Custom settings']
    },
    {
      title: 'Security & Privacy',
      description: 'HIPAA-compliant security with end-to-end encryption, biometric authentication, and secure data storage.',
      icon: <ShieldCheckIcon className="h-8 w-8" />,
      details: ['HIPAA compliance', 'End-to-end encryption', 'Biometric auth', 'Secure storage', 'Privacy controls']
    }
  ];

  const results = [
    { metric: '100K+', label: 'App Downloads', icon: <DevicePhoneMobileIcon className="h-6 w-6" /> },
    { metric: '4.8/5', label: 'App Store Rating', icon: <StarIcon className="h-6 w-6" /> },
    { metric: '90%', label: 'User Retention Rate', icon: <UserGroupIcon className="h-6 w-6" /> },
    { metric: '50K+', label: 'Consultations Completed', icon: <VideoCameraIcon className="h-6 w-6" /> },
    { metric: '95%', label: 'Patient Satisfaction', icon: <HeartIcon className="h-6 w-6" /> },
    { metric: '40%', label: 'Reduced Wait Times', icon: <ClockIcon className="h-6 w-6" /> }
  ];

  const timeline = [
    {
      phase: 'Research & Discovery',
      duration: '3 weeks',
      description: 'Healthcare industry research, HIPAA compliance analysis, and user experience planning.',
      deliverables: ['Market research', 'Compliance framework', 'User personas', 'Technical architecture']
    },
    {
      phase: 'UI/UX Design',
      duration: '4 weeks',
      description: 'Patient-centered design with accessibility focus, creating intuitive interfaces for all age groups.',
      deliverables: ['Design system', 'User flows', 'Accessibility guidelines', 'Interactive prototypes']
    },
    {
      phase: 'Core Development',
      duration: '8 weeks',
      description: 'Building core app functionality including user management, appointment system, and basic health features.',
      deliverables: ['User authentication', 'Appointment system', 'Basic health tracking', 'Profile management']
    },
    {
      phase: 'Advanced Features',
      duration: '6 weeks',
      description: 'Implementation of video consultations, health records integration, and advanced tracking features.',
      deliverables: ['Video calling', 'Health records', 'Advanced tracking', 'Notification system']
    },
    {
      phase: 'Security & Compliance',
      duration: '3 weeks',
      description: 'HIPAA compliance implementation, security auditing, and privacy controls setup.',
      deliverables: ['HIPAA compliance', 'Security audit', 'Privacy controls', 'Encryption implementation']
    },
    {
      phase: 'Testing & Launch',
      duration: '2 weeks',
      description: 'Comprehensive testing, app store submission, and production deployment with monitoring.',
      deliverables: ['Quality assurance', 'App store approval', 'Production deployment', 'Monitoring setup']
    }
  ];

  const testimonial = {
    text: "The healthcare app developed by ArionexTech has revolutionized how we deliver patient care. The seamless video consultation feature and comprehensive health tracking have significantly improved patient engagement and satisfaction. The team's attention to HIPAA compliance and security gave us complete confidence in the solution.",
    author: "Dr. Michael Chen",
    position: "Chief Medical Officer, MediCare Plus",
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  };

  const relatedProjects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      link: '/projects/ecommerce-platform'
    },
    {
      title: 'AI Analytics Dashboard',
      category: 'AI & Machine Learning',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      link: '/projects/ai-analytics-dashboard'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <DevicePhoneMobileIcon className="h-4 w-4 mr-2" />
                  {projectInfo.category}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {projectInfo.title}
                </h1>
                <p className="text-xl text-white/90 mb-6">
                  A comprehensive healthcare mobile application for {projectInfo.client} featuring telemedicine, health tracking, and secure patient management with HIPAA compliance.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <CalendarIcon className="h-6 w-6 mx-auto mb-2 text-white/60" />
                    <div className="text-sm text-white/60">Duration</div>
                    <div className="font-semibold">{projectInfo.duration}</div>
                  </div>
                  <div className="text-center">
                    <UserGroupIcon className="h-6 w-6 mx-auto mb-2 text-white/60" />
                    <div className="text-sm text-white/60">Team Size</div>
                    <div className="font-semibold">{projectInfo.teamSize} members</div>
                  </div>
                  <div className="text-center">
                    <CurrencyDollarIcon className="h-6 w-6 mx-auto mb-2 text-white/60" />
                    <div className="text-sm text-white/60">Budget</div>
                    <div className="font-semibold">{projectInfo.budget}</div>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      {[...Array(projectInfo.rating)].map((_, i) => (
                        <StarIcon key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="text-sm text-white/60">Rating</div>
                    <div className="font-semibold">{projectInfo.rating}/5</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={projectInfo.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-white text-emerald-600 hover:bg-gray-100"
                  >
                    <PlayIcon className="h-4 w-4 mr-2" />
                    View Live App
                  </a>
                  <Link
                    to="/contact"
                    className="btn border-white text-white hover:bg-white hover:text-emerald-600"
                  >
                    Start Similar Project
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Healthcare Mobile App"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Project Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transforming healthcare delivery through innovative mobile technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {results.map((result, index) => (
              <motion.div
                key={result.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-xl"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-emerald-600">
                  {result.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{result.metric}</div>
                <div className="text-sm text-gray-600">{result.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Healthcare-grade technologies ensuring security, compliance, and optimal performance
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{tech.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{tech.name}</h3>
                <p className="text-sm text-gray-600">{tech.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare features designed for patients and healthcare providers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 text-emerald-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Development Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From concept to deployment - our structured approach to healthcare app development
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-center mb-12 last:mb-0"
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-gray-900">{phase.phase}</h3>
                      <span className="text-sm text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
                        {phase.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{phase.description}</p>
                    <div className="space-y-1">
                      {phase.deliverables.map((deliverable, deliverableIndex) => (
                        <div key={deliverableIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircleIcon className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                          {deliverable}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="w-4 h-4 bg-emerald-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                <div className={`flex-1 ${index % 2 === 0 ? 'pl-8' : 'pr-8 text-right'}`}>
                  <div className="text-2xl font-bold text-emerald-600">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                
                {index < timeline.length - 1 && (
                  <div className="absolute left-1/2 top-8 w-0.5 h-16 bg-emerald-200 transform -translate-x-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="text-6xl text-emerald-600 mb-6">"</div>
            <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              {testimonial.text}
            </blockquote>
            <div className="flex items-center justify-center">
              <img
                src={testimonial.avatar}
                alt={testimonial.author}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div className="text-left">
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-gray-600">{testimonial.position}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Related Projects
            </h2>
            <p className="text-lg text-gray-600">
              Discover more innovative solutions we've delivered
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={project.link}
                  className="block bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 right-4">
                        <ArrowTopRightOnSquareIcon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-emerald-600 font-medium mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's build a healthcare solution that improves patient outcomes and streamlines medical processes with cutting-edge technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn bg-white text-emerald-600 hover:bg-gray-100"
              >
                Start Your Healthcare Project
              </Link>
              <Link
                to="/portfolio"
                className="btn border-white text-white hover:bg-white hover:text-emerald-600"
              >
                View More Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HealthcareMobileApp;
