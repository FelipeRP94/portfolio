const menuItems = [
  { text: "Overview", link: "" },
  { text: "Experience", link: "" },
  { text: "Studies", link: "" },
  { text: "Languages", link: "" },
  { text: "Contact", link: "" },
];

export const Header = () => (
  <header className="p-3 bg-sky-400 shadow-xl">
    <ul className="flex justify-end w-full text-xl">
      {menuItems.map((item) => (
        <li
          key={item.text}
          className="p-3 border-2 border-transparent text-white hover:border-amber-500 cursor-pointer"
        >
          {item.text}
        </li>
      ))}
    </ul>
  </header>
);
