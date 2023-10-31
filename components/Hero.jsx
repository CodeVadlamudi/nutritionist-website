import { HeartIcon } from "@heroicons/react/24/solid";
import React from "react";

function Hero() {
  return (
    <section className="my-12 sm:my-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="px-10">
            <div className="h-[400px] sm:h-[500px] md:h-[600px] w-full rounded-sm overflow-hidden">
              <img
                src="./images/hero-img.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="p-6 md:p-15 xl:p-20 space-y-10 text-center lg:text-start">
            <div className="inline-flex items-center flex-col sm:flex-row text-green-950 font-semibold text-xl space-y-3 sm:space-y-0">
              <h3 className="border-b-2 border-lime-300">Transform Your</h3>
              <HeartIcon className="w-8 h-8 text-red-500 mx-2" />
              <h3 className="border-b-2 border-lime-300">Health with</h3>
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold">
              Personalized Nutrition Coaching
            </h1>
            <p>
              Welcome to Nutritionist, your partner in achieving optimal health
              through personalized nutrition coaching. Our certified
              nutritionists are here to guide you on your weight loss journey,
              providing customized plans and ongoing support. Start your
              transformation today and experience the power of personalized
              nutrition coaching.
            </p>

            <div className="flex items-center flex-col md:flex-row space-y-2 md:space-x-2">
              <button className="w-full lg:w-52 h-14 bg-lime-300 duration-150 rounded-md font-semibold text-base">
                Get Starter Today
              </button>
              <button className="w-full lg:w-52 h-14 bg-lime-100 rounded-md font-semibold text-base border border-lime-200">
                Book a Demo
              </button>
            </div>
            
            <div className="flex items-center flex-col justify-center space-y-2 sm:space-x-4 sm:flex-row sm:space-y-0">
              <div className="flex items-center -space-x-2 bg-lime-100 border p-1 rounded-full">
                <img
                  src="./images/c1.png"
                  alt="Customer Image"
                  className="w-10 h-10 object-contain rounded-full border-2 border-white"
                />
                <img
                  src="./images/c2.png"
                  alt="Customer Image"
                  className="w-10 h-10 object-contain rounded-full border-2 border-white"
                />
                <img
                  src="./images/c3.png"
                  alt="Customer Image"
                  className="w-10 h-10 object-contain rounded-full border-2 border-white"
                />
              </div>
              <h3 className="text-lg font-bold">
                <span className="mr-2 inline text-green-900">430+</span>Happy
                Customers
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
