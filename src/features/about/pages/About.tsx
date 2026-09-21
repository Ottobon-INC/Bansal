import SEO from '../../../components/seo/SEO';
import SectionHeading from '../../../components/ui/SectionHeading';
import { GraduationCap, Briefcase, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <SEO
        title="About Bansal Classes Vizag | Bansal Classes"
        description="Learn about the legacy of Bansal Junior College Vizag. We are committed to excellence in education and providing coaching for JEE and NEET."
        canonicalUrl="https://bansalclassesvizag.com/about-us"
      />

      {/* Page Header */}
      <header className="bg-college-navy text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">About Us</h1>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
            A legacy of excellence in education and competitive exam preparation.
          </p>
        </div>
      </header>

      <main className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
            <div className="w-full md:w-1/2">
              <img 
                src="/wp-content/uploads/2024/11/5.webp" 
                alt="Bansal Junior College Vision" 
                className="rounded-2xl shadow-2xl w-full object-cover h-[400px]"
              />
            </div>
            <div className="w-full md:w-1/2">
              <SectionHeading title="Our Vision & Mission" align="left" />
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                At Bansal Junior College Vizag, our mission is to provide an unparalleled educational ecosystem that empowers students to reach their highest potential. We believe that every student has the capability to excel when provided with the right guidance, rigorous curriculum, and a competitive environment.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Founded on the principles of academic excellence and integrity, our institution has consistently produced top ranks in <Link to="/jee-advanced" className="text-college-navy hover:text-college-gold font-semibold transition-colors">JEE Advanced</Link>, <Link to="/neet-ug" className="text-college-navy hover:text-college-gold font-semibold transition-colors">NEET UG</Link>, and various other competitive examinations. Our faculty comprises industry veterans and subject matter experts dedicated to your success.
              </p>
            </div>
          </div>

          {/* Founder Section */}
          <div className="my-32 bg-college-navy lg:bg-college-navy flex flex-col lg:flex-row relative items-stretch">
            {/* Left Card Section */}
            <div className="w-full lg:w-[45%] bg-white p-8 lg:p-10 lg:my-8 lg:ml-12 xl:ml-16 shadow-2xl relative z-10 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-college-navy mb-1 tracking-wide">Late V.K. Bansal Sir</h3>
              <p className="text-lg text-gray-600 mb-4 font-medium">Founder</p>

              <p className="text-gray-600 text-[0.95rem] leading-relaxed font-medium mb-6 italic">
                "To reach heights, one must start climbing. And when the journey is difficult, perseverance becomes the key to success."
              </p>
              
              <div className="space-y-3">
                <p className="text-gray-600 leading-snug text-[0.9rem]">
                  Late V.K. Bansal Sir, a true pioneer in education, envisioned a platform where aspiring students could receive the right guidance and tools to achieve their dreams of cracking IIT-JEE. With decades of experience, he understood that success in competitive exams requires not just hard work but also strategic preparation—knowing what to study and, equally important, what not to.
                </p>
                <p className="text-gray-600 leading-snug text-[0.9rem]">
                  Under his leadership, Bansal Junior College revolutionized the coaching landscape with its unique teaching methodologies, unwavering commitment to excellence, and ability to adapt to evolving exam patterns. His dedication has helped thousands of students and parents turn their dreams into reality.
                </p>
                <p className="text-gray-600 leading-snug text-[0.9rem]">
                  Even with changing times, his belief in embracing challenges with vigor remains at the core of Bansal Junior College. His legacy continues to inspire us as we carry forward his vision of delivering quality education and shaping future leaders.
                </p>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="w-full lg:w-[55%] flex flex-col pt-12 lg:pt-16 pb-0 px-8 lg:px-16">
              <div className="flex items-center mb-8">
                <div className="w-24 h-0.5 bg-white mr-4"></div>
                <h2 className="text-white text-lg font-medium tracking-wide">The Visionary Behind Bansal Junior College</h2>
              </div>
              <div className="relative flex-1 w-full mt-4 min-h-[400px] lg:min-h-0">
                <img 
                  src="/wp-content/uploads/elementor/thumbs/Untitled-design-11-1-qxpyb3itkifdvskhhkq3ijtvl30u2qvkjg63o0txzs.webp" 
                  alt="Late V.K. Bansal Sir" 
                  className="absolute inset-0 w-full h-full object-cover object-top shadow-2xl block border-b-0"
                />
              </div>
            </div>
          </div>



          {/* Satish Director Section */}
          <div className="my-32 flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
            {/* Left Image Section */}
            <div className="w-full md:w-5/12">
              <img 
                src="/satishh.jpg" 
                alt="Satish Guntreddi" 
                className="w-full h-auto object-contain shadow-lg rounded-2xl"
              />
            </div>

            {/* Right Content Section */}
            <div className="w-full md:w-7/12">
              <div className="flex items-center mb-8">
                <div className="w-16 h-0.5 bg-college-navy mr-4"></div>
                <h2 className="text-xl text-gray-800 font-medium tracking-wide">Leadership & Excellence</h2>
              </div>

              <h3 className="text-4xl font-bold text-college-navy mb-2 tracking-wide">Satish Guntreddi</h3>
              <p className="text-lg text-college-gold font-bold mb-10 uppercase tracking-wider">Head of Chemistry and Director</p>

              <div className="space-y-6">
                <div className="flex items-center bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-5 shadow-sm text-college-navy shrink-0">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Subject</p>
                    <p className="text-lg font-bold text-gray-800">Chemistry</p>
                  </div>
                </div>

                <div className="flex items-center bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-5 shadow-sm text-college-navy shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Qualification</p>
                    <p className="text-lg font-bold text-gray-800">M.Sc</p>
                  </div>
                </div>

                <div className="flex items-center bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-5 shadow-sm text-college-navy shrink-0">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Experience</p>
                    <p className="text-lg font-bold text-gray-800">22 years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ramesh Director Section */}
          <div className="my-32 flex flex-col md:flex-row-reverse gap-12 lg:gap-20 items-center">
            {/* Right Image Section */}
            <div className="w-full md:w-5/12">
              <img 
                src="/ramesh.jpg" 
                alt="Ramesh Gurugubelli" 
                className="w-full h-[450px] object-cover object-top shadow-lg rounded-2xl"
              />
            </div>

            {/* Left Content Section */}
            <div className="w-full md:w-7/12">
              <div className="flex items-center mb-8">
                <div className="w-16 h-0.5 bg-college-navy mr-4"></div>
                <h2 className="text-xl text-gray-800 font-medium tracking-wide">Leadership & Excellence</h2>
              </div>

              <h3 className="text-4xl font-bold text-college-navy mb-2 tracking-wide">Ramesh Gurugubelli</h3>
              <p className="text-lg text-college-gold font-bold mb-10 uppercase tracking-wider">Head of Physics and Director</p>

              <div className="space-y-6">
                <div className="flex items-center bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-5 shadow-sm text-college-navy shrink-0">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Subject</p>
                    <p className="text-lg font-bold text-gray-800">Physics</p>
                  </div>
                </div>

                <div className="flex items-center bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-5 shadow-sm text-college-navy shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Qualification</p>
                    <p className="text-lg font-bold text-gray-800">MSc</p>
                  </div>
                </div>

                <div className="flex items-center bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-5 shadow-sm text-college-navy shrink-0">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Experience</p>
                    <p className="text-lg font-bold text-gray-800">25 years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Principal - B. Gowri Shankar Section */}
          <div className="my-32 flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
            {/* Left Image Section */}
            <div className="w-full md:w-5/12">
              <img 
                src="/gowrishankar.jpeg" 
                alt="B. Gowri Shankar" 
                className="w-full h-[450px] object-cover object-top shadow-lg rounded-2xl"
              />
            </div>

            {/* Right Content Section */}
            <div className="w-full md:w-7/12">
              <div className="flex items-center mb-8">
                <div className="w-16 h-0.5 bg-college-navy mr-4"></div>
                <h2 className="text-xl text-gray-800 font-medium tracking-wide">Principal & Academic Leader</h2>
              </div>

              <h3 className="text-4xl font-bold text-college-navy mb-2 tracking-wide">B. Gowri Shankar</h3>
              <p className="text-lg text-college-gold font-bold mb-10 uppercase tracking-wider">Principal and Botany Faculty</p>

              <div className="space-y-6">
                <div className="flex items-center bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-5 shadow-sm text-college-navy shrink-0">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Subject</p>
                    <p className="text-lg font-bold text-gray-800">Botany</p>
                  </div>
                </div>

                <div className="flex items-center bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-5 shadow-sm text-college-navy shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Qualification</p>
                    <p className="text-lg font-bold text-gray-800">M.Sc, M.Ed</p>
                  </div>
                </div>

                <div className="flex items-center bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-5 shadow-sm text-college-navy shrink-0">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Experience</p>
                    <p className="text-lg font-bold text-gray-800">34 years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Faculty Section */}
          <div className="mt-32">
            <SectionHeading title="Meet Our Experts" subtitle="Learn from the best minds in the industry." />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
              {[
                {
                  name: "Dr. Abhinav Ranjan",
                  role: "Senior Faculty",
                  qualifications: "B.Tech, M.Tech, Ph.D",
                  experience: "15 years of Teaching",
                  image: "/Abhinav Ranjan.jpg"
                },
                {
                  name: "Dr. Bh Venkat Siva Apparao",
                  role: "Chemistry Faculty",
                  qualifications: "MSc chemistry (university of Hyderabad), Ph.d (Andhra University)",
                  experience: "15 years",
                  image: "/venkat siva apparao .jpg"
                },
                {
                  name: "Busa Nageswara Rao",
                  role: "Physics Faculty",
                  qualifications: "M.Sc, B.Ed",
                  experience: "20 years",
                  image: "/BUSA NAGESWARA RAO.jpg"
                },
                {
                  name: "Terli Rambabu",
                  role: "Mathematics Faculty",
                  qualifications: "M.Sc, B.Ed",
                  experience: "20 years",
                  image: "/Terli Rambabu.jpg"
                },
                {
                  name: "Kameswara Rao Eswara",
                  role: "Mathematics Faculty",
                  qualifications: "M.Sc., B.Ed",
                  experience: "15 years",
                  image: "/Kameswara Rao Eswara.jpg"
                },
                {
                  name: "Jami Mary",
                  role: "Zoology Faculty",
                  qualifications: "M.sc zoology",
                  experience: "8 years",
                  image: "/Jami Mary.jpg"
                },
                {
                  name: "Polisetty Lalitha",
                  role: "Physics Faculty",
                  qualifications: "M.Sc, B.Ed",
                  experience: "15 years",
                  image: "/Polisetty lalitha.jpg"
                },
                {
                  name: "Praveen Kumar Bonthada",
                  role: "Physics Faculty",
                  qualifications: "B.E (Mechanical Engineering)",
                  experience: "9 years",
                  image: "/Praveen Kumar Bonthada.jpg"
                },
                {
                  name: "Hema Sudharani Kolli",
                  role: "Chemistry Faculty",
                  qualifications: "MSc. Chemistry",
                  experience: "5 years",
                  image: "/Hema Sudharani Kolli .jpg"
                }
              ].map((expert, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100">
                  {/* Image Column */}
                  <div className="w-full md:w-1/3 flex justify-center shrink-0">
                    <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <img 
                        src={expert.image} 
                        alt={expert.name} 
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(expert.name)}&background=1e3a8a&color=fff&size=256`;
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Details Column */}
                  <div className="w-full md:w-2/3 text-center md:text-left">
                    <h3 className="text-2xl font-serif font-bold text-college-navy mb-1">{expert.name}</h3>
                    <p className="text-college-gold font-semibold tracking-wide uppercase text-xs mb-5">{expert.role}</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-center md:justify-start">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3 shadow-sm text-college-navy shrink-0">
                          <GraduationCap className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 font-semibold uppercase tracking-wider text-left">Qualification</p>
                          <p className="font-bold text-gray-800 text-sm text-left">{expert.qualifications}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-center md:justify-start">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3 shadow-sm text-college-navy shrink-0">
                          <Briefcase className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 font-semibold uppercase tracking-wider text-left">Experience</p>
                          <p className="font-bold text-gray-800 text-sm text-left">{expert.experience}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
