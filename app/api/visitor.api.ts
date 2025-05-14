import { VISITOR_API } from "~/config/env.config";

export const visitor = async (): Promise<undefined> => {
  fetch(`${VISITOR_API}/visitor`, {
    method: "POST",
  });
};
