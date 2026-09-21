import SEO from '../../../components/seo/SEO';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

import { jeeAdvancedPrograms as programs } from '../data/jeeAdvancedPrograms';

export default function JeeAdvanced() {

  return (
    <>
      <SEO
        title="JEE Advanced Coaching in Vizag | Bansal Classes"
        description="Explore JEE Advanced coaching programs at Bansal Classes Vizag, including Bulls Eye, Nucleus and Sterling programs for JEE preparation."
        canonicalUrl="https://bansalclassesvizag.com/jee-advanced"
        schema={{
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "JEE Advanced Programs",
          "description": "Discover JEE Advanced Programs | Bansal Junior College Vizag. Expert coaching, comprehensive study material, and proven methodologies.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Bansal Junior College Vizag",
            "sameAs": "https://bansalclassesvizag.com/"
          }
        }}
      />

      {/* Hero Section */}
      <div className="bg-college-navy text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-college-gold rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">JEE Advanced Programs</h1>
            <div className="w-24 h-1 bg-college-gold mb-8 mx-auto md:mx-0"></div>
            <p className="text-xl text-gray-300 font-light mb-6 leading-relaxed">
              Master the art of excelling in JEE Advanced with Bansal Junior College Vizag, your gateway to IITs. Designed to nurture talent and unlock potential, our courses provide comprehensive preparation tailored to every student's unique learning journey.
            </p>
            <p className="text-lg text-gray-400 font-light">
              JEE Advanced, one of the toughest exams globally, is your ticket to the prestigious Indian Institutes of Technology (IITs) and other elite engineering colleges.
            </p>
          </div>
          <div className="flex-1 w-full max-w-md">
            <img 
              src="https://bansalclassesvizag.com/wp-content/uploads/2024/11/JEE-Advanced-1024x1024.png" 
              alt="JEE Advanced Target" 
              className="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      <main className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-college-navy mb-4">Your Pathway to IIT Success</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Explore our structured, results-oriented programs for every stage of your academic journey.</p>
          </div>

          {/* Quick Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {programs.map((program) => (
              <Link to={`/courses/jee-advanced/${program.slug}`} key={program.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden flex flex-col group border border-gray-200">
                <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center p-6">
                  <img src={program.image} alt={program.name} className="h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-college-navy mb-4">{program.name}</h3>
                  <p className="text-gray-600 text-sm mb-6 flex-1 line-clamp-4">{program.shortDesc}</p>
                  <span className="text-college-gold font-bold flex items-center group-hover:text-yellow-600 transition-colors">
                    Explore Details <ChevronRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Detailed sections extracted to dedicated pages */}

          {/* CTA Section */}
          <div className="mt-24 text-center bg-college-navy text-white rounded-3xl p-12 md:p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-college-gold rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-2xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Empowering Your Path to Success</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Join us at Bansal Junior College to embark on a transformative academic journey. With unparalleled guidance, comprehensive resources, and a commitment to excellence, we are here to help you achieve your dreams and conquer your goals. Let's shape your future together!
              </p>
              <Link 
                to="/contact-us"
                className="inline-block bg-college-gold hover:bg-college-goldLight text-college-navy font-bold py-4 px-12 rounded-full shadow-xl transition-transform hover:-translate-y-1 text-lg"
              >
                Apply Now!
              </Link>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
