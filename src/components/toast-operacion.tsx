"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { toast } from "sonner";

export function ToastOperacion() {
  const searchParams = useSearchParams();
  const success = searchParams.get("success");
  const message = searchParams.get("message");

  useEffect(() => {
    if (!success || !message) return;
    const timeout = setTimeout(() => {
      if (success === "true") {
        toast.success(message);
      } else {
        toast.error(message);
      }
    }, 0);
    return () => clearTimeout(timeout);
  }, [success, message]);

  return null;
}
