"use client";

import { useEffect, useState } from "react";

export default function useNavHeight() {
  const [navHeight, setNavHeight] = useState<number>();

  useEffect(() => {
    const navElement = document.getElementById("nav");

    if (!navElement) return;

    const height = navElement?.offsetHeight;

    setNavHeight(height);
  }, []);

  return navHeight;
}
