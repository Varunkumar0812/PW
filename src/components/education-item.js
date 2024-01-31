import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

function EducationItem({ data }) {
  const [show, setShow] = useState(false);

  const [styles, api] = useSpring(() => ({
    config: { duration: "300" },
  }));

  const handleClick = () => {
    api.start({
      from: { transform: "translateY(-10px)" },
      to: { transform: "translateY(0)" },
    });
    setShow(!show);
  };

  return (
    <li
      onClick={handleClick}
      className="w-full min-h-20 bg-blue-100 my-2 rounded-lg border-4 border-[#272727] p-5 hover:border-[#00A9FF] cursor-pointer transition ease-in-out duration-200"
    >
      <div style={styles} className="text-2xl font-semibold mb-2 z-10">
        {data.title}
      </div>
      <div className="text-lg z-10">{data.institute}</div>
      <div className="italic my-1 text-sm font-bold z-10">{data.score}</div>
      {show && (
        <animated.div style={styles} className="z-0">
          {data.content}
        </animated.div>
      )}
    </li>
  );
}

export default EducationItem;
