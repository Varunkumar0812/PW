function MenuBar({ handleClick, selectedItem }) {
  const getClassName = (index) => {
    let def = "flex h-full items-center justify-center";

    if (index === selectedItem) {
      def = def.concat(" bg-medium text-black");
    } else {
      def = def.concat(" bg-dark text-white");
    }

    return def;
  };

  return (
    <div className="w-full md:w-14 h-full">
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
