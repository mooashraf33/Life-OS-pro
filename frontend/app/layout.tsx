import Sidebar from "../components/Sidebar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex h-screen overflow-hidden bg-background text-text-main">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-8 relative">
          {/* وهج أزرق خفيف خلفي */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] pointer-events-none" />
          <div className="relative z-10">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}