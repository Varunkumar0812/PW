import {
  SiExpress,
  SiGit,
  SiNodedotjs,
  SiReact,
  SiScikitlearn,
  SiTensorflow,
  SiAdonisjs,
  SiVuedotjs,
  SiTypescript
} from "react-icons/si";

function Technologies() {
  const iconClassName =
    "w-5 h-5 md:w-10 md:h-10 mr-2 hover:-translate-y-1 transition ease-in-out duration-300 text-[#272727]";

  const technologies = [
    {
      title: "React",
      icon: <SiReact className={iconClassName} />,
    },
    {
      title: "Vue JS",
      icon: <SiVuedotjs className={iconClassName} />
    },
    {
      title: "TypeScript",
      icon: <SiTypescript className={iconClassName} />
    },
    {
      title: "Adonis JS",
      icon: <SiAdonisjs className={iconClassName} />
    },
    {
      title: "Node.js",
      icon: <SiNodedotjs className={iconClassName} />,
    },
    {
      title: "Express",
      icon: <SiExpress className={iconClassName} />,
    },
    {
      title: "Scikit Learn",
      icon: <SiScikitlearn className={iconClassName} />,
    },
    {
      title: "Tensorflow",
      icon: <SiTensorflow className={iconClassName} />,
    },
    {
      title: "Git",
      icon: <SiGit className={iconClassName} />,
    },
  ];

  const renderedItems = technologies.map((item) => {
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
      <div className="text-2xl font-semibold my-2">Technologies </div>
      <table className="w-full">
        <div className="flex flex-wrap w-full">{renderedItems}</div>
      </table>
    </div>
  );
}

export default Technologies;
