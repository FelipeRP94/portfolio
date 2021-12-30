const menuItems = [
  { text: "Overview", link: "" },
  { text: "Experience", link: "" },
  { text: "Studies", link: "" },
  { text: "Languages", link: "" },
  { text: "Contact", link: "" },
];

export const Header = () => (
  <header className="items-center flex py-2 px-8 bg-sky-600 shadow-xl">
    <p className="w-full text-white text-2xl">Felipe Ruiz Pinto</p>
    <ul className="flex justify-end w-full text-lg">
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
);
