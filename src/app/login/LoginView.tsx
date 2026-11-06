"use client";

import { GuestOnly } from "@/components/auth/GuestOnly";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { LoginHero } from "@/components/auth/LoginHero";
import { LoginForm } from "@/components/auth/LoginForm";

export function LoginView() {
  return (
    <GuestOnly>
      <div className="relative min-h-screen overflow-hidden text-[#f5efe0]">
        <div
          className="absolute inset-0 bg-cover bg-[center_40%] bg-no-repeat"
          style={{ backgroundImage: "url('/brand/login-bg-v2.jpg')" }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(105deg,rgba(3,18,12,0.72)_0%,rgba(4,28,20,0.45)_42%,rgba(3,16,12,0.68)_100%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_45%,rgba(212,175,55,0.14),transparent_50%)]"
          aria-hidden
        />

        <div className="relative z-10 flex min-h-screen flex-col">
          <SiteHeader />

          <main className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center gap-12 px-6 py-8 md:px-12 lg:flex-row lg:items-center lg:justify-between lg:gap-14 lg:py-4">
            <LoginHero />
            <div className="flex w-full shrink-0 justify-center lg:w-[460px] lg:justify-end">
              <LoginForm />
            </div>
          </main>

          <footer className="relative z-10 px-5 pb-5 pt-2 md:px-10">
            <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-3">
              <div className="flex w-full items-center gap-3 text-[#d4af37]/75">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#d4af37]/70 to-[#d4af37]/40" />
                <span className="text-[0.45rem]">◆</span>
                <span className="h-px w-16 bg-[#d4af37]/50 md:w-28" />
                <span className="text-[0.45rem]">◆</span>
                <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#d4af37]/70 to-[#d4af37]/40" />
              </div>
              <p className="text-center text-[0.68rem] tracking-wide text-[#b8c9be]/90">
                Play Responsibly. 18+ Only. | Shwe Dunn Online Casino is for
                entertainment purposes only.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </GuestOnly>
  );
}
