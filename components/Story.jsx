import React from "react";

function Story() {
  return (
    <section className="my-12 sm:my-24 px-10 text-green-950">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-5 max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Our Story
          </h2>
          <p className="text-lg font-medium">
            Welcome to Nutritionist, your partner in achieving optimal health
            through personalized nutrition coaching. Our certified nutritionists
            are here to guide you on your weight loss journey.
          </p>
        </div>

        <div className="overflow-hidden rounded-lg border border-lime-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 bg-lime-100 items-center">
            <img
              src="./images/s1.png"
              alt="Image"
              className="block border-r-8 border-lime-300 sm:h-[480px] lg:h-full w-full object-cover"
            />
            <div className="p-10 space-y-10 text-start">
              <h2 className="font-semibold text-2xl border-b-4 border-lime-300 inline">
                Inspiring Transformations Story
              </h2>
              <p className="text-base font-medium">
                Nutritionist continues to empower individuals to transform their
                lives through personalized nutrition coaching. With an expanding
                client base and a growing team of experts, we remain committed
                to our goal of helping people lose weight, improve their health,
                and lead happier, more fulfilling lives. Our journey of
                inspiring transformations continues, one client at a time.
              </p>
              <h3 className="font-semibold text-base">July 1, 2025</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 bg-lime-100 items-center">
            <div className="p-10 space-y-10 order-last lg:order-none text-end">
              <h2 className="font-semibold text-2xl border-b-4 border-lime-300 inline">
                Recognition and Accolades Story
              </h2>
              <p className="text-base font-medium">
                Nutritionist received industry recognition for its excellence in
                personalized nutrition coaching. Our innovative approach and
                dedication to client success earned us accolades and solidified
                our position as a leading provider in the field.
              </p>
              <h3 className="font-semibold text-base">March 10, 2023</h3>
            </div>
            <img
              src="./images/s2.png"
              alt="Image"
              className="block border-l-8 border-lime-300 sm:h-[480px] lg:h-full w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 bg-lime-100 items-center">
            <img
              src="./images/s3.png"
              alt="Image"
              className="block border-r-8 border-lime-300 sm:h-[480px] lg:h-full w-full object-cover"
            />
            <div className="p-10 space-y-10 text-start">
              <h2 className="font-semibold text-2xl border-b-4 border-lime-300 inline">
                Continued Growth Story
              </h2>
              <p className="text-base font-medium">
                Nutritionist celebrated serving over 5,000 clients, a testament
                to our commitment to helping individuals achieve their health
                and weight loss goals. This milestone highlighted the positive
                impact we have made on the lives of thousands of people.
              </p>
              <h3 className="font-semibold text-base">November 2, 2021</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 bg-lime-100 items-center">
            <div className="p-10 space-y-10 order-last lg:order-none text-end">
              <h2 className="font-semibold text-2xl border-b-4 border-lime-300 inline">
                Collaborating for Success Story
              </h2>
              <p className="text-base font-medium">
                Nutritionist established partnerships with renowned health
                professionals, including nutritionists, dietitians, and wellness
                experts. These collaborations allowed us to incorporate diverse
                perspectives and expertise, ensuring the highest level of
                guidance for our clients.
              </p>
              <h3 className="font-semibold text-base">July 15, 2019</h3>
            </div>
            <img
              src="./images/s4.png"
              alt="Image"
              className="block border-l-8 border-lime-300 sm:h-[480px] lg:h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
