import React from "react";

function Feature() {
  const featureCard = [
    {
      id: 1,
      fImg: "./images/f1.png",
      fName: "Personalized Nutrition Plans",
      fDesc:
        "Receive a tailored nutrition plan designed specifically for your body and goals. Our certified nutritionists will consider your unique needs, dietary preferences, and health conditions to create a plan that suits you best.",
    },
    {
      id: 2,
      fImg: "./images/f2.png",
      fName: "Guidance from Certified Nutritionists",
      fDesc:
        "Our team of experienced and certified nutritionists will provide professional guidance and support throughout your journey. They will answer your questions, address your concerns, and keep you motivated as you work towards your goals.",
    },
    {
      id: 3,
      fImg: "./images/f3.png",
      fName: "Food Tracking and Analysis",
      fDesc:
        "Effortlessly track your food intake using our user-friendly app. Our nutritionists will analyze your data to provide insights into your eating habits, help you identify areas for improvement, and make personalized recommendations.",
    },
    {
      id: 4,
      fImg: "./images/f4.png",
      fName: "Meal Planning and Recipes",
      fDesc:
        "Receive a tailored nutrition plan designed specifically for your body and goals. Our certified nutritionists will consider your unique needs, dietary preferences, and health conditions to create a plan that suits you best.",
    },
    {
      id: 5,
      fImg: "./images/f5.png",
      fName: "Lifestyle and Behavior Coaching",
      fDesc:
        "Achieving sustainable results requires more than just a diet plan. Our nutritionists will work with you to develop healthy habits, address emotional eating, and provide strategies to overcome obstacles along the way.",
    },
    {
      id: 6,
      fImg: "./images/f6.png",
      fName: "Nutritional Education and Workshops",
      fDesc:
        "Expand your knowledge of nutrition through informative articles and educational workshops. Our nutritionists will equip you with the knowledge and tools to make informed choices for long-term success.",
    },
  ];
  return (
    <section className="my-12 px-5 sm:px-10">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Features
          </h2>
          <p className="text-base sm:text-lg font-medium">
            Welcome to the Feature Section of Nutritionist, your ultimate
            destination for all things nutrition and wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {featureCard.map((card) => (
            <div className="space-y-6 bg-lime-100 p-8 rounded-lg border border-lime-300" key={card.id}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
                <div className="w-12 h-12 bg-lime-300 flex items-center justify-center rounded-lg">
                  <img src={card.fImg} alt="Feature card Image" />
                </div>
                <h3 className="font-semibold text-xl sm:text-2xl">{card.fName}</h3>
              </div>
              <p>{card.fDesc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feature;
