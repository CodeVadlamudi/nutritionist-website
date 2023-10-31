import React from "react";

function Health() {
  return (
    <section className="my-12 sm:my-24 px-10 xl:px-0">
      <div className="bg-lime-100 rounded-lg border border-lime-300 max-w-7xl mx-auto">
        <div className="flex flex-col items-center p-8 sm:p-14 text-center space-y-5">
          <div className=" bg-gradient-to-b from-lime-200 to-lime-100 ring-2 ring-offset-2 ring-white w-20 h-20 p-4 rounded-lg">
            <img
              src="./images/flower.png"
              alt="Flower Image"
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Your Journey to Health and Wellness
          </h2>
          <p className="font-medium text-sm sm:text-base md:text-lg">
            At Nutritionist, we believe in providing a personalized and
            comprehensive approach to help you achieve your health and wellness
            goals. Our "How it Works" process is designed to guide you through
            each step of your journey, ensuring that you receive the support,
            knowledge, and tools you need to succeed. Here's a detailed
            breakdown of our process.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Health;
