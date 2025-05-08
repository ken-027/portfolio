const chatBotURL = import.meta.env.VITE_CHATBOT_API;

export const chatStream = async (message: string): Promise<any> => {
  const response = await fetch(`${chatBotURL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    let errMessage: string = response.statusText;

    if (response.status === 429) {
      errMessage = (await response.json()).message;
    }
    throw new Error(errMessage);
  }

  const result = response.body?.getReader();

  return result;
};
