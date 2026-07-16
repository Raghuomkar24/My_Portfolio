import { useEffect, useRef } from 'react';

export const BackgroundEffects = () => {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (blobRef.current) {
        // Smoothly follow the mouse
        blobRef.current.animate(
          {
            left: `${e.clientX}px`,
            top: `${e.clientY}px`,
          },
          { duration: 3000, fill: 'forwards' }
        );
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background">
      {/* Aurora Gradients */}
      <div className="absolute top-[-50%] left-[-10%] w-[70%] h-[70%] rounded-full bg-primary/20 blur-[120px] mix-blend-screen animate-blob" />
      <div className="absolute top-[20%] right-[-20%] w-[60%] h-[60%] rounded-full bg-secondary/20 blur-[120px] mix-blend-screen animate-blob" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[-30%] left-[20%] w-[80%] h-[80%] rounded-full bg-accent/20 blur-[120px] mix-blend-screen animate-blob" style={{ animationDelay: '4s' }} />
      
      {/* Interactive Mouse Blob */}
      <div 
        ref={blobRef}
        className="absolute w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[100px] pointer-events-none"
      />

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
    </div>
  );
};
