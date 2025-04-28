import TerminalStyledIcon from "../icons/terminal-styled.icon";

interface TerminalCardUIProps {
  children: React.ReactNode;
}

export default function TerminalCardUI({ children }: TerminalCardUIProps) {
  const promptFocus = () => {
    const prompt = document.querySelectorAll("input.prompt");

    // @ts-ignore
    prompt[prompt.length - 1]?.focus();
  };

  return (
    <div
      className="min-h-[80vh] border-1 border-border-dark w-full rounded-md overflow-hidden  max-w-screen-2xl mx-auto"
      onClick={promptFocus}
    >
      <div className="bg-light/90 h-[20px] lg:h-[25px] flex items-center justify-between px-2 gap-2">
        <div className="flex items-center px-2 gap-2">
          <button
            onClick={() => alert("not allowed")}
            className="rounded-full h-[10px] bg-red-400 w-[10px] border-[1px] border-dark/30 outline-none"
          />
          <button
            onClick={() => alert("not allowed")}
            className="rounded-full h-[10px] bg-yellow-400 w-[10px] border-[1px] border-dark/30 outline-none"
          />
          <button
            onClick={() => alert("not allowed")}
            className="rounded-full h-[10px] bg-green-400 w-[10px] border-[1px] border-dark/30 outline-none"
          />
        </div>
        <p className="text-dark hidden lg:block">/home/guest</p>
        <TerminalStyledIcon className="text-dark" />
      </div>
      <div className="p-1 max-h-[80vh] w-full overflow-y-auto">{children}</div>
    </div>
  );
}
