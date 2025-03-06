import GithubIcon from "../icons/GithubIcon";
import LinkedInIcon from "../icons/LinkedInIcon";

interface SidebarProps {
  sections: string[];
  activeIndex: number;
  onClick: (index: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  sections,
  activeIndex,
  onClick,
}) => {
      {
        console.log(activeIndex);
      }

  return (
    <div className="w-[40%] py-10 px-25 mt-5 h-screen flex flex-col">
      <div className="text-5xl font-medium">Narendra Yadav</div>
      <div className="text-2xl font-medium my-2 text-gray-200">
        Full Stack Developer
      </div>

      <p className="text-md my-2 mb-8 font-normal text-gray-400">
        Learning to build engaging and accessible digital
        experiences.
      </p>

      {sections.map((section, i) => (
        <div
          key={i}
          onClick={() => onClick(i)}
          className="cursor-pointer flex items-center space-x-4 my-2 w-[60%]"
        >
          <div
            className={`h-1 transition-all duration-500 ${
              i === activeIndex ? "w-20 bg-gray-100" : "w-10 bg-gray-500"
            }`}
          ></div>
          <h2
            className={`text-xl font-medium transition-all duration-300 ${
              i === activeIndex ? "text-gray-100" : "text-gray-400"
            }`}
          >
            {section}
          </h2>
        </div>
      ))}

      <div className="flex gap-x-4 items-center py-2 my-10">
        <button className="px-4 py-2 rounded-xl text-cyan-400 cursor-pointer hover:text-gray-400 bg-darkTeal w-fit">
          <a
            href="https://drive.google.com/file/d/1xGFAcH0eJnFu5dagsL3v5qLLOpf4ilop/view"
            target="_blank"
          >
            Resume
          </a>
        </button>
        <a
          href="https://www.linkedin.com/in/narendra-yadav-110b19321/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <LinkedInIcon width="10" height="10" />
        </a>
        <a
          href="https://github.com/yadavnarendra1128"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <GithubIcon width="30" height="40" />
        </a>
      </div>

      <div className="flex-col gap-y-2 items-start flex">
        <span>
          {"Email : "}
          <span className="text-gray-300 cursor-pointer hover:text-cyan-400">
            yadavnarendra1137@gmail.com
          </span>
        </span>
        <span>
          Mobile :{" "}
          <span className="text-gray-300 cursor-pointer hover:text-cyan-400">
            9320795969
          </span>
        </span>
        <span className="text-gray-300">Navi Mumbai, Maharashtra</span>
      </div>
    </div>
  );
};

export default Sidebar;
