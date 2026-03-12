"use client"; // لازم نضيف دي فوق عشان هنستخدم useState

import { useState } from "react";
import Link from "next/link";
import { Github, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  // state عشان نتحكم في إظهار الباسورد أو إخفائه
  const [showPassword, setShowPassword] = useState(false);

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
          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1 text-gray-400">Email Address</label>
          <input type="email" placeholder="mo@example.com" className="w-full bg-[#021526] border border-white/5 rounded-xl py-3 px-4 mt-1 focus:outline-none focus:border-[#8B0000]/50 text-sm transition-all text-white" />
        </div>
        
        <div>
          <div className="flex justify-between items-center ml-1">
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest text-gray-400">Password</label>
            <Link 
              href="/forgetpassword" 
              className="text-[10px] text-[#8B0000] hover:underline font-semibold"
            >
              Forgot?
            </Link>
          </div>
          
          {/* حاوية الـ Input مع زرار العين */}
          <div className="relative mt-1">
            <input 
              type={showPassword ? "text" : "password"} // بيتغير حسب الـ state
              placeholder="••••••••" 
              className="w-full bg-[#021526] border border-white/5 rounded-xl py-3 px-4 focus:outline-none focus:border-[#8B0000]/50 text-sm transition-all text-white pr-12" 
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
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