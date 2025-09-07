import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  UserGroupIcon,
  AcademicCapIcon,
  ClockIcon,
  CurrencyRupeeIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  PhoneIcon,
  BriefcaseIcon,
  CogIcon,
  GlobeAltIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const StaffAugmentation = () => {
  const skills = [
    { name: 'React Developers', category: 'Frontend', icon: '⚛️' },
    { name: 'Node.js Developers', category: 'Backend', icon: '🟢' },
    { name: 'Python Developers', category: 'Backend', icon: '🐍' },
    { name: 'DevOps Engineers', category: 'Infrastructure', icon: '🔧' },
    { name: 'UI/UX Designers', category: 'Design', icon: '🎨' },
    { name: 'QA Engineers', category: 'Testing', icon: '🔍' },
    { name: 'Project Managers', category: 'Management', icon: '📊' },
    { name: 'Data Scientists', category: 'Analytics', icon: '📈' }
  ];

  const features = [
    {
      icon: <AcademicCapIcon className="h-8 w-8 text-primary" />,
      title: 'Skilled Professionals',
      description: 'Pre-vetted developers and specialists with proven expertise in latest technologies.'
    },
    {
      icon: <ClockIcon className="h-8 w-8 text-primary" />,
      title: 'Quick Onboarding',
      description: 'Fast deployment of resources within 1-2 weeks to meet your project deadlines.'
    },
    {
      icon: <CurrencyRupeeIcon className="h-8 w-8 text-primary" />,
      title: 'Cost Effective',
      description: 'Reduce hiring costs by up to 60% compared to traditional recruitment.'
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8 text-primary" />,
      title: 'Quality Assurance',
      description: 'Rigorous screening process ensures only top-tier talent joins your team.'
    },
    {
      icon: <CogIcon className="h-8 w-8 text-primary" />,
      title: 'Flexible Engagement',
      description: 'Scale your team up or down based on project requirements and timelines.'
    },
    {
      icon: <GlobeAltIcon className="h-8 w-8 text-primary" />,
      title: 'Global Talent Pool',
      description: 'Access to international talent with diverse skills and experience.'
    }
  ];

  const packages = [
    {
      name: 'Individual Resource',
      price: '₹80,000/month',
      duration: 'Per developer',
      description: 'Single skilled professional',
      features: [
        '1 dedicated developer',
        'Full-time commitment',
        'Direct communication',
        'Weekly progress reports',
        'Flexible contract terms',
        'Replacement guarantee'
      ],
      popular: false
    },
    {
      name: 'Small Team',
      price: '₹2,25,000/month',
      duration: 'Per 3-person team',
      description: 'Complete development team',
      features: [
        '3 skilled professionals',
        'Team lead included',
        'Daily standups',
        'Sprint planning',
        'Code reviews',
        'Project management',
        'Quality assurance'
      ],
      popular: true
    },
    {
      name: 'Enterprise Team',
      price: '₹6,00,000+/month',
      duration: 'Per 8+ person team',
      description: 'Large-scale team augmentation',
      features: [
        '8+ professionals',
        'Multiple skill sets',
        'Dedicated project manager',
        'Agile methodology',
        'Regular assessments',
        'Custom processes',
        'Dedicated account manager',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  const roles = [
    {
      title: 'Frontend Developers',
      description: 'React, Angular, Vue.js specialists',
      icon: '💻',
      benefits: ['Modern frameworks', 'Responsive design', 'Performance optimization', 'Cross-browser compatibility']
    },
    {
      title: 'Backend Developers',
      description: 'Node.js, Python, Java experts',
      icon: '⚙️',
      benefits: ['API development', 'Database design', 'Microservices', 'Cloud integration']
    },
    {
      title: 'DevOps Engineers',
      description: 'CI/CD and infrastructure specialists',
      icon: '🚀',
      benefits: ['Automation', 'Cloud deployment', 'Monitoring', 'Security']
    },
    {
      title: 'Mobile Developers',
      description: 'iOS, Android, React Native experts',
      icon: '📱',
      benefits: ['Native development', 'Cross-platform', 'App store optimization', 'Performance tuning']
    }
  ];

  const testimonials = [
    {
      name: 'Amit Verma',
      company: 'TechStart Inc',
      text: 'ArionexTech provided us with excellent developers who integrated seamlessly with our team. Project delivery improved by 40%!',
      rating: 5,
      image: 'AV'
    },
    {
      name: 'Sarah Johnson',
      company: 'Global Solutions',
      text: 'The staff augmentation service helped us scale quickly. The developers are highly skilled and professional.',
      rating: 5,
      image: 'SJ'
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
                <UserGroupIcon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Staff Augmentation</h1>
                <p className="text-lg text-gray-600">Scale your team with skilled professionals</p>
              </div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Expand your development team with pre-vetted, skilled professionals who integrate seamlessly with your existing workforce.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact" className="btn btn-primary inline-flex items-center justify-center">
                <PhoneIcon className="h-4 w-4 mr-2" />
                Find Developers
              </Link>
              <button className="btn btn-outline inline-flex items-center justify-center">
                <BriefcaseIcon className="h-4 w-4 mr-2" />
                View Talent Pool
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
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
              Available <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Skills & Expertise</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access to a diverse pool of skilled professionals across various technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="text-3xl mb-3">{skill.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{skill.name}</h3>
                <p className="text-sm text-gray-500">{skill.category}</p>
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
              Why Choose Our <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Staff Augmentation</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Benefits that make us the preferred choice for team expansion.
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

      {/* Roles Section */}
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
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Popular Roles</span> We Fill
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Most in-demand technical roles for modern development teams.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start mb-6">
                  <div className="text-4xl mr-4">{role.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{role.title}</h3>
                    <p className="text-gray-600 mb-4">{role.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {role.benefits.map((benefit, benefitIndex) => (
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
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Flexible</span> Engagement Models
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the engagement model that best fits your project needs.
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
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Client Success</span> Stories
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
              Ready to <span className="bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">Scale Your Team</span>?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get access to skilled professionals who can start contributing from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100 inline-flex items-center justify-center">
                <PhoneIcon className="h-4 w-4 mr-2" />
                Find Your Team
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

export default StaffAugmentation;
