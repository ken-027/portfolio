import CONTACTS from "~/shared/contacts";
import ButtonUI from "./button.ui";
import TextFieldUI from "./text-field.ui";
import ShareIcon from "../icons/share.icon";
import { useEffect, useState, type FormEvent } from "react";
import { sendEmail } from "~/api/email.api";

interface FormContactUIProps {
  className?: string;
  header?: React.ReactNode;
  submitStatus: (
    status: "success" | "error" | "not-submitted",
    error?: string
  ) => void;
}

export default function FormContactUI({
  className,
  header,
  submitStatus,
}: FormContactUIProps) {
  const [submitting, setSubmitting] = useState(false);

  const validation = (form: HTMLFormElement) => {
    const name = form[0] as HTMLInputElement;
    const subject = form[1] as HTMLInputElement;
    const email = form[2] as HTMLInputElement;
    const message = form[3] as HTMLInputElement;
    let hasError = {
      name: false,
      email: false,
      subject: false,
      message: false,
    };

    const clearClass = (field: HTMLInputElement) => {
      field.classList.add("pass");
      field.classList.remove("error");
      // @ts-ignore
      hasError[`${field.id}`] = false;
    };

    const errorClass = (field: HTMLInputElement) => {
      field.classList.remove("pass");
      field.classList.add("error");
      // @ts-ignore
      hasError[`${field.id}`] = true;
    };

    for (const field of [name, subject, email, message]) {
      if (field.value.trim() === "") errorClass(field);
      else clearClass(field);
    }

    if (
      hasError.email ||
      hasError.message ||
      hasError.name ||
      hasError.subject
    ) {
      throw new Error("Form has error");
    }

    return {
      name: name.value.trim(),
      subject: subject.value.trim(),
      email: email.value.trim(),
      message: message.value.trim(),
    };
  };

  const clearValidations = (form: HTMLFormElement) => {
    const name = form[0] as HTMLInputElement;
    const subject = form[1] as HTMLInputElement;
    const email = form[2] as HTMLInputElement;
    const message = form[3] as HTMLInputElement;

    for (const field of [name, subject, email, message]) {
      field.classList.remove("pass");
    }
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const form = e.currentTarget;
      const { email, subject, name, message } = validation(form);

      setSubmitting(true);

      const { text } = await sendEmail({
        email,
        subject,
        name,
        message,
      });

      submitStatus(text !== "OK" ? "error" : "success", text);

      setTimeout(() => {
        submitStatus("not-submitted");
      }, 3000);

      if (text !== "OK") {
        throw new Error("Something went wrong!");
      }

      clearValidations(form);
      form.reset();
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    submitStatus("not-submitted");
  }, []);

  return (
    <>
      <div
        className={`border-1 bg-light dark:bg-dark border-border dark:border-border-dark rounded-lg p-4 font-open-sauce pb-5 contact-animate ${
          className || ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {header}
        <form className="space-y-2 lg:space-y-4 mb-4" onSubmit={onSubmit}>
          <TextFieldUI id="name" label="Name" />
          <TextFieldUI id="subject" label="Subject" />
          <TextFieldUI id="email" label="Email" type="email" />
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="dark:text-light/90 lg:text-lg">
              Message
            </label>
            <textarea
              placeholder="Type your message here..."
              className="border-1 border-border lg:placeholder:text-base dark:text-light/90 rounded-sm p-1 px-2 w-full outline-none focus:border-secondary placeholder:italic placeholder:text-sm dark:border-border-dark"
              rows={5}
            ></textarea>
          </div>
          <ButtonUI
            disabled={submitting}
            className={`w-full relative overflow-hidden ${
              submitting ? "text-light/40  pl-0" : ""
            }`}
            type="submit"
            text={submitting ? "Sending..." : "Send Message"}
            LeftIcon={
              <ShareIcon
                className={
                  submitting ? "icon-fly text-light scale-125 lg:scale-150" : ""
                }
              />
            }
          />
        </form>
        <div className="flex justify-center items-center">
          <hr className="text-border w-full dark:text-border-dark block" />
          <p className="px-5 dark:text-light/90">or</p>
          <hr className="text-border w-full dark:text-border-dark" />
        </div>
        <div className="flex justify-center items-center gap-6 lg:gap-8 mt-4">
          {CONTACTS.map(({ name, Icon, link }, index) => (
            <a
              target="_blank"
              key={index}
              className="contact-animate hover:scale-110 duration-500"
              href={link}
              title={name}
            >
              <Icon className="scale-125 lg:scale-150" />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
