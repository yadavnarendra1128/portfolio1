import { useState, useEffect, useRef } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Section from "./components/Section"
const App: React.FC = () => {
  const sections = ["About Me", "Skills", "Projects"];
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const rightContentRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (index: number) => {
    const targetSection = sectionRefs.current[index];
    if (targetSection && rightContentRef.current) {
      rightContentRef.current.scrollTo({
        top: targetSection.offsetTop - 0,
        behavior: "smooth",
      });
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActiveIndex(index);
          }
        }
      });
    };

    const rightSide = rightContentRef.current;
    rightSide?.addEventListener("scroll", handleScroll);
    return () => rightSide?.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="flex h-screen w-screen text-white bg-darkSlate overflow-hidden">
      <Sidebar
        sections={sections}
        activeIndex={activeIndex}
        onClick={handleClick}
      />
      <div
        ref={rightContentRef}
        className="w-[60%] px-10 py-5 overflow-y-scroll scroll-smooth scrollbar-thumb"
      >
        {sections.map((section, i) => (
          <Section
            key={i}
            title={section}
            sectionRef={(el) => (sectionRefs.current[i] = el)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
