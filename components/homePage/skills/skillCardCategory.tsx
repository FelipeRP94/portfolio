import { SkillCategory } from "../../../model/skillCategory";

interface Props {
  skillCategory: SkillCategory;
}

export const SkillCategoryCard = ({ skillCategory }: Props) => {
  const { icon, name, main, other } = skillCategory;

  const getSkillPill = (skill: string, idx: number) => (
    <div className="border-2 border-sky-900 rounded-lg p-2 mr-2 mb-2" key={idx}>
      {skill}
    </div>
  );

  return (
    <div className="my-4 md:m-4 bg-white shadow-xl rounded-md p-8 md:w-1/3">
      <span className="text-sky-900 flex justify-center text-5xl">{icon}</span>
      <p className="my-4 font-bold text-2xl text-center">{name}</p>
      <p className="my-4">
        <span className="text-slate-500 text-lg">Main skills</span>
        <div className="flex flex-wrap mt-2">{main.map(getSkillPill)}</div>
      </p>
      {other && (
        <p>
          <span className="text-slate-500 text-lg mb-2">Other skills</span>
          <div className="flex flex-wrap mt-2">{other.map(getSkillPill)}</div>
        </p>
      )}
    </div>
  );
};
