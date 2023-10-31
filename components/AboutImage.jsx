import React from "react";

function AboutImage() {
  return (
    <section className="my-12 sm:my-24 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="bg-lime-100 h-80">
          <img
            src="./images/about-img.png"
            className="w-full h-full object-contain p-10"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutImage;
