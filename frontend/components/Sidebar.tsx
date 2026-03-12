import Logo from "./Logo";
import { LayoutDashboard, Calendar, CheckSquare, StickyNote, BookOpen } from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: <LayoutDashboard size={18} />, active: true },
  { name: "Habit Tracker", icon: <Calendar size={18} /> },
  { name: "Todo List", icon: <CheckSquare size={18} /> },
  { name: "Quick Notes", icon: <StickyNote size={18} /> },
  { name: "Diary", icon: <BookOpen size={18} /> },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-sidebar border-r border-white/5 flex flex-col h-full shrink-0">
      <div className="p-8"><Logo /></div>
      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => (
          <div key={item.name} className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all ${item.active ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-gray-400 hover:bg-white/5 hover:text-white"}`}>
            {item.icon} <span className="text-sm font-medium">{item.name}</span>
          </div>
        ))}
      </nav>
      <div className="p-6 border-t border-white/5 bg-black/20">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold">MO</div>
          <span className="text-sm font-medium">Mo Johnson</span>
        </div>
      </div>
    </aside>
  );
}