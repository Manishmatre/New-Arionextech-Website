import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  SwatchIcon,
  PhotoIcon,
  DocumentTextIcon,
  PresentationChartBarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  StarIcon,
  PhoneIcon,
  SparklesIcon,
  PaintBrushIcon,
  EyeIcon,
  CubeIcon
} from '@heroicons/react/24/outline';

const GraphicDesign = () => {
  const tools = [
    { name: 'Adobe Photoshop', category: 'Photo Editing', icon: '🎨' },
    { name: 'Adobe Illustrator', category: 'Vector Design', icon: '🖊️' },
    { name: 'Adobe InDesign', category: 'Layout Design', icon: '📄' },
    { name: 'Figma', category: 'UI Design', icon: '🔷' },
    { name: 'Canva Pro', category: 'Quick Design', icon: '✨' },
    { name: 'Adobe After Effects', category: 'Motion Graphics', icon: '🎬' },
    { name: 'CorelDRAW', category: 'Vector Graphics', icon: '🎯' },
    { name: 'Sketch', category: 'Digital Design', icon: '💎' }
  ];

  const features = [
    {
      icon: <SwatchIcon className="h-8 w-8 text-primary" />,
      title: 'Brand Identity Design',
      description: 'Complete brand identity including logos, color schemes, and brand guidelines.'
    },
    {
      icon: <DocumentTextIcon className="h-8 w-8 text-primary" />,
      title: 'Print Design',
      description: 'Professional print materials including brochures, flyers, and business cards.'
    },
    {
      icon: <PhotoIcon className="h-8 w-8 text-primary" />,
      title: 'Digital Graphics',
      description: 'Web graphics, social media posts, banners, and digital advertisements.'
    },
    {
      icon: <PresentationChartBarIcon className="h-8 w-8 text-primary" />,
      title: 'Presentation Design',
      description: 'Professional presentations and pitch decks that captivate audiences.'
    },
    {
      icon: <CubeIcon className="h-8 w-8 text-primary" />,
      title: 'Packaging Design',
      description: 'Eye-catching product packaging that stands out on shelves.'
    },
    {
      icon: <EyeIcon className="h-8 w-8 text-primary" />,
      title: 'Visual Branding',
      description: 'Consistent visual elements across all marketing materials.'
    }
  ];

  const packages = [
    {
      name: 'Design Essentials',
      price: '₹15,000',
      duration: '1-2 weeks',
      description: 'Basic design package for startups',
      features: [
        'Logo design (3 concepts)',
        'Business card design',
        'Letterhead design',
        'Basic brand colors',
        '3 revisions',
        'Final files delivery'
      ],
      popular: false
    },
    {
      name: 'Brand Complete',
      price: '₹35,000',
      duration: '2-3 weeks',
      description: 'Comprehensive brand identity',
      features: [
        'Complete logo suite',
        'Brand guidelines',
        'Stationery design',
        'Social media templates',
        'Brochure design',
        '5 revisions',
        'Print-ready files'
      ],
      popular: true
    },
    {
      name: 'Design Premium',
      price: '₹65,000+',
      duration: '3-4 weeks',
      description: 'Full-scale design solution',
      features: [
        'Complete brand identity',
        'Marketing collaterals',
        'Packaging design',
        'Website graphics',
        'Presentation templates',
        'Unlimited revisions',
        'Ongoing design support',
        'Brand strategy consultation'
      ],
      popular: false
    }
  ];

  const designTypes = [
    {
      title: 'Logo & Branding',
      description: 'Professional brand identity design',
      icon: '🎯',
      benefits: ['Logo design', 'Brand guidelines', 'Color palette', 'Typography']
    },
    {
      title: 'Print Materials',
      description: 'High-quality print design services',
      icon: '📄',
      benefits: ['Brochures', 'Flyers', 'Business cards', 'Posters']
    },
    {
      title: 'Digital Graphics',
      description: 'Online and digital design assets',
      icon: '💻',
      benefits: ['Social media posts', 'Web banners', 'Email templates', 'Digital ads']
    },
    {
      title: 'Marketing Materials',
      description: 'Complete marketing design suite',
      icon: '📊',
      benefits: ['Presentations', 'Infographics', 'Catalogs', 'Annual reports']
    }
  ];

  const testimonials = [
    {
      name: 'Ravi Sharma',
      company: 'Creative Solutions Ltd',
      text: 'ArionexTech created a stunning brand identity for our company. The logo and marketing materials exceeded our expectations!',
      rating: 5,
      image: 'RS'
    },
    {
      name: 'Pooja Mehta',
      company: 'Fashion Boutique',
      text: 'Their graphic design work helped us establish a strong visual presence. Our sales increased after the rebranding!',
      rating: 5,
      image: 'PM'
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
                <PaintBrushIcon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Graphic Design</h1>
                <p className="text-lg text-gray-600">Creative visual solutions</p>
              </div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Create stunning visual designs that communicate your brand message effectively and leave lasting impressions on your audience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact" className="btn btn-primary inline-flex items-center justify-center">
                <PhoneIcon className="h-4 w-4 mr-2" />
                Get Design Quote
              </Link>
              <button className="btn btn-outline inline-flex items-center justify-center">
                <SparklesIcon className="h-4 w-4 mr-2" />
                View Portfolio
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
              Design Tools We Master
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional design software for creating exceptional visual content.
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
              Design Services We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive graphic design solutions for all your visual needs.
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

      {/* Design Types Section */}
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
              Design Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized design services for different business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start mb-6">
                  <div className="text-4xl mr-4">{type.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{type.title}</h3>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {type.benefits.map((benefit, benefitIndex) => (
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
              Design Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the design package that fits your brand needs.
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
              Design Success Stories
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
              Ready to Create Stunning Designs?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's bring your brand vision to life with professional graphic design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100 inline-flex items-center justify-center">
                <PhoneIcon className="h-4 w-4 mr-2" />
                Start Design Project
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

export default GraphicDesign;
