const apiURL = import.meta.env.VITE_EMAIL_API;

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
  const response = await fetch(`${apiURL}/send-email`, {
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
  } else if (emailResponse?.text != "OK") {
    emailResponse = {
      text: "Something went wrong!",
      status: 500,
    };
  }

  return emailResponse;
};
