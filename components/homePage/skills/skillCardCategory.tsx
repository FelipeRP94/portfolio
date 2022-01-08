import { SkillCategory } from "../../../model/skillCategory";

interface Props {
  skillCategory: SkillCategory;
}

export const SkillCategoryCard = ({ skillCategory }: Props) => {
  const { icon, name, main, other } = skillCategory;

  return (
    <div className="my-4 md:m-4 bg-white text-center shadow-xl rounded-md p-8 md:w-1/3">
      <span className="text-sky-900 flex justify-center text-5xl">{icon}</span>
      <p className="my-4 font-bold text-2xl">{name}</p>
      <p className="my-4">
        <span className="text-slate-500">Main skills</span>
        <br />
        <span>{main}</span>
      </p>
      {other && (
        <p>
          <span className="text-slate-500">Other skills</span>
          <br />
          <span>{other}</span>
        </p>
      )}
    </div>
  );
};
