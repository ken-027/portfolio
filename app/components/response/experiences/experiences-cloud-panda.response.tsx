import { usePortfolioContext } from "~/components/layout/terminal.layout";
import ResponseWrapperUI from "../../ui/response-wrapper.ui";
import ExperienceContentResponse from "./experience-content.response";

export default function ExperienceCloudPandaResponse() {
  const { experiences } = usePortfolioContext();

  const filteredCompany = experiences[2].company;

  return (
    <ResponseWrapperUI typeSpeed="fast">
      <div className="space-y-2">
        <div className="space-y-3">
          {experiences
            .filter(({ company }) => company === filteredCompany)
            .map(
              (
                { company, title, startDate, endDate, descriptions, projects },
                index
              ) => (
                <ExperienceContentResponse
                  company={company}
                  title={title}
                  startDate={startDate}
                  endDate={endDate}
                  descriptions={descriptions}
                  projects={projects}
                  key={index}
                />
              )
            )}
        </div>
      </div>
    </ResponseWrapperUI>
  );
}
