import emailjs from "@emailjs/browser";

export default class EmailJS {
  #email: string;
  #subject: string = "";
  #message: string = "";
  #name: string = "";

  constructor(email: string) {
    this.#email = email;
  }

  setSubject(subject: string) {
    this.#subject = subject;
  }

  setMessage(message: string) {
    this.#message = message;
  }

  setName(name: string) {
    this.#name = name;
  }

  async send(): Promise<{
    status: number;
    text: string;
  }> {
    try {
      const serviceId = import.meta.env.VITE_EJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EJS_PUBLIC_KEY;

      if (!this.#name) throw new Error("Please include a name");
      if (!this.#subject) throw new Error("Please include a subject");
      if (!this.#message) throw new Error("Please include a message");

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          name: this.#name,
          email: this.#email,
          subject: this.#subject,
          message: this.#message,
        },
        {
          publicKey,
        }
      );
      return result;
    } catch (error) {
      console.error(error);
      const { status, text } = error as any;
      return { status, text };
    }
  }
}
