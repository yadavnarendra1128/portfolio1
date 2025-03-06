import Projects from "./Projects";
import Skills from "./Skills";

interface SectionProps {
  title: string;
  sectionRef: (el:HTMLDivElement | null)=>void;
}

const Section: React.FC<SectionProps> = ({ title, sectionRef }) => {

  const renderContent = () => {
    switch (title) {
      case "Skills":
        return (
          <div>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <Skills />
          </div>
        );
      case "Projects":
        return (
          <div>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <Projects />
          </div>
        );
      case "About Me":
        return (
          <>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="mb-10 text-lg leading-relaxed text-gray-400 mt-2">
              I have worked on full-stack web development.. My favorite part of
              programming is the real world problem-solving aspect. I love the
              feeling of finally figuring out a solution to a problem. My core
              stack is React, Node.js, PostgreSQL and MongoDB. I am also
              familiar with TypeScript and Prisma. I am always looking to learn
              new technologies. I am currently looking for a backend position as
              a software developer. I am currently learning Full Stack
              Development.
              <br></br> Computer Science Engineering 2024,
               Mumbai University.
            </p>
          </>
        );
      default:
        return (
          <div>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-gray-400">Section not found.</p>
          </div>
        );
    }
  };

  return (
    <div ref={sectionRef} className="my-10 flex flex-col justify-center">
      {renderContent()}
    </div>
  );
};

export default Section;
