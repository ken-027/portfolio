"use client";

import { useState } from "react";
import { getDarkMode, setDarkMode } from "~/shared/local-storage";
import LightIcon from "../icons/light.icon";
import DarkIcon from "../icons/dark.icon";

export default function ToggleDarkModeUI() {
  const [check, setCheck] = useState<boolean>(getDarkMode());

  const onToggle = (mode: "light" | "dark") => {
    setCheck(() => {
      const newState = mode === "dark";
      const storageValue = mode;

      document.documentElement.setAttribute("data-theme", storageValue);

      setDarkMode(newState);
      return newState;
    });
  };

  return (
    <div className="flex gap-1 items-center font-anton">
      {/* <label className="switch scale-75 transition-all">
        <input
          type="checkbox"
          checked={check}
          onChange={onToggle}
          className="transition-all"
        />
        <span className="slider round dark:before:bg-dark before:bg-light transition-all"></span>
      </label>
      Toggle Dark Mode */}
      <div className="flex items-center overflow-hidden rounded-md">
        <button
          title={"toggle light mode"}
          className={`transition-all cursor-pointer bg-dark text-light border-1 dark:border-light/90 rounded-l-md border-r-0 border-dark duration-500 flex gap-2 text-sm items-center outline-none font-open-sauce py-1 pl-2 pr-1 `}
          onClick={() => onToggle("light")}
        >
          <LightIcon
            isActive={!check}
            className={`transition-all duration-500 ${
              check ? "scale-[60%]" : "scale-100"
            }`}
          />
        </button>
        <button
          title={"toggle dark mode"}
          className={`l cursor-pointer bg-light/90 text-dark border-dark rounded-r-md border-1 border-l-0 dark:border-light/90 duration-500 flex gap-2 text-sm items-center outline-none font-open-sauce py-1 pr-2 pl-1`}
          onClick={() => onToggle("dark")}
        >
          <DarkIcon
            isActive={check}
            className={`transition-all duration-500 ${
              !check ? "scale-[60%]" : "scale-100"
            }`}
          />
        </button>
      </div>
    </div>
  );
}
