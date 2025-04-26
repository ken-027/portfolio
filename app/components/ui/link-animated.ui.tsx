import { type AnchorHTMLAttributes } from "react";

interface LinkAnimatedUIProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  Icon?: React.ReactNode;
  name: string;
  tooltipClassName?: string;
}

export default function LinkAnimatedUI({
  Icon,
  href,
  name,
  className,
  tooltipClassName,
  ...props
}: LinkAnimatedUIProps) {
  return (
    <a
      href={href}
      className={`group relative w-fit dark:text-light/90 ${className || ""}`}
      {...props}
    >
      {Icon}
      <span
        className={`inset-0 cursor-pointer absolute border-1 c items-center border-border bg-dark dark:bg-light dark:text-dark text-light opacity-0 w-fit px-4 py-1 xl:px-5 xl:py-2 duration-300 rounded-md shadow-md h-fit flex gap-1 -translate-x-[200%] group-hover:-translate-[10%] group-hover:opacity-100 font-anton transition-all ${
          tooltipClassName || ""
        }`}
      >
        {/* @ts-ignore */}
        <span className="scale-75 xl:scale-100 xl:mr-2">{Icon}</span>
        {name}
      </span>
    </a>
  );
}
