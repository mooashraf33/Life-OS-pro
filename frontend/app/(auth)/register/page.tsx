"use client";

import { useState } from "react";
import Link from "next/link";
import { Github, Eye, EyeOff, Check, X } from "lucide-react";

// استدعاء المكونات الاحترافية
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Logo from "@/components/ui/Logo";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // شروط التحقق من كلمة المرور
  const requirements = [
    { label: "At least 8 characters", test: password.length >= 8 },
    { label: "Contains a number", test: /[0-9]/.test(password) },
    { label: "Contains uppercase letter", test: /[A-Z]/.test(password) },
    { label: "Passwords match", test: password === confirmPassword && confirmPassword !== "" },
  ];

  return (
    <div className="w-full max-w-md bg-sidebar/50 backdrop-blur-xl border border-white/5 p-10 rounded-3xl shadow-2xl animate-in fade-in zoom-in duration-300">
      
      {/* هيدر الصفحة واللوجو المفرغ الجديد */}
      <div className="flex flex-col items-center mb-8">
        <Logo size="lg" showText={false} />
        <h1 className="text-2xl font-bold text-white tracking-tight mt-4 italic">Create Account</h1>
        <p className="text-gray-400 text-sm mt-1 text-center font-medium">
          Join Life OS <span className="text-primary font-black">Pro</span> today
        </p>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        {/* حقول الإدخال باستخدام الـ UI Component */}
        <Input 
          label="Full Name" 
          placeholder="Mo Johnson" 
          required 
        />
        
        <Input 
          label="Email Address" 
          type="email" 
          placeholder="mo@example.com" 
          required 
        />

        <Input 
          label="Password" 
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          required
          icon={
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)}
              className="hover:text-white transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          }
        />

        <Input 
          label="Confirm Password" 
          type={showPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="••••••••"
          required
        />

        {/* قائمة شروط كلمة المرور */}
        <div className="grid grid-cols-2 gap-2 mt-4 p-4 bg-background/50 rounded-2xl border border-white/5 shadow-inner">
          {requirements.map((req, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className={`transition-colors ${req.test ? "text-green-500" : "text-gray-600"}`}>
                {req.test ? <Check size={12} strokeWidth={3} /> : <X size={12} strokeWidth={3} />}
              </div>
              <span className={`text-[9px] font-bold uppercase tracking-tight transition-colors ${req.test ? "text-gray-200" : "text-gray-500"}`}>
                {req.label}
              </span>
            </div>
          ))}
        </div>
        
        {/* زرار الإنشاء الأساسي */}
        <Button 
          type="submit"
          text="Create Account →" 
          className="mt-2" 
        />
      </form>

      {/* فاصل الدخول الاجتماعي */}
      <div className="flex items-center gap-4 my-8">
        <div className="flex-1 h-[1px] bg-white/5"></div>
        <span className="text-[9px] text-gray-600 uppercase font-black tracking-[0.2em]">Social Access</span>
        <div className="flex-1 h-[1px] bg-white/5"></div>
      </div>

      <div className="grid grid-cols-2 gap-4">
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
        Already have an account?{" "}
        <Link href="/login" className="text-primary hover:underline font-bold transition-all italic">
          Sign In
        </Link>
      </p>
    </div>
  );
}