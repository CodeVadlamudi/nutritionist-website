import React from "react";

function FAQ() {
  const faqCard = [
    {
      id: 1,
      qHeading: "What is personalized nutrition coaching?",
      qDesc:
        "Personalized nutrition coaching involves creating a customized nutrition plan based on your unique goals, preferences, and dietary requirements. Our team of experts will work closely with you to develop a plan that fits your lifestyle and helps you achieve optimal health and wellness.",
    },
    {
      id: 2,
      qHeading: "How can nutrition coaching help me lose weight?",
      qDesc:
        "Personalized nutrition coaching involves creating a customized nutrition plan based on your unique goals, preferences, and dietary requirements. Our team of experts will work closely with you to develop a plan that fits your lifestyle and helps you achieve optimal health and wellness.",
    },
    {
      id: 3,
      qHeading:
        "Can I still enjoy my favorite foods while on a nutrition plan?",
      qDesc:
        "Personalized nutrition coaching involves creating a customized nutrition plan based on your unique goals, preferences, and dietary requirements. Our team of experts will work closely with you to develop a plan that fits your lifestyle and helps you achieve optimal health and wellness.",
    },
    {
      id: 4,
      qHeading: "How often will I have contact with my nutritionist?",
      qDesc:
        "Personalized nutrition coaching involves creating a customized nutrition plan based on your unique goals, preferences, and dietary requirements. Our team of experts will work closely with you to develop a plan that fits your lifestyle and helps you achieve optimal health and wellness.",
    },
    {
      id: 5,
      qHeading: "How long will it take to see results?",
      qDesc:
        "Personalized nutrition coaching involves creating a customized nutrition plan based on your unique goals, preferences, and dietary requirements. Our team of experts will work closely with you to develop a plan that fits your lifestyle and helps you achieve optimal health and wellness.",
    },
    {
      id: 6,
      qHeading:
        "Are the meal plans and recipes provided suitable for vegetarians or vegans?",
      qDesc:
        "Personalized nutrition coaching involves creating a customized nutrition plan based on your unique goals, preferences, and dietary requirements. Our team of experts will work closely with you to develop a plan that fits your lifestyle and helps you achieve optimal health and wellness.",
    },
  ];
  return (
    <section className="my-12 sm:my-24 px-10 xl:px-0">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-5 max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            FAQ
          </h2>
          <p className="text-lg font-medium">
            We address commonly asked questions and provide comprehensive
            answers to help you navigate your way through your nutrition and
            wellness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {faqCard.map((qCard) => (
            <div
              key={qCard.id}
              className="bg-lime-100 p-10 space-y-4 rounded-lg border border-lime-300">
              <h2 className="font-semibold text-xl">{qCard.qHeading}</h2>
              <p>{qCard.qDesc}</p>
            </div>
          ))}
        </div>

        <div className=" bg-lime-100 border border-lime-300 rounded-lg">
          <div className="p-10 flex items-center flex-col space-y-5">
            <img
              src="./images/flower.png"
              alt="Flower Image"
              className="w-32 h-32 object-contain"
            />
            <div className="space-y-2 text-center">
              <h2 className="font-semibold text-3xl">Ask your question</h2>
              <p className="font-medium text-lg">
                Feel Free to Ask questions on anytime
              </p>
            </div>
            <button className="px-10 py-3 bg-lime-300 rounded-md hover:bg-green-900 hover:text-gray-50 duration-150">
              Ask A Question
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
