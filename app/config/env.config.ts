const isDev = import.meta.env.MODE === "development";

export const VISITOR_API = isDev
  ? import.meta.env.VITE_VISITOR_API_DEV
  : import.meta.env.VITE_VISITOR_API;

export const PORTFOLIO_API: string = isDev
  ? import.meta.env.VITE_PORTFOLIO_API_DEV
  : import.meta.env.VITE_PORTFOLIO_API;
