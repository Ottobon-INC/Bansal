import SEO from '../../../components/seo/SEO';
import PromotionalBanner from '../../../components/ui/PromotionalBanner';

export default function Achievements() {
  const achievements = [
    { title: "JEE ADVANCED - 2024", image: "https://bansalclassesvizag.com/wp-content/uploads/2024/11/1-6.png" },
    { title: "NEET - 2024", image: "https://bansalclassesvizag.com/wp-content/uploads/2024/11/2-7.png" },
    { title: "JEE MAIN - 2024", image: "https://bansalclassesvizag.com/wp-content/uploads/2024/11/3-6.png" },
    { title: "JEE (Advanced) Result 2023", image: "https://bansalclassesvizag.com/wp-content/uploads/2024/11/4-4.png" },
    { title: "NEET(UG) Result 2023", image: "https://bansalclassesvizag.com/wp-content/uploads/2024/11/5-5.png" },
    { title: "JEE (Main) Result 2023", image: "https://bansalclassesvizag.com/wp-content/uploads/2024/11/6-4.png" },
    { title: "JEE (Advanced) Result 2022", image: "https://bansalclassesvizag.com/wp-content/uploads/2024/11/7-2.png" },
    { title: "NEET(UG) Result 2022", image: "https://bansalclassesvizag.com/wp-content/uploads/2024/11/8-1.png" },
    { title: "Jee Mains Feb. Attempt 2021", image: "https://bansalclassesvizag.com/wp-content/uploads/2024/11/9-1.png" },
    { title: "JEE (Advanced) Result 2021", image: "https://bansalclassesvizag.com/wp-content/uploads/2024/11/10-1.png" },
    { title: "JEE (Main) Result 2021", image: "https://bansalclassesvizag.com/wp-content/uploads/2024/11/11.png" },
    { title: "JEE (Advanced) Result 2020", image: "https://bansalclassesvizag.com/wp-content/uploads/2024/11/12.png" }
  ];

  return (
    <>
      <SEO
        title="Achievements | Bansal Junior College Vizag"
        description="Explore the outstanding achievements and top ranks secured by Bansal Junior College students in JEE Advanced, JEE Main, and NEET."
        canonicalUrl="https://bansalclassesvizag.com/achievements"
      />

      {/* Page Header */}
      <header className="bg-college-navy text-white py-12 md:py-20 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-college-gold rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">Our Achievements</h1>
          <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            Celebrating Academic Brilliance: Milestones in Student Achievement. <br />
            <strong>40+ Years Legacy: Authenticity of Results</strong>
          </p>
        </div>
      </header>

      <main className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-2 md:px-4 max-w-[1600px]">
          
          {/* Promotional Banner Layout for Achievements */}
          <PromotionalBanner banners={achievements.map(a => a.image)} />
          
          <div className="mt-20 text-center bg-college-navy text-white rounded-2xl p-10 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-college-gold rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-2xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Empowering Your Path to Success</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
                Join us at Bansal Junior College to embark on a transformative academic journey. With unparalleled guidance, comprehensive resources, and a commitment to excellence, we are here to help you achieve your dreams and conquer your goals. Let's shape your future together!
              </p>
              <a 
                href="/contact-us"
                className="inline-block bg-college-gold hover:bg-college-goldLight text-college-navy font-bold py-3 px-10 rounded shadow-lg transition-transform hover:-translate-y-1 text-lg"
              >
                Apply Now!
              </a>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
