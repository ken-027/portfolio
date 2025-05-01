import ResponseWrapperUI from "../../../ui/response-wrapper.ui";
import { useEmailContext } from "../contact-terminal.response";

export default function NameShowResponse() {
  const { name } = useEmailContext();

  return (
    <ResponseWrapperUI>
      <h2 className="mb-2">
        name <span className="text-blue-300">{name || "not set"}</span>
      </h2>
    </ResponseWrapperUI>
  );
}
