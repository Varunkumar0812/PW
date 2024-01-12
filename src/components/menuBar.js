function MenuBar({ handleClick, selectedItem }) {
  const getClassName = (index) => {
    let def = "flex h-full items-center justify-center";

    if (index === 0) {
      def = def.concat(" rounded-tr-md ");
    } else if (index === 4) {
      def = def.concat(" rounded-b-md md:rounded-b-none md:rounded-br-md ");
    }

    if (index === selectedItem) {
      def = def.concat(" bg-[#00A9FF] text-black");
    } else {
      def = def.concat(" bg-[#0C356A] text-white");
    }

    return def;
  };

  return (
    <div className="w-full md:w-14 h-full rounded-b-md md:rounded-r-md">
      <ul className="h-full flex flex-col justify-between cursor-pointer ">
        <li onClick={() => handleClick(0)} className={getClassName(0)}>
          <div className="md:rotate-90 text-lg cursor-pointer transition ease-in-out hover:scale-110 duration-100">
            About
          </div>
        </li>
        <li onClick={() => handleClick(1)} className={getClassName(1)}>
          <div className="md:rotate-90 text-lg cursor-pointer transition ease-in-out hover:scale-110 duration-100">
            Education
          </div>
        </li>
        <li onClick={() => handleClick(2)} className={getClassName(2)}>
          <div className="md:rotate-90 text-lg cursor-pointer transition ease-in-out hover:scale-110 duration-100">
            Skills
          </div>
        </li>
        <li onClick={() => handleClick(3)} className={getClassName(3)}>
          <div className="md:rotate-90 text-lg cursor-pointer transition ease-in-out hover:scale-110 duration-100">
            Experience
          </div>
        </li>
        <li onClick={() => handleClick(4)} className={getClassName(4)}>
          <div className="md:rotate-90 text-lg cursor-pointer transition ease-in-out hover:scale-110 duration-100">
            Projects
          </div>
        </li>
      </ul>
    </div>
  );
}

export default MenuBar;
