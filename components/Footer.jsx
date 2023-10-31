import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import React from "react";

function Footer() {
  const footerLinks = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Team", link: "/team" },
    { id: 4, name: "Process", link: "/process" },
    { id: 5, name: "Pricing", link: "/pricing" },
    { id: 6, name: "Blog", link: "/blog" },
  ];

  const footerButton = [
    {
      id: 1,
      fIcon: <EnvelopeIcon />,
      fText: "example@gmail.com",
    },
    {
      id: 2,
      fIcon: <PhoneIcon />,
      fText: "+12345 67890",
    },
    {
      id: 3,
      fIcon: <MapPinIcon />,
      fText: "Somewhere in the World",
    },
  ];
  return (
    <footer className="bg-green-950 p-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center flex-col space-y-4 md:space-y-0 md:flex-row justify-between">
          <a href="/" className="w-48 h-11 block">
            <img
              src="./images/logo.png"
              alt="Logo Image"
              className="w-full h-full object-contain"
            />
          </a>
          <div className="sm:space-x-4 grid grid-cols-2 sm:grid-cols-6 gap-3 sm:gap-0">
            {footerLinks.map((link) => (
              <a
                key={link.id}
                href={link.link}
                className="text-lime-50 text-lg hover:text-lime-300 font-semibold duration-150 text-center">
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className="bg-green-900/70 border border-lime-100/20 flex items-center flex-col lg:flex-row justify-between p-2 rounded shadow-2xl mt-10">
          <div className="flex items-center flex-col md:space-x-2 md:flex-row space-y-2 md:space-y-0 w-full lg:w-auto">
            {footerButton.map((fButton) => (
              <div
                key={fButton.id}
                className="flex items-center space-x-2 p-2 border border-lime-100/20 rounded w-full lg:w-auto">
                <div className="w-6 h-6 text-lime-200">{fButton.fIcon}</div>
                <h3 className="text-gray-100">{fButton.fText}</h3>
              </div>
            ))}
          </div>
          <a
            href="https://github.com/CodeVadlamudi"
            target="_blank"
            className="flex items-center space-x-2 mr-2 hover:underline text-gray-100 mt-4 mb-2 lg:mt-0 lg:mb-0">
            <img
              src="./images/github.png"
              alt="GitHub Images"
              className="w-7 h-7 object-contain"
            />
            <p className="text-lg">Code Vadlamudi</p>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
