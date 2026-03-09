"use client"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-navy">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-light opacity-80" />
      
      {/* Animated maroon aura - top left */}
      <div 
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full animate-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(74, 4, 4, 0.4) 0%, rgba(74, 4, 4, 0.1) 40%, transparent 70%)',
          animation: 'float1 8s ease-in-out infinite',
        }}
      />
      
      {/* Animated maroon aura - bottom right */}
      <div 
        className="absolute -bottom-48 -right-48 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(74, 4, 4, 0.35) 0%, rgba(74, 4, 4, 0.08) 45%, transparent 70%)',
          animation: 'float2 10s ease-in-out infinite',
        }}
      />
      
      {/* Subtle center glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(74, 4, 4, 0.15) 0%, transparent 60%)',
          animation: 'pulse 6s ease-in-out infinite',
        }}
      />
      
      {/* Grid overlay for tech feel */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(74, 4, 4, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74, 4, 4, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay">
        <svg className="w-full h-full">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)"/>
        </svg>
      </div>
      
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          50% { transform: translate(30px, 20px) scale(1.1); opacity: 0.8; }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          50% { transform: translate(-40px, -30px) scale(1.15); opacity: 0.7; }
        }
        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.5; }
        }
      `}</style>
    </div>
  )
}
