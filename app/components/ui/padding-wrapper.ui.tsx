export default function PaddingWrapperUI({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <div
      className={`px-4 py-2 text-dark dark:text-dark-text  lg:py-10 md:px-10 lg:pl-20 ${
        containerClassName || ""
      }`}
    >
      <div
        className={`max-w-screen-xl mx-auto min-h-[85vh] ${className || ""}`}
      >
        {children}
      </div>
    </div>
  );
}
