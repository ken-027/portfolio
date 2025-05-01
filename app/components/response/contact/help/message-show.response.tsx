import ResponseWrapperUI from "../../../ui/response-wrapper.ui";
import { useEmailContext } from "../contact-terminal.response";

export default function MessageShowResponse() {
  const { message } = useEmailContext();

  return (
    <ResponseWrapperUI>
      <h2 className="mb-2">
        message <span className="text-blue-300">{message || "not set"}</span>
      </h2>
    </ResponseWrapperUI>
  );
}
