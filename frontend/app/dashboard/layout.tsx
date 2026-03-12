import Sidebar from "../../components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-[#021526]">
      {/* السايد بار هيظهر هنا فقط جوه صفحات الداشبورد */}
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto relative p-8">
        {/* وهج أزرق خفيف في الخلفية عشان يدي شكل عميق للمحتوى */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 blur-[100px] pointer-events-none" />
        
        <div className="relative z-10">
          {children}
        </div>
      </main>
    </div>
  );
}