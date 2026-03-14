import React from 'react';

interface BadgeProps {
  text: string;
  color?: 'red' | 'blue' | 'green' | 'gray';
}

export default function Badge({ text, color = 'red' }: BadgeProps) {
  const colors = {
    red: "bg-red-500/10 text-red-500",
    blue: "bg-blue-500/10 text-blue-500",
    green: "bg-green-500/10 text-green-500",
    gray: "bg-white/5 text-gray-500",
  };

  return (
    <span className={`text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-white/5 ${colors[color]}`}>
      {text}
    </span>
  );
}