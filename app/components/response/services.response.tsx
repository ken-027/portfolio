import ResponseWrapperUI from "../ui/response-wrapper.ui";
import { usePortfolioContext } from "../layout/terminal.layout";

export default function ServicesResponse() {
  const { services } = usePortfolioContext();

  return (
    <ResponseWrapperUI className="mt-2" typeSpeed="fast">
      <ul className="space-y-2">
        {services.map(({ description, title }, index) => (
          <li key={index}>
            <span className="text-green-300">{title}</span> - {description}
          </li>
        ))}
      </ul>
    </ResponseWrapperUI>
  );
}
