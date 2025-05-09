import { EMAIL_API } from "~/config/env.config";

export const visitor = async (): Promise<undefined> => {
  fetch(`${EMAIL_API}/visitor`, {
    method: "POST",
  });
};
