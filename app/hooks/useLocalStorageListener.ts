"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

export default function useLocalStorageListener(
  key: string,
  callback: (value: any) => void
) {
  useEffect(() => {
    const handleUpdate = (event: any) => {
      if (event.detail?.key === key) {
        callback(event.detail.value);
      }
    };

    window.addEventListener("local-storage-updated", handleUpdate);

    return () => {
      window.removeEventListener("local-storage-updated", handleUpdate);
    };
  }, [key, callback]);
}
