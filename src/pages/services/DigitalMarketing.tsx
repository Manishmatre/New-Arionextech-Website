import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MegaphoneIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  StarIcon,
  PhoneIcon,
  BoltIcon,
  UserGroupIcon,
  PresentationChartLineIcon,
  EnvelopeIcon,
  ShareIcon
} from '@heroicons/react/24/outline';

const DigitalMarketing = () => {
  const platforms = [
    { name: 'Google Ads', category: 'PPC', icon: '🎯' },
    { name: 'Facebook Ads', category: 'Social Media', icon: '📘' },
    { name: 'Instagram', category: 'Social Media', icon: '📸' },
    { name: 'LinkedIn', category: 'B2B Marketing', icon: '💼' },
    { name: 'YouTube', category: 'Video Marketing', icon: '📺' },
    { name: 'Email Marketing', category: 'Direct Marketing', icon: '📧' },
    { name: 'WhatsApp Business', category: 'Messaging', icon: '💬' },
    { name: 'Twitter', category: 'Social Media', icon: '🐦' }
  ];

  const features = [
    {
      icon: <CursorArrowRaysIcon className="h-8 w-8 text-primary" />,
      title: 'PPC Advertising',
      description: 'Targeted pay-per-click campaigns on Google, Facebook, and other platforms.'
    },
    {
      icon: <UserGroupIcon className="h-8 w-8 text-primary" />,
      title: 'Social Media Marketing',
      description: 'Engaging social media campaigns that build brand awareness and drive conversions.'
    },
    {
      icon: <EnvelopeIcon className="h-8 w-8 text-primary" />,
      title: 'Email Marketing',
      description: 'Personalized email campaigns that nurture leads and retain customers.'
    },
    {
      icon: <PresentationChartLineIcon className="h-8 w-8 text-primary" />,
      title: 'Analytics & Reporting',
      description: 'Comprehensive tracking and reporting on all marketing campaign performance.'
    },
    {
      icon: <ShareIcon className="h-8 w-8 text-primary" />,
      title: 'Content Marketing',
      description: 'Strategic content creation that educates, engages, and converts your audience.'
    },
    {
      icon: <BoltIcon className="h-8 w-8 text-primary" />,
      title: 'Conversion Optimization',
      description: 'A/B testing and optimization to maximize your marketing ROI.'
    }
  ];

  const packages = [
    {
      name: 'Marketing Starter',
      price: '₹25,000/month',
      duration: 'Monthly',
      description: 'Essential digital marketing for small businesses',
      features: [
        'Google Ads management',
        'Facebook & Instagram ads',
        'Basic social media',
        'Monthly reporting',
        'Landing page optimization',
        '3 months minimum'
      ],
      popular: false
    },
    {
      name: 'Marketing Professional',
      price: '₹50,000/month',
      duration: 'Monthly',
      description: 'Comprehensive marketing strategy',
      features: [
        'Multi-platform PPC',
        'Advanced social media',
        'Email marketing',
        'Content creation',
        'A/B testing',
        'Bi-weekly reporting',
        'Conversion tracking'
      ],
      popular: true
    },
    {
      name: 'Marketing Enterprise',
      price: '₹1,00,000+/month',
      duration: 'Monthly',
      description: 'Full-scale marketing automation',
      features: [
        'Omnichannel campaigns',
        'Marketing automation',
        'Advanced analytics',
        'Custom content',
        'Lead nurturing',
        'Weekly reporting',
        'Dedicated manager',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const services = [
    {
      title: 'Google Ads Management',
      description: 'Professional PPC campaign management',
      icon: '🎯',
      benefits: ['Keyword research', 'Ad creation', 'Bid optimization', 'Performance tracking']
    },
    {
      title: 'Social Media Advertising',
      description: 'Targeted social media campaigns',
      icon: '📱',
      benefits: ['Audience targeting', 'Creative design', 'Campaign optimization', 'ROI tracking']
    },
    {
      title: 'Email Marketing',
      description: 'Automated email campaigns',
      icon: '📧',
      benefits: ['List building', 'Email design', 'Automation setup', 'Performance analysis']
    },
    {
      title: 'Content Marketing',
      description: 'Strategic content creation',
      icon: '📝',
      benefits: ['Content strategy', 'Blog writing', 'Video content', 'Social posts']
    }
  ];

  const testimonials = [
    {
      name: 'Suresh Kumar',
      company: 'E-commerce Plus',
      text: 'ArionexTech increased our online sales by 180% through their digital marketing campaigns. ROI has been exceptional!',
      rating: 5,
      image: 'SK'
    },
    {
      name: 'Deepika Singh',
      company: 'Fashion Forward',
      text: 'Their social media marketing strategy helped us reach 50K followers and doubled our brand engagement. Great results!',
      rating: 5,
      image: 'DS'
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
                <MegaphoneIcon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Digital Marketing</h1>
                <p className="text-lg text-gray-600">Growth-driven marketing campaigns</p>
              </div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Drive business growth with data-driven digital marketing strategies across all major platforms and channels.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact" className="btn btn-primary inline-flex items-center justify-center">
                <PhoneIcon className="h-4 w-4 mr-2" />
                Get Marketing Strategy
              </Link>
              <button className="btn btn-outline inline-flex items-center justify-center">
                <ChartBarIcon className="h-4 w-4 mr-2" />
                View Case Studies
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
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
              Marketing Platforms We Master
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive marketing across all major digital platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="text-3xl mb-3">{platform.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{platform.name}</h3>
                <p className="text-sm text-gray-500">{platform.category}</p>
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
              Marketing Services We Provide
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete digital marketing solutions to grow your business online.
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
              Specialized Marketing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Targeted marketing solutions for different business objectives.
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
              Marketing Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the marketing package that fits your business goals.
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
              Marketing Success Stories
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
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a free marketing consultation and custom strategy for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100 inline-flex items-center justify-center">
                <PhoneIcon className="h-4 w-4 mr-2" />
                Start Marketing Campaign
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

export default DigitalMarketing;
