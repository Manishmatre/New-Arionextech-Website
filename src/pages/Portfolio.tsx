import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  EyeIcon,
  ArrowTopRightOnSquareIcon,
  MagnifyingGlassIcon,
  StarIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
  CpuChipIcon,
  PaintBrushIcon,
  BuildingOfficeIcon,
  CalendarIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Projects', count: 39 },
    { id: 'web', name: 'Web Development', count: 12, icon: <CodeBracketIcon className="h-4 w-4" /> },
    { id: 'saas', name: 'SaaS & Business', count: 7, icon: <BuildingOfficeIcon className="h-4 w-4" /> },
    { id: 'design', name: 'UI/UX Design', count: 7, icon: <PaintBrushIcon className="h-4 w-4" /> },
    { id: 'mobile', name: 'Mobile Apps', count: 6, icon: <DevicePhoneMobileIcon className="h-4 w-4" /> },
    { id: 'cloud', name: 'Cloud Solutions', count: 4, icon: <CloudIcon className="h-4 w-4" /> },
    { id: 'ai', name: 'AI & ML', count: 3, icon: <CpuChipIcon className="h-4 w-4" /> }
  ];

  const projects = [
    {
      id: 2,
      title: 'Healthcare Mobile App',
      category: 'mobile',
      client: 'MediCare Plus',
      description: 'Patient management app with appointment scheduling, telemedicine features, and health tracking.',
      technologies: ['React Native', 'Firebase', 'WebRTC', 'HealthKit'],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '6 months',
      teamSize: 4,
      status: 'completed',
      rating: 5,
      features: ['Video consultations', 'Health records', 'Appointment booking', 'Prescription management'],
      results: {
        downloads: '100K+ downloads',
        rating: '4.8/5 app store rating',
        engagement: '90% user retention'
      }
    },
    {
      id: 3,
      title: 'AI-Powered Analytics Dashboard',
      category: 'ai',
      client: 'DataInsights Corp',
      description: 'Machine learning platform for predictive analytics and business intelligence with real-time data processing.',
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'Docker'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '8 months',
      teamSize: 6,
      status: 'completed',
      rating: 5,
      features: ['Predictive modeling', 'Real-time processing', 'Custom dashboards', 'API integration'],
      results: {
        accuracy: '95% prediction accuracy',
        processing: '10x faster processing',
        insights: '300+ automated insights'
      }
    },
    {
      id: 4,
      title: 'Cloud Infrastructure Migration',
      category: 'cloud',
      client: 'TechStart Inc',
      description: 'Complete migration from on-premise to AWS cloud with auto-scaling and disaster recovery.',
      technologies: ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'Jenkins'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '3 months',
      teamSize: 3,
      status: 'completed',
      rating: 5,
      features: ['Auto-scaling', 'Load balancing', 'Disaster recovery', 'Cost optimization'],
      results: {
        cost: '40% cost reduction',
        uptime: '99.9% uptime',
        performance: '3x better performance'
      }
    },
    {
      id: 6,
      title: 'SynkarPlay App',
      category: 'mobile',
      client: 'SynkarPlay',
      description: 'Social media growth platform helping creators and brands boost reach, grow content, and monetize across platforms.',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'Social APIs'],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '7 months',
      teamSize: 5,
      status: 'completed',
      rating: 5,
      features: ['Content boosting', 'Growth analytics', 'Reward system', 'Multi-platform support'],
      results: {
        users: '50K+ active creators',
        growth: '+300% average follower growth',
        engagement: '85% user retention rate'
      }
    },
    {
      id: 7,
      title: 'Candela Public School Website',
      category: 'web',
      client: 'Candela Public School',
      description: 'Modern educational website with student portal, online admissions, faculty management, and parent communication system.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '3 months',
      teamSize: 4,
      status: 'completed',
      rating: 5,
      features: ['Student portal', 'Online admissions', 'Faculty management', 'Parent communication'],
      results: {
        admissions: '+200% online admissions',
        engagement: '90% parent engagement',
        efficiency: '+150% administrative efficiency'
      }
    },
    {
      id: 8,
      title: 'Silpo Kotha - Handmade Jewelry E-Commerce',
      category: 'web',
      client: 'Silpo Kotha',
      description: 'Beautiful e-commerce platform for handmade jewelry with custom design requests, artisan profiles, and secure payments.',
      technologies: ['Next.js', 'Stripe', 'MongoDB', 'Cloudinary', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '4 months',
      teamSize: 3,
      status: 'completed',
      rating: 5,
      features: ['Custom jewelry design', 'Artisan profiles', 'Secure payments', 'Order tracking'],
      results: {
        sales: '+300% online sales',
        customers: '5K+ registered customers',
        orders: '1K+ monthly orders'
      }
    },
    {
      id: 9,
      title: 'GeoTech Survey & Construction Website',
      category: 'web',
      client: 'GeoTech Survey & Construction',
      description: 'Professional construction company website with project portfolio, service showcase, and client management system.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS S3', 'Bootstrap'],
      image: 'https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '2 months',
      teamSize: 3,
      status: 'completed',
      rating: 5,
      features: ['Project portfolio', 'Service showcase', 'Client management', 'Quote system'],
      results: {
        leads: '+180% lead generation',
        inquiries: '200+ monthly inquiries',
        conversion: '+120% quote conversion'
      }
    },
    {
      id: 10,
      title: 'Just Shoot Me Productions Website',
      category: 'web',
      client: 'Just Shoot Me Productions',
      description: 'Creative production house website with video portfolio, booking system, and client collaboration tools.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Vimeo API', 'Material-UI'],
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '3 months',
      teamSize: 4,
      status: 'completed',
      rating: 5,
      features: ['Video portfolio', 'Online booking', 'Client collaboration', 'Project management'],
      results: {
        bookings: '+250% online bookings',
        clients: '100+ active clients',
        projects: '500+ completed projects'
      }
    },
    {
      id: 11,
      title: 'Swami Vivekananda Institute of Paramedical & Nursing',
      category: 'web',
      client: 'Swami Vivekananda Institute',
      description: 'Comprehensive educational institute website with course information, online admissions, student portal, and faculty management.',
      technologies: ['React', 'Node.js', 'MySQL', 'Express', 'Bootstrap'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '4 months',
      teamSize: 5,
      status: 'completed',
      rating: 5,
      features: ['Course catalog', 'Online admissions', 'Student portal', 'Faculty management'],
      results: {
        admissions: '+180% online applications',
        engagement: '85% student portal usage',
        efficiency: '+120% administrative efficiency'
      }
    },
    {
      id: 12,
      title: 'ArionexTech Software Website',
      category: 'web',
      client: 'ArionexTech Software',
      description: 'Modern corporate website showcasing services, portfolio, team, and comprehensive business solutions with advanced features.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '6 months',
      teamSize: 6,
      status: 'completed',
      rating: 5,
      features: ['Service showcase', 'Portfolio gallery', 'Team profiles', 'Contact system'],
      results: {
        leads: '+400% lead generation',
        traffic: '10K+ monthly visitors',
        conversion: '+250% contact conversions'
      }
    },
    {
      id: 13,
      title: 'Complete Clinic Management Software',
      category: 'saas',
      client: 'SmartDental Pro',
      description: 'Smart dental/clinic management SaaS with AI features for patient management, appointments, billing, and analytics.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'AI/ML APIs'],
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '8 months',
      teamSize: 7,
      status: 'completed',
      rating: 5,
      features: ['Patient management', 'AI diagnostics', 'Billing system', 'Analytics dashboard'],
      results: {
        efficiency: '+300% clinic efficiency',
        patients: '5K+ patients managed',
        revenue: '+180% revenue increase'
      }
    },
    {
      id: 14,
      title: 'StaffEasy Business Management',
      category: 'saas',
      client: 'StaffEasy Solutions',
      description: 'Comprehensive business management SaaS for HR, payroll, project tracking, and team collaboration.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '10 months',
      teamSize: 8,
      status: 'completed',
      rating: 5,
      features: ['HR management', 'Payroll automation', 'Project tracking', 'Team collaboration'],
      results: {
        businesses: '200+ businesses using',
        productivity: '+250% team productivity',
        cost: '40% operational cost reduction'
      }
    },
    {
      id: 15,
      title: 'Client Agreement & Proposal Management SaaS',
      category: 'saas',
      client: 'ProposalFlow',
      description: 'Automated proposal sending, digital signing, and tracking system for businesses and freelancers.',
      technologies: ['React', 'Node.js', 'MongoDB', 'DocuSign API', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '6 months',
      teamSize: 5,
      status: 'completed',
      rating: 5,
      features: ['Proposal builder', 'Digital signatures', 'Progress tracking', 'Payment integration'],
      results: {
        proposals: '10K+ proposals processed',
        signTime: '75% faster signing process',
        conversion: '+120% proposal conversion'
      }
    },
    {
      id: 16,
      title: 'Complete Construction Company Management System',
      category: 'saas',
      client: 'BuildPro Management',
      description: 'Comprehensive construction management with project tracking, finance, HR, and vehicle management.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'GPS APIs', 'Accounting APIs'],
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '12 months',
      teamSize: 10,
      status: 'completed',
      rating: 5,
      features: ['Project management', 'Financial tracking', 'HR system', 'Vehicle tracking'],
      results: {
        projects: '500+ projects managed',
        efficiency: '+200% project efficiency',
        cost: '30% cost reduction'
      }
    },
    {
      id: 17,
      title: 'Vehicle Management System',
      category: 'saas',
      client: 'FleetTrack Pro',
      description: 'Complete vehicle management with maintenance scheduling, insurance tracking, fuel monitoring, and GPS integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'GPS APIs', 'IoT Integration'],
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '7 months',
      teamSize: 6,
      status: 'completed',
      rating: 5,
      features: ['Maintenance tracking', 'Insurance management', 'GPS monitoring', 'Fuel analytics'],
      results: {
        vehicles: '2K+ vehicles tracked',
        maintenance: '60% maintenance cost reduction',
        efficiency: '+180% fleet efficiency'
      }
    },
    {
      id: 18,
      title: 'Fuel Management System',
      category: 'saas',
      client: 'FuelTrack Solutions',
      description: 'Advanced fuel management for bulk and direct fuel records with consumption monitoring and analytics.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'IoT Sensors', 'Analytics APIs'],
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '5 months',
      teamSize: 4,
      status: 'completed',
      rating: 5,
      features: ['Fuel tracking', 'Consumption analytics', 'Theft detection', 'Cost optimization'],
      results: {
        fuel: '1M+ liters tracked',
        savings: '25% fuel cost savings',
        theft: '90% theft reduction'
      }
    },
    {
      id: 19,
      title: 'Finance Management SaaS',
      category: 'saas',
      client: 'FinancePro Dashboard',
      description: 'Multi-user, multi-company professional finance dashboard with comprehensive accounting and reporting features.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Chart.js', 'Accounting APIs'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '9 months',
      teamSize: 8,
      status: 'completed',
      rating: 5,
      features: ['Multi-company support', 'Financial reporting', 'Budget planning', 'Tax management'],
      results: {
        companies: '300+ companies using',
        accuracy: '99.8% financial accuracy',
        time: '70% time savings'
      }
    },
    {
      id: 20,
      title: 'Sebayanam Foundation Logo Design',
      category: 'design',
      client: 'Sebayanam Foundation',
      description: 'Professional logo design for non-profit foundation with meaningful symbolism and brand identity guidelines.',
      technologies: ['Adobe Illustrator', 'Photoshop', 'Brand Guidelines', 'Vector Design'],
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '2 weeks',
      teamSize: 2,
      status: 'completed',
      rating: 5,
      features: ['Logo design', 'Brand guidelines', 'Color palette', 'Typography selection'],
      results: {
        recognition: '+200% brand recognition',
        engagement: '90% positive feedback',
        usage: 'Used across all platforms'
      }
    },
    {
      id: 21,
      title: 'Candela Public School Logo & Website Design',
      category: 'design',
      client: 'Candela Public School',
      description: 'Complete brand identity and website UI/UX design for educational institution with modern, child-friendly approach.',
      technologies: ['Figma', 'Adobe Creative Suite', 'UI/UX Design', 'Prototyping'],
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '4 weeks',
      teamSize: 3,
      status: 'completed',
      rating: 5,
      features: ['Logo design', 'Website UI/UX', 'Brand identity', 'Educational graphics'],
      results: {
        admissions: '+180% online inquiries',
        satisfaction: '95% parent satisfaction',
        usability: '40% better user experience'
      }
    },
    {
      id: 22,
      title: 'ArionexTech Software Logo & Website Design',
      category: 'design',
      client: 'ArionexTech Software',
      description: 'Modern corporate brand identity and website design showcasing technology expertise with professional aesthetics.',
      technologies: ['Figma', 'Adobe Illustrator', 'UI/UX Design', 'Brand Strategy'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '6 weeks',
      teamSize: 4,
      status: 'completed',
      rating: 5,
      features: ['Corporate logo', 'Website design', 'Brand guidelines', 'Marketing materials'],
      results: {
        leads: '+400% lead generation',
        conversion: '+250% contact conversions',
        brand: '85% brand recall improvement'
      }
    },
    {
      id: 23,
      title: 'Quizze App UI/UX Design',
      category: 'design',
      client: 'Quizze Learning Platform',
      description: 'Interactive quiz application design with gamification elements, intuitive navigation, and engaging user experience.',
      technologies: ['Figma', 'Principle', 'UI/UX Design', 'Prototyping', 'User Research'],
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      duration: '5 weeks',
      teamSize: 3,
      status: 'completed',
      rating: 5,
      features: ['Interactive design', 'Gamification', 'Progress tracking', 'Responsive layout'],
      results: {
        engagement: '+300% user engagement',
        completion: '80% quiz completion rate',
        retention: '70% user retention'
      }
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: <CheckCircleIcon className="h-6 w-6" /> },
    { number: '40+', label: 'Happy Clients', icon: <UserGroupIcon className="h-6 w-6" /> },
    { number: '95%', label: 'Success Rate', icon: <StarIcon className="h-6 w-6" /> },
    { number: '24/7', label: 'Support Available', icon: <ShieldCheckIcon className="h-6 w-6" /> }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <EyeIcon className="h-4 w-4 mr-2" />
              Our Work Showcase
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Explore our successful projects and see how we've helped businesses transform their digital presence with cutting-edge technology solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn bg-white text-primary hover:bg-gray-100"
              >
                Start Your Project
              </Link>
              <Link
                to="/services"
                className="btn border-white text-white hover:bg-white hover:text-primary"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse through our portfolio of successful projects across different technologies and industries
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative max-w-md mx-auto mb-8"
          >
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects, clients, or technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </motion.div>

          {/* Filter Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`inline-flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.icon && <span className="mr-2">{category.icon}</span>}
                {category.name}
                <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                  activeFilter === category.id ? 'bg-white/20' : 'bg-gray-200'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex gap-2">
                        <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors">
                          <EyeIcon className="h-5 w-5" />
                        </button>
                        <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors">
                          <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      {[...Array(project.rating)].map((_, i) => (
                        <StarIcon key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                      {categories.find(cat => cat.id === project.category)?.name}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      {project.duration}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">Client: {project.client}</p>
                  <p className="text-gray-700 mb-4 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-500">
                      <UserGroupIcon className="h-4 w-4 mr-1" />
                      {project.teamSize} members
                    </div>
                    <button className="text-primary hover:text-primary-dark font-medium text-sm flex items-center group">
                      View Details
                      <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 mb-4">
                <MagnifyingGlassIcon className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how we can help bring your vision to life with our proven expertise and innovative solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn bg-white text-primary hover:bg-gray-100"
              >
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="btn border-white text-white hover:bg-white hover:text-primary"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
