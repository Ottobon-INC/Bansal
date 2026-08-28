import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLightSlide, setIsLightSlide] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleSlideChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      setIsLightSlide(customEvent.detail === 1);
    };
    window.addEventListener('heroSlideChange', handleSlideChange);
    return () => window.removeEventListener('heroSlideChange', handleSlideChange);
  }, []);

  const navigation = [
    { name: 'Specialties', href: '/courses' }, // Renamed some to match vibe or keep original? Let's keep original names but styled like the ref.
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Courses', href: '/courses' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Contact', href: '/contact-us' },
  ];

  const isHome = location.pathname === '/';
  const isActive = (path: string) => location.pathname === path;

  // Determine text color based on home page and slide
  const useDarkText = isHome && isLightSlide;

  return (
    <header id="site-header" className={`${isHome ? 'absolute top-0 left-0 w-full z-50 bg-transparent pt-4' : 'bg-college-navy py-2'} px-4 md:px-8 transition-all duration-300`}>
      <nav id="main-navigation" className="container mx-auto flex items-start justify-between relative">
        
        {/* Left Navigation Pills (Desktop) */}
        <div className="hidden lg:flex items-center space-x-2 pt-4">
          {navigation.filter(n => n.name !== 'Specialties').map((item) => (
            <Link
              key={item.name}
              id={`nav-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              to={item.href}
              className={`px-5 py-2 rounded-full border text-sm font-medium transition-all ${
                isActive(item.href)
                  ? (useDarkText ? 'border-college-navy bg-college-navy/10 text-college-navy backdrop-blur-md' : 'border-white bg-white/20 text-white backdrop-blur-md')
                  : (useDarkText ? 'border-college-navy/30 text-college-navy hover:bg-college-navy/10 hover:border-college-navy backdrop-blur-sm' : 'border-white/30 text-white/90 hover:bg-white/10 hover:border-white backdrop-blur-sm')
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Center Logo Pill */}
        <div className={`absolute left-1/2 -translate-x-1/2 ${isHome ? '-top-4' : '-top-2'} z-50`}>
          <Link id="nav-logo-home" to="/" className={`block bg-white ${isHome ? 'rounded-b-3xl px-4 md:px-6 pt-4 pb-2' : 'rounded-b-3xl px-4 md:px-6 py-2'} shadow-xl flex items-center justify-center`}>
            <img 
              src="/wp-content/uploads/2024/11/bansal-removebg-preview.png" 
              alt="Bansal Junior College" 
              className="h-16 md:h-20 w-auto object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/200x50?text=Bansal+Junior+College';
              }}
            />
          </Link>
        </div>

        {/* Right Action Pills (Desktop) */}
        <div className="hidden lg:flex items-center space-x-3 pt-4">

          {/* Enroll Now Button */}
          <Link 
            to="/contact-us"
            className="flex items-center px-6 py-2 rounded-full bg-gray-900 text-white hover:bg-black transition-all shadow-lg font-semibold text-sm"
          >
            <span className="mr-2">Enroll Now</span>
            <div className="bg-white text-black rounded-full p-1">
              <ArrowRight className="w-3 h-3" />
            </div>
          </Link>
          

        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center pt-4">
          <button 
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`${useDarkText ? 'text-college-navy hover:text-black' : 'text-white hover:text-college-gold'} transition-colors p-2`}
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-24 bg-white rounded-2xl shadow-2xl p-6 relative z-50 mx-auto max-w-sm">
          <div className="flex flex-col space-y-4">
            {navigation.filter(n => n.name !== 'Specialties').map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-semibold text-lg ${
                  isActive(item.href) ? 'text-college-navy' : 'text-gray-600'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/contact-us"
              className="bg-gray-900 text-white font-bold py-3 text-center rounded-xl mt-4 flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Enroll Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
