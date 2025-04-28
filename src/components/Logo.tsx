
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", showText = true }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/485b83b5-a0a6-4e74-a96a-899ef494e906.png" 
        alt="Hoodie and Foodie Logo" 
        className="h-10 w-10 object-contain"
      />
      {showText && (
        <span className="ml-2 text-xl md:text-2xl font-bold text-white">
          <span className="text-brand-blue">Hoodie</span> & <span className="text-white">Foodie</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
