import type { Experience } from "~/shared/experiences";
import { getDateFormat, getTotalByFormat } from "~/utils/date.utils";

type ExperienceContentResponseProps = Omit<
  Experience,
  "location" | "companyLogo"
>;

export default function ExperienceContentResponse({
  company,
  title,
  startDate,
  endDate,
  projects,
  descriptions,
}: ExperienceContentResponseProps) {
  return (
    <div className="space-y-1">
      <div className="space-y-1">
        <h3 className="text-yellow-300">{company}</h3>
        <p className="text-green-300">{title}</p>
        <small className="italic">
          {getDateFormat(startDate)} - {getDateFormat(endDate)}
          <b className="ml-1">{`(${getTotalByFormat(startDate, endDate)})`}</b>
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
      <div className="space-y-1">
        <p>Projects I worked on</p>
        {projects?.map(({ title, technologies, description }, _index) => (
          <div key={_index}>
            <h3 className="text-blue-300">{title}</h3>
            <p>{description}</p>
            <p className="mt-1">Technologies Used</p>
            <ul className="flex flex-wrap gap-1">
              {technologies.map(({ name }, _index_) => (
                <li key={_index_}>
                  <small>{name}</small>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
