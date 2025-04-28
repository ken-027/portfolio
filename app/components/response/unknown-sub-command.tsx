import ResponseWrapperUI from "../ui/response-wrapper.ui";

export default function UnknownSubCommandResponse({ command }: any) {
  return (
    <ResponseWrapperUI className="mt-0!">
      <p>
        Unknown sub command please type <strong>{command}</strong>
        <strong> -h</strong> or <strong>help</strong>
      </p>
    </ResponseWrapperUI>
  );
}
