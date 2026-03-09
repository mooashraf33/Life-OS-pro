"use client"

export function LifeOSLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Minimalist Logo Icon */}
      <div className="relative">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-maroon to-maroon-light flex items-center justify-center shadow-lg shadow-maroon-glow">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-6 h-6"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {/* Infinity/Loop symbol representing continuous life optimization */}
            <path
              d="M12 12c-2-2.5-4-3-5.5-3C4 9 2 10.5 2 13s2 4 4.5 4c1.5 0 3.5-.5 5.5-3 2 2.5 4 3 5.5 3 2.5 0 4.5-1.5 4.5-4s-2-4-4.5-4c-1.5 0-3.5.5-5.5 3z"
              stroke="#F5F5F5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {/* Subtle glow effect */}
        <div className="absolute inset-0 rounded-xl bg-maroon/30 blur-md -z-10" />
      </div>
      
      {/* Logo Text */}
      <div className="flex flex-col">
        <span className="text-xl font-semibold tracking-tight text-foreground">
          Life<span className="text-maroon-light">OS</span>
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Productivity
        </span>
      </div>
    </div>
  )
}
