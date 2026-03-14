import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
}

export default function Input({ label, icon, className = "", ...props }: InputProps) {
  return (
    <div className="w-full space-y-1.5 text-left">
      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1 italic">
        {label}
      </label>
      <div className="relative group">
        <input 
          {...props}
          className={`w-full bg-background border border-white/5 rounded-xl py-3 px-4 focus:outline-none focus:border-primary/50 text-sm transition-all text-text-main placeholder:text-gray-600 group-hover:border-white/10 ${className}`}
        />
        {icon && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-text-main transition-colors">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}