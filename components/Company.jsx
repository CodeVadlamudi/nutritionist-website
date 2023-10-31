import React from "react";

function Company() {
  const companyCard = [
    {
      id: 1,
      cImg: "./images/f1.png",
      cName: "10,000+ Transformations",
      cDesc:
        "Our personalized nutrition plans have helped thousands of individuals reach their weight loss goals and maintain a healthy lifestyle.",
    },
    {
      id: 2,
      cImg: "./images/f2.png",
      cName: "Recognition for Excellence",
      cDesc:
        "Nutritionist has been recognized as a leading provider of personalized nutrition coaching, receiving accolades for our innovative approach and commitment to client success.",
    },
    {
      id: 3,
      cImg: "./images/f3.png",
      cName: "Positive Client Reviews",
      cDesc:
        "We have received numerous testimonials from satisfied clients who have experienced significant improvements in their health, weight, and overall well-being through our coaching program.",
    },
    {
      id: 4,
      cImg: "./images/f4.png",
      cName: "Collaborate With Top Health Experts.",
      cDesc:
        "Nutritionist has established partnerships with respected nutritionists, dietitians, and health experts to ensure that our clients receive the highest quality guidance and support.",
    },
  ];
  return (
    <section className="my-24 px-10">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-5 max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Company Achievements
          </h2>
          <p className="text-lg font-medium">
            At Nutritionist, we take pride in our accomplishments and the
            positive impact we have made on the lives of our clients. Here are
            some of our notable achievements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {companyCard.map((card) => (
            <div
              className="space-y-6 bg-lime-100 p-8 rounded-lg border border-lime-300"
              key={card.id}>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-lime-300 flex items-center justify-center rounded-lg">
                  <img src={card.cImg} alt="Feature card Image" />
                </div>
                <h3 className="font-semibold text-2xl">{card.cName}</h3>
              </div>
              <p>{card.cDesc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Company;
