import { Phone, Calendar, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FloatingActions() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-1">
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/918919116433" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-3 md:p-4 rounded-l-xl shadow-lg hover:pr-8 hover:-translate-x-2 transition-all duration-300 flex items-center justify-center group relative"
      >
        <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
        <span className="absolute right-12 opacity-0 group-hover:opacity-100 transition-opacity font-semibold whitespace-nowrap hidden md:block">
          WhatsApp Us
        </span>
      </a>

      {/* Booking/Calendar Button */}
      <Link 
        to="/contact-us" 
        className="bg-[#1e293b] text-white p-3 md:p-4 rounded-l-xl shadow-lg hover:pr-8 hover:-translate-x-2 transition-all duration-300 flex items-center justify-center group relative"
      >
        <Calendar className="w-5 h-5 md:w-6 md:h-6" />
        <span className="absolute right-12 opacity-0 group-hover:opacity-100 transition-opacity font-semibold whitespace-nowrap hidden md:block">
          Book Appointment
        </span>
      </Link>

      {/* Phone Button */}
      <a 
        href="tel:+918919116433" 
        className="bg-[#dc2626] text-white p-3 md:p-4 rounded-l-xl shadow-lg hover:pr-8 hover:-translate-x-2 transition-all duration-300 flex items-center justify-center group relative"
      >
        <Phone className="w-5 h-5 md:w-6 md:h-6" />
        <span className="absolute right-12 opacity-0 group-hover:opacity-100 transition-opacity font-semibold whitespace-nowrap hidden md:block">
          Call Now
        </span>
      </a>
    </div>
  );
}
