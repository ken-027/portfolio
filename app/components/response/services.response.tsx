import SERVICES from "~/shared/services";
import ResponseWrapperUI from "../ui/response-wrapper.ui";

export default function ServicesResponse() {
  return (
    <ResponseWrapperUI className="mt-2" typeSpeed="fast">
      <ul className="space-y-2">
        {SERVICES.map(({ description, title }, index) => (
          <li key={index}>
            <span className="text-green-300">{title}</span> - {description}
          </li>
        ))}
      </ul>
    </ResponseWrapperUI>
  );
}
