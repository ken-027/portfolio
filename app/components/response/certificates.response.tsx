import CERTIFICATES from "~/shared/certificates";
import ResponseWrapperUI from "../ui/response-wrapper.ui";

export default function CertificatesResponse() {
  return (
    <ResponseWrapperUI typeSpeed="fast">
      <ul className="space-y-2">
        {CERTIFICATES.map(
          ({ name, dateCompleted, description, certificateLink }, index) => (
            <li key={index} className="space-y-1">
              <h2 className="text-yellow-300">{name}</h2>
              <small>{dateCompleted === "ongoing" ? "Ongoing" : "Done"}</small>
              <p dangerouslySetInnerHTML={{ __html: description }} />
              <a
                target="_blank"
                className="text-green-300"
                href={certificateLink}
              >
                Certificate link
              </a>
            </li>
          )
        )}
      </ul>
    </ResponseWrapperUI>
  );
}
