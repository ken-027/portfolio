import ResponseWrapperUI from "../../../ui/response-wrapper.ui";

export default function NameSubHelpResponse() {
  return (
    <ResponseWrapperUI>
      <h2 className="mb-2 text-yellow-300">name must be</h2>
      <ul>
        <li>
          - minimum of <strong>3</strong> character string
        </li>
        <li>
          - maximum of <strong>30</strong> character string
        </li>
        <li>
          - second parameters must be quoted with <strong>double</strong> or{" "}
          <strong>single</strong> quotes
        </li>
      </ul>
      <p className="mt-3 text-blue-300">usage: name "[string]"</p>
      <p className="mt-3 text-blue-300">
        other usage: name "show" for display current state
      </p>
    </ResponseWrapperUI>
  );
}
