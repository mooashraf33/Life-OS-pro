export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#021526] relative overflow-hidden">
      {/* الوهج الأحمر الخفيف في الخلفية */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#8B0000]/10 blur-[120px] rounded-full" />
      
      <div className="relative z-10 w-full flex justify-center p-4">
        {children}
      </div>
    </div>
  );
}