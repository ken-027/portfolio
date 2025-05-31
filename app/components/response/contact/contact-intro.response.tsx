import ResponseWrapperUI from "../../ui/response-wrapper.ui";

export default function ContactIntroResponse() {
  return (
    <ResponseWrapperUI typeSpeed="fast">
      <h2 className="text-lg font-bold mb-2">You're in a contact session</h2>
      <p>
        Type <strong>help</strong> or <strong>-h</strong> to see available
        commands.
      </p>
    </ResponseWrapperUI>
  );
}
