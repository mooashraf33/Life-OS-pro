import Link from "next/link";
import { Github } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="w-full max-w-md bg-[#051c33]/50 backdrop-blur-xl border border-white/5 p-10 rounded-3xl shadow-2xl">
      <div className="flex flex-col items-center mb-8">
        <div className="w-12 h-12 bg-[#8B0000] rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[#8B0000]/20">
          <span className="text-white font-bold text-xs">LOS-P</span>
        </div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Welcome Back</h1>
        <p className="text-gray-400 text-sm mt-2 text-center">Log in to your Life OS-Pro dashboard</p>
      </div>

      <form className="space-y-4">
        <div>
          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
          <input type="email" placeholder="mo@example.com" className="w-full bg-[#021526] border border-white/5 rounded-xl py-3 px-4 mt-1 focus:outline-none focus:border-[#8B0000]/50 text-sm transition-all text-white" />
        </div>
        <div>
          <div className="flex justify-between items-center ml-1">
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Password</label>
            <Link href="/forgot-password text-[10px] text-[#8B0000] hover:underline font-semibold">Forgot?</Link>
          </div>
          <input type="password" placeholder="••••••••" className="w-full bg-[#021526] border border-white/5 rounded-xl py-3 px-4 mt-1 focus:outline-none focus:border-[#8B0000]/50 text-sm transition-all text-white" />
        </div>
        
        <button className="w-full bg-[#8B0000] hover:bg-red-900 text-white font-bold py-3 rounded-xl mt-4 transition-all shadow-lg shadow-[#8B0000]/10 border border-white/5">
          Sign In →
        </button>
      </form>

      <div className="flex items-center gap-4 my-8">
        <div className="flex-1 h-[1px] bg-white/5"></div>
        <span className="text-[10px] text-gray-600 uppercase font-bold">Quick Access</span>
        <div className="flex-1 h-[1px] bg-white/5"></div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/5 py-3 rounded-xl transition-all">
          <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" />
          <span className="text-xs font-semibold text-white">Google</span>
        </button>
        <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/5 py-3 rounded-xl transition-all text-white">
          <Github size={18} />
          <span className="text-xs font-semibold">GitHub</span>
        </button>
      </div>

      <p className="text-center text-gray-500 text-xs mt-8">
        New here? <Link href="/register" className="text-[#8B0000] hover:underline font-semibold">Create Account</Link>
      </p>
    </div>
  );
}