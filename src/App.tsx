import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import RegistrationModal from './components/common/RegistrationModal';

import Home from './features/home/pages/Home';
import NotFound from './features/common/pages/NotFound';
import About from './features/about/pages/About';
import Achievements from './features/achievements/pages/Achievements';
import Contact from './features/contact/pages/Contact';
import Courses from './features/courses/pages/Courses';
import DifferenceBetweenJeeAdvancedAndNeetUgCourses from './features/courses/pages/DifferenceBetweenJeeAdvancedAndNeetUgCourses';
import InterBipcIntegratedWithNeetUgAGatewayToMedicalSuccess from './features/courses/pages/InterBipcIntegratedWithNeetUgAGatewayToMedicalSuccess';
import JeeAdvanced from './features/courses/pages/JeeAdvanced';
import JeeAdvancedCourseAComprehensiveGuideToAceTheExam from './features/courses/pages/JeeAdvancedCourseAComprehensiveGuideToAceTheExam';
import NeetUg from './features/courses/pages/NeetUg';
import PopularCourses from './features/courses/pages/PopularCourses';
import WhyChooseBansalClassesVizagForJeeAdvancedAndNeetUgPreparation from './features/courses/pages/WhyChooseBansalClassesVizagForJeeAdvancedAndNeetUgPreparation';

// Dedicated JEE Advanced Course Pages
import BullsEye from './features/courses/pages/jee-advanced/BullsEye';
import Nucleus from './features/courses/pages/jee-advanced/Nucleus';
import Sterling from './features/courses/pages/jee-advanced/Sterling';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Small delay for better UX
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <Header onOpenRegistration={() => setIsModalOpen(true)} />
        <main className="flex-grow">
          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        
        {/* Legacy Redirects */}
        <Route path="/bulls-eye-for-jee" element={<Navigate to="/courses/jee-advanced/bulls-eye" replace />} />
        <Route path="/nucleus-for-jee" element={<Navigate to="/courses/jee-advanced/nucleus" replace />} />
        <Route path="/sterling-for-jee-dropper" element={<Navigate to="/courses/jee-advanced/sterling" replace />} />
        
        <Route path="/bulls-eye-for-neet" element={<Navigate to="/neet-ug#bulls-eye-neet" replace />} />
        <Route path="/nucleus-for-neet" element={<Navigate to="/neet-ug#nucleus-neet" replace />} />
        <Route path="/sterling-for-neet-dropper" element={<Navigate to="/neet-ug#sterling-neet" replace />} />
        
        <Route path="/difference-between-jee-advanced-and-neet-ug-courses" element={<DifferenceBetweenJeeAdvancedAndNeetUgCourses />} />
        <Route path="/inter-bipc-integrated-with-neet-ug-a-gateway-to-medical-success" element={<InterBipcIntegratedWithNeetUgAGatewayToMedicalSuccess />} />
        
        {/* JEE Advanced Program */}
        <Route path="/jee-advanced" element={<JeeAdvanced />} />
        <Route path="/courses/jee-advanced/bulls-eye" element={<BullsEye />} />
        <Route path="/courses/jee-advanced/nucleus" element={<Nucleus />} />
        <Route path="/courses/jee-advanced/sterling" element={<Sterling />} />
        
        <Route path="/jee-advanced-course-a-comprehensive-guide-to-ace-the-exam" element={<JeeAdvancedCourseAComprehensiveGuideToAceTheExam />} />
        <Route path="/neet-ug" element={<NeetUg />} />
        <Route path="/popular-courses" element={<PopularCourses />} />
        <Route path="/why-choose-bansal-classes-vizag-for-jee-advanced-and-neet-ug-preparation" element={<WhyChooseBansalClassesVizagForJeeAdvancedAndNeetUgPreparation />} />
        <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
