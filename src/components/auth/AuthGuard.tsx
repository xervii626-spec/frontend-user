"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { clearCredentials } from "@/store/features/auth/authSlice";
import { clearAuthSession } from "@/lib/auth-storage";
import { useMeQuery } from "@/store/api/authApi";

/** Protect player routes — token + /me (blocked check) */
export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { accessToken, hydrated } = useAppSelector((s) => s.auth);

  const { isError, isFetching, data } = useMeQuery(undefined, {
    skip: !hydrated || !accessToken,
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    if (!hydrated) return;
    if (!accessToken) {
      router.replace("/login");
    }
  }, [hydrated, accessToken, router]);

  useEffect(() => {
    if (!hydrated || !accessToken || isFetching) return;
    if (isError || data?.player?.isBlocked) {
      dispatch(clearCredentials());
      clearAuthSession();
      router.replace("/login");
    }
  }, [hydrated, accessToken, isFetching, isError, data, dispatch, router]);

  if (!hydrated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#04140f] text-[#d4af37]">
        Loading…
      </div>
    );
  }

  if (!accessToken) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#04140f] text-[#d4af37]">
        Redirecting to login…
      </div>
    );
  }

  if (isFetching && !data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#04140f] text-[#d4af37]">
        Checking session…
      </div>
    );
  }

  return <>{children}</>;
}
