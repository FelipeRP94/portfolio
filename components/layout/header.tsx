import { Fragment, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useElementInScreen } from "../../hooks/useElementInScreen";
import { MenuMobile } from "./menu-mobile";

export const menuItems = [
  { text: "About me", id: "aboutme" },
  { text: "Experience", id: "experience" },
  { text: "Skills", id: "skills" },
  { text: "Studies", id: "studies" },
  { text: "Contact", id: "contact" },
];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sectionVisible] = useElementInScreen();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Fragment>
      <header className="items-center flex py-2 px-4 md:px-8 bg-slate-800 shadow-xl relative w-full sticky top-0 z-10">
        <span onClick={toggleMenu} className="p-2">
          <AiOutlineMenu className="md:hidden text-xl text-white mr-4 cursor-pointer" />
        </span>
        <ul className="hidden md:flex justify-end w-full text-sm md:text-md lg:text-lg">
          {menuItems.map((item) => (
            <li
              key={item.text}
              className={`${
                sectionVisible === item.id ? "border-b-4 border-b-white " : ""
              }p-3 border-2 border-transparent text-white hover:border-white cursor-pointer`}
              data-menu={item.id}
            >
              <a href={`#${item.id}`}>{item.text}</a>
            </li>
          ))}
        </ul>
      </header>
      <MenuMobile open={menuOpen} toggleMenu={toggleMenu} />
    </Fragment>
  );
};
