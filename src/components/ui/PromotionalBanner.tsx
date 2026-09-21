import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PromotionalBanner({ banners }: { banners?: string[] }) {
  // Using placeholders for banners initially if not provided.
  const displayBanners = banners || [
    '/wp-content/uploads/2024/11/1-1.webp',
    '/wp-content/uploads/2024/11/2-2.webp',
    '/wp-content/uploads/2024/11/3-1.webp',
    '/wp-content/uploads/2024/11/5-1.webp'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide
  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayBanners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [displayBanners.length, isPaused]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? displayBanners.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % displayBanners.length);
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          
          {/* Left Column: Chairman/Director Profile */}
          <div className="w-full lg:w-[40%] flex flex-col items-start">
            <div className="w-full relative flex justify-start mb-6">
              <img 
                src="/satishh.jpg" 
                alt="Director" 
                className="w-full max-w-[400px] h-auto object-cover object-top rounded-2xl shadow-lg"
              />
            </div>
            
            <div className="w-full text-left border-t border-gray-200 pt-4">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 uppercase">SATISH GUNTREDDI</h3>
              <p className="text-college-navy font-semibold text-sm md:text-base mb-3">HEAD OF CHEMISTRY & DIRECTOR</p>
              
              <div className="space-y-1 text-sm text-gray-600">
                <p><span className="font-medium text-gray-800">Subject:</span> CHEMISTRY</p>
                <p><span className="font-medium text-gray-800">Qualification:</span> M.Sc</p>
                <p><span className="font-medium text-gray-800">Experience:</span> 22 years</p>
              </div>
            </div>
          </div>

          {/* Right Column: Banners Carousel */}
          <div 
            className="w-full lg:w-[50%] relative flex items-center justify-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            
            <div className="relative w-full aspect-[4/5] sm:aspect-square flex items-center justify-center">
              {displayBanners.map((banner, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out flex items-center justify-center ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                  <img 
                    src={banner} 
                    alt={`Promotional Banner ${index + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Controls */}
            <button 
              onClick={prevSlide}
              className="absolute -left-6 md:-left-12 z-20 text-red-500 hover:text-red-700 transition-transform hover:scale-110 focus:outline-none"
            >
              <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" strokeWidth={2.5} />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute -right-6 md:-right-12 z-20 text-red-500 hover:text-red-700 transition-transform hover:scale-110 focus:outline-none"
            >
              <ChevronRight className="w-8 h-8 md:w-10 md:h-10" strokeWidth={2.5} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
