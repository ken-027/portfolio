import { type AnchorHTMLAttributes } from "react";

interface LinkAnimatedUIProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  Icon?: React.FC<any>;
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
      className={`group relative cursor-pointer w-fit dark:text-light/90 ${
        className || ""
      }`}
      {...props}
    >
      {/* @ts-ignore */}
      <Icon className="group-hover:text-black dark:group-hover:text-light scale-125 ease-in transition group-hover:scale-150 duration-300" />
      <span
        className={`inset-0 cursor-pointer lg:text-xl absolute transition items-center duration-300 ease-in dark:text-light/90 opacity-0 text-dark w-fit py-1 xl:px-5 xl:py-2 h-fit flex gap-1 group-hover:-translate-y-[15%] group-hover:opacity-100 -translate-y-[5%] translate-x-[20px] font-anton ${
          tooltipClassName || ""
        }`}
      >
        {/* @ts-ignore */}
        {/* <span className="scale-75 xl:scale-100 xl:mr-2">{Icon}</span> */}
        {name}
      </span>
      {/* <span
        className={`inset-0 cursor-pointer absolute border-1 c items-center border-border bg-dark dark:bg-light dark:text-dark text-light opacity-0 w-fit px-4 py-1 xl:px-5 xl:py-2 duration-300 rounded-md shadow-md h-fit flex gap-1 -translate-x-[200%] group-hover:-translate-[10%] group-hover:opacity-100 font-anton transition-transform ${
          tooltipClassName || ""
        }`}
      >
        <span className="scale-75 xl:scale-100 xl:mr-2">{Icon}</span>
        {name}
      </span> */}
    </a>
  );
}
