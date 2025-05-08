const apiURL = import.meta.env.VITE_EMAIL_API;

export const visitor = async (): Promise<undefined> => {
  fetch(`${apiURL}/visitor`, {
    method: "POST",
  });
};
