import {
  EnvelopeIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import React from "react";

function Contact() {
  const contactCard = [
    {
      id: 1,
      ccIcon: <EnvelopeIcon />,
      ccText: "support@nutritionist.com",
    },
    {
      id: 2,
      ccIcon: <PhoneIcon />,
      ccText: "+91 00000 00000",
    },
    {
      id: 3,
      ccIcon: <MagnifyingGlassIcon />,
      ccText: "Some Where in the World",
    },
  ];
  return (
    <section className="my-12 sm:my-24 px-10 xl:px-0">
      <div className="bg-lime-100 rounded-lg border border-lime-300 border-b-0 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col items-center p-14 text-center space-y-5">
          <div className=" bg-gradient-to-b from-lime-200 to-lime-100 ring-2 ring-offset-2 ring-white w-20 h-20 p-4 rounded-lg">
            <img
              src="./images/flower.png"
              alt="Flower Image"
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Contact Us
          </h2>
          <p className="font-medium text-sm sm:text-base md:text-lg">
            We value your feedback, questions, and concerns at Nutritionist. Our
            dedicated team is here to assist you and provide the support you
            need on your nutritional journey. Please don't hesitate to reach out
            to us using any of the following contact methods.
          </p>
        </div>
        <div className="bg-green-900 p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {contactCard.map((aCard) => (
              <div key={aCard.id} className="flex items-center flex-col justify-center bg-green-900/70 border border-lime-100/20 rounded-lg p-5 space-y-2">
                <div className="w-8 h-8 text-lime-300">{aCard.ccIcon}</div>
                <h3 className="text-lg text-gray-50">{aCard.ccText}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
