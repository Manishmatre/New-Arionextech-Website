import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ChartBarIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  StarIcon,
  PhoneIcon,
  BeakerIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const AiMl = () => {
  const technologies = [
    { name: 'Python', category: 'Language', icon: '🐍' },
    { name: 'TensorFlow', category: 'Framework', icon: '🧠' },
    { name: 'PyTorch', category: 'Framework', icon: '🔥' },
    { name: 'OpenAI', category: 'API', icon: '🤖' },
    { name: 'Scikit-learn', category: 'Library', icon: '📊' },
    { name: 'Pandas', category: 'Data Analysis', icon: '🐼' },
    { name: 'AWS ML', category: 'Cloud', icon: '☁️' },
    { name: 'Azure AI', category: 'Cloud', icon: '🔷' }
  ];

  const features = [
    {
      icon: <ChartBarIcon className="h-8 w-8 text-primary" />,
      title: 'Predictive Analytics',
      description: 'Advanced algorithms to predict trends, customer behavior, and business outcomes.'
    },
    {
      icon: <ChatBubbleLeftRightIcon className="h-8 w-8 text-primary" />,
      title: 'Natural Language Processing',
      description: 'Text analysis, sentiment analysis, chatbots, and language understanding.'
    },
    {
      icon: <EyeIcon className="h-8 w-8 text-primary" />,
      title: 'Computer Vision',
      description: 'Image recognition, object detection, facial recognition, and visual analysis.'
    },
    {
      icon: <CpuChipIcon className="h-8 w-8 text-primary" />,
      title: 'Machine Learning Models',
      description: 'Custom ML models trained on your data for specific business needs.'
    },
    {
      icon: <BeakerIcon className="h-8 w-8 text-primary" />,
      title: 'Data Science',
      description: 'Data mining, statistical analysis, and insights extraction from big data.'
    },
    {
      icon: <LightBulbIcon className="h-8 w-8 text-primary" />,
      title: 'AI Automation',
      description: 'Intelligent process automation and decision-making systems.'
    }
  ];

  const packages = [
    {
      name: 'AI Starter',
      price: '₹1,50,000',
      duration: '8-10 weeks',
      description: 'Basic AI implementation for small businesses',
      features: [
        'Simple ML model',
        'Data preprocessing',
        'Basic analytics dashboard',
        'Model training & testing',
        '3 months support',
        'Documentation'
      ],
      popular: false
    },
    {
      name: 'AI Professional',
      price: '₹3,50,000',
      duration: '12-16 weeks',
      description: 'Advanced AI solutions for enterprises',
      features: [
        'Multiple ML models',
        'NLP & Computer Vision',
        'Real-time predictions',
        'API integration',
        'Custom dashboard',
        '6 months support',
        'Model optimization'
      ],
      popular: true
    },
    {
      name: 'AI Enterprise',
      price: '₹7,50,000+',
      duration: '20-24 weeks',
      description: 'Complete AI transformation',
      features: [
        'End-to-end AI platform',
        'Deep learning models',
        'Real-time processing',
        'Scalable architecture',
        'Advanced analytics',
        '12 months support',
        'Dedicated AI team',
        'Ongoing optimization'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Customer Analytics',
      description: 'Understand customer behavior and preferences',
      icon: '👥',
      benefits: ['Customer segmentation', 'Churn prediction', 'Personalization', 'Lifetime value']
    },
    {
      title: 'Process Automation',
      description: 'Automate repetitive tasks with AI',
      icon: '⚙️',
      benefits: ['Document processing', 'Quality control', 'Workflow optimization', 'Cost reduction']
    },
    {
      title: 'Fraud Detection',
      description: 'Identify suspicious activities and prevent fraud',
      icon: '🛡️',
      benefits: ['Real-time monitoring', 'Pattern recognition', 'Risk assessment', 'Alert systems']
    },
    {
      title: 'Recommendation Systems',
      description: 'Personalized recommendations for users',
      icon: '🎯',
      benefits: ['Product suggestions', 'Content filtering', 'User engagement', 'Sales increase']
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Rajesh Mehta',
      company: 'MedTech Innovations',
      text: 'ArionexTech developed an AI diagnostic system that improved our accuracy by 35%. Outstanding technical expertise!',
      rating: 5,
      image: 'RM'
    },
    {
      name: 'Anita Sharma',
      company: 'RetailPro Analytics',
      text: 'Their customer behavior prediction model increased our sales by 28%. Excellent ROI on AI investment.',
      rating: 5,
      image: 'AS'
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
                <CpuChipIcon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">AI & Machine Learning</h1>
                <p className="text-lg text-gray-600">Intelligent solutions for business transformation</p>
              </div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Harness the power of artificial intelligence and machine learning to automate processes, gain insights, and drive innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact" className="btn btn-primary inline-flex items-center justify-center">
                <PhoneIcon className="h-4 w-4 mr-2" />
                Get AI Consultation
              </Link>
              <button className="btn btn-outline inline-flex items-center justify-center">
                <BeakerIcon className="h-4 w-4 mr-2" />
                View AI Demos
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
              AI Technologies We Use
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cutting-edge tools and frameworks for building intelligent solutions.
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
              AI Capabilities We Deliver
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI solutions that transform how your business operates.
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

      {/* Use Cases Section */}
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
              AI Use Cases We Build
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-world applications that deliver measurable business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start mb-6">
                  <div className="text-4xl mr-4">{useCase.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{useCase.title}</h3>
                    <p className="text-gray-600 mb-4">{useCase.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
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
              AI Development Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the AI solution that fits your business needs and budget.
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
              AI Success Stories
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
              Ready to Transform with AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a free AI consultation and discover how machine learning can revolutionize your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100 inline-flex items-center justify-center">
                <PhoneIcon className="h-4 w-4 mr-2" />
                Start AI Project
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

export default AiMl;
