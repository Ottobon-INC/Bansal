import SEO from '../../../components/seo/SEO';
import { Award, BookOpen, GraduationCap, Users } from 'lucide-react';
import HeroSection from '../../../components/ui/HeroSection';
import FeatureGrid from '../../../components/ui/FeatureGrid';
import type { Feature } from '../../../components/ui/FeatureGrid';
import CourseCard from '../../../components/ui/CourseCard';
import SectionHeading from '../../../components/ui/SectionHeading';
import { Link } from 'react-router-dom';

export default function Home() {
  const features: Feature[] = [
    {
      id: 1,
      title: 'Expert Faculty',
      description: 'Learn from experienced educators who are masters in JEE and NEET preparation.',
      icon: Users
    },
    {
      id: 2,
      title: 'Proven Methodology',
      description: 'Our structured curriculum ensures comprehensive coverage of all board and competitive syllabi.',
      icon: BookOpen
    },
    {
      id: 3,
      title: 'Exceptional Results',
      description: 'Consistent track record of top ranks in JEE Advanced and NEET UG examinations.',
      icon: Award
    },
    {
      id: 4,
      title: 'Holistic Development',
      description: 'We focus on conceptual clarity, regular testing, and personalized mentoring.',
      icon: GraduationCap
    }
  ];

  const topCourses = [
    {
      title: 'JEE Advanced',
      description: 'Comprehensive 2-year classroom program for Class XI students aiming for IITs.',
      link: '/jee-advanced',
      badge: 'B.Tech / B.E.',
      duration: '2 Years',
      target: 'Class 11 & 12',
      image: '/wp-content/uploads/2024/11/1-1.png'
    },
    {
      title: 'NEET UG',
      description: 'Intensive medical entrance preparation integrated with intermediate board syllabus.',
      link: '/neet-ug',
      badge: 'Medical',
      duration: '2 Years',
      target: 'Class 11 & 12',
      image: '/wp-content/uploads/2024/11/2-2.png'
    },
    {
      title: 'Sterling for Droppers',
      description: 'Dedicated 1-year repeater program for students determined to improve their rank.',
      link: '/sterling-for-jee-dropper',
      badge: 'Repeaters',
      duration: '1 Year',
      target: '12th Pass',
      image: '/wp-content/uploads/2024/11/3-1.png'
    }
  ];

  return (
    <>
      <SEO 
        title="Bansal Junior College Vizag - Premier Institute for JEE & NEET"
        description="Welcome to Bansal Junior College Vizag. We provide top-tier coaching for JEE Advanced and NEET UG with experienced faculty and proven methodologies."
        canonicalUrl="https://bansalclassesvizag.com/"
        schema={{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Bansal Junior College Vizag",
          "url": "https://bansalclassesvizag.com/",
          "logo": "https://bansalclassesvizag.com/wp-content/uploads/2024/11/bansal-removebg-preview.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "49-52-5, Sankara Matam Rd, Beside Karnataka Bank, Akkayapalem",
            "addressLocality": "Visakhapatnam",
            "addressRegion": "Andhra Pradesh",
            "postalCode": "530016",
            "addressCountry": "IN"
          },
          "telephone": "+91-8919116433",
          "email": "bansalclassesvizag@gmail.com"
        }}
      />

      <main>
        <HeroSection 
          title="Transforming Dreams Into Reality"
          subtitle="Join the legacy of excellence. Expert coaching for JEE Advanced, NEET UG, and Board Examinations."
          backgroundImage="/hero-bg.png"
        />

        {/* Features Section */}
        <FeatureGrid 
          title="Why Choose Bansal Junior College?"
          subtitle="We provide an ecosystem of competitive learning designed to bring out the best in every student."
          features={features}
        />

        {/* Popular Courses Section */}
        <section className="py-20 bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <SectionHeading 
              title="Our Flagship Programs" 
              subtitle="Tailored classroom programs to suit your specific academic goals and timeline."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {topCourses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
            
            <div className="text-center">
              <Link 
                to="/courses"
                className="inline-block border-2 border-[#2563EB] text-college-navy hover:bg-college-navy hover:text-white font-bold py-3 px-8 rounded transition-colors"
              >
                View All Courses
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-24 bg-college-navy relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-college-gold rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Ready to start your journey?
            </h2>
            <p className="text-xl text-gray-300 mb-10 font-light leading-relaxed">
              Admissions are now open for the upcoming academic session. Secure your seat today and take the first step towards a brilliant career.
            </p>
            <Link 
              to="/contact-us"
              className="bg-college-gold hover:bg-college-goldLight text-college-navy font-bold py-4 px-10 rounded shadow-xl transition-all transform hover:-translate-y-1 inline-block text-lg"
            >
              Apply for Admission
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
