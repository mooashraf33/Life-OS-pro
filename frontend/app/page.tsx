import { AnimatedBackground } from "@/components/animated-background"
import { AuthForm } from "@/components/auth-form"

export default function AuthPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
      <AnimatedBackground />
      
      {/* Main Content */}
      <div className="relative z-10 w-full">
        <AuthForm />
      </div>
      
      {/* Footer */}
      <footer className="absolute bottom-4 left-0 right-0 text-center">
        <p className="text-xs text-muted-foreground/60">
          © 2026 LifeOS. All rights reserved.
        </p>
      </footer>
    </main>
  )
}
