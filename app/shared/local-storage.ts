const isClient = typeof window !== "undefined";

export const getDarkMode = () =>
  isClient ? localStorage.getItem("_darkMode") === "true" : false;

export const setDarkMode = (enabled: boolean) => {
  if (isClient) localStorage.setItem("_darkMode", `${enabled}`);

  window.dispatchEvent(
    new CustomEvent("local-storage-updated", {
      detail: { key: "_darkMode", value: enabled },
    })
  );
};

type Styled = "gui" | "terminal";

export const getStyledType = (): Styled | undefined => {
  if (!isClient) return;

  return localStorage.getItem("_styled") === null
    ? "gui"
    : (localStorage.getItem("_styled") as Styled);
};

export const switchStyle = (styled: "gui" | "terminal") => {
  if (isClient) localStorage.setItem("_styled", styled);
};
