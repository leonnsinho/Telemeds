import React, { useEffect, useState, useCallback, useMemo } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  color: string;
  drift: number; // Movimento horizontal sutil
}

const ParticleBackground: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Cores das partículas otimizadas
  const colors = useMemo(() => [
    'rgba(59, 130, 246, 0.7)',   // blue-500 - mais visível
    'rgba(147, 197, 253, 0.6)',  // blue-300 - mais visível
    'rgba(96, 165, 250, 0.7)',   // blue-400 - mais visível
    'rgba(37, 99, 235, 0.8)',    // blue-600 - mais visível
    'rgba(191, 219, 254, 0.5)',  // blue-200
    'rgba(30, 58, 138, 0.6)',    // blue-900 - mais escuro
  ], []);

  const updateDimensions = useCallback(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [updateDimensions]);

  const createParticles = useCallback(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    // Número otimizado de partículas para performance
    const particleCount = Math.min(Math.floor((dimensions.width * dimensions.height) / 25000), 25);
    const newParticles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * dimensions.width,
        y: dimensions.height + Math.random() * 200, // Spawn mais próximo da tela
        size: Math.random() * 35 + 20, // Entre 20px e 55px - partículas maiores
        speed: Math.random() * 3 + 1.5, // Velocidade muito mais rápida (1.5 a 4.5)
        opacity: Math.random() * 0.6 + 0.3, // Opacidade mais visível (0.3 a 0.9)
        color: colors[Math.floor(Math.random() * colors.length)],
        drift: (Math.random() - 0.5) * 0.5 // Movimento horizontal mais visível
      });
    }

    setParticles(newParticles);
  }, [dimensions.width, dimensions.height, colors]);

  useEffect(() => {
    createParticles();
  }, [createParticles]);

  useEffect(() => {
    if (particles.length === 0) return;

    const animateParticles = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          let newY = particle.y - particle.speed;
          let newX = particle.x + particle.drift;
          
          // Resetar partícula quando sair da tela
          if (newY < -100) {
            newY = dimensions.height + Math.random() * 100; // Spawn mais próximo
            newX = Math.random() * dimensions.width;
            return {
              ...particle,
              y: newY,
              x: newX,
              size: Math.random() * 35 + 20,
              speed: Math.random() * 3 + 1.5,
              opacity: Math.random() * 0.6 + 0.3,
              color: colors[Math.floor(Math.random() * colors.length)],
              drift: (Math.random() - 0.5) * 0.5
            };
          }

          // Manter partículas dentro dos limites horizontais
          if (newX < -50) newX = dimensions.width + 50;
          if (newX > dimensions.width + 50) newX = -50;

          return {
            ...particle,
            y: newY,
            x: newX
          };
        })
      );
    };

    const intervalId = setInterval(animateParticles, 30); // ~33 FPS para movimento rápido e fluido

    return () => clearInterval(intervalId);
  }, [particles.length, dimensions.height, dimensions.width, colors]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map(particle => (
        <div
          key={particle.id}
          className={`absolute rounded-full particle-animation-${(particle.id % 3) + 1}`}
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `radial-gradient(circle, ${particle.color} 0%, ${particle.color.replace(/[\d\.]+\)$/, '0.2)')} 70%, transparent 100%)`,
            opacity: particle.opacity,
            transform: 'translate(-50%, -50%)',
            animationDelay: `${(particle.id % 5) * 0.2}s`,
            boxShadow: `0 0 ${particle.size * 0.8}px ${particle.color}, 0 0 ${particle.size * 0.4}px ${particle.color}`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
