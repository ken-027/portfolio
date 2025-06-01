const isDev = import.meta.env.MODE === "development";

export const ACCESS_API = isDev
  ? import.meta.env.VITE_ACCESS_API_DEV
  : import.meta.env.VITE_ACCESS_API;

export const PORTFOLIO_API: string = isDev
  ? import.meta.env.VITE_PORTFOLIO_API_DEV
  : import.meta.env.VITE_PORTFOLIO_API;

export const PORTFOLIO_BASE_URL: string = PORTFOLIO_API.replace("/api/v1", "");
