import { Fragment, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useElementInScreen } from "../../hooks/useElementInScreen";
import { Header } from "./header";
import { MenuMobile } from "./menu-mobile";

export const menuItems = [
  { text: "About me", id: "aboutme" },
  { text: "Experience", id: "experience" },
  { text: "Skills", id: "skills" },
  { text: "Education", id: "education" },
  { text: "Contact", id: "contact" },
];

export const HeaderPortfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sectionVisible] = useElementInScreen();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Fragment>
      <Header>
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
      </Header>
      <MenuMobile open={menuOpen} toggleMenu={toggleMenu} />
    </Fragment>
  );
};
