import getExperience from "~/utils/experience-computation";
import ResponseWrapperUI from "../ui/response-wrapper.ui";

export default function IntroResponse() {
  const { months, years } = getExperience();

  return (
    <ResponseWrapperUI>
      <h2 className="text-2xl">👨‍💻</h2>
      <p>
        With {years > 1 && months > 3 ? "over" : null}
        <span className="mr-1">{years}</span>
        {years > 1 ? "years" : "year"} of experience in web development, I
        specialize in building and maintaining web applications. I’m committed
        to writing clean, efficient code, crafting intuitive user experiences,
        and delivering reliable, results-driven solutions.
      </p>
    </ResponseWrapperUI>
  );
}
