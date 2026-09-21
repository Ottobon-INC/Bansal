import { Link } from 'react-router-dom';
import { Globe, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-college-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* About Column */}
          <div>
            <div className="bg-white rounded-xl mb-6 inline-block px-4 py-3">
              <img 
                src="/wp-content/uploads/2024/11/bansal-removebg-preview.png" 
                alt="Bansal Junior College" 
                className="h-16 md:h-20 w-auto object-contain -my-2 md:-my-4"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/200x50?text=Bansal+Junior+College';
                }}
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Empowering students to achieve their dreams. Bansal Junior College is a premier institute for JEE Advanced, NEET UG, and other competitive examinations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-college-gold hover:text-college-navy transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-college-gold hover:text-college-navy transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-bold text-college-gold mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-1 after:bg-college-gold">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li><Link to="/about-us" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/achievements" className="text-gray-300 hover:text-white transition-colors">Our Achievements</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-white transition-colors">All Courses</Link></li>
              <li><Link to="/contact-us" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-xl font-serif font-bold text-college-gold mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-1 after:bg-college-gold">
              Popular Courses
            </h3>
            <ul className="space-y-3">
              <li><Link to="/jee-advanced" className="text-gray-300 hover:text-white transition-colors">JEE Advanced</Link></li>
              <li><Link to="/neet-ug" className="text-gray-300 hover:text-white transition-colors">NEET UG</Link></li>
              <li><Link to="/courses/jee-advanced/bulls-eye" className="text-gray-300 hover:text-white transition-colors">Bull's Eye (JEE)</Link></li>
              <li><Link to="/nucleus-for-neet" className="text-gray-300 hover:text-white transition-colors">Nucleus (NEET)</Link></li>
              <li><Link to="/courses/jee-advanced/sterling" className="text-gray-300 hover:text-white transition-colors">Sterling (Droppers)</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif font-bold text-college-gold mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-1 after:bg-college-gold">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-college-gold mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  49-52-5, Sankara Matam Rd, Beside Karnataka Bank,<br />
                  Akkayapalem, Visakhapatnam 530016
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-college-gold mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+91-8919116433</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-college-gold mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">bansalclassesvizag@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 mt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bansal Junior College Vizag. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
