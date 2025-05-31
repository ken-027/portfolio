"use client";

import { useState } from "react";
import useLocalStorageListener from "./useLocalStorageListener";
import { getDarkMode } from "~/shared/local-storage";

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useState(getDarkMode());

  useLocalStorageListener("_darkMode", (newValue) => {
    setDarkMode(newValue);
  });

  return darkMode;
}
