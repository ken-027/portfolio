import type { RefObject } from "react";

interface SectionUIProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  ref?: RefObject<any>;
}

export default function SectionUI({
  children,
  className,
  id,
  ref,
}: SectionUIProps) {
  return (
    <section
      ref={ref}
      id={id}
      className={`pt-20 pb-[10vh] lg:pb-52 lg:pt-6 space-y-10 dark:bg-dark transition-all ${
        className || null
      }`}
    >
      {children}
    </section>
  );
}
