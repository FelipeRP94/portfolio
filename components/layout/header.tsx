import { Fragment, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MenuMobile } from "./menu-mobile";

export const menuItems = [
  { text: "Overview", link: "" },
  { text: "Experience", link: "" },
  { text: "Studies", link: "" },
  { text: "Languages", link: "" },
  { text: "Contact", link: "" },
];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Fragment>
      <header className="items-center flex py-2 px-4 md:px-8 bg-sky-600 shadow-xl relative w-full">
        <span onClick={toggleMenu}>
          <AiOutlineMenu className="md:hidden text-xl text-white mr-4 cursor-pointer" />
        </span>

        <p className="w-full text-white text-lg md:text-md lg:text-2xl">
          Felipe Ruiz Pinto
        </p>
        <ul className="hidden md:flex justify-end w-full text-sm md:text-md lg:text-lg">
          {menuItems.map((item) => (
            <li
              key={item.text}
              className="p-3 border-2 border-transparent text-white hover:border-amber-600 cursor-pointer"
            >
              {item.text}
            </li>
          ))}
        </ul>
      </header>
      <MenuMobile open={menuOpen} toggleMenu={toggleMenu} />
    </Fragment>
  );
};
