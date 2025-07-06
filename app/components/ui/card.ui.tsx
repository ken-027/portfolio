import { useEffect, useState, type RefObject } from "react";
import useScreenSize from "~/hooks/useScreenSize";

type CardUIProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  title: string;
  description: string | string[];
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
  const [mobileHover, setMobileHover] = useState(false);
  const { responseSize, width } = useScreenSize();

  const toggleTooltip = () => {
    if (responseSize.lg) return;

    setMobileHover((prevState) => !prevState);
  };

  const offTooltip = () => {
    setMobileHover(false);
  };

  useEffect(() => {
    setMobileHover(false);
  }, [width]);

  return (
    <div
      onTouchStart={toggleTooltip}
      onTouchEnd={offTooltip}
      className={`overflow-hidden transition-shadow-b-colors dark:hover:shadow-light/30 dark:hover:border-border duration-500 hover:shadow-dark/50 hover:border-dark hover:shadow-2xl items-center flex flex-col border-[1px] text-center border-border dark:border-border-dark rounded-md w-full ${
        className || ""
      }
        ${
          mobileHover
            ? "dark:shadow-light/30 dark:border-border shadow-dark/50 border-dark shadow-2xl"
            : ""
        }
        `}
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
        {Array.isArray(description) ? (
          <ul className="text-left space-y-1 lg:space-y-2 px-2 lg:px-0">
            {description.map((item, index) => (
              <Description key={index} item={item} />
            ))}
          </ul>
        ) : (
          <p className="text-base lg:text-lg font-open-sauce dark:text-light/90">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

const Description = ({ item }: { item: string }) => {
  const { width } = useScreenSize();
  const [isHover, setIsHover] = useState<boolean>(false);

  const onHover = () => setIsHover(true);

  const offHover = () => setIsHover(false);

  useEffect(() => {
    offHover();
  }, [width]);

  return (
    <li
      onMouseLeave={offHover}
      onMouseEnter={onHover}
      onTouchStart={onHover}
      onTouchEnd={offHover}
      className="text-dark dark:text-white/90"
    >
      <span className="font-anton text-xl">{!isHover ? "⚬" : "●"}</span> {item}
    </li>
  );
};
