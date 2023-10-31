import React from "react";

function BlogHero() {
  const blogTabs = [
    { id: 1, bList: "All" },
    { id: 2, bList: "Weight Loss Tips" },
    { id: 3, bList: "Healthy Eating" },
    { id: 4, bList: "Fitness and Exercise" },
    { id: 5, bList: "Mindset and Motivation" },
    { id: 6, bList: "Recipes and Meal Planning" },
  ];
  return (
    <section className="my-24 px-10 xl:px-0 max-w-7xl mx-auto">
      <div className="bg-lime-100 rounded-lg overflow-hidden">
        <div className="flex flex-col items-center p-14 text-center space-y-5">
          <div className=" bg-gradient-to-b from-lime-200 to-lime-100 ring-2 ring-offset-2 ring-white w-20 h-20 p-4 rounded-lg">
            <img
              src="./images/flower.png"
              alt="Flower Image"
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Our Blogs
          </h2>
          <p className="font-medium text-sm sm:text-base md:text-lg">
            Welcome to the Blog section of Nutritionist, your trusted source for
            insightful articles, tips, and expert advice on nutrition and
            wellness. Here, we strive to provide you with engaging and
            informative content that will inspire and empower you to make
            informed decisions about your health. Explore our blog to discover a
            wealth of resources that cover a wide range of topics related to
            nutrition, fitness, and overall well-being.
          </p>
        </div>

        <div className="bg-green-950 p-8">
          <ul className="flex items-center gap-2 flex-col md:flex-row justify-center flex-wrap text-gray-100">
            {blogTabs.map((tab) => (
              <li
                key={tab.id}
                className="text-lg bg-green-900/70 border border-lime-100/20 rounded-md cursor-pointer px-2 py-1 w-full md:w-auto">
                {tab.bList}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default BlogHero;
