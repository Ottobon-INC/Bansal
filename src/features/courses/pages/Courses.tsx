import SEO from '../../../components/seo/SEO';
import CourseCard from '../../../components/ui/CourseCard';
import SectionHeading from '../../../components/ui/SectionHeading';

export default function Courses() {
  const courses = [
    {
      title: 'JEE Advanced',
      description: 'The Joint Entrance Examination – Advanced is a premier academic exam in India for admission to IITs. Our program is designed to build exceptional analytical and problem-solving skills.',
      link: '/jee-advanced',
      badge: 'Engineering',
      duration: '2 Years',
      target: 'Class 11 & 12',
      image: '/wp-content/uploads/2024/11/1-1.webp'
    },
    {
      title: 'NEET UG',
      description: 'The centralized examination for admission to undergraduate medical (MBBS) and dental (BDS) programs. We provide comprehensive preparation covering the core sciences.',
      link: '/neet-ug',
      badge: 'Medical',
      duration: '2 Years',
      target: 'Class 11 & 12',
      image: '/wp-content/uploads/2024/11/2-2.webp'
    },
    {
      title: 'Sterling for JEE (Dropper)',
      description: 'Dedicated 1-year repeater program for students determined to improve their JEE rank with intensive coaching and regular mock tests.',
      link: '/courses/jee-advanced/sterling',
      badge: 'Repeaters',
      duration: '1 Year',
      target: '12th Pass',
      image: '/wp-content/uploads/2024/11/3-1.webp'
    },
    {
      title: 'Sterling for NEET (Dropper)',
      description: 'Focused 1-year repeater program for medical aspirants to achieve top scores in NEET UG with specialized mentoring.',
      link: '/sterling-for-neet-dropper',
      badge: 'Repeaters',
      duration: '1 Year',
      target: '12th Pass',
      image: '/wp-content/uploads/2024/11/2-2.webp'
    },
    {
      title: 'Nucleus for JEE',
      description: 'A strong foundation program for early starters aiming to build solid fundamentals for JEE Main and Advanced.',
      link: '/courses/jee-advanced/nucleus',
      badge: 'Foundation',
      duration: '2+ Years',
      target: 'Class 11',
      image: '/wp-content/uploads/2024/11/1-1.webp'
    },
    {
      title: 'Nucleus for NEET',
      description: 'Early preparation program for NEET UG, ensuring thorough understanding of basic concepts and syllabus integration.',
      link: '/nucleus-for-neet',
      badge: 'Foundation',
      duration: '2+ Years',
      target: 'Class 11',
      image: '/wp-content/uploads/2024/11/2-2.webp'
    }
  ];

  return (
    <>
      <SEO
        title="JEE & NEET Coaching Courses | Bansal Classes Vizag"
        description="Discover our flagship academic programs including JEE Advanced, NEET UG, Sterling Droppers, and Foundation courses at Bansal Junior College."
        canonicalUrl="https://bansalclassesvizag.com/courses"
      />

      {/* Page Header */}
      <header className="bg-college-navy text-white py-12 md:py-20 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-college-gold rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">Courses and Fee</h1>
          <p className="text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            Discover the range of programs offered by Bansal Junior College Vizag, tailored to meet the diverse needs of aspiring students. Choose the program that best suits your goals and preferences.
          </p>
        </div>
      </header>

      <main className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeading 
            title="Our Academic Programs" 
            subtitle="Explore our carefully structured programs designed to help you achieve your dreams in Engineering and Medical entrance exams." 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
