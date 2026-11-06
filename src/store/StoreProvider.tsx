"use client";

import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "./store";
import { hydrateAuth } from "./features/auth/authSlice";
import { loadAuthSession } from "@/lib/auth-storage";

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  useEffect(() => {
    const saved = loadAuthSession();
    storeRef.current?.dispatch(
      hydrateAuth(
        saved
          ? {
              accessToken: saved.accessToken,
              player: saved.player,
              remember: saved.remember,
            }
          : { accessToken: null, player: null, remember: true },
      ),
    );
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
