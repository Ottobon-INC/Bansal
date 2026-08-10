import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Home from './features/home/pages/Home';
import About from './features/about/pages/About';
import Achievements from './features/achievements/pages/Achievements';
import Contact from './features/contact/pages/Contact';
import Courses from './features/courses/pages/Courses';
import BullsEyeForJee from './features/courses/pages/BullsEyeForJee';
import BullsEyeForNeet from './features/courses/pages/BullsEyeForNeet';
import DifferenceBetweenJeeAdvancedAndNeetUgCourses from './features/courses/pages/DifferenceBetweenJeeAdvancedAndNeetUgCourses';
import InterBipcIntegratedWithNeetUgAGatewayToMedicalSuccess from './features/courses/pages/InterBipcIntegratedWithNeetUgAGatewayToMedicalSuccess';
import JeeAdvanced from './features/courses/pages/JeeAdvanced';
import JeeAdvancedCourseAComprehensiveGuideToAceTheExam from './features/courses/pages/JeeAdvancedCourseAComprehensiveGuideToAceTheExam';
import NeetUg from './features/courses/pages/NeetUg';
import NucleusForJee from './features/courses/pages/NucleusForJee';
import NucleusForNeet from './features/courses/pages/NucleusForNeet';
import PopularCourses from './features/courses/pages/PopularCourses';
import SterlingForJeeDropper from './features/courses/pages/SterlingForJeeDropper';
import SterlingForNeetDropper from './features/courses/pages/SterlingForNeetDropper';
import WhyChooseBansalClassesVizagForJeeAdvancedAndNeetUgPreparation from './features/courses/pages/WhyChooseBansalClassesVizagForJeeAdvancedAndNeetUgPreparation';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/bulls-eye-for-jee" element={<Navigate to="/jee-advanced#bulls-eye" replace />} />
        <Route path="/bulls-eye-for-neet" element={<Navigate to="/neet-ug#bulls-eye-neet" replace />} />
        <Route path="/difference-between-jee-advanced-and-neet-ug-courses" element={<DifferenceBetweenJeeAdvancedAndNeetUgCourses />} />
        <Route path="/inter-bipc-integrated-with-neet-ug-a-gateway-to-medical-success" element={<InterBipcIntegratedWithNeetUgAGatewayToMedicalSuccess />} />
        <Route path="/jee-advanced" element={<JeeAdvanced />} />
        <Route path="/jee-advanced-course-a-comprehensive-guide-to-ace-the-exam" element={<JeeAdvancedCourseAComprehensiveGuideToAceTheExam />} />
        <Route path="/neet-ug" element={<NeetUg />} />
        <Route path="/nucleus-for-jee" element={<Navigate to="/jee-advanced#nucleus" replace />} />
        <Route path="/nucleus-for-neet" element={<Navigate to="/neet-ug#nucleus-neet" replace />} />
        <Route path="/popular-courses" element={<PopularCourses />} />
        <Route path="/sterling-for-jee-dropper" element={<Navigate to="/jee-advanced#sterling" replace />} />
        <Route path="/sterling-for-neet-dropper" element={<Navigate to="/neet-ug#sterling-neet" replace />} />
        <Route path="/why-choose-bansal-classes-vizag-for-jee-advanced-and-neet-ug-preparation" element={<WhyChooseBansalClassesVizagForJeeAdvancedAndNeetUgPreparation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
