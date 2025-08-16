import React from 'react';

interface WaveDividerProps {
  className?: string;
  flip?: boolean;
  color?: string;
  dualLayer?: boolean;
  heroColor?: string;
  // optional gradient for the wave fill (overrides color when provided)
  gradientFrom?: string;
  gradientTo?: string;
  // optional gradient for the hero (when dualLayer is true)
  heroGradientFrom?: string;
  heroGradientTo?: string;
}

const WaveDivider: React.FC<WaveDividerProps> = ({ 
  className = '', 
  flip = false, 
  color = '#ffffff',
  dualLayer = false,
  heroColor = 'transparent',
  gradientFrom,
  gradientTo,
  heroGradientFrom,
  heroGradientTo
}) => {
  const gradientId = React.useMemo(() => `waveGradient_${Math.random().toString(36).slice(2,9)}`, []);
  const heroGradientId = React.useMemo(() => `waveHeroGradient_${Math.random().toString(36).slice(2,9)}`, []);
  if (dualLayer) {
    return (
      <div className={`wave-divider w-full ${className}`}>
        {/* Camada inferior - cor da section hero (z-index menor) */}
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className={`w-full h-12 md:h-16 absolute ${flip ? 'transform rotate-180' : ''}`}
          style={{ display: 'block', zIndex: 5 }}
        >
          {(heroGradientFrom && heroGradientTo) && (
            <defs>
                <linearGradient id={heroGradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={heroGradientFrom} />
                <stop offset="100%" stopColor={heroGradientTo} />
              </linearGradient>
            </defs>
          )}
          <path
            d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"
            fill={(heroGradientFrom && heroGradientTo) ? `url(#${heroGradientId})` : heroColor}
          />
        </svg>
        
        {/* Camada superior - branca (z-index maior) */}
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className={`w-full h-12 md:h-16 absolute ${flip ? 'transform rotate-180' : ''}`}
          style={{ display: 'block', zIndex: 15 }}
        >
          {(gradientFrom && gradientTo) && (
            <defs>
              <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={gradientFrom} />
                <stop offset="100%" stopColor={gradientTo} />
              </linearGradient>
            </defs>
          )}
          <path
            d="M0,60 C150,120 350,60 600,80 C850,120 1050,60 1200,80 L1200,120 L0,120 Z"
            fill={(gradientFrom && gradientTo) ? `url(#${gradientId})` : color}
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={`wave-divider w-full ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`w-full h-12 md:h-16 ${flip ? 'transform rotate-180' : ''}`}
        style={{ display: 'block' }}
      >
        {(gradientFrom && gradientTo) && (
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={gradientFrom} />
              <stop offset="100%" stopColor={gradientTo} />
            </linearGradient>
          </defs>
        )}
        <path
          d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"
          fill={(gradientFrom && gradientTo) ? `url(#${gradientId})` : color}
        />
      </svg>
    </div>
  );
};

export default WaveDivider;