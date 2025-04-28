import ResponseWrapperUI from "../ui/response-wrapper.ui";

export default function UnknownCommandResponse() {
  return (
    <ResponseWrapperUI className="mt-0!">
      <p>
        Unknown Command please type <strong>-h</strong> or <strong>help</strong>
      </p>
    </ResponseWrapperUI>
  );
}
