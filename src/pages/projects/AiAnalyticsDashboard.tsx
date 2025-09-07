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
  CpuChipIcon,
  CloudIcon,
  DocumentChartBarIcon,
  LightBulbIcon,
  Cog6ToothIcon,
  PlayIcon,
  BoltIcon
} from '@heroicons/react/24/outline';

const AiAnalyticsDashboard: React.FC = () => {
  const projectInfo = {
    title: 'AI-Powered Analytics Dashboard',
    client: 'DataInsights Corp',
    category: 'AI & Machine Learning',
    duration: '8 months',
    teamSize: 6,
    budget: '$150,000',
    completionDate: 'January 2024',
    status: 'Live & Scaling',
    rating: 5,
    projectUrl: 'https://datainsights-ai-dashboard.com',
    githubUrl: 'https://github.com/arionextech/ai-analytics-dashboard'
  };

  const technologies = [
    { name: 'Python', category: 'Backend', icon: '🐍' },
    { name: 'TensorFlow', category: 'ML Framework', icon: '🧠' },
    { name: 'React', category: 'Frontend', icon: '⚛️' },
    { name: 'PostgreSQL', category: 'Database', icon: '🐘' },
    { name: 'Docker', category: 'DevOps', icon: '🐳' },
    { name: 'Apache Kafka', category: 'Streaming', icon: '📊' },
    { name: 'Redis', category: 'Cache', icon: '🔴' },
    { name: 'Kubernetes', category: 'Orchestration', icon: '☸️' }
  ];

  const features = [
    {
      title: 'Predictive Analytics',
      description: 'Advanced machine learning models for forecasting trends, customer behavior, and business outcomes.',
      icon: <CpuChipIcon className="h-8 w-8" />,
      details: ['Time series forecasting', 'Customer churn prediction', 'Revenue forecasting', 'Market trend analysis', 'Risk assessment']
    },
    {
      title: 'Real-time Data Processing',
      description: 'Stream processing capabilities handling millions of data points per second with sub-millisecond latency.',
      icon: <BoltIcon className="h-8 w-8" />,
      details: ['Real-time ingestion', 'Stream processing', 'Live dashboards', 'Instant alerts', 'Auto-scaling']
    },
    {
      title: 'Custom Dashboards',
      description: 'Drag-and-drop dashboard builder with customizable widgets, filters, and visualization options.',
      icon: <DocumentChartBarIcon className="h-8 w-8" />,
      details: ['Drag-and-drop builder', 'Custom widgets', 'Interactive charts', 'Filter system', 'Export capabilities']
    },
    {
      title: 'API Integration Hub',
      description: 'Seamless integration with 100+ data sources including CRM, ERP, social media, and IoT devices.',
      icon: <Cog6ToothIcon className="h-8 w-8" />,
      details: ['100+ integrations', 'REST/GraphQL APIs', 'Webhook support', 'Data transformation', 'Error handling']
    },
    {
      title: 'Automated Insights',
      description: 'AI-powered insight generation that automatically identifies patterns, anomalies, and opportunities.',
      icon: <LightBulbIcon className="h-8 w-8" />,
      details: ['Pattern recognition', 'Anomaly detection', 'Automated reports', 'Smart alerts', 'Trend identification']
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-grade security with role-based access, data encryption, and compliance with GDPR and SOC2.',
      icon: <CloudIcon className="h-8 w-8" />,
      details: ['Role-based access', 'Data encryption', 'GDPR compliance', 'SOC2 certified', 'Audit trails']
    }
  ];

  const results = [
    { metric: '95%', label: 'Prediction Accuracy', icon: <CpuChipIcon className="h-6 w-6" /> },
    { metric: '10x', label: 'Faster Processing', icon: <BoltIcon className="h-6 w-6" /> },
    { metric: '300+', label: 'Automated Insights', icon: <LightBulbIcon className="h-6 w-6" /> },
    { metric: '50M+', label: 'Data Points/Day', icon: <ChartBarIcon className="h-6 w-6" /> },
    { metric: '99.9%', label: 'System Uptime', icon: <CheckCircleIcon className="h-6 w-6" /> },
    { metric: '400%', label: 'ROI Increase', icon: <CurrencyDollarIcon className="h-6 w-6" /> }
  ];

  const timeline = [
    {
      phase: 'Data Architecture Design',
      duration: '4 weeks',
      description: 'Designing scalable data architecture, ML pipeline, and system infrastructure for high-volume processing.',
      deliverables: ['Data architecture', 'ML pipeline design', 'Infrastructure plan', 'Technology selection']
    },
    {
      phase: 'ML Model Development',
      duration: '8 weeks',
      description: 'Building and training machine learning models for predictive analytics and pattern recognition.',
      deliverables: ['Predictive models', 'Training pipelines', 'Model validation', 'Performance optimization']
    },
    {
      phase: 'Backend Development',
      duration: '6 weeks',
      description: 'Developing robust backend services for data processing, API management, and real-time analytics.',
      deliverables: ['API services', 'Data processing', 'Real-time engine', 'Integration layer']
    },
    {
      phase: 'Frontend Dashboard',
      duration: '6 weeks',
      description: 'Creating intuitive dashboard interface with advanced visualization and customization capabilities.',
      deliverables: ['Dashboard UI', 'Visualization library', 'User management', 'Responsive design']
    },
    {
      phase: 'Integration & Testing',
      duration: '4 weeks',
      description: 'Integrating all components, performance testing, and ensuring system reliability and accuracy.',
      deliverables: ['System integration', 'Performance testing', 'Load testing', 'Accuracy validation']
    },
    {
      phase: 'Deployment & Monitoring',
      duration: '2 weeks',
      description: 'Production deployment with monitoring, alerting, and automated scaling capabilities.',
      deliverables: ['Production deployment', 'Monitoring setup', 'Auto-scaling', 'Documentation']
    }
  ];

  const testimonial = {
    text: "The AI analytics dashboard developed by ArionexTech has completely transformed our decision-making process. The predictive capabilities and real-time insights have given us a competitive edge we never had before. The accuracy of the predictions and the intuitive interface have made this an indispensable tool for our business operations.",
    author: "Jennifer Martinez",
    position: "Chief Data Officer, DataInsights Corp",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  };

  const relatedProjects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      link: '/projects/ecommerce-platform'
    },
    {
      title: 'Healthcare Mobile App',
      category: 'Mobile Development',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      link: '/projects/healthcare-mobile-app'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
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
                  <CpuChipIcon className="h-4 w-4 mr-2" />
                  {projectInfo.category}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {projectInfo.title}
                </h1>
                <p className="text-xl text-white/90 mb-6">
                  An advanced AI-powered analytics platform for {projectInfo.client} featuring predictive modeling, real-time data processing, and automated business intelligence.
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
                    className="btn bg-white text-purple-600 hover:bg-gray-100"
                  >
                    <PlayIcon className="h-4 w-4 mr-2" />
                    View Live Dashboard
                  </a>
                  <Link
                    to="/contact"
                    className="btn border-white text-white hover:bg-white hover:text-purple-600"
                  >
                    Start AI Project
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="AI Analytics Dashboard"
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
              Performance Metrics
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Exceptional results achieved through advanced AI and machine learning technologies
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
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-purple-600">
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
              AI Technology Stack
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enterprise-grade technologies powering advanced analytics and machine learning capabilities
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
              Advanced Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cutting-edge AI features designed to transform data into actionable business insights
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
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 text-purple-600">
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
              Development Roadmap
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Strategic approach to building enterprise-grade AI analytics platform
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
                      <span className="text-sm text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
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
                
                <div className="w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                <div className={`flex-1 ${index % 2 === 0 ? 'pl-8' : 'pr-8 text-right'}`}>
                  <div className="text-2xl font-bold text-purple-600">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                
                {index < timeline.length - 1 && (
                  <div className="absolute left-1/2 top-8 w-0.5 h-16 bg-purple-200 transform -translate-x-1/2"></div>
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
            <div className="text-6xl text-purple-600 mb-6">"</div>
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
              Explore our diverse portfolio of innovative solutions
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
                    <div className="text-sm text-purple-600 font-medium mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
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
      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Harness AI for Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Transform your data into competitive advantage with our AI-powered analytics solutions and machine learning expertise.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn bg-white text-purple-600 hover:bg-gray-100"
              >
                Start AI Project
              </Link>
              <Link
                to="/portfolio"
                className="btn border-white text-white hover:bg-white hover:text-purple-600"
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

export default AiAnalyticsDashboard;
