import { AGENTIC_API, PORTFOLIO_API } from "~/config/env.config";

export const chatStream = async (message: string): Promise<any> => {
  const response = await fetch(`${PORTFOLIO_API}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
    credentials: "include",
  });

  if (response.status >= 400) {
    let errMessage: string =
      response.statusText || response.status === 400
        ? "Bad Request"
        : "Something went wrong";

    if (response.status === 429) {
      errMessage = (await response.json()).message;
    }
    throw new Error(errMessage);
  }

  const result = response.body?.getReader();

  return result;
};

export const storeChat = async () => {
  await fetch(`${PORTFOLIO_API}/chat/store`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
};
