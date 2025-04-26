"use client";

import HeaderUI from "../ui/header.ui";
import PaddingWrapperUI from "../ui/padding-wrapper.ui";
import SectionUI from "../ui/section.ui";
import useAnimateElement from "~/hooks/useAnimateElement";
import { useRef, useState } from "react";
import FormContactUI from "../ui/form-contact.ui";
import ToastUI from "../ui/toast.ui";

export default function ContactLayout() {
  const contactRef = useRef(null);
  const [error, setError] = useState<string>("");
  const [status, setStatus] = useState("not-submitted");

  useAnimateElement("contact", contactRef);

  return (
    <SectionUI
      ref={contactRef}
      id="contact"
      className="dark:bg-dark transition-all lg:hidden pb-10!"
    >
      <ToastUI
        message={
          status === "success"
            ? "🤗 Thanks for getting in touch — I’ll respond shortly"
            : error
        }
        status={status === "success" ? "success" : "error"}
        show={status !== "not-submitted"}
      />
      <HeaderUI
        headerTitle="Contact"
        headerSubtitle="Get in Touch"
        className="mb-18! contact-animate"
      />
      <PaddingWrapperUI className="text-dark min-h-fit!">
        <FormContactUI
          className="md:max-w-[500px] md:mx-auto"
          submitStatus={(status, error) => {
            setStatus(status);
            setError(error || "");
          }}
        />
      </PaddingWrapperUI>
    </SectionUI>
  );
}
