"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  CheckSquare, 
  Flame, 
  StickyNote, 
  Settings, 
  LogOut,
  User
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  // مصفوفة اللينكات عشان الكود يكون نضيف وسهل تعدله
  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} />, href: "/dashboard" },
    { name: "Habit Tracker", icon: <Flame size={20} />, href: "/dashboard/habits" },
    { name: "Todo List", icon: <CheckSquare size={20} />, href: "/dashboard/todo" },
    { name: "Daily Notes", icon: <StickyNote size={20} />, href: "/dashboard/notes" },
  ];

  return (
    <aside className="w-64 bg-[#051c33] border-r border-white/5 flex flex-col h-full">
      {/* Logo Section */}
      <div className="p-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#8B0000] rounded-xl flex items-center justify-center shadow-lg shadow-red-900/20">
            <span className="text-white font-bold text-sm italic">LO</span>
          </div>
          <div>
            <h1 className="text-white font-bold text-sm tracking-tight">Life OS-Pro</h1>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Version 2.0</p>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${
                isActive 
                  ? "bg-[#8B0000] text-white shadow-lg shadow-red-900/10" 
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span className={`${isActive ? "text-white" : "text-gray-500 group-hover:text-[#8B0000]"} transition-colors`}>
                {item.icon}
              </span>
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* User & Footer Section */}
      <div className="p-4 space-y-2">
        <div className="bg-white/5 rounded-2xl p-4 border border-white/5 mb-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/20">
              <User size={16} className="text-blue-500" />
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-bold text-white truncate">Mo Johnson</p>
              <p className="text-[10px] text-gray-500 truncate">Pro Account</p>
            </div>
          </div>
          <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
            <div className="w-3/4 h-full bg-[#8B0000]"></div>
          </div>
          <p className="text-[9px] text-gray-500 mt-2 font-bold uppercase tracking-tighter">75% Daily Goal Reach</p>
        </div>

        <Link 
          href="/dashboard/settings" 
          className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-white hover:bg-white/5 rounded-xl transition-all text-sm font-medium"
        >
          <Settings size={20} />
          <span>Settings</span>
        </Link>
        
        <Link 
          href="/login" 
          className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-red-500 hover:bg-red-500/5 rounded-xl transition-all text-sm font-medium"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </Link>
      </div>
    </aside>
  );
}