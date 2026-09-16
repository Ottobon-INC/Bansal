import SEO from '../seo/SEO';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Clock, Users, BookOpen } from 'lucide-react';

interface CourseTemplateProps {
  title: string;
  subtitle: string;
  description: string[];
  features: string[];
  duration: string;
  target: string;
  image: string;
}

export default function CourseTemplate({
  title,
  subtitle,
  description,
  features,
  duration,
  target,
  image
}: CourseTemplateProps) {
  const location = useLocation();

  return (
    <>
      <SEO
        title={`${title} | Bansal Junior College Vizag`}
        description={subtitle}
        canonicalUrl={`https://bansalclassesvizag.com${location.pathname}`}
        ogImage={image}
        ogType="article"
        schema={{
          "@context": "https://schema.org",
          "@type": "Course",
          "name": title,
          "description": subtitle,
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Bansal Junior College Vizag",
            "sameAs": "https://bansalclassesvizag.com/"
          }
        }}
      />

      {/* Page Header */}
      <div className="bg-college-navy text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url('${image}')` }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/courses" className="text-college-gold hover:text-white mb-6 inline-block font-semibold transition-colors">
            &larr; Back to All Courses
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{title}</h1>
          <p className="text-xl text-gray-300 font-light max-w-2xl">{subtitle}</p>
        </div>
      </div>

      <main className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Main Content */}
            <div className="w-full lg:w-2/3">
              <h2 className="text-3xl font-serif font-bold text-college-navy mb-6">Course Overview</h2>
              <div className="prose prose-lg max-w-none text-gray-600 mb-12">
                {description.map((paragraph, idx) => (
                  <p key={idx} className="mb-4 leading-relaxed">{paragraph}</p>
                ))}
              </div>

              <h2 className="text-2xl font-serif font-bold text-college-navy mb-6">Key Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-college-gold mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/3">
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-sm sticky top-24">
                <h3 className="text-xl font-bold text-college-navy mb-6 border-b border-gray-200 pb-4">Course Details</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-4 shadow-sm text-college-navy">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-semibold uppercase tracking-wider">Duration</p>
                      <p className="font-bold text-gray-800">{duration}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-4 shadow-sm text-college-navy">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-semibold uppercase tracking-wider">Target Students</p>
                      <p className="font-bold text-gray-800">{target}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-4 shadow-sm text-college-navy">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-semibold uppercase tracking-wider">Mode</p>
                      <p className="font-bold text-gray-800">Classroom Offline</p>
                    </div>
                  </div>
                </div>

                <Link 
                  to="/contact-us"
                  className="block w-full text-center bg-college-gold hover:bg-college-goldLight text-college-navy font-bold py-4 rounded shadow-md transition-colors"
                >
                  Enroll in this Course
                </Link>
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}
