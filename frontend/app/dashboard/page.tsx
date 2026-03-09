import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, Bell, Plus, LayoutDashboard, CheckSquare, 
  Calendar, StickyNote, BookOpen, Settings, TrendingUp 
} from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Sidebar - القائمة الجانبية */}
      <aside className="w-64 border-r bg-card p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-10 px-2">
            <div className="bg-primary p-1.5 rounded-lg">
              <span className="text-primary-foreground font-bold text-xl">L</span>
            </div>
            <span className="font-bold text-xl tracking-tight uppercase">Life OS-pro</span>
          </div>

          <nav className="space-y-1">
            <NavItem icon={<LayoutDashboard size={20} />} label="Dashboard" active />
            <NavItem icon={<Calendar size={20} />} label="Habit Tracker" />
            <NavItem icon={<CheckSquare size={20} />} label="Todo List" />
            <NavItem icon={<StickyNote size={20} />} label="Quick Notes" />
            <NavItem icon={<BookOpen size={20} />} label="Diary" />
          </nav>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-secondary/50 rounded-xl border border-border">
             <p className="text-[10px] font-bold text-muted-foreground uppercase mb-2 tracking-wider">Today's Progress</p>
             <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[65%] transition-all"></div>
             </div>
             <p className="text-xs mt-2 text-muted-foreground">65% of goals completed</p>
          </div>
          <div className="flex items-center gap-3 px-2 border-t pt-4 border-border">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center font-bold text-xs">MO</div>
            <span className="text-sm font-medium">Mo Johnson</span>
            <Settings size={16} className="ml-auto text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
          </div>
        </div>
      </aside>

      {/* Main Content - المحتوى الرئيسي */}
      <main className="flex-1 overflow-y-auto">
        <header className="h-16 border-b bg-card/50 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input 
              placeholder="Search your workspace..." 
              className="pl-10 bg-secondary/50 border-none focus-visible:ring-1 ring-primary" 
            />
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Bell size={20} />
            </Button>
            <Button className="bg-primary text-primary-foreground hover:opacity-90 gap-2 shadow-sm">
              <Plus size={18} /> New Entry
            </Button>
          </div>
        </header>

        <div className="p-8 max-w-6xl mx-auto">
          <div className="mb-10">
            <h1 className="text-4xl font-extrabold tracking-tight mb-2">Welcome back, Mo</h1>
            <p className="text-muted-foreground flex items-center gap-2 font-medium">
              <Calendar size={16} /> {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <StatCard icon="🔥" label="Habit Streak" value="12 days" trend="+2 today" />
            <StatCard icon="📊" label="Pending Todos" value="5 items" trend="3 completed" />
            <StatCard icon="📝" label="Notes Today" value="2 entries" trend="Updated 2h ago" />
          </div>

          {/* Section Header */}
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-xl font-bold tracking-tight">Your Daily Overview</h2>
            <Button variant="link" className="text-primary p-0 h-auto font-bold">View All</Button>
          </div>

          {/* Overview Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <OverviewCard title="Habit Tracker" desc="Track your goals" color="bg-orange-500/10" />
            <OverviewCard title="Todo List" desc="Manage tasks" color="bg-blue-500/10" />
            <OverviewCard title="Quick Notes" desc="Capture ideas" color="bg-purple-500/10" />
            <OverviewCard title="Diary" desc="Reflect on day" color="bg-emerald-500/10" />
          </div>
        </div>
      </main>
    </div>
  );
}

// المكونات المساعدة
function NavItem({ icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
  return (
    <div className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
      active 
      ? 'bg-primary text-primary-foreground shadow-md' 
      : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
    }`}>
      {icon}
      <span className="font-semibold text-sm">{label}</span>
    </div>
  );
}

function StatCard({ icon, label, value, trend }: any) {
  return (
    <Card className="border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-secondary rounded-lg text-xl">{icon}</div>
          <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-full">
            <TrendingUp size={10} /> {trend}
          </div>
        </div>
        <p className="text-xs font-medium text-muted-foreground mb-1 uppercase tracking-wider">{label}</p>
        <p className="text-2xl font-bold tracking-tight">{value}</p>
      </CardContent>
    </Card>
  );
}

function OverviewCard({ title, desc, color }: any) {
  return (
    <div className="group cursor-pointer">
      <div className={`aspect-square rounded-2xl ${color} mb-3 overflow-hidden border border-border shadow-sm transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-lg flex items-center justify-center`}>
         <div className="w-12 h-12 rounded-full bg-background/50 backdrop-blur-sm border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Plus className="text-primary" />
         </div>
      </div>
      <h3 className="font-bold text-foreground tracking-tight">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}