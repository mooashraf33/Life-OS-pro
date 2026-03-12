import { Search, Bell, Plus, Flame, ListChecks, StickyNote } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header - البحث والإشعارات */}
      <header className="flex justify-between items-center mb-10">
        <div className="relative w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
          <input 
            type="text" 
            placeholder="Search your workspace..." 
            className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#8B0000]/50"
          />
        </div>
        <div className="flex items-center gap-4">
          <Bell size={18} className="text-gray-400 cursor-pointer hover:text-white" />
          <button className="bg-[#8B0000] hover:bg-red-900 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all shadow-lg shadow-red-900/10">
            <Plus size={16} /> New Entry
          </button>
        </div>
      </header>

      {/* Greeting - الترحيب */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white mb-2">Welcome back, Mo</h1>
        <p className="text-gray-400 flex items-center gap-2 text-sm">
          📅 Thursday, March 12
        </p>
      </div>

      {/* Stats Cards - الكروت العلوية */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <StatCard icon={<Flame className="text-orange-500" />} label="HABIT STREAK" value="12 days" badge="+2 today" />
        <StatCard icon={<ListChecks className="text-blue-500" />} label="PENDING TODOS" value="5 items" badge="3 completed" />
        <StatCard icon={<StickyNote className="text-purple-500" />} label="NOTES TODAY" value="2 entries" badge="Updated 2h ago" />
      </div>

      {/* Section Title */}
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-xl font-semibold text-white">Your Daily Overview</h2>
        <span className="text-[#8B0000] text-xs cursor-pointer hover:underline font-medium">View All</span>
      </div>

      {/* Content Grid - الأقسام الرئيسية */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {['Habit Tracker', 'Todo List', 'Quick Notes', 'Diary'].map((item) => (
          <div key={item} className="h-48 bg-white/5 border border-white/5 rounded-2xl hover:border-white/10 transition-all cursor-pointer p-4 group">
             <div className="w-full h-3/4 bg-[#021526]/50 rounded-xl mb-3 group-hover:bg-[#021526]/80 transition-all"></div>
             <p className="text-sm font-medium text-white">{item}</p>
             <p className="text-[10px] text-gray-500 font-medium">Manage your {item.toLowerCase()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Component فرعي للكروت عشان الكود يبقى منظم
function StatCard({ icon, label, value, badge }: any) {
  return (
    <div className="bg-white/5 border border-white/5 p-6 rounded-2xl hover:bg-white/[0.07] transition-all group">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-[#021526] rounded-lg group-hover:scale-110 transition-transform">{icon}</div>
        <span className="text-[9px] bg-green-500/10 text-green-500 px-2 py-1 rounded-full font-bold uppercase tracking-wider">
          {badge}
        </span>
      </div>
      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">{label}</p>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  );
}