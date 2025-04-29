import getExperience from "~/utils/experience-computation";
import ResponseWrapperUI from "../ui/response-wrapper.ui";

export default function IntroResponse() {
  return (
    <ResponseWrapperUI typeSpeed="fast">
      <h2 className="text-lg font-bold mb-2">
        🐧 Welcome to Kenneth Andales Portfolio Terminal
      </h2>
      <p>
        Type <strong>help</strong> or <strong>-h</strong> to see available
        commands.
      </p>
    </ResponseWrapperUI>
  );
}
