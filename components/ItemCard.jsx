import React from "react";

function ItemCard() {
  const itemCard = [
    {
      id: 1,
      iImg: "./images/i1.png",
      iName: "Sarah Mitchell",
      iRole: "Founder and CEO",
    },
    {
      id: 2,
      iImg: "./images/i2.png",
      iName: "Emily Thompson",
      iRole: "Chief Operating Officer",
    },
    {
      id: 3,
      iImg: "./images/i3.png",
      iName: "John Davis",
      iRole: "Chief Financial Officer",
    },
    {
      id: 4,
      iImg: "./images/i4.png",
      iName: "Rachel Adams",
      iRole: "Chief Marketing Officer",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto my-24 px-10 xl:px-0">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {itemCard.map((iCard) => (
          <div className="relative rounded-lg overflow-hidden" key={iCard.id}>
            <img src={iCard.iImg} alt="Image" className="w-full" />
            <div className="absolute bottom-0 bg-lime-100 px-5 py-4 rounded-tr-lg">
              <h3 className="font-semibold text-xl">{iCard.iName}</h3>
              <h5>{iCard.iRole}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ItemCard;
