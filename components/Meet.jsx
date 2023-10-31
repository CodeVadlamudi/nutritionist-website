import React from "react";

function Meet() {
  const meetTabs = [
    { id: 1, tList: "Nutritionists and Dietitians" },
    { id: 2, tList: "Customer Support" },
    { id: 3, tList: "Marketing and Communications" },
    { id: 4, tList: "Technology and Development" },
  ];
  return (
    <section className="my-12 sm:my-24 px-10 xl:px-0 max-w-7xl mx-auto">
      <div className="bg-lime-100 rounded-lg overflow-hidden">
        <div className="flex flex-col items-center p-5 sm:p-20 text-center space-y-5">
          <div className="bg-gradient-to-b from-lime-200 to-lime-100 ring-2 ring-offset-2 ring-white w-20 h-20 p-4 rounded-lg">
            <img
              src="./images/flower.png"
              alt="Flower Image"
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Meet Our Team of Experts
          </h2>
          <p className="font-medium text-sm sm:text-base md:text-lg">
            Our team at Nutritionist is composed of highly skilled professionals
            who are passionate about helping you achieve your health and
            wellness goals. With a diverse range of expertise in nutrition,
            coaching, and support, our team is dedicated to providing you with
            the guidance and personalized care you need. Get to know the experts
            behind our success and discover how they can make a positive impact
            on your journey to better health.
          </p>
        </div>

        <div className="bg-green-950 p-8">
          <ul className="flex items-center gap-2 flex-col md:flex-row justify-center flex-wrap text-gray-100">
            <li className="text-lg bg-green-900/70 border border-lime-100/20 rounded-md cursor-pointer px-2 py-1 w-full md:w-auto">
              Management Team
            </li>
            {meetTabs.map((tab) => (
              <li
                key={tab.id}
                className="text-lg bg-green-900/70 border border-lime-100/20 rounded-md cursor-pointer px-2 py-1 w-full md:w-auto">
                {tab.tList}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Meet;
