import type { RefObject } from "react";

type CardUIProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  title: string;
  description: string;
  image: string;
  ref?: RefObject<any>;
};

export default function CardUI({
  title,
  description,
  className,
  image,
  ...props
}: CardUIProps) {
  return (
    <div
      className={`overflow-hidden transition-shadow-b-colors dark:hover:shadow-light/30 dark:hover:border-border duration-500 hover:shadow-dark/50 hover:border-dark hover:shadow-2xl items-center flex flex-col border-[1px] text-center border-border dark:border-border-dark rounded-md w-full ${
        className || ""
      }`}
      {...props}
    >
      <div className="bg-light dark:bg-[#42566b] w-full flex item-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-[150px] lg:h-[200px]"
        />
      </div>
      <div className="space-y-2 lg:space-y-4 px-2 py-4 flex-3/4 dark:bg-dark lg:px-6 lg:text-left">
        <h3 className="text-lg font-anton dark:text-light/90 lg:text-2xl">
          {title}
        </h3>
        <p className="text-base lg:text-lg font-open-sauce dark:text-light/90">
          {description}
        </p>
      </div>
    </div>
  );
}
