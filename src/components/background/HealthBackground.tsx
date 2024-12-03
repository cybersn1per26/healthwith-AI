import React from 'react';

export function HealthBackground() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-[#C8F7D6]">
      {/* DNA Helix Animation */}
      <div className="absolute inset-0">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={`helix-${i}`}
            className="absolute w-full h-full opacity-20"
            style={{ animationDelay: `${i * 2}s` }}
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                style={{ color: '#7c98b3' }}
                d={`M ${i * 30},50 Q ${25 + i * 30},0 ${50 + i * 30},50 T ${100 + i * 30},50`}
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              >
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  from="-100 0"
                  to="0 0"
                  dur="10s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>
        ))}
      </div>

      {/* Floating Medical Icons */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={`icon-${i}`}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 20 + 10}px`,
              opacity: 0.15,
            }}
          >
            {['⚕️', '🔬', '💊', '🫀', '🧬', '🏥'][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(208, 225, 249, 0.4), transparent)' }} />
      
      {/* Animated Circles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`circle-${i}`}
            className="absolute rounded-full"
            style={{
              background: 'rgba(124, 152, 179, 0.1)',
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
    </div>
  );
}