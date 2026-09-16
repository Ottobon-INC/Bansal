import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProgramCube from './ProgramCube';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
}

export default function HeroSection({
  title,
  subtitle,
  primaryCtaText = 'Enroll Now',
  primaryCtaLink = '/contact-us',
  backgroundImage = '/hero-bg.png',
}: HeroSectionProps) {
  useEffect(() => {
    window.dispatchEvent(new CustomEvent('heroSlideChange', { detail: 0 }));
  }, []);

  return (
    <div className="bg-white p-2 md:p-4">
      <div className="relative bg-college-navy min-h-[calc(100vh-2rem)] flex flex-col justify-center overflow-hidden rounded-[2.5rem] shadow-2xl">
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-full flex flex-col justify-center min-h-[calc(100vh-2rem)]"
        >
              {/* Background Image with Overlay */}
              {backgroundImage && (
                <div className="absolute inset-0 z-0">
                  <div 
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-100"
                    style={{ backgroundImage: `url('${backgroundImage}')` }}
                  />
                  <div className="absolute inset-0 z-10 bg-college-navy/40 mix-blend-multiply" />
                  <div className="absolute inset-0 z-10 bg-gradient-to-r from-college-navy/80 via-college-navy/30 to-transparent" />
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-college-navy/60 via-transparent to-transparent" />
                </div>
              )}

              <div className="container mx-auto px-4 z-20 relative flex flex-col md:flex-row items-center justify-between gap-8 w-full max-w-7xl pt-40 pb-12 md:pt-28 md:pb-16">
                <div className="w-full md:w-1/2 text-left">
                  <span className="inline-block py-1.5 px-4 rounded-full bg-college-gold/20 text-college-gold font-bold text-sm tracking-widest mb-6 border border-college-gold/50 shadow-sm uppercase">
                    Premier Educational Institute
                  </span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-sans tracking-tight leading-tight mb-6 drop-shadow-xl">
                    {title}
                  </h1>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-2xl font-light drop-shadow">
                    {subtitle}
                  </p>
                  
                  <div className="flex justify-start">
                    <Link 
                      to={primaryCtaLink}
                      className="group flex items-center bg-white text-gray-900 font-bold py-3 pl-8 pr-3 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:-translate-y-1 transition-all duration-300"
                    >
                      <span className="mr-4 text-base tracking-wide uppercase">{primaryCtaText}</span>
                      <div className="bg-gray-900 text-white rounded-full p-2 group-hover:bg-black transition-colors">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="flex w-full md:w-1/2 justify-center items-center h-[350px] md:h-full relative mt-8 md:mt-0">
                  <ProgramCube />
                </div>
              </div>
            </motion.div>
      </div>
    </div>
  );
}
