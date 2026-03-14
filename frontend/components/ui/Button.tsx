import React from 'react';
import { LucideIcon } from 'lucide-react';

// تعريف الـ "عقد" أو الشروط اللي بيمشي عليها الزرار
interface ButtonProps {
  text: string;
  onClick?: () => void;
  icon?: LucideIcon | React.ElementType; // يقبل أيقونة من Lucide أو أي Component تاني
  variant?: 'primary' | 'secondary';    // مسموح بس بكلمة من الاتنين دول
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({ 
  text, 
  onClick, 
  icon: Icon, 
  variant = 'primary', 
  className = '',
  type = "button" 
}: ButtonProps) {
  
  // الـ Object ده متعرف إنه للقراءة فقط (as const) عشان الـ TS يطمن
  const variants = {
    primary: "bg-primary hover:opacity-90 text-white shadow-lg shadow-primary/10 border border-white/5",
    secondary: "bg-sidebar hover:bg-opacity-80 text-white border border-white/5",
  } as const;

  return (
    <button 
      type={type}
      onClick={onClick} 
      className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 ${variants[variant]} ${className}`}
    >
      {Icon && <Icon size={18} />}
      <span className="text-sm tracking-wide">{text}</span>
    </button>
  );
}