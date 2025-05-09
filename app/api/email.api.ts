import { EMAIL_API } from "~/config/env.config";

interface EmailRequestBody {
  name: string;
  subject: string;
  email: string;
  message: string;
}

interface EmailResponseBody {
  status: number;
  text: string;
}

export const sendEmail = async ({
  name,
  email,
  subject,
  message,
}: EmailRequestBody): Promise<EmailResponseBody> => {
  const response = await fetch(`${EMAIL_API}/send-email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      subject,
      message,
    }),
  });

  let emailResponse = await response.json();

  if (Array.isArray(emailResponse)) {
    emailResponse = {
      text: `'${emailResponse[0].path[0]}' ${emailResponse[0].message}`,
      status: 400,
    };
  } else if (response.status === 429) {
    return {
      text: emailResponse.emailLimit,
      status: response.status,
    };
  } else if (emailResponse?.text != "OK") {
    emailResponse = {
      text: "Something went wrong!",
      status: 500,
    };
  }

  return emailResponse;
};
