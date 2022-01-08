import { menuItems } from "./header";
import { AiOutlineClose } from "react-icons/ai";

interface Props {
  open: boolean;
  toggleMenu(): void;
}

export const MenuMobile = ({ open, toggleMenu }: Props) => (
  <div
    className={`${
      open ? "" : "hidden"
    } w-full h-full z-10 absolute top-0 bg-slate-700 text-white `}
  >
    <span
      className="p-4 absolute top-0 right-0 cursor-pointer text-2xl"
      onClick={toggleMenu}
    >
      <AiOutlineClose />
    </span>
    <div className="w-full h-full flex items-center">
      <ul className="text-lg w-full">
        {menuItems.map((item) => (
          <li key={item.text} className="text-center p-3 cursor-pointer">
            <a href={item.link} onClick={toggleMenu}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
