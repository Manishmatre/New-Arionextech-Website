import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';
import FloatingButtons from './components/FloatingButtons';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import FAQs from './pages/FAQs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import HelpCenter from './pages/HelpCenter';
import WebDevelopment from './pages/services/WebDevelopment';
import MobileAppDevelopment from './pages/services/MobileAppDevelopment';
import CloudSolutions from './pages/services/CloudSolutions';
import AiMl from './pages/services/AiMl';
import DevOps from './pages/services/DevOps';
import Cybersecurity from './pages/services/Cybersecurity';
import UiUxDesign from './pages/services/UiUxDesign';
import SeoBacklinks from './pages/services/SeoBacklinks';
import DigitalMarketing from './pages/services/DigitalMarketing';
import GraphicDesign from './pages/services/GraphicDesign';
import StaffAugmentation from './pages/services/StaffAugmentation';
import CustomSoftware from './pages/services/CustomSoftware';
import Internships from './pages/Internships';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <CustomCursor />
      <ScrollToTop />
      <FloatingButtons />
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
            <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
            <Route path="/services/ai-ml" element={<AiMl />} />
            <Route path="/services/devops" element={<DevOps />} />
            <Route path="/services/cybersecurity" element={<Cybersecurity />} />
            <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
            <Route path="/services/seo-backlinks" element={<SeoBacklinks />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/graphic-design" element={<GraphicDesign />} />
            <Route path="/services/staff-augmentation" element={<StaffAugmentation />} />
            <Route path="/services/custom-software" element={<CustomSoftware />} />
            <Route path="/products" element={<Products />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
