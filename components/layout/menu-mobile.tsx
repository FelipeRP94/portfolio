import { menuItems } from "./header";
import { AiOutlineClose } from "react-icons/ai";

interface Props {
  open: boolean;
  toggleMenu(): void;
}

export const MenuMobile = ({ open, toggleMenu }: Props) => (
  <div
    className={`${
      open ? "w-full" : "w-0"
    } h-full z-10 fixed top-0 bg-slate-700 text-white transition-all duration-300 overflow-hidden flex justify-center`}
  >
    <span
      className="p-4 absolute top-0 right-0 block cursor-pointer text-2xl"
      onClick={toggleMenu}
    >
      <AiOutlineClose />
    </span>
    <div className="relative flex items-center">
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
