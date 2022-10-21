import { useRouter } from "next/router";
import { AiOutlineCheck, AiOutlineUnorderedList } from "react-icons/ai";
import { BsFillFilePersonFill } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";

const menuItems = [
  { title: "Overview", icon: <BsFillFilePersonFill />, url: "overview" },
  { title: "Experience", icon: <AiOutlineUnorderedList />, url: "experience" },
  { title: "Skills", icon: <AiOutlineCheck />, url: "skills" },
  { title: "Education", icon: <FaUserGraduate />, url: "education" },
];

export const LateralMenu = () => {
  const router = useRouter();

  const isMenuItemActive = (itemUrl: string) =>
    router.pathname.includes(itemUrl);

  return (
    <aside className="fixed w-48 h-full bg-white shadow-md text-md">
      {menuItems.map((item, idx) => (
        <div
          key={idx}
          onClick={() => router.push(`/admin/${item.url}`)}
          className={`cursor-pointer flex items-center p-4 px-6 ${
            isMenuItemActive(item.url)
              ? "text-white bg-slate-400"
              : "text-slate-800"
          }`}
        >
          {item.icon}
          <span className="ml-2">{item.title}</span>
        </div>
      ))}
    </aside>
  );
};
