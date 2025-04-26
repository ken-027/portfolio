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
