import ResponseWrapperUI from "../../ui/response-wrapper.ui";
import EXPERIENCES from "~/shared/experiences";
import ExperienceContentResponse from "./expereince-content.response";

export default function ExperienceCloudPandaResponse() {
  const filteredCompany = EXPERIENCES[2].company;

  return (
    <ResponseWrapperUI typeSpeed="fast">
      <div className="space-y-2">
        <div className="space-y-3">
          {EXPERIENCES.filter(({ company }) => company === filteredCompany).map(
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
