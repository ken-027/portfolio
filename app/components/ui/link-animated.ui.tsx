import { useState, type AnchorHTMLAttributes } from "react";

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
  const [hover, setHover] = useState(false);

  return (
    <a
      href={href}
      className={`group relative cursor-pointer w-fit dark:text-light/90 ${
        className || ""
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...props}
    >
      {/* @ts-ignore */}
      <Icon className="group-hover:text-black dark:group-hover:text-light scale-125 ease-in transition group-hover:scale-150 duration-300" />
      <span
        className={`inset-0 cursor-pointer lg:text-xl absolute transition items-center duration-300 ease-in dark:text-light/90 opacity-0 text-dark w-[130px] py-1 xl:px-5 xl:py-2 h-fit flex invisible group-hover:visible gap-1 group-hover:-translate-y-[15%] group-hover:opacity-100 -translate-y-[5%] lg:translate-x-[40px]  xl:translate-x-[20px] font-anton ${
          tooltipClassName || ""
        }`}
      >
        {name}
      </span>
    </a>
  );
}
