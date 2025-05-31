import ResponseWrapperUI from "~/components/ui/response-wrapper.ui";
import {
  useEmailResponseContext,
  type Email,
} from "./contact-terminal.response";
import { useEffect, useState } from "react";
import { sendEmail } from "~/api/email.api";

export default function SendEmailREsponse({
  email,
  subject,
  name,
  message,
}: Email) {
  const [sending, setSending] = useState(true);
  const [dots, setDots] = useState(".");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [requestCount, setRequestCount] = useState(1);
  const { setEmailSuccess } = useEmailResponseContext();

  if (email?.trim() === "" || email === undefined)
    return (
      <div className="space-y-1">
        <p className="text-red-300">please set an email</p>
        <span className="text-blue-300">usage: email ["your email here"]</span>
      </div>
    );

  if (subject?.trim() === "" || subject === undefined)
    return (
      <div className="space-y-1">
        <p className="text-red-300">please set an subject</p>
        <span className="text-blue-300">
          usage: subject ["your subject here"]
        </span>
      </div>
    );

  if (name?.trim() === "" || name === undefined)
    return (
      <div className="space-y-1">
        <p className="text-red-300">please set an name</p>
        <span className="text-blue-300">usage: name ["your name here"]</span>
      </div>
    );

  if (message?.trim() === "" || message === undefined)
    return (
      <div className="space-y-1">
        <p className="text-red-300">please set an message</p>
        <span className="text-blue-300">
          usage: message ["your message here"]
        </span>
      </div>
    );

  useEffect(() => {
    if (requestCount > 1) return;

    const sending = async () => {
      try {
        setRequestCount((prevState) => prevState + 1);
        const { text } = await sendEmail({
          email,
          subject,
          name,
          message,
        });

        if (text !== "OK") {
          setError("Something went wrong!");
        }

        if (text === "OK") setEmailSuccess(true);
        setResponse(text);
      } catch (err) {
        setError("Something went wrong!");
      } finally {
        setSending(false);
      }
    };

    const loadingDots = () => {
      setInterval(() => {
        setDots((prevState) => prevState + ".");
      }, 300);
    };

    loadingDots();
    sending();

    return () => {
      loadingDots();
    };
  }, []);

  return (
    <>
      {sending ? (
        <ResponseWrapperUI className="max-w-full">{dots}</ResponseWrapperUI>
      ) : (
        <ResponseWrapperUI>
          <p className={`${error ? "text-red-300" : "text-green-300"}`}>
            {response}
          </p>
        </ResponseWrapperUI>
      )}
    </>
  );
}
