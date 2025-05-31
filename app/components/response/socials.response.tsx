import CONTACTS from "~/shared/contacts";
import ResponseWrapperUI from "../ui/response-wrapper.ui";

export default function SocialsResponse() {
  return (
    <ResponseWrapperUI>
      <ul className="space-y-1">
        {CONTACTS.map(({ name, link }, index) => (
          <li key={index}>
            <a className="text-blue-300" href={link} target="_blank">
              {name}
            </a>
          </li>
        ))}
      </ul>
    </ResponseWrapperUI>
  );
}
