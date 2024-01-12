import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
import socialMediaLinks from "../data/social-media-links.json";

function SocialMediaLinks() {
  const iconClassName =
    "h-6 w-6 cursor-pointer hover:scale-[1.1] transition ease-in-out";

  const items = [
    {
      title: "Linked In",
      icon: <FaLinkedinIn className={iconClassName} />,
    },
    {
      title: "Instagram",
      icon: <RiInstagramFill className={iconClassName} />,
    },
    {
      title: "Twitter",
      icon: <FaXTwitter className={iconClassName} />,
    },
    {
      title: "Facebook",
      icon: <FaFacebook className={iconClassName} />,
    },
    {
      title: "Youtube",
      icon: <FaYoutube className={iconClassName} />,
    },
    {
      title: "Github",
      icon: <TbBrandGithubFilled className={iconClassName} />,
    },
    {
      title: "Leetcode",
      icon: <SiLeetcode className={iconClassName} />,
    },
    {
      title: "Hacker Rank",
      icon: <FaHackerrank className={iconClassName} />,
    },
    {
      title: "Geek for Geeks",
      icon: <SiGeeksforgeeks className={iconClassName} />,
    },
    {
      title: "Medium",
      icon: <BsMedium className={iconClassName} />,
    },
  ];

  const renderedItems = socialMediaLinks.map((item) => {
    const index = items[items.map((a) => a.title).indexOf(item.title)];

    return (
      <a href={item.link} className="m-1">
        {index.icon}
      </a>
    );
  });

  return (
    <div className="mt-8 flex justify-center">
      <ul className="flex flex-wrap justify-center">{renderedItems}</ul>
    </div>
  );
}

export default SocialMediaLinks;
