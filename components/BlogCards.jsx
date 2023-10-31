import React from "react";
import { blogContent } from "../Data";

function BlogCards() {
  return (
    <section className="my-24 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogContent.map((card) => (
            <div
              key={card.id}
              className="p-5 bg-lime-100 space-y-6 rounded border border-lime-300">
              <h3 className="text-2xl font-semibold border-b-4 inline pb-1 border-lime-300">
                {card.bHeading}
              </h3>
              <img
                src={card.bImg}
                alt="Image"
                className="w-full block rounded"
              />
              <h3 className="text-xl font-semibold">{card.bText}</h3>
              <p className="text-lg font-medium">{card.bDesc}</p>
              <button className="w-full h-12 bg-lime-300 rounded hover:bg-lime-900 hover:text-white duration-300 font-semibold text-lg">
                {card.btnRead}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogCards;
