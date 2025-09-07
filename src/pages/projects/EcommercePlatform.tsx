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
  ClockIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  ShoppingCartIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  CodeBracketIcon,
  PlayIcon
} from '@heroicons/react/24/outline';

const EcommercePlatform: React.FC = () => {
  const projectInfo = {
    title: 'E-Commerce Platform',
    client: 'RetailMax Solutions',
    category: 'Web Development',
    duration: '4 months',
    teamSize: 5,
    budget: '$75,000',
    completionDate: 'March 2024',
    status: 'Live & Successful',
    rating: 5,
    projectUrl: 'https://retailmax-demo.com',
    githubUrl: 'https://github.com/arionextech/retailmax-platform'
  };

  const technologies = [
    { name: 'React', category: 'Frontend', icon: '⚛️' },
    { name: 'Node.js', category: 'Backend', icon: '🟢' },
    { name: 'MongoDB', category: 'Database', icon: '🍃' },
    { name: 'Stripe API', category: 'Payment', icon: '💳' },
    { name: 'AWS', category: 'Cloud', icon: '☁️' },
    { name: 'Redis', category: 'Cache', icon: '🔴' },
    { name: 'Docker', category: 'DevOps', icon: '🐳' },
    { name: 'Elasticsearch', category: 'Search', icon: '🔍' }
  ];

  const features = [
    {
      title: 'Multi-vendor Marketplace',
      description: 'Support for multiple vendors with individual dashboards, commission tracking, and automated payouts.',
      icon: <ShoppingCartIcon className="h-8 w-8" />,
      details: ['Vendor registration & verification', 'Commission management', 'Automated settlements', 'Performance analytics']
    },
    {
      title: 'Real-time Inventory Management',
      description: 'Live inventory tracking with automatic stock updates, low-stock alerts, and supplier integration.',
      icon: <ChartBarIcon className="h-8 w-8" />,
      details: ['Live stock tracking', 'Automated reorder points', 'Supplier notifications', 'Inventory forecasting']
    },
    {
      title: 'Advanced Analytics Dashboard',
      description: 'Comprehensive business intelligence with sales analytics, customer insights, and performance metrics.',
      icon: <CpuChipIcon className="h-8 w-8" />,
      details: ['Sales performance tracking', 'Customer behavior analysis', 'Revenue forecasting', 'Custom reporting']
    },
    {
      title: 'Mobile-First Design',
      description: 'Fully responsive design optimized for mobile commerce with progressive web app capabilities.',
      icon: <DevicePhoneMobileIcon className="h-8 w-8" />,
      details: ['PWA functionality', 'Mobile optimization', 'Touch-friendly interface', 'Offline capabilities']
    },
    {
      title: 'Secure Payment Processing',
      description: 'PCI-compliant payment processing with multiple payment gateways and fraud detection.',
      icon: <ShieldCheckIcon className="h-8 w-8" />,
      details: ['Multiple payment methods', 'Fraud detection', 'PCI compliance', 'Secure checkout']
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable AWS infrastructure with auto-scaling, load balancing, and 99.9% uptime guarantee.',
      icon: <CloudIcon className="h-8 w-8" />,
      details: ['Auto-scaling', 'Load balancing', 'CDN integration', 'Backup & recovery']
    }
  ];

  const results = [
    { metric: '150%', label: 'Faster Loading Speed', icon: <ClockIcon className="h-6 w-6" /> },
    { metric: '85%', label: 'Increase in Conversion Rate', icon: <ChartBarIcon className="h-6 w-6" /> },
    { metric: '50K+', label: 'Active Users', icon: <UserGroupIcon className="h-6 w-6" /> },
    { metric: '99.9%', label: 'Uptime Achieved', icon: <CheckCircleIcon className="h-6 w-6" /> },
    { metric: '$2M+', label: 'Revenue Generated', icon: <CurrencyDollarIcon className="h-6 w-6" /> },
    { metric: '300%', label: 'ROI for Client', icon: <StarIcon className="h-6 w-6" /> }
  ];

  const timeline = [
    {
      phase: 'Discovery & Planning',
      duration: '2 weeks',
      description: 'Requirements gathering, market research, and technical architecture planning.',
      deliverables: ['Technical specifications', 'UI/UX wireframes', 'Project roadmap', 'Risk assessment']
    },
    {
      phase: 'Design & Prototyping',
      duration: '3 weeks',
      description: 'User interface design, user experience optimization, and interactive prototypes.',
      deliverables: ['Design system', 'Interactive prototypes', 'User flow diagrams', 'Brand guidelines']
    },
    {
      phase: 'Development Phase 1',
      duration: '6 weeks',
      description: 'Core platform development including user management, product catalog, and basic e-commerce functionality.',
      deliverables: ['User authentication', 'Product management', 'Shopping cart', 'Basic checkout']
    },
    {
      phase: 'Development Phase 2',
      duration: '4 weeks',
      description: 'Advanced features implementation including multi-vendor support, analytics, and payment integration.',
      deliverables: ['Vendor dashboard', 'Analytics system', 'Payment gateway', 'Inventory management']
    },
    {
      phase: 'Testing & Optimization',
      duration: '2 weeks',
      description: 'Comprehensive testing, performance optimization, and security auditing.',
      deliverables: ['Test reports', 'Performance optimization', 'Security audit', 'Bug fixes']
    },
    {
      phase: 'Deployment & Launch',
      duration: '1 week',
      description: 'Production deployment, monitoring setup, and go-live support.',
      deliverables: ['Production deployment', 'Monitoring setup', 'Documentation', 'Training materials']
    }
  ];

  const testimonial = {
    text: "ArionexTech delivered an exceptional e-commerce platform that exceeded our expectations. The team's expertise in modern web technologies and their attention to detail resulted in a solution that not only met our current needs but also positioned us for future growth. The platform's performance and user experience have significantly improved our conversion rates.",
    author: "Sarah Johnson",
    position: "CTO, RetailMax Solutions",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  };

  const relatedProjects = [
    {
      title: 'Healthcare Mobile App',
      category: 'Mobile Development',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      link: '/projects/healthcare-mobile-app'
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
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
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
                  <CodeBracketIcon className="h-4 w-4 mr-2" />
                  {projectInfo.category}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {projectInfo.title}
                </h1>
                <p className="text-xl text-white/90 mb-6">
                  A comprehensive multi-vendor e-commerce platform built for {projectInfo.client} with advanced analytics, real-time inventory management, and seamless payment processing.
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
                    className="btn bg-white text-blue-600 hover:bg-gray-100"
                  >
                    <PlayIcon className="h-4 w-4 mr-2" />
                    View Live Project
                  </a>
                  <Link
                    to="/contact"
                    className="btn border-white text-white hover:bg-white hover:text-blue-600"
                  >
                    Start Similar Project
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="E-Commerce Platform"
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
              Project Results
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Measurable impact and success metrics achieved through our comprehensive e-commerce solution
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
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-blue-600">
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
              Cutting-edge technologies and frameworks used to build this robust e-commerce platform
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
              Key Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive features designed to provide a complete e-commerce solution
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
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
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
              Project Timeline
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A detailed breakdown of our development process and key milestones
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
                      <span className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
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
                
                <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                <div className={`flex-1 ${index % 2 === 0 ? 'pl-8' : 'pr-8 text-right'}`}>
                  <div className="text-2xl font-bold text-blue-600">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                
                {index < timeline.length - 1 && (
                  <div className="absolute left-1/2 top-8 w-0.5 h-16 bg-blue-200 transform -translate-x-1/2"></div>
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
            <div className="text-6xl text-blue-600 mb-6">"</div>
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
              Explore more of our successful projects
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
                    <div className="text-sm text-blue-600 font-medium mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
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
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Build Your E-Commerce Platform?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how we can create a custom e-commerce solution that drives your business growth and delivers exceptional results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn bg-white text-blue-600 hover:bg-gray-100"
              >
                Start Your Project
              </Link>
              <Link
                to="/portfolio"
                className="btn border-white text-white hover:bg-white hover:text-blue-600"
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

export default EcommercePlatform;
