import React from "react";

function PricingContent() {
  return (
    <section className="my-12 sm-my-24 px-10 xl:px-0">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="space-y-2">
          <div className="space-x-2 border border-lime-200 w-full sm:w-80 p-5 flex items-center justify-between rounded-md mx-auto">
            <button className="bg-lime-900 text-gray-200 w-32 h-10 rounded">
              Monthly
            </button>
            <button className="w-32 h-10 border border-lime-300 rounded hover:bg-lime-900 hover:text-gray-100 hover:border-none duration-150">
              Yearly
            </button>
          </div>
          <h3 className="text-lg font-medium text-center">
            Save 50% on Yearly
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="bg-lime-100 p-10 space-y-10 rounded-lg border border-lime-300">
            <div>
              <h2 className="font-semibold text-3xl">Basic Plan</h2>
              <h5 className="font-medium text-lg text-gray-950/60">
                Up to 50% off on Yearly Plan
              </h5>
            </div>
            <div className="border border-lime-300 rounded-lg bg-lime-200/50">
              <p className="p-5">
                Personalized nutrition plan tailored to your goals and dietary
                preferences.
              </p>
              <p className="p-5 border-y border-lime-300">
                Access to our mobile app for convenient meal tracking and
                progress monitoring.
              </p>
              <p className="p-5 border-b border-lime-300">
                Email support to address your questions and concerns.
              </p>
              <p className="p-5">
                Regular check-ins with a dedicated nutritionist to review your
                progress and provide guidance.
              </p>
            </div>

            <div className="flex items-center space-x-1">
              <h2 className="text-5xl font-bold">$49</h2>
              <h3 className="text-lg font-medium">/month</h3>
            </div>

            <button className="bg-lime-300 w-full py-3.5 text-lg rounded hover:bg-green-900 hover:text-gray-100 font-semibold duration-150">
              Choose Plan
            </button>
          </div>

          <div className="bg-lime-100 p-10 space-y-10 rounded-lg border border-lime-300">
            <div>
              <h2 className="font-semibold text-3xl">Premium Plan</h2>
              <h5 className="font-medium text-lg text-gray-950/60">
                Up to 50% off on Yearly Plan
              </h5>
            </div>
            <div className="border border-lime-300 rounded-lg bg-lime-200/50">
              <p className="p-5">
                All the features included in the Basic Plan.
              </p>
              <p className="p-5 border-y border-lime-300">
                One-on-one video consultations with your dedicated nutritionist
                for more personalized guidance and support.
              </p>
              <p className="p-5">
                Email support to address your questions and concerns.
              </p>
              <p className="p-5 border-y border-lime-300">
                Recipe recommendations and meal planning assistance.
              </p>
              <p className="p-5 border-b border-lime-300">
                Priority email support for quicker responses to your inquiries.
              </p>
              <p className="p-5">
                Educational resources and guides to deepen your understanding of
                nutrition and healthy habits.
              </p>
            </div>

            <div className="flex items-center space-x-1">
              <h2 className="text-5xl font-bold">$79</h2>
              <h3 className="text-lg font-medium">/month</h3>
            </div>

            <button className="bg-lime-300 w-full py-3.5 text-lg rounded hover:bg-green-900 hover:text-gray-100 font-semibold duration-150">
              Choose Plan
            </button>
          </div>

          <div className="bg-lime-100 p-10 space-y-10 rounded-lg border border-lime-300">
            <div>
              <h2 className="font-semibold text-3xl">Ultimate Plan</h2>
              <h5 className="font-medium text-lg text-gray-950/60">
                Up to 50% off on Yearly Plan
              </h5>
            </div>
            <div className="border border-lime-300 rounded-lg bg-lime-200/50">
              <p className="p-5">All the features included in the Plus Plan.</p>
              <p className="p-5 border-y border-lime-300">
                Unlimited access to video consultations with your dedicated
                nutritionist for ongoing support and accountability.
              </p>
              <p className="p-5">
                Advanced progress tracking tools to monitor your weight, body
                measurements, and fitness goals.
              </p>
              <p className="p-5 border-y border-lime-300">
                Customized meal plans and recipe suggestions based on your
                preferences and nutritional needs.
              </p>
              <p className="p-5">
                Priority email and phone support for immediate assistance.
              </p>
            </div>

            <p className="p-5 bg-green-900 text-gray-100 rounded-lg">
              The Premium Plan is designed for individuals who are committed to
              achieving significant results and require the highest level of
              support and personalization.
            </p>

            <div className="flex items-center space-x-1">
              <h2 className="text-5xl font-bold">$99</h2>
              <h3 className="text-lg font-medium">/month</h3>
            </div>

            <button className="bg-lime-300 w-full py-3.5 text-lg rounded hover:bg-green-900 hover:text-gray-100 font-semibold duration-150">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingContent;
