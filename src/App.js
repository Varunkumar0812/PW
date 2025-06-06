import { useState } from "react";
import ProfileBar from "./components/profileBar";
import Education from "./components/education";
import About from "./components/about";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Projects from "./components/projects";
import MenuBar from "./components/menuBar";

function App() {
  const [selectedItem, setSelectedItem] = useState(0);

  const items = [
    { label: "About", content: <About /> },
    { label: "Education", content: <Education /> },
    { label: "Skills", content: <Skills /> },
    { label: "Experience", content: <Experience /> },
    { label: "Projects", content: <Projects /> },
  ];

  const handleClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div className="p-0 w-[100vw] h-[100vh] cursor-default bg-[#272727]">
      <div className="bg-white h-full w-full flex flex-col md:flex-row">
        <ProfileBar />
        <div className="w-full h-auto md:h-full md:overflow-auto bg-white">
          {items[selectedItem].content}
        </div>
        <MenuBar handleClick={handleClick} selectedItem={selectedItem} />
      </div>
    </div>
  );
}

export default App;
