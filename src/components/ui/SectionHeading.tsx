interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  light?: boolean;
}

export default function SectionHeading({ 
  title, 
  subtitle, 
  align = 'center',
  light = false
}: SectionHeadingProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };

  const lineAlignClasses = {
    left: 'after:left-0',
    center: 'after:left-1/2 after:-translate-x-1/2',
    right: 'after:right-0'
  };

  const textColor = light ? 'text-white' : 'text-college-navy';
  const subtitleColor = light ? 'text-gray-300' : 'text-gray-600';

  return (
    <div className={`max-w-3xl mb-12 ${alignClasses[align]}`}>
      <h2 className={`text-3xl md:text-4xl font-serif font-bold ${textColor} mb-4 relative inline-block after:content-[''] after:absolute after:-bottom-3 ${lineAlignClasses[align]} after:w-20 after:h-1 after:bg-college-gold`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`${subtitleColor} text-lg mt-8 leading-relaxed font-light`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
