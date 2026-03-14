"use client";

import { useState } from "react";
import Link from "next/link";
import { Github, Eye, EyeOff } from "lucide-react";

// استدعاء المكونات الاحترافية اللي عملناها
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Logo from "@/components/ui/Logo";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-md bg-[#051c33]/50 backdrop-blur-xl border border-white/5 p-10 rounded-3xl shadow-2xl">
      
      {/* استخدمنا مكون اللوجو الجاهز */}
      <div className="flex flex-col items-center mb-8">
        <Logo size="lg" showText={false} />
        <h1 className="text-2xl font-bold text-white tracking-tight mt-4">Welcome Back</h1>
        <p className="text-gray-400 text-sm mt-2 text-center">Log in to your Life OS-Pro dashboard</p>
      </div>

      <form className="space-y-6">
        {/* استخدمنا مكون الـ Input */}
        <Input 
          label="Email Address" 
          type="email" 
          placeholder="mo@example.com" 
        />

        <div className="space-y-1">
          <div className="flex justify-between items-center px-1">
            {/* اللينك هيفضل زي ما هو لأنه خاص بالصفحة دي */}
            <Link 
              href="/forgetpassword" 
              className="text-[10px] text-[#8B0000] hover:underline font-semibold ml-auto"
            >
              Forgot Password?
            </Link>
          </div>
          
          <Input 
            label="Password" 
            type={showPassword ? "text" : "password"} 
            placeholder="••••••••"
            icon={
              <button type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            }
          />
        </div>
        
        {/* استخدمنا مكون الزرار الأساسي */}
        <Button text="Sign In →" />
      </form>

      <div className="flex items-center gap-4 my-8">
        <div className="flex-1 h-[1px] bg-white/5"></div>
        <span className="text-[10px] text-gray-600 uppercase font-bold">Quick Access</span>
        <div className="flex-1 h-[1px] bg-white/5"></div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* استخدمنا الزرار بنوع secondary للـ Social Login */}
        <Button 
          text="Google" 
          variant="secondary" 
          icon={() => <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="G" />} 
        />
        <Button 
          text="GitHub" 
          variant="secondary" 
          icon={Github} 
        />
      </div>

      <p className="text-center text-gray-500 text-xs mt-8">
        New here? <Link href="/register" className="text-[#8B0000] hover:underline font-semibold">Create Account</Link>
      </p>
    </div>
  );
}