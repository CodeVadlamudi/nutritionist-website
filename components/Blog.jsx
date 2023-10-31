import React from "react";
import { HeartIcon, BookmarkIcon } from "@heroicons/react/24/outline";

function Blog() {
  const blogCard = [
    {
      id: 1,
      bImg: "./images/b1.png",
      bText: "Weight Loss",
      bHeading: "The Benefits of Hydration for Weight Loss",
      bDesc:
        "Discover how staying hydrated can support your weight loss goals and improve overall health.",
      bImgSub: "./images/bs1.png",
      bName: "Emily Johnson",
      bDate: "23 May 2023",
    },
    {
      id: 2,
      bImg: "./images/b2.png",
      bText: "Mindful Eating",
      bHeading: "Cultivating a Healthy Relationship with Food",
      bDesc:
        "Learn how practicing mindful eating can help you develop a healthier relationship with food and improve your overall well-being.",
      bImgSub: "./images/bs2.png",
      bName: "Sarah Thompson",
      bDate: "23 May 2023",
    },
    {
      id: 3,
      bImg: "./images/b3.png",
      bText: "Understanding Macronutrients",
      bHeading: "Carbohydrates, Proteins, and Fats",
      bDesc:
        "Get a comprehensive understanding of macronutrients and their role in your diet for optimal health and weight management.",
      bImgSub: "./images/bs3.png",
      bName: "Mark Wilson",
      bDate: "23 May 2023",
    },
    {
      id: 4,
      bImg: "./images/b4.png",
      bText: "Healthy Snacks on the Go",
      bHeading: "Quick and Nutritious Options",
      bDesc:
        "Explore a variety of convenient and healthy snack ideas to keep you fueled throughout the day.",
      bImgSub: "./images/bs4.png",
      bName: "Emily Johnson",
      bDate: "23 May 2023",
    },
  ];
  return (
    <section className="my-24 px-10">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-5 max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Our Blogs
          </h2>
          <p className="text-lg font-medium">
            Our blog is a treasure trove of informative and engaging articles
            written by our team of nutritionists, dietitians, and wellness
            experts. Here's what you can expect from our blog.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {blogCard.map((bCard) => (
            <div
              className="p-7 bg-lime-100 rounded-md space-y-4 border border-lime-300"
              key={bCard.id}>
              <img
                src={bCard.bImg}
                alt="Blog Card Image"
                className="rounded-md w-full object-cover"
              />
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-lime-950">
                    {bCard.bText}
                  </h3>
                  <h2 className="text-2xl font-semibold text-lime-950">
                    {bCard.bHeading}
                  </h2>
                </div>
                <p className="text-lg">{bCard.bDesc}</p>

                <div className="p-4 bg-lime-50 flex items-center justify-between rounded-md border border-lime-300">
                  <div className="flex items-center space-x-4">
                    <img
                      src={bCard.bImgSub}
                      alt="Blog Card Sub Image"
                      className=" rounded-md"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-lime-950">
                        {bCard.bName}
                      </h3>
                      <h6>{bCard.bDate}</h6>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-lime-100 rounded-md border border-lime-300">
                      <HeartIcon className="w-6 h-6 sm:w-8 sm:h-8 text-lime-950" />
                    </div>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-lime-100 rounded-md border border-lime-300">
                      <BookmarkIcon className="w-6 h-6 sm:w-8 sm:h-8 text-lime-950" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
