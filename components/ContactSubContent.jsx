import React from "react";

function ContactSubContent() {
  const smImg = [
    { id: 1, sImg: "./images/sm1.svg", sAlt: "Social Media" },
    { id: 2, sImg: "./images/sm2.svg", sAlt: "Social Media" },
    { id: 3, sImg: "./images/sm3.svg", sAlt: "Social Media" },
  ];
  return (
    <section className="space-y-4">
      <div className="w-full rounded-md overflow-hidden h-80 lg:h-96">
        <img
          src="./images/map.png"
          alt="Map Image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex justify-end space-x-2">
        {smImg.map((i) => (
          <div
            key={i.id}
            className="w-12 h-12 bg-lime-300 flex items-center justify-center rounded cursor-pointer">
            <img src={i.sImg} alt={i.sAlt} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ContactSubContent;
