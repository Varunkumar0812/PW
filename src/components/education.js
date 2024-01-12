import EducationItem from "./education-item";
import EducationData from "../data/education-data.json";

function Education() {
  const renderedItems = EducationData.map((item) => {
    return <EducationItem data={item} />;
  });

  return (
    <div className="p-4 sm:p-10">
      <div className="text-4xl font-bold mb-5">Education</div>
      <ul className="flex flex-col">{renderedItems}</ul>
    </div>
  );
}

export default Education;
