import Image from "next/image";
import { useState } from "react";
import Dashboard from "./Dashboard";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const [inboxOpen, setInboxOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const sidebarBackgroundColor = darkMode ? "bg-white" : "bg-slate-950";
  const textColor = darkMode ? "text-black" : "text-white";

  const Menus = [
    { title: "Dashboard", src: "/home.png" },
    { title: "Calendar", src: "/calendar.png", gap: true },
    { title: "Document", src: "/docs.png" },
    { title: "Team", src: "/user.png" },
    { title: "Trash", src: "/bin.png" },
    { title: "Send", src: "/send.png" },
    { title: "More", src: "/more.png" },
    { title: "Help & Support", src: "/update.png", gap: true },
  ];

  return (
    <div className="flex w-full">
      <div className={`${sidebarBackgroundColor} h-screen fixed overflow-y-scroll scroll-smooth scroll-hidden`}>
        <div
          className={`${open ? "w-60" : "w-20 "} p-5 pt-8 relative duration-300`}
        >
          <Image
            width={20}
            height={20}
            src="/control.png"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <Image
              width={20}
              height={20}
              src="/1.png"
              className={`h-7 w-7 cursor-pointer duration-500 rounded-full ${
                open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`font-medium text-xl duration-200 ${textColor} ${
                !open && "scale-0"
              }`}
            >
              John Doe
            </h1>
          </div>
          <ul className="pt-5">
            <li
              onClick={() => setInboxOpen(!inboxOpen)}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white ${textColor} text-sm items-center gap-x-4 ${
                open ? "mt-9" : "mt-2"
              }`}
            >
              <Image
                src={"/archive.png"}
                width={20}
                height={20}
                className="stroke-white fill-white"
              />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Inbox
              </span>
              <div className="cursor-pointer">
                <Image
                  src={inboxOpen ? "/upload.png" : "/down.png"}
                  width={10}
                  height={10}
                  className={`${!open && "hidden"} w-3 h-3`}
                />
              </div>
            </li>
            {inboxOpen && (
              <ul>
                <li className="text-xs text-slate-300/60">James89@gmail.com</li>
                <li className="text-xs text-slate-300/60">Junaid123@gmail.com</li>
              </ul>
              
            )}
          </ul>
          <ul>
            <li className="">
              <button onClick={toggleDarkMode} className={`flex items-center gap-4 p-2 ${textColor}`}>
                <Image src={"/mode.png"} width={20} height={20} className="w-4 h-4" />
                {darkMode ? "Light" : "Dark"}
              </button>
            </li>
          </ul>
          <ul className="">
            {Menus.map((Menu, index) => (
              <li
                key={index}
                className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white ${textColor} text-sm items-center gap-x-4 ${
                  Menu.gap ? "mt-9" : "mt-2"
                } ${index === 0 && "bg-light-white"}`}
              >
                <Image width={20} height={20} src={`${Menu.src}`} className="stroke-white fill-white" />
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  {Menu.title}
                </span>
              </li>
              
            ))}
          </ul>
          
        </div>
      </div>
      <div className={` ${open ? "ml-60" : "ml-20 "} w-full `}>
        <Dashboard />
      </div>
    </div>
  );
};
