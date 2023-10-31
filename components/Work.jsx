import React from "react";

function Work() {
  const workCard = [
    {
      id: 1,
      wNum: "01",
      wIcon: "./images/w1.png",
      wHeading: "Initial Consultation",
      wDesc:
        "We start by scheduling an initial consultation, either in person or through a convenient online meeting. During this session, we will discuss your health history, lifestyle, goals, and any specific dietary requirements.",
    },
    {
      id: 2,
      wNum: "02",
      wIcon: "./images/w2.png",
      wHeading: "Assessing Your Needs",
      wDesc:
        "Our team of experienced nutritionists and dietitians will conduct a thorough assessment of your nutritional needs and create a personalized plan tailored to your unique requirements.",
    },
    {
      id: 3,
      wNum: "03",
      wIcon: "./images/w3.png",
      wHeading: "Personalized Nutrition Plan",
      wDesc:
        "Based on the information gathered, we will develop a personalized nutrition plan that takes into account your dietary preferences, lifestyle, and health goals. This plan will provide you with clear guidelines on what to eat, portion sizes, and meal timing.",
    },
    {
      id: 4,
      wNum: "04",
      wIcon: "./images/w4.png",
      wHeading: "Meal Planning and Recipes",
      wDesc:
        "To make your journey easier, we will provide you with a variety of delicious and nutritious meal options, along with recipes that align with your personalized nutrition plan.",
    },
    {
      id: 5,
      wNum: "05",
      wIcon: "./images/w5.png",
      wHeading: "Ongoing Support",
      wDesc:
        "Throughout your journey, our team of nutrition experts will be there to provide ongoing support, answer your questions, and offer guidance. We believe in the power of continuous encouragement to help you stay motivated and achieve long-term success.",
    },
    {
      id: 6,
      wNum: "06",
      wIcon: "./images/w6.png",
      wHeading: "Progress Tracking",
      wDesc:
        "We encourage you to track your progress using our user-friendly mobile app or website tools. You can log your meals, monitor your weight, and track your physical activity, allowing you to have a clear picture of your progress and make any necessary adjustments.",
    },
    {
      id: 7,
      wNum: "07",
      wIcon: "./images/w6.png",
      wHeading: "Regular Check-ins",
      wDesc:
        "We will schedule regular check-ins to review your progress, address any concerns, and make any necessary adjustments to your nutrition plan. Our goal is to ensure that you are consistently moving towards your desired outcomes.",
    },
    {
      id: 8,
      wNum: "08",
      wIcon: "./images/w8.png",
      wHeading: "Education and Resources",
      wDesc:
        "Along the way, we will provide you with educational resources, such as articles, guides, and videos, to enhance your understanding of nutrition and empower you to make informed choices for a healthier lifestyle.",
    },
    {
      id: 9,
      wNum: "09",
      wIcon: "./images/w9.png",
      wHeading: "Fine-Tuning and Adjustments",
      wDesc:
        "As your journey progresses and your goals evolve, we will fine-tune and make adjustments to your nutrition plan to ensure that it continues to align with your changing needs.",
    },
    {
      id: 10,
      wNum: "10",
      wIcon: "./images/w10.png",
      wHeading: "Sustainable Lifestyle Habits",
      wDesc:
        "Our ultimate goal is to help you develop sustainable lifestyle habits that will support your long-term health and wellness. We will equip you with the knowledge and skills to maintain your progress even after you've completed the program.",
    },
  ];
  return (
    <section className="my-12 sm:my-24 px-10">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center max-w-5xl mx-auto space-y-5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            How It Works
          </h2>
          <p className="text-lg font-medium">
            We provide a step-by-step guide on how to get started on your
            journey towards better health and nutrition. We are here to simplify
            the process and make it easy for you to navigate our platform and
            access the resources you need to achieve your goals. Here's how it
            works.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {workCard.map((wCard) => (
            <div
              className="bg-lime-100 p-10 rounded-lg space-y-4 border border-lime-300"
              key={wCard.id}>
              <h1 className="font-bold text-7xl text-green-800">
                {wCard.wNum}
              </h1>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 rounded p-3 bg-lime-300 flex items-center justify-center">
                  <img src={wCard.wIcon} alt="Icon Image" />
                </div>
                <h3 className="font-semibold text-xl">{wCard.wHeading}</h3>
              </div>
              <p className="font-medium text-lg">{wCard.wDesc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
