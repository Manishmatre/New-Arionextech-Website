import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MagnifyingGlassIcon,
  ChartBarIcon,
  LinkIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  StarIcon,
  PhoneIcon,
  DocumentTextIcon,
  ArrowTrendingUpIcon,
  CursorArrowRaysIcon
} from '@heroicons/react/24/outline';

const SeoBacklinks = () => {
  const tools = [
    { name: 'Google Analytics', category: 'Analytics', icon: '📊' },
    { name: 'SEMrush', category: 'SEO Tool', icon: '🔍' },
    { name: 'Ahrefs', category: 'Backlinks', icon: '🔗' },
    { name: 'Moz', category: 'SEO Analysis', icon: '📈' },
    { name: 'Google Search Console', category: 'Monitoring', icon: '🔧' },
    { name: 'Screaming Frog', category: 'Crawling', icon: '🕷️' },
    { name: 'Majestic', category: 'Link Analysis', icon: '👑' },
    { name: 'BuzzSumo', category: 'Content Research', icon: '💡' }
  ];

  const features = [
    {
      icon: <MagnifyingGlassIcon className="h-8 w-8 text-primary" />,
      title: 'Keyword Research',
      description: 'Comprehensive keyword analysis to target high-value search terms.'
    },
    {
      icon: <DocumentTextIcon className="h-8 w-8 text-primary" />,
      title: 'Content Optimization',
      description: 'SEO-optimized content that ranks higher and engages users.'
    },
    {
      icon: <LinkIcon className="h-8 w-8 text-primary" />,
      title: 'Quality Backlinks',
      description: 'High-authority backlinks from relevant and trusted websites.'
    },
    {
      icon: <ChartBarIcon className="h-8 w-8 text-primary" />,
      title: 'Performance Tracking',
      description: 'Detailed analytics and reporting on SEO performance metrics.'
    },
    {
      icon: <CursorArrowRaysIcon className="h-8 w-8 text-primary" />,
      title: 'Technical SEO',
      description: 'Website optimization for better search engine crawling and indexing.'
    },
    {
      icon: <ArrowTrendingUpIcon className="h-8 w-8 text-primary" />,
      title: 'Local SEO',
      description: 'Optimize for local search results and Google My Business.'
    }
  ];

  const packages = [
    {
      name: 'SEO Starter',
      price: '₹15,000/month',
      duration: 'Monthly',
      description: 'Basic SEO for small businesses',
      features: [
        '10 target keywords',
        'On-page optimization',
        'Basic link building',
        'Monthly reporting',
        'Google My Business setup',
        '3 months minimum'
      ],
      popular: false
    },
    {
      name: 'SEO Professional',
      price: '₹35,000/month',
      duration: 'Monthly',
      description: 'Comprehensive SEO strategy',
      features: [
        '25 target keywords',
        'Advanced on-page SEO',
        'Quality backlink building',
        'Content creation',
        'Technical SEO audit',
        'Bi-weekly reporting',
        'Competitor analysis'
      ],
      popular: true
    },
    {
      name: 'SEO Enterprise',
      price: '₹75,000+/month',
      duration: 'Monthly',
      description: 'Enterprise SEO solution',
      features: [
        'Unlimited keywords',
        'Advanced technical SEO',
        'Premium backlinks',
        'Content marketing',
        'Local SEO optimization',
        'Weekly reporting',
        'Dedicated SEO manager',
        'Custom strategy'
      ],
      popular: false
    }
  ];

  const services = [
    {
      title: 'On-Page SEO',
      description: 'Optimize website content and structure',
      icon: '📝',
      benefits: ['Title optimization', 'Meta descriptions', 'Header tags', 'Internal linking']
    },
    {
      title: 'Link Building',
      description: 'High-quality backlink acquisition',
      icon: '🔗',
      benefits: ['Guest posting', 'Directory submissions', 'Resource pages', 'Broken link building']
    },
    {
      title: 'Technical SEO',
      description: 'Website technical optimization',
      icon: '⚙️',
      benefits: ['Site speed', 'Mobile optimization', 'Schema markup', 'XML sitemaps']
    },
    {
      title: 'Local SEO',
      description: 'Local search optimization',
      icon: '📍',
      benefits: ['Google My Business', 'Local citations', 'Review management', 'Local keywords']
    }
  ];

  const testimonials = [
    {
      name: 'Rahul Agarwal',
      company: 'Digital Marketing Pro',
      text: 'ArionexTech improved our search rankings from page 3 to page 1 for 15 keywords. Our organic traffic increased by 250%!',
      rating: 5,
      image: 'RA'
    },
    {
      name: 'Kavya Iyer',
      company: 'Local Business Hub',
      text: 'Their local SEO strategy helped us dominate local search results. We now get 5x more local customers through Google.',
      rating: 5,
      image: 'KI'
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
                <MagnifyingGlassIcon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">SEO & Backlinks</h1>
                <p className="text-lg text-gray-600">Dominate search engine rankings</p>
              </div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Boost your online visibility with proven SEO strategies and high-quality backlinks that drive organic traffic and improve search rankings.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact" className="btn btn-primary inline-flex items-center justify-center">
                <PhoneIcon className="h-4 w-4 mr-2" />
                Get SEO Audit
              </Link>
              <button className="btn btn-outline inline-flex items-center justify-center">
                <ChartBarIcon className="h-4 w-4 mr-2" />
                View Rankings Report
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
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
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">SEO Tools</span> We Use
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional SEO tools for comprehensive analysis and optimization.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="text-3xl mb-3">{tool.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{tool.name}</h3>
                <p className="text-sm text-gray-500">{tool.category}</p>
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
              SEO Services We Provide
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete SEO solutions to improve your search engine visibility.
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
              Specialized SEO Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Targeted SEO strategies for different aspects of search optimization.
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
              SEO Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the SEO package that matches your business goals.
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
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">SEO Success</span> Stories
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
              Ready to <span className="bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">Boost Your Rankings</span>?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a free SEO audit and discover how to improve your search rankings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100 inline-flex items-center justify-center">
                <PhoneIcon className="h-4 w-4 mr-2" />
                Start SEO Campaign
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

export default SeoBacklinks;
