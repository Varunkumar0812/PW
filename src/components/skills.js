import Databases from "./skills/databases";
import Languages from "./skills/programming-languages";
import Tools from "./skills/tools";
import Technologies from "./skills/technologies";
import Platforms from "./skills/platforms";

function Skills() {
  return (
    <div className="p-4 sm:p-10">
      <div className="text-4xl font-bold mb-5">Skills </div>
      <Languages />
      <Databases />
      <Tools />
      <Technologies />
      <Platforms />
    </div>
  );
}

export default Skills;
