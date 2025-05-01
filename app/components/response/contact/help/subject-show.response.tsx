import ResponseWrapperUI from "../../../ui/response-wrapper.ui";
import { useEmailContext } from "../contact-terminal.response";

export default function SubjectShowResponse() {
  const { subject } = useEmailContext();

  return (
    <ResponseWrapperUI>
      <h2 className="mb-2">
        subject <span className="text-blue-300">{subject || "not set"}</span>
      </h2>
    </ResponseWrapperUI>
  );
}
