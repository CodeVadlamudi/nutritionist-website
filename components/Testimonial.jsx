import React from "react";

function Testimonial() {
  const testimonialCard = [
    {
      id: 1,
      tDesc:
        "I can't thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!",
      tImg: "./images/t1.png",
      tName: "Jennifer Anderson",
    },
    {
      id: 2,
      tDesc:
        "Nutritionist has been a game-changer for me. The expert guidance and support I received from their team made my weight loss journey so much easier. Thank you!",
      tImg: "./images/t2.png",
      tName: "Robert Johnson",
    },
    {
      id: 3,
      tDesc:
        "I had struggled with my weight for years until I found Nutritionist. Their personalized approach and tailored nutrition plan made all the difference. I've never felt better!",
      tImg: "./images/t3.png",
      tName: "Emily Davis",
    },
  ];
  return (
    <section className="my-12 sm:my-24 px-10 text-lime-950">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-5 max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Our Testimonials
          </h2>
          <p className="text-lg font-medium">
            Our satisfied clients share their success stories and experiences on
            their journey to better health and well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {testimonialCard.map((tCard) => (
            <div className="border border-lime-300 rounded-md overflow-hidden" key={tCard.id}>
              <div className="p-5 lg:h-72 xl:h-60 space-y-4">
                <img
                  src="./images/quote.png"
                  alt="Quote Image"
                  className="w-10 h-10 object-cover"
                />
                <p className="text-lg font-medium">{tCard.tDesc}</p>
              </div>
              <div className="bg-lime-100">
                <div className="border border-lime-300 flex items-center p-5 space-x-4 border-b-0 border-x-0">
                  <img
                    src={tCard.tImg}
                    alt="Avatar Image"
                    className="w-14 h-14 rounded"
                  />
                  <h3 className="text-lg font-semibold">{tCard.tName}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
