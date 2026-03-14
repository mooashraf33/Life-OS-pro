import React from 'react';
import { LucideIcon } from 'lucide-react';

// بنزود الخصائص العادية بتاعة أي Button عشان لو حبيت تضيف type="submit" مثلاً بعدين
interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon;
  active?: boolean;
}

export default function IconButton({ 
  icon: Icon, 
  onClick, 
  active = false, 
  className = "", 
  ...props 
}: IconButtonProps) {
  
  return (
    <button 
      {...props}
      onClick={onClick}
      className={`p-2.5 rounded-xl transition-all border group flex items-center justify-center ${
        active 
        ? "bg-primary/10 border-primary/50 text-primary shadow-[0_0_15px_rgba(var(--color-primary),0.1)]" 
        : "bg-sidebar border-white/5 text-gray-400 hover:text-white hover:bg-white/5"
      } ${className}`}
    >
      <Icon 
        size={18} 
        className={`transition-transform duration-300 group-hover:scale-110 ${active ? "scale-110" : ""}`} 
      />
    </button>
  );
}