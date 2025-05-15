import { ACCESS_API } from "~/config/env.config";

export const access = async (): Promise<undefined> => {
  fetch(`${ACCESS_API}/access`, {
    method: "POST",
  });
};
