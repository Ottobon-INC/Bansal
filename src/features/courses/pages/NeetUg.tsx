import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Clock, GraduationCap, Target, ChevronRight } from 'lucide-react';

export default function NeetUg() {
  const programs = [
    {
      id: "bulls-eye-neet",
      name: "BULL'S EYE FOR NEET",
      image: "https://bansalclassesvizag.com/wp-content/uploads/2024/11/1-3.png",
      link: "/bulls-eye-for-neet",
      shortDesc: "If you have completed or are about to complete Class XI and aspire to become a medical professional through esteemed institutions like AIIMS or other top medical colleges, our program is designed to lead you to success...",
      fullDesc: "BULL'S EYE for NEET is a premier two-year program designed for the brightest minds aspiring to excel in NEET-UG. This legendary course is crafted to elevate your preparation to the highest standards, ensuring every student receives personalized attention in a stimulating learning environment.\n\nWith small, focused batches, one-on-one interactions with instructors, and a rigorous curriculum, we ensure that every doubt is resolved, and every concept is mastered. This course emphasizes analytical thinking and systematic problem-solving—essential skills to succeed in competitive exams like NEET-UG.\n\nIf you believe in your potential and have the determination to achieve your medical dreams, this course is tailor-made for you.",
      duration: "2 Years during Class XI and XII (Target NEET - 2027)",
      eligibility: "Class X to XI Moving Students",
      class: "X TO XI MOVING",
      batches: [
        { phase: "Phase I", medium: "English", target: "2027", admission: "BOOST", date: "02/04/2025" },
        { phase: "Phase II", medium: "English", target: "2027", admission: "BOOST", date: "23/04/2025" },
      ]
    },
    {
      id: "nucleus-neet",
      name: "NUCLEUS FOR NEET",
      image: "https://bansalclassesvizag.com/wp-content/uploads/2024/11/3-3.png",
      link: "/nucleus-for-neet",
      shortDesc: "For students who have completed or are about to complete Class XI and aspire to pursue a career as a medical professional in prestigious institutions like AIIMS or top medical colleges, this program is tailored...",
      fullDesc: "NUCLEUS for NEET is designed for students transitioning from Class XI to XII who aspire to excel in NEET-UG and secure admission to prestigious medical institutions like AIIMS and top medical colleges.\n\nThis one-year program strategically focuses on completing the Class XII PCB syllabus while revisiting the essential Class XI concepts through Daily Practice Problems (DPPs). It equips you with a thorough understanding of the syllabus, providing targeted preparation and a clear roadmap to tackle NEET-UG head-on.\n\nWith expert faculty, personalized study plans, and rigorous practice sessions, the program ensures your readiness to achieve your medical dreams.",
      duration: "1 Year during class XII (Target NEET - 2026)",
      eligibility: "Class XI to XII Moving Students",
      class: "XI TO XII MOVING",
      batches: [
        { phase: "Phase I", medium: "English", target: "2026", admission: "BOOST", date: "02/04/2025" },
        { phase: "Phase II", medium: "English", target: "2026", admission: "BOOST", date: "23/04/2025" },
      ]
    },
    {
      id: "sterling-neet",
      name: "STERLING FOR NEET (DROPPER)",
      image: "https://bansalclassesvizag.com/wp-content/uploads/2024/11/2-4.png",
      link: "/sterling-for-neet-dropper",
      shortDesc: "For students who have completed or are about to complete Class XII and aspire to build a successful medical career in esteemed institutions like AIIMS or top medical colleges, this program is meticulously designed...",
      fullDesc: "STERLING for NEET (DROPPER) is specifically tailored for students who have completed Class XII and are highly motivated to crack NEET-UG with exceptional ranks. We understand the unique challenges faced by droppers, and our program provides the ideal environment for intense preparation.\n\nThis one-year intensive course zeroes in on a rigorous revision of the complete syllabus, plugging knowledge gaps, and enhancing speed and accuracy. The focus is on exam strategy and minimizing errors during high-pressure situations.\n\nBy immersing students in a highly competitive atmosphere and providing constant mentorship, STERLING ensures that you perform to your absolute maximum potential.",
      duration: "1 Year after Class XII (Target NEET - 2026)",
      eligibility: "For 12th Passed/Appeared Students",
      class: "XII PASSED",
      batches: [
        { phase: "Phase I", medium: "English", target: "2026", admission: "BOOST or Direct", date: "09/04/2025" },
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>NEET UG Programs | Bansal Junior College Vizag</title>
        <meta name="description" content="Discover NEET UG Programs | Bansal Junior College Vizag. Expert coaching, comprehensive study material, and proven methodologies at Bansal Junior College Vizag." />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-college-navy text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-college-gold rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">NEET UG Programs</h1>
            <div className="w-24 h-1 bg-college-gold mb-8 mx-auto md:mx-0"></div>
            <p className="text-xl text-gray-300 font-light mb-6 leading-relaxed">
              NEET UG (National Eligibility cum Entrance Test – Undergraduate) is the premier examination for aspiring medical professionals in India. Designed to assess knowledge and aptitude in Physics, Chemistry, and Biology.
            </p>
            <p className="text-lg text-gray-400 font-light">
              With its highly competitive nature, NEET UG demands rigorous preparation, a strategic approach, and expert guidance. At Bansal Junior College, we equip you with the tools and techniques needed to excel.
            </p>
          </div>
          <div className="flex-1 w-full max-w-md">
            <img 
              src="https://bansalclassesvizag.com/wp-content/uploads/2024/11/JEE-Advanced-1-1024x1024.png" 
              alt="NEET UG Target" 
              className="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500 rounded-xl"
            />
          </div>
        </div>
      </div>

      <main className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-college-navy mb-4">NEET UG – Where Passion Meets Profession</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Explore our carefully structured programs designed to help you achieve your dreams in Medical entrance exams.</p>
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
