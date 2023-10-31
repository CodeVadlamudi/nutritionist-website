import React, { useState } from "react";
import {
  ArrowRightIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

function Header() {
  const Links = [
    { id: 1, name: "About", link: "/about" },
    { id: 2, name: "Team", link: "/team" },
    { id: 3, name: "Process", link: "/process" },
    { id: 4, name: "Pricing", link: "/pricing" },
    { id: 5, name: "Blog", link: "/blog" },
  ];

  const [toggle, setToggle] = useState(false);
  return (
    <header className="bg-green-950 sticky top-0 z-10">
      <div className="py-2 px-4 md:px-10 border-b border-b-white border-opacity-20">
        <div className="max-w-7xl mx-auto h-10 w-full bg-green-900/70 rounded flex items-center justify-center space-x-2">
          <img
            src="./images/ball.png"
            alt="Ball Images"
            className="w-8 h-8 object-contain"
          />
          <h3 className="text-white">
            Join Our Personalized Nutrition Demo For Free
          </h3>
          <ArrowRightIcon className="w-6 h-6 text-white" />
        </div>
      </div>

      <div className="py-4 px-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="w-36 h-8 lg:h-11 lg:w-48 block">
            <img
              src="./images/logo.png"
              alt="Logo Images"
              className="w-full h-full object-contain"
            />
          </a>

          <nav
            className={`absolute top-[121.5px] bg-green-950 p-10 flex flex-col space-y-4 right-0 w-full sm:w-6/12 lg:relative lg:top-0 lg:bg-transparent lg:flex-row lg:space-y-0 lg:w-auto lg:items-center lg:space-x-6 lg:p-0 duration-300 rounded-sm ${
              toggle ? "right-0" : "right-[-100%] lg:right-0"
            }`}>
            <a href="/" className="text-lg text-lime-300 font-semibold">
              Home
            </a>
            {Links.map((link) => (
              <a
                key={link.id}
                href={link.link}
                className="text-lime-50 text-lg hover:text-lime-300 font-semibold duration-150">
                {link.name}
              </a>
            ))}
            <a
              href="contact"
              className="h-12 w-36 flex items-center justify-center bg-lime-300 text-black rounded hover:bg-lime-700 hover:text-lime-100 duration-150 transition-all">
              Contact Us
            </a>
          </nav>

          <button onClick={() => setToggle(!toggle)} className="lg:hidden">
            {toggle ? (
              <XMarkIcon className="w-8 h-8 text-lime-100" />
            ) : (
              <Bars3BottomRightIcon className="w-8 h-8 text-lime-100" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
