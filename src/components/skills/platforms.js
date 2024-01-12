import { SiGithub, SiKaggle, SiLinux } from "react-icons/si";

function Platforms() {
  const iconClassName =
    "w-5 h-5 md:w-10 md:h-10 mr-2 hover:-translate-y-1 transition ease-in-out duration-300 text-[#272727]";

  const platforms = [
    {
      title: "Linux",
      icon: <SiLinux className={iconClassName} />,
    },
    {
      title: "Github",
      icon: <SiGithub className={iconClassName} />,
    },
    {
      title: "Kaggle",
      icon: <SiKaggle className={iconClassName} />,
    },
  ];

  const renderedItems = platforms.map((item) => {
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
      <div className="text-2xl font-semibold my-2">Platforms </div>
      <table className="w-full">
        <div className="flex flex-wrap w-full">{renderedItems}</div>
      </table>
    </div>
  );
}

export default Platforms;
