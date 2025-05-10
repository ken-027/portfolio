import { usePortfolioContext } from "../layout/terminal.layout";
import ResponseWrapperUI from "../ui/response-wrapper.ui";

export default function CertificatesResponse() {
  const { certificates } = usePortfolioContext();

  return (
    <ResponseWrapperUI typeSpeed="fast">
      <ul className="space-y-2">
        {certificates.map(
          ({ name, dateCompleted, description, certificateLink }, index) => (
            <li key={index} className="space-y-1">
              <h2 className="text-yellow-300">{name}</h2>
              <small className="italic mb-1 block">
                {dateCompleted === "ongoing" ? "Ongoing" : "Done"}
              </small>
              <p dangerouslySetInnerHTML={{ __html: description }} />
              {certificateLink && dateCompleted !== "ongoing" ? (
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
