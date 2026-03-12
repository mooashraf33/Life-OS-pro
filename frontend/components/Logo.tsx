export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center border border-white/10">
        <span className="text-white font-bold text-[10px]">LOS-P</span>
      </div>
      <div className="flex flex-col leading-none text-white font-bold uppercase tracking-tight">
        <span>Life OS</span>
        <span className="text-[9px] text-gray-500 tracking-[0.3em]">PRO</span>
      </div>
    </div>
  );
}

