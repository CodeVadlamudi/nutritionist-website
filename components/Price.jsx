import React from "react";

function Price() {
  const priceCard = [
    {
      id: 1,
      pHeading: "Basic Plan",
      pText: "Up to 50% off on Yearly Plan",
      pDesc:
        "Get started on your health journey with our Basic Plan. It includes personalized nutrition coaching, access to our app, meal planning assistance, and email support.",
      pDollar: "$49",
      pMonth: "/month",
    },
    {
      id: 2,
      pHeading: "Premium Plan",
      pText: "Up to 50% off on Yearly Plan",
      pDesc:
        "Upgrade to our Premium Plan for enhanced features. In addition to the Basic Plan, you'll receive video consultations, priority support, and personalized recipe recommendations.",
      pDollar: "$79",
      pMonth: "/month",
    },
    {
      id: 3,
      pHeading: "Ultimate Plan",
      pText: "Up to 50% off on Yearly Plan",
      pDesc:
        "Experience the full benefits of personalized nutrition coaching with our Ultimate Plan. Enjoy all the features of the Premium Plan, along with 24/7 chat support and exclusive workshops.",
      pDollar: "$49",
      pMonth: "/month",
    },
  ];
  return (
    <section className="my-12 sm:my-24 px-10 text-lime-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-5 max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Our Pricing
          </h2>
          <p className="text-lg font-medium">
            We outline our flexible and affordable options to support you on
            your journey to optimal health and nutrition. We believe that
            everyone deserves access to personalized nutrition guidance and
            resources
          </p>
        </div>

        <div className="space-y-2 mt-10">
          <div className="space-x-2 border border-lime-200 w-80 p-5 flex items-center justify-between rounded-md mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {priceCard.map((pCard) => (
            <div
              key={pCard.id}
              className="bg-lime-100 p-8 space-y-6 border border-lime-300 rounded-md">
              <div>
                <h3 className="text-3xl font-semibold">{pCard.pHeading}</h3>
                <h5 className="text-lg font-medium">{pCard.pText}</h5>
              </div>
              <p className="text-lg font-medium">{pCard.pDesc}</p>

              <div className="flex items-center space-x-1">
                <h2 className="text-5xl font-bold">{pCard.pDollar}</h2>
                <h3 className="text-lg font-medium">{pCard.pMonth}</h3>
              </div>

              <button className="bg-lime-300 w-full py-3.5 text-lg rounded hover:bg-lime-900 hover:text-gray-100 font-semibold duration-150">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Price;
