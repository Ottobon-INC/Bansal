import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

export interface Feature {
  id: string | number;
  title: string;
  description: string;
  icon: LucideIcon;
}

interface FeatureGridProps {
  title: string;
  subtitle?: string;
  features: Feature[];
}

export default function FeatureGrid({ title, subtitle, features }: FeatureGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-serif font-bold text-college-navy mb-4 relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-college-gold">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-600 text-lg mt-8">
              {subtitle}
            </p>
          )}
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={feature.id} 
                variants={itemVariants}
                className="bg-college-navy rounded-xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full z-0 group-hover:bg-college-gold/20 transition-colors" />
                
                <div className="relative z-10 w-14 h-14 bg-college-gold rounded-lg flex items-center justify-center mb-6 group-hover:bg-white transition-colors shadow-md">
                  <Icon className="w-7 h-7 text-college-navy transition-colors" />
                </div>
                
                <h3 className="relative z-10 text-xl font-bold text-white mb-3 group-hover:text-college-gold transition-colors">
                  {feature.title}
                </h3>
                
                <p className="relative z-10 text-gray-200 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
