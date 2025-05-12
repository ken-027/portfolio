import { CHATBOT_API } from "~/config/env.config";

export const chatStream = async (message: string, history: string[]): Promise<any> => {
  const response = await fetch(`${CHATBOT_API}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message, history }),
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
