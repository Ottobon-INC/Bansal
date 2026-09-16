import SEO from '../../../components/seo/SEO';
import { Link } from 'react-router-dom';
import { Clock, GraduationCap, Target, ChevronRight } from 'lucide-react';

export default function JeeAdvanced() {
  const programs = [
    {
      id: "bulls-eye",
      name: "BULL'S EYE FOR JEE",
      image: "https://bansalclassesvizag.com/wp-content/uploads/2024/11/3-2.png",
      link: "/bulls-eye-for-jee",
      shortDesc: "Embark on a transformative two-year journey designed to rigorously prepare you for JEE Advanced and secure your place in prestigious IITs. With expert mentorship and meticulously curated study materials...",
      fullDesc: "BULL'S EYE for JEE is a distinguished two-year program designed to prepare you for the toughest exam, JEE Advanced. This course offers unparalleled rigor, expert guidance, and comprehensive study materials that will help you achieve your goals of securing a spot in prestigious IITs.\n\nOur unique teaching methodology, combined with small, focused batches, ensures personalized attention to each student. Through one-on-one interactions with experienced instructors, every concept is made clear, helping you master the skills required for IIT-JEE success. This course goes beyond exam-oriented content by emphasizing critical thinking, problem-solving techniques, and analytical reasoning — all of which are crucial for excelling in competitive exams.\n\nIf you have the dedication and potential to achieve excellence, BULL'S EYE for JEE is the perfect platform to channel your abilities toward success.",
      duration: "2 Years (Class XI and XII) – Target JEE 2027",
      eligibility: "Class X to XI Moving Students",
      class: "X TO XI MOVING",
      batches: [
        { phase: "Phase I", medium: "English", target: "2027", admission: "BOOST", date: "02/04/2025" },
        { phase: "Phase II", medium: "English", target: "2027", admission: "BOOST", date: "23/04/2025" },
      ]
    },
    {
      id: "nucleus",
      name: "NUCLEUS FOR JEE",
      image: "https://bansalclassesvizag.com/wp-content/uploads/2024/11/2-3.png",
      link: "/nucleus-for-jee",
      shortDesc: "If you are currently in Class XI or about to complete it, and aspire to become an engineering professional at top institutions like IITs, our focused guidance is here to set you on the right path...",
      fullDesc: "As you near the completion of Class XI or have recently finished it, and aspire to become a distinguished Engineering professional through prestigious institutions like IITs, our expert guidance is here to support you every step of the way. In Class XII, our focus will be on thoroughly covering the PCM syllabus while aligning it with targeted IIT-JEE preparation. While we won't teach the Class XI PCM content separately, it will be effectively integrated into the curriculum through Daily Practice Problems (DPPs), ensuring a well-rounded understanding. This carefully crafted course is designed to equip you with the strategies and knowledge needed to tackle the IIT-JEE challenges with confidence as you approach the final stage of Class XII.",
      duration: "1 Year During Class XII (Target JEE - 2026)",
      eligibility: "Class XI to XII Moving Students",
      class: "XI TO XII MOVING",
      batches: [
        { phase: "Phase I", medium: "English", target: "2026", admission: "BOOST or Direct", date: "02/04/2025" },
        { phase: "Phase II", medium: "English", target: "2026", admission: "BOOST or Direct", date: "23/04/2025" },
      ]
    },
    {
      id: "sterling",
      name: "STERLING FOR JEE (DROPPER)",
      image: "https://bansalclassesvizag.com/wp-content/uploads/2024/11/1-2.png",
      link: "/sterling-for-jee-dropper",
      shortDesc: "For students who have completed Class XII and are determined to achieve nothing less than excellence, this course is designed for you. With a focus on advanced preparation and personalized guidance...",
      fullDesc: "STERLING for JEE (DROPPER) is the perfect course for students who have completed their Class XII and aspire to crack the IIT-JEE with excellence. If you aim high, seek perfection, and are determined to settle for nothing less than your best, this course is tailored for you.\n\nThis one-year program focuses on strengthening your academic foundation, refining concepts, and boosting your preparation for both IIT-JEE and NEET. Designed for students who recognize their potential and are committed to improving, STERLING for JEE provides the ideal platform to rebuild confidence, polish your knowledge, and excel in these competitive exams.\n\nOur expert instructors provide personalized guidance in a focused, motivating environment, helping you approach JEE with a strategic mindset. With detailed study plans, mock tests, and one-on-one interactions, we ensure that you are fully equipped to tackle the challenges of the exam.",
      duration: "1 Year after Class XII – Target JEE 2026",
      eligibility: "For 12th Passed/Appeared Students",
      class: "XII PASSED",
      batches: [
        { phase: "Phase I", medium: "English", target: "2026", admission: "BOOST or Direct", date: "09/04/2025" }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="JEE Advanced Programs | Bansal Junior College Vizag"
        description="Discover JEE Advanced Programs | Bansal Junior College Vizag. Expert coaching, comprehensive study material, and proven methodologies at Bansal Junior College Vizag."
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
              <a href={`#${program.id}`} key={program.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden flex flex-col group border border-gray-200">
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
              </a>
            ))}
          </div>

          {/* Detailed Course Sections */}
          <div className="space-y-24">
            {programs.map((program) => (
              <div id={program.id} key={program.id} className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden scroll-mt-24">
                <div className="bg-college-navy text-white p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-college-gold rounded-full opacity-5 blur-3xl"></div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold relative z-10">{program.name}</h2>
                </div>
                
                <div className="p-8 md:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-bold text-college-navy mb-6">Course Overview</h3>
                      <div className="prose prose-lg text-gray-600 max-w-none mb-8">
                        {program.fullDesc.split('\n\n').map((para, i) => (
                          <p key={i} className="mb-4 leading-relaxed">{para}</p>
                        ))}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-college-navy mb-6 mt-12">Batch Details & Dates</h3>
                      <div className="overflow-x-auto rounded-xl border border-gray-200">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-gray-50 border-b border-gray-200">
                              <th className="p-4 font-bold text-college-navy">Phase</th>
                              <th className="p-4 font-bold text-college-navy">Target</th>
                              <th className="p-4 font-bold text-college-navy">Medium</th>
                              <th className="p-4 font-bold text-college-navy">Admission Mode</th>
                              <th className="p-4 font-bold text-college-navy">Commencement</th>
                            </tr>
                          </thead>
                          <tbody>
                            {program.batches.map((batch, i) => (
                              <tr key={i} className="border-b border-gray-200 last:border-0 hover:bg-blue-50/50 transition-colors">
                                <td className="p-4 text-gray-600 font-medium">{batch.phase}</td>
                                <td className="p-4 text-gray-600">{batch.target}</td>
                                <td className="p-4 text-gray-600">{batch.medium}</td>
                                <td className="p-4 text-gray-600">{batch.admission}</td>
                                <td className="p-4 text-gray-800 font-semibold">{batch.date}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="lg:col-span-1">
                      <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 sticky top-24">
                        <h3 className="text-xl font-bold text-college-navy mb-8 border-b pb-4">Key Information</h3>
                        
                        <div className="space-y-8 mb-10">
                          <div className="flex gap-4">
                            <div className="bg-white p-3 rounded-full shadow-sm shrink-0 h-min">
                              <Clock className="w-6 h-6 text-college-gold" />
                            </div>
                            <div>
                              <p className="text-sm text-gray-600 font-semibold uppercase tracking-wider mb-1">Duration</p>
                              <p className="font-bold text-gray-800">{program.duration}</p>
                            </div>
                          </div>
                          
                          <div className="flex gap-4">
                            <div className="bg-white p-3 rounded-full shadow-sm shrink-0 h-min">
                              <GraduationCap className="w-6 h-6 text-college-gold" />
                            </div>
                            <div>
                              <p className="text-sm text-gray-600 font-semibold uppercase tracking-wider mb-1">Eligibility</p>
                              <p className="font-bold text-gray-800">{program.eligibility}</p>
                            </div>
                          </div>

                          <div className="flex gap-4">
                            <div className="bg-white p-3 rounded-full shadow-sm shrink-0 h-min">
                              <Target className="w-6 h-6 text-college-gold" />
                            </div>
                            <div>
                              <p className="text-sm text-gray-600 font-semibold uppercase tracking-wider mb-1">Class</p>
                              <p className="font-bold text-gray-800">{program.class}</p>
                            </div>
                          </div>
                        </div>

                        <Link 
                          to="/contact-us"
                          className="flex items-center justify-center w-full bg-college-gold hover:bg-college-goldLight text-college-navy font-bold py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1"
                        >
                          Apply Now
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

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
