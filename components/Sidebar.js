import Image from "next/image";
import { useState } from "react";
import Dashboard from "./Dashboard";
export default function Sidebar (){
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Inbox", src: "/Chat.png" },
    { title: "Dashboard", src: "/dashboard.svg" },
    { title: "Calender", src: "/calender.svg", gap: true },
    { title: "Document ", src: "/chat.svg" },
    { title: "Team", src: "/user.svg" },
    { title: "Document", src: "/Folder.png" },
    { title: "Files ", src: "/Folder.png", gap: true },
    { title: "Setting", src: "/Setting.png" },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-slate-950 h-screen p-5  pt-8 relative duration-300`}
      >
       
        <div className="flex gap-x-4 items-center">
          <Image
          width={20} height={20}
            src="/1.png"
            className={`h-5 w-5 cursor-pointer duration-500  rounded-full ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            John Doe
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <Image width={20} height={20} src={`${Menu.src}`} className="stroke-white fill-white" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
        <Image
        width={20} height={20}
          src="/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="h-screen flex-1 p-7">
        <Dashboard />
      </div>
    </div>
  );
};

