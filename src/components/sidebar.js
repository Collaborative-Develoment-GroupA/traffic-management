import { useState } from "react";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [    { title: "Home", src: "Chart_fill" },    { title: "Officers", src: "Chat" },    { title: "Deparments", src: "User", gap: true },    { title: "Ticket Issued ", src: "Calendar" },    { title: "Graphs", src: "Search" },    { title: "Setting", src: "Setting" },  ];

  return (
    <div className="flex">
      <div className={`${open ? "w-72" : "w-20"} bg-dark-purple h-screen p-5 pt-8 relative duration-300`}>
        <div className="flex gap-x-4 items-center">
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
           
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${
                Menu.gap ? "mt-9" : "mt-2"
              } ${index === 0 && "bg-light-white"}`}
            >
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold"></h1>
      </div>
    </div>
  );
};

export default SideBar;
