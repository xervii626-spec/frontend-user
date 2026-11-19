"use client";

import { useEffect, useState } from "react";
import { loadShowUsd, saveShowUsd } from "@/lib/show-usd";

/** Default MMK-only; toggle enables optional USD display. */
export function useShowUsd() {
  const [showUsd, setShowUsd] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setShowUsd(loadShowUsd());
    setReady(true);
  }, []);

  function toggle() {
    setShowUsd((prev) => {
      const next = !prev;
      saveShowUsd(next);
      return next;
    });
  }

  return { showUsd, toggle, ready };
}
