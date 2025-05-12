const isDev = import.meta.env.MODE === "development";

export const EMAIL_API = isDev
  ? import.meta.env.VITE_EMAIL_API_DEV
  : import.meta.env.VITE_EMAIL_API;

export const CHATBOT_API = isDev
  ? import.meta.env.VITE_CHATBOT_API_DEV
  : import.meta.env.VITE_CHATBOT_API;

export const PORTFOLIO_API: string = isDev
  ? import.meta.env.VITE_PORTFOLIIO_API_DEV
  : import.meta.env.VITE_PORTFOLIIO_API;
