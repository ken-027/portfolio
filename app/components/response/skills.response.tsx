import SKILLS from "~/shared/skills";
import ResponseWrapperUI from "../ui/response-wrapper.ui";

export default function SkillsResponse() {
  return (
    <ResponseWrapperUI typeSpeed="fast" className="space-y-2">
      {SKILLS.map(({ items, name }, index) => (
        <div key={index}>
          <h2 className="text-yellow-300">{name}</h2>
          <div className="space-y-1">
            {items.map(({ name: skillName, proficiency }, _index) => (
              <p key={_index}>
                <span className="text-green-300"> {skillName}</span> -
                proficiency level - <strong className="text-blue-300">{proficiency}</strong>
              </p>
            ))}
          </div>
        </div>
      ))}
    </ResponseWrapperUI>
  );
}
