import { Link } from 'react-router-dom';
import { BookOpen, Clock, Users } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  link: string;
  duration?: string;
  target?: string;
  image?: string;
  badge?: string;
}

export default function CourseCard({ 
  title, 
  description, 
  link, 
  duration, 
  target,
  image = 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop',
  badge
}: CourseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 flex flex-col h-full group">
      {/* Image Header */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img 
          src={image} 
          alt={title} 
          loading="lazy"
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute inset-0 bg-college-navy/20 group-hover:bg-transparent transition-colors duration-300" />
        
        {badge && (
          <div className="absolute top-4 right-4 bg-college-gold text-college-navy text-xs font-bold px-3 py-1 rounded-full shadow-md">
            {badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold font-serif text-college-navy mb-3 group-hover:text-college-gold transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3">
          {description}
        </p>
        
        {/* Meta info */}
        {(duration || target) && (
          <div className="flex items-center justify-between py-4 border-t border-gray-200 mb-2">
            {duration && (
              <div className="flex items-center text-xs text-gray-600 font-medium">
                <Clock className="w-4 h-4 mr-1 text-college-navyLight" />
                {duration}
              </div>
            )}
            {target && (
              <div className="flex items-center text-xs text-gray-600 font-medium">
                <Users className="w-4 h-4 mr-1 text-college-navyLight" />
                {target}
              </div>
            )}
          </div>
        )}

        <Link 
          to={link}
          className="w-full text-center bg-gray-50 hover:bg-college-navy text-college-navy hover:text-white font-semibold py-3 px-4 rounded transition-colors flex items-center justify-center mt-auto border border-[#2563EB]/10 hover:border-transparent"
        >
          <BookOpen className="w-4 h-4 mr-2" />
          View Course Details
        </Link>
      </div>
    </div>
  );
}
