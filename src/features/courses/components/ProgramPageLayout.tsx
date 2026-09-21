import { Link } from 'react-router-dom';
import { Clock, GraduationCap, Target, ChevronRight } from 'lucide-react';
import SEO from '../../../components/seo/SEO';
import type { ProgramDetails } from '../data/jeeAdvancedPrograms';

interface ProgramPageLayoutProps {
  program: ProgramDetails;
  categoryName: string;
  categoryLink: string;
}

export default function ProgramPageLayout({ program, categoryName, categoryLink }: ProgramPageLayoutProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": program.name,
    "description": program.shortDesc,
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Bansal Junior College Vizag",
      "sameAs": "https://bansalclassesvizag.com/"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://bansalclassesvizag.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Courses",
        "item": "https://bansalclassesvizag.com/courses"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": categoryName,
        "item": `https://bansalclassesvizag.com${categoryLink}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": program.name,
        "item": `https://bansalclassesvizag.com${categoryLink}/${program.slug}`
      }
    ]
  };

  return (
    <>
      <SEO
        title={program.seoTitle || `${program.name} | Bansal Classes Vizag`}
        description={program.shortDesc}
        canonicalUrl={`https://bansalclassesvizag.com/courses/jee-advanced/${program.slug}`}
        schema={[schema, breadcrumbSchema]}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 max-w-7xl flex items-center text-sm text-gray-500 font-medium">
          <Link to="/" className="hover:text-college-navy transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <Link to="/courses" className="hover:text-college-navy transition-colors">Courses</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <Link to={categoryLink} className="hover:text-college-navy transition-colors">{categoryName}</Link>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <span className="text-college-navy">{program.name}</span>
        </div>
      </div>

      <main className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="bg-college-navy text-white p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-college-gold rounded-full opacity-5 blur-3xl"></div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold relative z-10">{program.name}</h1>
            </div>
            
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold text-college-navy mb-6">Course Overview</h2>
                  <div className="prose prose-lg text-gray-600 max-w-none mb-8">
                    {program.fullDesc.split('\n\n').map((para, i) => (
                      <p key={i} className="mb-4 leading-relaxed">{para}</p>
                    ))}
                  </div>
                  
                  <h2 className="text-2xl font-bold text-college-navy mb-6 mt-12">Batch Details & Dates</h2>
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

          <div className="mt-16 text-center">
             <Link to={categoryLink} className="inline-flex items-center text-college-navy font-semibold hover:text-college-gold transition-colors">
               <ChevronRight className="w-5 h-5 mr-1 rotate-180" /> Back to {categoryName} Programs
             </Link>
          </div>
        </div>
      </main>
    </>
  );
}
