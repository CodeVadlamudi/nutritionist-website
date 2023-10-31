import React from "react";

function AboutImage() {
  return (
    <section className="my-24 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 h-96">
          <div className="bg-lime-200 rounded-lg" />
          <div className="bg-lime-200 rounded-lg" />
          <div className="row-span-2 col-span-2 w-full h-full rounded-lg overflow-hidden">
            <img
              src="./images/about-img.png"
              className="bg-lime-200 w-full h-full object-contain p-10"
            />
          </div>
          <div className="bg-lime-200 rounded-lg" />
          <div className="bg-lime-200 rounded-lg" />
          <div className="bg-lime-200 rounded-lg" />
          <div className="bg-lime-200 rounded-lg" />
          <div className="bg-lime-200 rounded-lg" />
          <div className="bg-lime-200 rounded-lg" />
        </div>
      </div>
    </section>
  );
}

export default AboutImage;
