import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ServerStackIcon,
  CloudArrowUpIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  StarIcon,
  PhoneIcon,
  BoltIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  CommandLineIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

const DevOps = () => {
  const technologies = [
    { name: 'Docker', category: 'Containerization', icon: '🐳' },
    { name: 'Kubernetes', category: 'Orchestration', icon: '☸️' },
    { name: 'Jenkins', category: 'CI/CD', icon: '🔧' },
    { name: 'GitLab CI', category: 'CI/CD', icon: '🦊' },
    { name: 'Terraform', category: 'Infrastructure', icon: '🏗️' },
    { name: 'Ansible', category: 'Automation', icon: '📋' },
    { name: 'Prometheus', category: 'Monitoring', icon: '📊' },
    { name: 'ELK Stack', category: 'Logging', icon: '🔍' }
  ];

  const features = [
    {
      icon: <RocketLaunchIcon className="h-8 w-8 text-primary" />,
      title: 'CI/CD Pipelines',
      description: 'Automated build, test, and deployment pipelines for faster releases.'
    },
    {
      icon: <CloudArrowUpIcon className="h-8 w-8 text-primary" />,
      title: 'Infrastructure as Code',
      description: 'Manage infrastructure through code for consistency and scalability.'
    },
    {
      icon: <ChartBarIcon className="h-8 w-8 text-primary" />,
      title: 'Monitoring & Alerting',
      description: '24/7 monitoring with real-time alerts and performance metrics.'
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8 text-primary" />,
      title: 'Security Integration',
      description: 'Security scanning and compliance checks integrated into pipelines.'
    },
    {
      icon: <BoltIcon className="h-8 w-8 text-primary" />,
      title: 'Auto-scaling',
      description: 'Automatic scaling based on demand and performance metrics.'
    },
    {
      icon: <ArrowPathIcon className="h-8 w-8 text-primary" />,
      title: 'Backup & Recovery',
      description: 'Automated backup strategies and disaster recovery planning.'
    }
  ];

  const packages = [
    {
      name: 'DevOps Starter',
      price: '₹75,000',
      duration: '4-6 weeks',
      description: 'Basic DevOps setup for small teams',
      features: [
        'CI/CD pipeline setup',
        'Basic monitoring',
        'Docker containerization',
        'Cloud deployment',
        '3 months support',
        'Documentation'
      ],
      popular: false
    },
    {
      name: 'DevOps Professional',
      price: '₹1,50,000',
      duration: '8-10 weeks',
      description: 'Complete DevOps transformation',
      features: [
        'Advanced CI/CD pipelines',
        'Infrastructure as Code',
        'Monitoring & alerting',
        'Security integration',
        'Auto-scaling setup',
        '6 months support',
        'Team training'
      ],
      popular: true
    },
    {
      name: 'DevOps Enterprise',
      price: '₹3,00,000+',
      duration: '12-16 weeks',
      description: 'Enterprise-grade DevOps platform',
      features: [
        'Multi-environment setup',
        'Advanced monitoring',
        'Compliance automation',
        'Disaster recovery',
        'Performance optimization',
        '12 months support',
        'Dedicated DevOps engineer',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const services = [
    {
      title: 'CI/CD Implementation',
      description: 'Automated build, test, and deployment workflows',
      icon: '🚀',
      benefits: ['Faster releases', 'Reduced errors', 'Automated testing', 'Quality gates']
    },
    {
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms',
      icon: '☁️',
      benefits: ['Zero downtime', 'Cost optimization', 'Scalability', 'Security']
    },
    {
      title: 'Container Orchestration',
      description: 'Docker and Kubernetes implementation',
      icon: '🐳',
      benefits: ['Resource efficiency', 'Easy scaling', 'Portability', 'Microservices']
    },
    {
      title: 'Infrastructure Automation',
      description: 'Infrastructure as Code with Terraform',
      icon: '🏗️',
      benefits: ['Consistency', 'Version control', 'Reproducibility', 'Cost control']
    }
  ];

  const testimonials = [
    {
      name: 'Kiran Patel',
      company: 'TechFlow Solutions',
      text: 'ArionexTech reduced our deployment time from hours to minutes with their DevOps implementation. Incredible efficiency gains!',
      rating: 5,
      image: 'KP'
    },
    {
      name: 'Neha Gupta',
      company: 'CloudFirst Technologies',
      text: 'Their DevOps expertise helped us achieve 99.9% uptime and 50% cost reduction. Outstanding results!',
      rating: 5,
      image: 'NG'
    }
  ];

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/5 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center mb-6"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <ServerStackIcon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">DevOps Services</h1>
                <p className="text-lg text-gray-600">Streamlined development & operations</p>
              </div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Accelerate your software delivery with automated CI/CD pipelines, infrastructure as code, and comprehensive monitoring solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact" className="btn btn-primary inline-flex items-center justify-center">
                <PhoneIcon className="h-4 w-4 mr-2" />
                Get DevOps Assessment
              </Link>
              <button className="btn btn-outline inline-flex items-center justify-center">
                <CommandLineIcon className="h-4 w-4 mr-2" />
                View Case Studies
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              DevOps Tools & Technologies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Industry-leading tools for building robust DevOps pipelines.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="text-3xl mb-3">{tech.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{tech.name}</h3>
                <p className="text-sm text-gray-500">{tech.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              DevOps Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive DevOps services that transform your development workflow.
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
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              DevOps Services We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end DevOps solutions for modern software development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start mb-6">
                  <div className="text-4xl mr-4">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              DevOps Implementation Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the DevOps solution that matches your team's needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 ${
                  pkg.popular ? 'ring-2 ring-primary ring-opacity-20 transform scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="bg-primary text-white text-sm font-medium px-3 py-1 rounded-full text-center mb-4">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-primary mb-2">{pkg.price}</div>
                  <p className="text-gray-600 text-sm mb-2">{pkg.description}</p>
                  <div className="flex items-center justify-center text-sm text-gray-500">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    {pkg.duration}
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`btn w-full ${pkg.popular ? 'btn-primary' : 'btn-outline'}`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              DevOps Success Stories
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-semibold">{testimonial.image}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Accelerate Your Development?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a free DevOps assessment and roadmap for your development workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100 inline-flex items-center justify-center">
                <PhoneIcon className="h-4 w-4 mr-2" />
                Start DevOps Journey
              </Link>
              <Link to="/services" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary inline-flex items-center justify-center">
                View All Services
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DevOps;
