import moment from "moment";
import { usePortfolioContext } from "../layout/terminal.layout";
import ResponseWrapperUI from "../ui/response-wrapper.ui";

export default function CertificatesResponse() {
  const { certificates } = usePortfolioContext();

  return (
    <ResponseWrapperUI typeSpeed="fast">
      <ul className="space-y-2">
        {certificates.map(
          (
            { name, dateCompleted, skills, certificateLink, provider },
            index
          ) => (
            <li key={index} className="space-y-1">
              <h2 className="text-yellow-300">{name}</h2>
              <small>{provider}</small>
              <small className="italic mb-1 block">{status}</small>
              <ul className="text-green-300 list-disc pl-5">
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
              {dateCompleted ? (
                <p>
                  Date Completed:{" "}
                  {moment(dateCompleted).format("MMMM DD, YYYY")}
                </p>
              ) : null}
              {certificateLink && status === "complete" ? (
                <a
                  target="_blank"
                  className="text-green-300"
                  href={certificateLink}
                >
                  Certificate link
                </a>
              ) : (
                <p className="text-red-300">Certificate Not Available Yet</p>
              )}
            </li>
          )
        )}
      </ul>
    </ResponseWrapperUI>
  );
}
