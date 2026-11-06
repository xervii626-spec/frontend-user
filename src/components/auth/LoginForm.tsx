"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useLoginMutation } from "@/store/api/authApi";
import { useAppDispatch } from "@/store/hooks";
import { setCredentials } from "@/store/features/auth/authSlice";
import { saveAuthSession } from "@/lib/auth-storage";

function parseApiError(err: unknown): string {
  if (!err || typeof err !== "object") return "Login failed. Please try again.";
  const e = err as {
    status?: number | string;
    data?: { message?: string | string[] };
    error?: string;
  };
  const msg = e.data?.message;
  if (Array.isArray(msg)) return msg.join(", ");
  if (typeof msg === "string") return msg;
  if (e.status === "FETCH_ERROR") {
    return "Cannot reach API. Is the backend running on port 5000?";
  }
  return "Invalid username or password";
}

export function LoginForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const canSubmit = useMemo(
    () => username.trim().length >= 3 && password.length >= 6 && !isLoading,
    [username, password, isLoading],
  );

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    if (!canSubmit) return;

    try {
      const res = await login({
        username: username.trim(),
        password,
      }).unwrap();

      const player = {
        id: res.player.id,
        username: res.player.username,
        nickname: res.player.nickname,
        currency: res.player.currency,
        country: res.player.country ?? null,
        isBlocked: res.player.isBlocked,
      };

      dispatch(
        setCredentials({
          accessToken: res.accessToken,
          player,
          remember,
        }),
      );
      saveAuthSession({
        accessToken: res.accessToken,
        player,
        remember,
      });

      router.replace("/games");
    } catch (err) {
      setError(parseApiError(err));
    }
  }

  return (
    <div className="sd-login-card sd-animate-in-delay relative w-full max-w-[460px] rounded-[16px] border border-[#d4af37]/7 bg-[linear-gradient(180deg,rgba(12,55,42,0.84)_0%,rgba(5,24,18,0.92)_100%)] px-6 py-6 backdrop-blur-[10px] md:px-7 md:py-7">
      <div className="mb-5 text-center">
        <div className="mx-auto mb-2 text-[#e8c547] drop-shadow-[0_0_12px_rgba(232,197,71,0.45)]">
          <CrownIcon />
        </div>
        <h2 className="font-[family-name:var(--font-cinzel)] text-[1.5rem] font-semibold tracking-[0.16em] text-[#e8c547] md:text-[1.6rem]">
          WELCOME BACK
        </h2>
        <p className="mt-1.5 text-[0.85rem] text-[#b7cfc3]">
          Sign in to continue your winning journey.
        </p>
      </div>

      {error ? (
        <div
          role="alert"
          className="mb-4 rounded-md border border-red-500/50 bg-red-950/50 px-3 py-2.5 text-center text-sm text-red-200"
        >
          {error}
        </div>
      ) : null}

      <form className="space-y-3.5" onSubmit={onSubmit}>
        <label className="block">
          <span className="mb-1.5 block text-[0.65rem] font-semibold tracking-[0.18em] text-[#d4af37]">
            USERNAME
          </span>
          <div className="relative">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#d4af37]">
              <UserIcon />
            </span>
            <input
              type="text"
              name="username"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              disabled={isLoading}
              className="sd-input w-full rounded-md border border-[#d4af37]/55 bg-[#061910]/75 py-[0.7rem] pl-10 pr-3 text-sm text-[#f5efe0] placeholder:text-[#9aaf9f]/70 disabled:opacity-60"
            />
          </div>
        </label>

        <label className="block">
          <span className="mb-1.5 block text-[0.65rem] font-semibold tracking-[0.18em] text-[#d4af37]">
            PASSWORD
          </span>
          <div className="relative">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#d4af37]">
              <LockIcon />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              disabled={isLoading}
              className="sd-input w-full rounded-md border border-[#d4af37]/55 bg-[#061910]/75 py-[0.7rem] pl-10 pr-10 text-sm text-[#f5efe0] placeholder:text-[#9aaf9f]/70 disabled:opacity-60"
            />
            <button
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#d4af37]"
            >
              <EyeIcon open={showPassword} />
            </button>
          </div>
        </label>

        <div className="flex items-center justify-between gap-3 pt-0.5 text-[0.8rem]">
          <label className="inline-flex cursor-pointer items-center gap-2 text-[#c5d5cc]">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="size-3.5 rounded-sm accent-[#d4af37]"
            />
            Remember me
          </label>
          <button type="button" className="font-medium text-[#e8c547] hover:underline">
            Forgot Password?
          </button>
        </div>

        <button
          type="submit"
          disabled={!canSubmit}
          className="sd-gold-btn mt-0.5 flex w-full items-center justify-center gap-2 rounded-md py-3 text-[0.82rem] font-extrabold tracking-[0.18em] text-[#1c1406] disabled:cursor-not-allowed disabled:opacity-55"
        >
          {isLoading ? "SIGNING IN…" : "SIGN IN"}
          {!isLoading ? (
            <span aria-hidden className="text-base font-bold">
              →
            </span>
          ) : null}
        </button>
      </form>

      <div className="sd-divider-ornament my-5 text-[0.6rem] tracking-[0.2em] text-[#d4af37]/90">
        OR CONTINUE WITH
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-md border border-[#d4af37]/35 bg-[#071a12]/65 px-2 py-2.5 text-[0.78rem] font-semibold text-[#f5efe0] transition hover:border-[#d4af37]/75"
        >
          <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-[#00a651] text-[0.55rem] font-black leading-none text-white">
            KBZ
          </span>
          KBZPay
        </button>
        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-md border border-[#d4af37]/35 bg-[#071a12]/65 px-2 py-2.5 text-[0.78rem] font-semibold text-[#f5efe0] transition hover:border-[#d4af37]/75"
        >
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-[0.65rem] font-black text-[#1e88e5]">
            W
          </span>
          Wave Money
        </button>
      </div>

      <p className="mt-5 text-center text-[0.85rem] text-[#c5d5cc]">
        New to Shwe Dunn?{" "}
        <Link href="/register" className="font-semibold text-[#e8c547] hover:underline">
          Register Now →
        </Link>
      </p>
    </div>
  );
}

function CrownIcon() {
  return (
    <svg
      width="38"
      height="32"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className="mx-auto"
    >
      <path d="M3 18.2h18V20H3v-1.8Zm1-3.4 2.7-7.2L9.8 12l2.2-7 2.2 7 3.1-4.4 2.7 7.2H4Z" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 19c1.5-3.5 4-5 7-5s5.5 1.5 7 5" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

function EyeIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Z" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Z" />
      <path d="M4 4l16 16" />
    </svg>
  );
}
