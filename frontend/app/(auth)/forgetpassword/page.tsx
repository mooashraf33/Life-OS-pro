"use client";

import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function ForgetPasswordPage() {
  return (
    <div className="w-full max-w-md bg-[#051c33]/50 backdrop-blur-xl border border-white/5 p-10 rounded-3xl shadow-2xl animate-in fade-in zoom-in duration-300">
      <div className="flex flex-col items-center mb-8">
        <div className="w-14 h-14 bg-[#8B0000]/10 border border-[#8B0000]/20 rounded-2xl flex items-center justify-center mb-4 shadow-inner">
          <Mail className="text-[#8B0000]" size={28} strokeWidth={1.5} />
        </div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Forgot Password?</h1>
        <p className="text-gray-400 text-sm mt-2 text-center leading-relaxed font-medium">
          No worries! Enter your email and we&apos;ll send you a link to reset your password.
        </p>
      </div>

      <form className="space-y-6">
        <Input 
          label="Email Address" 
          type="email" 
          placeholder="mo@example.com" 
        />
        
        <Button text="Send Reset Link" />
      </form>

      <div className="mt-8 pt-6 border-t border-white/5">
        <Link 
          href="/login" 
          className="flex items-center justify-center gap-2 text-gray-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-all group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Login</span>
        </Link>
      </div>
    </div>
  );
}