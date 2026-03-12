import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";

export default function ForgetPasswordPage() {
  return (
    <div className="w-full max-w-md bg-[#051c33]/50 backdrop-blur-xl border border-white/5 p-10 rounded-3xl shadow-2xl">
      <div className="flex flex-col items-center mb-8">
        {/* أيقونة القفل أو اللوجو */}
        <div className="w-12 h-12 bg-[#8B0000]/20 border border-[#8B0000]/50 rounded-full flex items-center justify-center mb-4">
          <Mail className="text-[#8B0000]" size={24} />
        </div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Forgot Password?</h1>
        <p className="text-gray-400 text-sm mt-2 text-center leading-relaxed">
          No worries! Enter your email and we'll send you a link to reset your password.
        </p>
      </div>

      <form className="space-y-6">
        <div>
          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">
            Email Address
          </label>
          <div className="relative mt-1">
            <input 
              type="email" 
              placeholder="mo@example.com" 
              className="w-full bg-[#021526] border border-white/5 rounded-xl py-3 px-4 focus:outline-none focus:border-[#8B0000]/50 text-sm transition-all text-white" 
            />
          </div>
        </div>
        
        <button className="w-full bg-[#8B0000] hover:bg-red-900 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-[#8B0000]/10 border border-white/5">
          Send Reset Link
        </button>
      </form>

      {/* العودة للوجين */}
      <div className="mt-8 pt-6 border-t border-white/5">
        <Link 
          href="/login" 
          className="flex items-center justify-center gap-2 text-gray-400 hover:text-white text-sm transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Login</span>
        </Link>
      </div>
    </div>
  );
}