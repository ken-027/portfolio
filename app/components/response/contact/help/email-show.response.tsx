import ResponseWrapperUI from "../../../ui/response-wrapper.ui";
import { useEmailContext } from "../contact-terminal.response";

export default function EmailShowResponse() {
  const { email } = useEmailContext();

  return (
    <ResponseWrapperUI>
      <h2 className="mb-2">
        email <span className="text-blue-300">{email || "not set"}</span>
      </h2>
    </ResponseWrapperUI>
  );
}
