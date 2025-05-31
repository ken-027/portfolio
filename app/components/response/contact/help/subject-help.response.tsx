import ResponseWrapperUI from "../../../ui/response-wrapper.ui";

export default function SubjectSubHelpResponse() {
  return (
    <ResponseWrapperUI>
      <h2 className="mb-2 text-yellow-300">subject must be</h2>
      <ul>
        <li>
          - minimum of <strong>5</strong> character string
        </li>
        <li>
          - minimum of <strong>100</strong> character string
        </li>
        <li>
          - second parameters must be quoted with <strong>double</strong> or{" "}
          <strong>single</strong> quotes
        </li>
      </ul>
      <p className="mt-3 text-blue-300">usage: subject "[string]"</p>
      <p className="mt-3 text-blue-300">
        other usage: subject "show" for display current state
      </p>
    </ResponseWrapperUI>
  );
}
