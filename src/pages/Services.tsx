import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CodeBracketIcon, 
  CloudArrowUpIcon, 
  CpuChipIcon, 
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
  CheckIcon,
  ArrowRightIcon,
  ServerStackIcon
} from '@heroicons/react/24/outline';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with the latest technologies for optimal performance and user experience.',
      icon: <CodeBracketIcon className="h-10 w-10 text-primary" />,
      link: '/services/web-development',
      isTopService: true,
      badge: 'Most Popular'
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android that engage users and drive business growth.',
      icon: <DevicePhoneMobileIcon className="h-10 w-10 text-primary" />,
      link: '/services/mobile-app-development',
      isTopService: true,
      badge: 'High Demand'
    },
    {
      title: 'Custom Software',
      description: 'Tailored software solutions designed specifically for your unique business requirements and workflows.',
      icon: <CodeBracketIcon className="h-10 w-10 text-primary" />,
      link: '/services/custom-software',
      isTopService: true,
      badge: 'Trending'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure to optimize your business operations and reduce costs.',
      icon: <CloudArrowUpIcon className="h-10 w-10 text-primary" />,
      link: '/services/cloud-solutions',
    },
    {
      title: 'DevOps',
      description: 'Streamlined development and operations with continuous integration and deployment pipelines.',
      icon: <ServerStackIcon className="h-10 w-10 text-primary" />,
      link: '/services/devops',
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      icon: <ShieldCheckIcon className="h-10 w-10 text-primary" />,
      link: '/services/cybersecurity',
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create exceptional experiences and drive conversions.',
      icon: <CodeBracketIcon className="h-10 w-10 text-primary" />,
      link: '/services/ui-ux-design',
    },
    {
      title: 'SEO & Backlinks',
      description: 'Boost your search rankings with proven SEO strategies and high-quality backlink building.',
      icon: <CodeBracketIcon className="h-10 w-10 text-primary" />,
      link: '/services/seo-backlinks',
    },
    {
      title: 'Digital Marketing',
      description: 'Growth-driven marketing campaigns across all major platforms to expand your reach.',
      icon: <CodeBracketIcon className="h-10 w-10 text-primary" />,
      link: '/services/digital-marketing',
    },
    {
      title: 'Graphic Design',
      description: 'Creative visual solutions that communicate your brand message effectively and professionally.',
      icon: <CodeBracketIcon className="h-10 w-10 text-primary" />,
      link: '/services/graphic-design',
    },
    {
      title: 'Staff Augmentation',
      description: 'Scale your team with pre-vetted, skilled professionals who integrate seamlessly with your workforce.',
      icon: <CodeBracketIcon className="h-10 w-10 text-primary" />,
      link: '/services/staff-augmentation',
    },
    {
      title: 'AI & ML',
      description: 'Intelligent solutions powered by artificial intelligence and machine learning to transform your business.',
      icon: <CpuChipIcon className="h-10 w-10 text-primary" />,
      link: '/services/ai-ml',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 overflow-hidden">
        {/* Fallback background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        {/* Animated elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <ServerStackIcon className="h-4 w-4 mr-2" />
              What We Offer
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Comprehensive technology solutions tailored to your business needs. From web development to AI solutions, we deliver excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group relative ${
                  service.isTopService ? 'ring-2 ring-primary/50 bg-gradient-to-br from-white to-blue-50/30' : ''
                }`}
              >
                {/* Top Service Badge */}
                {service.isTopService && (
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-gradient-to-r from-primary to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      ⭐ {service.badge}
                    </div>
                  </div>
                )}
                
                <div className={`w-16 h-16 flex items-center justify-center rounded-full mb-6 transition-colors ${
                  service.isTopService 
                    ? 'bg-gradient-to-br from-primary/20 to-blue-600/20 group-hover:from-primary/30 group-hover:to-blue-600/30' 
                    : 'bg-primary/10 group-hover:bg-primary/20'
                }`}>
                  {service.icon}
                </div>
                
                <h3 className={`text-xl font-semibold mb-4 ${
                  service.isTopService ? 'text-primary' : 'text-gray-900'
                }`}>
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <Link 
                  to={service.link}
                  className={`flex items-center font-medium transition-colors ${
                    service.isTopService 
                      ? 'text-primary hover:text-blue-600' 
                      : 'text-primary hover:text-primary-dark'
                  }`}
                >
                  <span>Learn More</span>
                  <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
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
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Service</span> Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the perfect package for your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: '₹25,000',
                period: '/project',
                description: 'Perfect for small businesses and startups',
                features: [
                  'Basic Website (5 pages)',
                  'Responsive Design',
                  'Contact Form',
                  '3 Months Support',
                  'SEO Basics'
                ],
                popular: false
              },
              {
                name: 'Professional',
                price: '₹75,000',
                period: '/project',
                description: 'Ideal for growing businesses',
                features: [
                  'Advanced Website (10+ pages)',
                  'Custom Design',
                  'CMS Integration',
                  'E-commerce Ready',
                  '6 Months Support',
                  'Advanced SEO',
                  'Analytics Setup'
                ],
                popular: true
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: '/quote',
                description: 'For large-scale applications',
                features: [
                  'Custom Web Application',
                  'Database Design',
                  'API Development',
                  'Cloud Deployment',
                  '12 Months Support',
                  'Performance Optimization',
                  'Security Audit',
                  'Training & Documentation'
                ],
                popular: false
              }
            ].map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative ${
                  plan.popular ? 'ring-2 ring-primary scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-600 font-normal">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? 'bg-primary text-white hover:bg-primary-dark'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
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
              Ready to start your <span className="bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">project</span>?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your business goals with our custom solutions.
            </p>
            <a
              href="#contact"
              className="btn bg-white text-primary hover:bg-gray-100 inline-flex items-center justify-center"
            >
              Get in Touch
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
