import { useState, type ReactNode } from "react";
import { renderToString } from "react-dom/server";
import { TypeAnimation } from "react-type-animation";
import tagRemover from "~/utils/tag-remover";

interface ResponseWrapperUIProps {
  children: ReactNode;
  className?: string;
  typeSpeed?: "fast";
}

export default function ResponseWrapperUI({
  children,
  className,
  typeSpeed,
}: ResponseWrapperUIProps) {
  const [finishedTyping, setFinishedTyping] = useState(false);

  const Children = () => <>{children}</>;

  const convertToText = tagRemover(renderToString(<Children />));

  return (
    <div className={`text-sm mt-2 ${className || ""}`}>
      {finishedTyping ? (
        children
      ) : (
        <TypeAnimation
          sequence={[convertToText, () => setFinishedTyping(true)]}
          wrapper="div"
          cursor={false}
          speed={typeSpeed === "fast" ? 99 : 90}
        />
      )}
    </div>
  );
}
