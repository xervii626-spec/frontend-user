"use client";

import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import { clearCredentials } from "@/store/features/auth/authSlice";
import { clearAuthSession } from "@/lib/auth-storage";
import { useLogoutMutation } from "@/store/api/authApi";

export function useLobbyLogout() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [logoutApi] = useLogoutMutation();

  return async function onLogout() {
    try {
      await logoutApi().unwrap();
    } catch {
      // ignore network errors; clear local session anyway
    }
    clearAuthSession();
    dispatch(clearCredentials());
    router.replace("/login");
  };
}
