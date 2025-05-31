import ResponseWrapperUI from "../../../ui/response-wrapper.ui";

export default function EmailSubHelpResponse() {
  return (
    <ResponseWrapperUI>
      <h2 className="mb-2 text-yellow-300">email must be</h2>
      <ul>
        <li>- must be an email</li>
        <li>
          - second parameters must be quoted with <strong>double</strong> or{" "}
          <strong>single</strong> quotes
        </li>
      </ul>
      <p className="mt-3 text-blue-300">usage: email "[string]"</p>
      <p className="mt-3 text-blue-300">
        other usage: email "show" for display current state
      </p>
    </ResponseWrapperUI>
  );
}
