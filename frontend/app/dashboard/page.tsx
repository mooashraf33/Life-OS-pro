"use client";

import { 
  CheckCircle2, 
  Circle, 
  Plus, 
  BookOpen, 
  StickyNote, // تم التصحيح هنا لتبدأ بحرف كبير
  Calendar as CalendarIcon, 
  ChevronRight 
} from "lucide-react";
import CalendarStrip from "../../components/CalendarStrip";

export default function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto pb-10">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Focus Today</h1>
          <p className="text-gray-500 text-sm">Organize your life, one day at a time.</p>
        </div>
        <button className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group">
          <CalendarIcon size={20} className="text-[#8B0000] group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Calendar Strip Component */}
      <CalendarStrip />

      {/* Main Grid: Todo & Diary & Notes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 font-sans">
        
        {/* Column 1: Todo List */}
        <div className="lg:col-span-1 space-y-4">
          <div className="flex justify-between items-center px-2">
            <h2 className="font-bold flex items-center gap-2 italic text-xs tracking-widest text-gray-300">
               <span className="w-1.5 h-1.5 bg-[#8B0000] rounded-full animate-pulse"></span> TODO LIST
            </h2>
            <Plus size={18} className="text-gray-500 cursor-pointer hover:text-white transition-colors" />
          </div>
          <div className="bg-[#051c33]/50 border border-white/5 rounded-3xl p-5 min-h-[400px] shadow-xl backdrop-blur-sm">
            <div className="space-y-4">
              <TodoItem task="Finish Distributed Systems Lab" done={true} />
              <TodoItem task="Code Life OS Authentication" done={false} />
              <TodoItem task="Review Hyundai Accent mechanics" done={false} />
            </div>
            <button className="w-full mt-6 py-3 border border-dashed border-white/10 rounded-xl text-gray-500 text-[10px] font-bold uppercase tracking-widest hover:border-[#8B0000]/50 hover:text-white transition-all group">
              + Add new task
            </button>
          </div>
        </div>

        {/* Column 2: Daily Diary */}
        <div className="lg:col-span-1 space-y-4">
          <div className="flex justify-between items-center px-2">
            <h2 className="font-bold flex items-center gap-2 italic text-xs tracking-widest text-gray-300">
               <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span> DAILY DIARY
            </h2>
            <BookOpen size={18} className="text-gray-500" />
          </div>
          <div className="bg-[#051c33]/50 border border-white/5 rounded-3xl p-0 overflow-hidden flex flex-col min-h-[400px] shadow-xl backdrop-blur-sm group hover:border-blue-500/20 transition-all">
            <textarea 
              placeholder="How was your day, Mo?"
              className="flex-1 bg-transparent p-6 outline-none resize-none text-sm leading-relaxed text-gray-300 placeholder:text-gray-600 font-medium"
            />
            <div className="p-4 bg-white/5 border-t border-white/5 flex justify-between items-center">
              <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">Auto-saved 2m ago</span>
              <button className="text-[9px] bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full font-bold uppercase tracking-tighter">Live Editor</button>
            </div>
          </div>
        </div>

        {/* Column 3: Quick Notes & Habits Preview */}
        <div className="lg:col-span-1 space-y-6">
          <div className="space-y-4">
            <h2 className="font-bold flex items-center gap-2 italic text-xs tracking-widest px-2 text-gray-300">
               <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse"></span> QUICK NOTES
            </h2>
            <div className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/10 rounded-3xl p-5 shadow-xl">
              <ul className="space-y-3">
                <li className="text-[11px] text-gray-400 flex items-start gap-2 leading-relaxed">
                  <StickyNote size={12} className="text-purple-500 shrink-0 mt-0.5" /> 
                  Next.js Route Groups are powerful for layout separation.
                </li>
                <li className="text-[11px] text-gray-400 flex items-start gap-2 leading-relaxed">
                  <StickyNote size={12} className="text-purple-500 shrink-0 mt-0.5" /> 
                  Don't forget to use Brave browser for debugging.
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-bold flex items-center gap-2 italic text-xs tracking-widest px-2 text-gray-300">
               <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span> HABITS PREVIEW
            </h2>
            <div className="bg-white/5 border border-white/5 rounded-3xl p-5 space-y-5 shadow-xl">
              <HabitMini name="Gym Session" progress={80} color="bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.3)]" />
              <HabitMini name="Book Reading" progress={40} color="bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.3)]" />
              <button className="w-full flex justify-between items-center text-[9px] font-bold text-gray-500 hover:text-[#8B0000] transition-all uppercase tracking-[0.2em] pt-2 border-t border-white/5">
                Full Habit Tracker <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// Components فرعية داخلية للتنظيم
function TodoItem({ task, done }: { task: string; done: boolean }) {
  return (
    <div className={`flex items-center gap-3 p-4 rounded-2xl transition-all cursor-pointer group ${done ? "bg-white/5 opacity-50" : "bg-[#021526] hover:bg-white/[0.03] border border-transparent hover:border-white/5"}`}>
      {done ? <CheckCircle2 size={18} className="text-green-500" /> : <Circle size={18} className="text-gray-600 group-hover:text-[#8B0000]" />}
      <span className={`text-sm font-medium ${done ? "line-through text-gray-500" : "text-white"}`}>{task}</span>
    </div>
  );
}

function HabitMini({ name, progress, color }: any) {
  return (
    <div className="space-y-2.5">
      <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">
        <span>{name}</span>
        <span className="text-white">{progress}%</span>
      </div>
      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div className={`h-full transition-all duration-700 ease-out ${color}`} style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}