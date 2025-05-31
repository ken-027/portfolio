import { useYearsExperienceContext } from "../layout/terminal.layout";
import ResponseWrapperUI from "../ui/response-wrapper.ui";

export default function InfoResponse() {
  const { months, years } = useYearsExperienceContext();

  return (
    <ResponseWrapperUI>
      <h2>
        <span className="text-2xl">👨‍💻</span>
        With {years > 1 && months > 3 ? "over" : null}
        <span className="mx-1">{years}</span>
        {years > 1 ? "years" : "year"} of experience in web development, I
        specialize in building and maintaining web applications. I’m committed
        to writing clean, efficient code, crafting intuitive user experiences,
        and delivering reliable, results-driven solutions.
      </h2>
    </ResponseWrapperUI>
  );
}
