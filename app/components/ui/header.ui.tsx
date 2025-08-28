type HeaderUIProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  headerTitle: string;
  headerSubtitle: string;
};

export default function HeaderUI({
  headerTitle,
  headerSubtitle,
  className,
  ...props
}: HeaderUIProps) {
  return (
    <div
      className={`text-center mb-10 md:mb-24 pt-2 pb-1 z-10 bg-light dark:bg-dark ${
        className || ""
      }`}
      {...props}
    >
      <h2 className="text-2xl md:text-xl lg:text-3xl lg:mb-4 text-secondary font-anton">{headerTitle}</h2>
      <small className="font-open-sauce px-4 lg:px-0 dark:text-dark-text lg:text-base">
        {headerSubtitle}
      </small>
    </div>
  );
}
