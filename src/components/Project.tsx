// import GithubIcon from "../icons/GithubIcon";
import Tag from "./Tag";
import LinkIcon from "./../icons/LinkIcon";

interface ProjectProps {
  title: string;
  desc: string;
  tags: string[];
  img: string;
  link: string;
  source: string;
}
type infoProps = {
  info: ProjectProps;
};
const Project = ({ info }: infoProps) => {
  return (
    <div className="py-2 px-2 flex flex-col gap-y-2 my-4">
      <div className="flex items-center gap-x-4">
        <div className="font-semibold text-xl text-gray-300">{info.title}</div>
        <a className="mt-1" target="_blank" href={info.link}>
          <LinkIcon />
        </a>
        {/* <a className="mt-1" target="_blank" href={info.source}>
          <GithubIcon />
        </a> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-1">
        {/* Image Container */}
        <div className="h-30px w-40px rounded-2xl">
          <img
            className="w-full h-auto rounded-md shadow-md"
            src={info.img}
            alt={info.title}
          />
        </div>
        {/* Description Container */}
        <div className=" text-md text-gray-400 font-normal">
          {info.desc}
        </div>
      </div>
      <div className="flex gap-x-4 items-center"></div>

      <div className="flex gap-2">
        {info.tags.map((tag, index) => {
          return <Tag key={index} title={tag} />;
        })}
      </div>
    </div>
  );
};

export default Project;
