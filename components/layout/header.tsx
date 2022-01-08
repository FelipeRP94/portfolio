import { Fragment, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MenuMobile } from "./menu-mobile";

export const menuItems = [
  { text: "Experience", link: "#experience" },
  { text: "Skills", link: "#skills" },
  { text: "Studies", link: "#studies" },
  { text: "Languages", link: "#languages" },
  { text: "Contact", link: "#contact" },
];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Fragment>
      <header className="items-center flex py-2 px-4 md:px-8 bg-sky-900 shadow-xl relative w-full sticky top-0 z-10">
        <span onClick={toggleMenu} className="p-2">
          <AiOutlineMenu className="md:hidden text-xl text-white mr-4 cursor-pointer" />
        </span>
        <ul className="hidden md:flex justify-end w-full text-sm md:text-md lg:text-lg">
          {menuItems.map((item) => (
            <li
              key={item.text}
              className="p-3 border-2 border-transparent text-white hover:border-sky-900 cursor-pointer"
            >
              <a href={item.link}>{item.text}</a>
            </li>
          ))}
        </ul>
      </header>
      <MenuMobile open={menuOpen} toggleMenu={toggleMenu} />
    </Fragment>
  );
};
