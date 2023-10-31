import React from "react";

function Pricing() {
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
            Our Pricing
          </h2>
          <p className="font-medium text-sm sm:text-base md:text-lg">
            At Nutritionist, we offer flexible pricing options to accommodate
            your unique requirements and budget. Our goal is to provide you with
            exceptional personalized nutrition coaching that is accessible and
            tailored to your needs. Choose from our three plans below and take
            the first step towards a healthier lifestyle
          </p>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
