import React from 'react';

export default function Logo({ size = 'md', showText = true }: { size?: 'sm' | 'md' | 'lg', showText?: boolean }) {
  const sizes = {
    sm: { box: 'w-10 h-10', icon: 'text-[10px]', text: 'text-xs' },
    md: { box: 'w-14 h-14', icon: 'text-xs', text: 'text-base' },
    lg: { box: 'w-20 h-20', icon: 'text-sm', text: 'text-xl' },
  };

  return (
    <div className="flex flex-col items-center gap-3 group cursor-pointer transition-all">
      <div className="relative shrink-0">
        
        {/* المربع المفرغ - مربوط بـ primary (الأحمر) */}
        <div className={`${sizes[size].box} rounded-2xl border-2 border-primary bg-transparent flex items-center justify-center relative overflow-hidden group-hover:bg-primary/5 transition-all duration-500`}>
          
          {/* الاختصار اللي جوه المربع */}
          <span className="text-white font-black tracking-[0.2em] z-10 transition-transform group-hover:scale-110">
            LOS-P
          </span>
          
          {/* توهج داخلي خفيف بلون الـ primary */}
          <div className="absolute inset-0 bg-primary/10 blur-xl group-hover:bg-primary/20 transition-all"></div>
        </div>
        
        {/* النقطة النيون - مربوطة بـ accent (الأزرق) */}
        <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-background flex items-center justify-center rounded-full border border-white/5 shadow-lg">
           <div 
             className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"
             style={{ boxShadow: '0 0 8px var(--color-accent)' }}
           ></div>
        </div>
      </div>

      {/* النص اللي تحت اللوجو */}
      {showText && (
        <h1 className={`${sizes[size].text} text-white font-black tracking-[0.3em] uppercase group-hover:text-primary transition-colors`}>
          Life OS <span className="text-gray-600 font-light">|</span> <span className="text-primary drop-shadow-[0_0_5px_rgba(var(--color-primary),0.5)]">Pro</span>
        </h1>
      )}
    </div>
  );
}