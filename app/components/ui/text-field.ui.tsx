import { type HTMLInputTypeAttribute } from "react";

interface TextFieldUIProps {
  label: string;
  placeholder?: string;
  id?: string;
  type?: HTMLInputTypeAttribute;
}

export default function TextFieldUI({
  label,
  placeholder,
  id,
  type,
}: TextFieldUIProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="dark:text-light/90 transition-all lg:text-lg">
        {label}
      </label>
      <input
        id={id}
        className="border-1 border-border lg:text-lg dark:border-border-dark dark:text-light/90 rounded-sm p-1 px-2 w-full outline-none focus:border-secondary transition-all placeholder:italic placeholder:text-sm placeholder:lg:text-base"
        type={type || "text"}
        placeholder={placeholder || label}
      />
    </div>
  );
}
