import PROJECTS, { CATEGORIES } from "~/shared/projects";
import ResponseWrapperUI from "../../ui/response-wrapper.ui";

export default function ProjectsResponse() {
  return (
    <ResponseWrapperUI typeSpeed="fast">
      <div className="space-y-2">
        {CATEGORIES.map((category, index) => (
          <div key={index}>
            <h2 className="capitalize text-yellow-300 mb-1">
              {category} development
            </h2>
            <div className="space-y-1">
              {PROJECTS.filter(
                ({ category: _category, thumbnailLink }) =>
                  _category === category && thumbnailLink !== undefined
              ).map(
                (
                  { title, description, liveDemo, githubRepo, screenshot },
                  _index
                ) => (
                  <div key={_index}>
                    <h3 className="text-green-300">{title}</h3>
                    <p>{description}</p>
                    {liveDemo ? (
                      <a
                        className="text-blue-300 block w-fit"
                        href={liveDemo}
                        target="_blank"
                      >
                        demo
                      </a>
                    ) : null}
                    {screenshot ? (
                      <a
                        className="text-blue-300 block w-fit"
                        href={screenshot}
                        target="_blank"
                      >
                        screenshot
                      </a>
                    ) : null}
                    {githubRepo ? (
                      <a
                        className="text-blue-300 block w-fit"
                        href={githubRepo}
                        target="_blank"
                      >
                        github
                      </a>
                    ) : null}
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </ResponseWrapperUI>
  );
}
