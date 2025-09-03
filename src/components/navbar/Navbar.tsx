import logo from "../../assets/logo/lan_logo.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNav = (navTo: string) => {
    setNavOpen(false);
    navigate(navTo);
  };

  const norm = (p: string) => (p.replace(/\/+$/, "") || "/");
  const isActive = (path: string) => norm(location.pathname) === norm(path);


  return (
    <>
      <div
        className={`fixed top-0 overflow-hidden w-full ${
          navOpen ? "h-[280px]" : "h-0"
        } transition-all duration-300 bg-white z-20 border-b-2 border-gray-100 shadow-xl`}
      >
        <div
          onClick={() => setNavOpen(false)}
          className="w-full flex flex-col items-end    absolute pt-5 pr-4"
        >
          <X size={25} color="black" />
        </div>

        <ul className="w-full pt-7 justify-center items-center flex flex-col list-none font-poppins">
          <li
            className="py-4 cursor-pointer font-normal text-xl"
            onClick={() => handleNav("/")}
          >
            Projects
          </li>
          <li
            className="py-4 cursor-pointer font-normal text-xl"
            onClick={() => handleNav("/aboutme")}
          >
            About
          </li>
          <li
            className="py-4 cursor-pointer font-normal text-xl"
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/lan-peterca-842312212/")
            }
          >
            LinkedIn
          </li>
          <li
            className="py-4 cursor-pointer font-normal text-xl"
            onClick={() => handleNav("/contact")}
          >
            Contact
          </li>
        </ul>
      </div>

      <div className="w-full pt-5 px-4 flex flex-row justify-between items-center xl:px-10">
        <div onClick={() => handleNav("/")} className="cursor-pointer">
          <img src={logo} alt="" className="w-10" />
        </div>

        <div onClick={() => setNavOpen(true)} className="flex xl:hidden">
          <Menu color="black" size={25} />
        </div>

        <ul className="flex-row list-none font-poppins gap-10 xl:flex hidden">
          <li
            onClick={() => handleNav("/")}
            className={`border-b-2 ${
              isActive("/") ? "border-black" : "border-transparent hover:border-black"
            } cursor-pointer transition-colors duration-150`}
          >
            Projects
          </li>

          <li
            onClick={() => handleNav("/aboutme")}
            className={`border-b-2 ${
              isActive("/aboutme")
                ? "border-black"
                : "border-transparent hover:border-black"
            } cursor-pointer transition-colors duration-150`}
          >
            About Me
          </li>

          <li
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/lan-peterca-842312212/")
            }
            className="border-b-2 border-transparent hover:border-black cursor-pointer transition-colors duration-150"
          >
            LinkedIn
          </li>

          <li
            onClick={() => handleNav("/contact")}
            className={`border-b-2 ${
              isActive("/contact")
                ? "border-black"
                : "border-transparent hover:border-black"
            } cursor-pointer transition-colors duration-150`}
          >
            Contact
          </li>
        </ul>
      </div>
    </>
  );
}
