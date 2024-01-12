import { Progress } from "flowbite-react";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

function Languages() {
  const iconClassName =
    "w-5 h-5 md:w-10 md:h-10 mr-2 hover:-translate-y-1 transition ease-in-out duration-300 text-[#272727]";

  const languages = [
    {
      title: "Python",
      icon: <FaPython className={iconClassName} />,
      level: 90,
    },
    {
      title: "JavaScript",
      icon: <SiJavascript className={iconClassName} />,
      level: 90,
    },
    {
      title: "Java",
      icon: <FaJava className={iconClassName} />,
      level: 80,
    },
    {
      title: "HTML",
      icon: <FaHtml5 className={iconClassName} />,
      level: 90,
    },
    {
      title: "CSS",
      icon: <FaCss3Alt className={iconClassName} />,
      level: 90,
    },
  ];

  const renderedItems = languages.map((item) => {
    return (
      <div className="w-full md:w-80 flex items-center">
        <div className="w-16 p-1 md:px-3 md:py-3 flex flex-col items-center text-sm md:text-base">
          {item.icon}
          <div>{item.title}</div>
        </div>
        <div className="w-2/3 p-1 md:px-3 md:py-3">
          <Progress
            color="blue"
            progress={item.level}
            size="lg"
            labelProgress
          />
        </div>
      </div>
    );
  });

  return (
    <div className="my-8">
      <div className="text-2xl font-semibold my-2">Languages</div>
      <div className="w-full flex flex-wrap">{renderedItems}</div>
    </div>
  );
}

export default Languages;
