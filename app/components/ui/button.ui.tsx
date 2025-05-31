import type { ButtonHTMLAttributes, HTMLInputTypeAttribute } from "react";

interface ButtonUIProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  RightIcon?: React.ReactNode;
  LeftIcon?: React.ReactNode;
}

export default function ButtonUI({
  text,
  onClick,
  disabled,
  className,
  RightIcon,
  LeftIcon,
  ...props
}: ButtonUIProps) {
  return (
    <button
      className={`bg-secondary cursor-pointer flex gap-2 justify-center text-light rounded-md outline-none lg:text-lg lg:px-11 lg:py-2.5 focus:border-1 focus:border-border px-10 py-2 ${
        className || ""
      }`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {LeftIcon || null}
      {text}
      {RightIcon || null}
    </button>
  );
}
