import { usePortfolioContext } from "~/components/layout/terminal.layout";
import ResponseWrapperUI from "../../ui/response-wrapper.ui";
import { getDateFormat } from "~/utils/date.utils";

export default function ExperiencesResponse() {
  const { experiences } = usePortfolioContext();

  return (
    <ResponseWrapperUI typeSpeed="fast">
      <div className="space-y-2">
        <div className="space-y-3">
          {experiences.map(
            ({ company, title, startDate, endDate, descriptions }, index) => (
              <div key={index}>
                <div className="space-y-1">
                  <h3 className="text-yellow-300">{company}</h3>
                  <p className="text-green-300">{title}</p>
                  <small>
                    {getDateFormat(startDate)} - {getDateFormat(endDate)}
                  </small>
                </div>
                <ul className="mt-2">
                  {descriptions.map((description, _index) => (
                    <li key={_index}>
                      <p>
                        <strong>- </strong>
                        {description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </ResponseWrapperUI>
  );
}
