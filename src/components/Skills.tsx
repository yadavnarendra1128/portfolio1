import Skill from "../components/Skill.tsx";
import ExpressIcon from "../icons/ExpressIcon.tsx";
import JsIcon from "../icons/JsIcon.tsx";
import MongoDbIcon from "../icons/MongoDbIcon.tsx";
import NodeIcon from "../icons/NodeIcon.tsx";
import PostGresIcon from "../icons/PostGresIcon.tsx";
import PrismaIcon from "../icons/PrismaIcon.tsx";
import ReactIcon from "../icons/ReactIcon.tsx";
import RedisIcon from "../icons/RedisIcon.tsx";
import ReduxIcon from "../icons/ReduxIcon.tsx";
import TailwindIcon from "../icons/TailwindIcon.tsx";
import TypeScriptIcon from "../icons/TypeScriptIcon.tsx";

const Skills: React.FC = () => {
  return (
    <div className="grid grid-cols-5 gap-4 gap-y-6 py-4 w-[80%] place-items-center">
      <Skill icon={JsIcon} width="20" height="20" title="JavaScript" />
      <Skill icon={TypeScriptIcon} width="20" height="20" title="TypeScript" />
      <Skill icon={ReactIcon} width="20" height="20" title="React" />
      <Skill icon={NodeIcon} width="20" height="20" title="Node" />
      <Skill icon={ExpressIcon} width="20" height="20" title="Express" />
      <Skill icon={ReduxIcon} width="20" height="20" title="Redux" />
      <Skill icon={TailwindIcon} width="20" height="20" title="Tailwind" />
      <Skill icon={MongoDbIcon} width="20" height="20" title="MongoDB" />
      <Skill icon={PostGresIcon} width="20" height="20" title="PostGreSQL" />
      <Skill icon={PrismaIcon} width="20" height="20" title="Prisma" />
      <Skill icon={RedisIcon} width="20" height="20" title="Redis" />
    </div>
  );
};
export default Skills;
