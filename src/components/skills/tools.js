import {
  SiAnaconda,
  SiMui,
  SiEclipseide,
  SiPostman,
  SiTailwindcss,
  SiVisualstudiocode,
} from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";

function Tools() {
  const iconClassName =
    "w-5 h-5 md:w-10 md:h-10 mr-2 hover:-translate-y-1 transition ease-in-out duration-300 text-[#272727]";

  const tools = [
    {
      title: "VS Code",
      icon: <SiVisualstudiocode className={iconClassName} />,
    },
    {
      title: "Eclipse",
      icon: <SiEclipseide className={iconClassName} />,
    },
    {
      title: "Postman",
      icon: <SiPostman className={iconClassName} />,
    },
    {
      title: "Figma",
      icon: <IoLogoFigma className={iconClassName} />,
    },
    {
      title: "Bootstrap",
      icon: <FaBootstrap className={iconClassName} />,
    },
    {
      title: "Tailwind CSS",
      icon: <SiTailwindcss className={iconClassName} />,
    },
    {
      title: "Material UI",
      icon: <SiMui className={iconClassName} />,
    },
    {
      title: "Anaconda",
      icon: <SiAnaconda className={iconClassName} />,
    },
  ];

  const renderedItems = tools.map((item) => {
    return (
      <div className="flex flex-wrap items-center">
        <div className="md:px-3 md:py-3 flex flex-col items-center text-sm md:text-base">
          {item.icon}
          <div className="mt-2">{item.title}</div>
        </div>
      </div>
    );
  });

  return (
    <div className="my-8">
      <div className="text-2xl font-semibold my-2">Tools </div>
      <table className="w-full">
        <div className="flex flex-wrap w-full">{renderedItems}</div>
      </table>
    </div>
  );
}

export default Tools;
