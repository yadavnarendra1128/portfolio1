import React from "react";

interface SkillProps {
  icon: React.FC<{ width: string; height: string }>;
  width: string;
  title: string;
  height: string;
}

const Skill: React.FC<SkillProps> = ({ icon: Icon, width, height, title }) => {
  return (
    <div className="flex-col items-center ">
      <Icon width={width} height={height} />
      <div className="flex mt-2 justify-center items-center text-lg text-gray-400">
        {title}
      </div>
    </div>
  );
};

export default Skill;
