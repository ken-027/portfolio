import { useEffect } from "react";
import ResponseWrapperUI from "../ui/response-wrapper.ui";
import { PORTFOLIO_BASE_URL } from "~/config/env.config";

export default function ResumeResponse() {
  const downloadPDF = () => {
    const link = document.createElement("a");
    const fileName = "software-developer.pdf";

    link.href = `/resume/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    downloadPDF();
  }, []);

  return (
    <ResponseWrapperUI typeSpeed="fast">
      <a
        title="Get my resume"
        download
        href={`${PORTFOLIO_BASE_URL}/resume/software-developer.pdf`}
        className="mt-2 hidden"
      />
      <p>Thanks for downloading my resume</p>
    </ResponseWrapperUI>
  );
}
