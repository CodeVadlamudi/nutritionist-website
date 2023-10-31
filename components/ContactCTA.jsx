import React from "react";

function ContactCTA() {
  return (
    <section className="my-24 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="p-8 sm:p-20 bg-lime-100 relative overflow-hidden border border-lime-300 rounded-md">
          <div className="flex items-center flex-col lg:flex-row justify-between space-y-5 lg:space-y-0">
            <img
              src="./images/a.png"
              alt="Image"
              className="absolute -top-10 -left-20"
            />
            <img
              src="./images/a1.png"
              alt="Image"
              className="absolute -bottom-12 -right-10"
            />
            <div className="lg:w-9/12 space-y-5">
              <h2 className="font-semibold text-xl md:text-3xl z-10">
                Are you ready to embark on a transformative journey towards
                better health and wellness?
              </h2>
              <p className="text-lg">
                Join us at Nutritionist and let us guide you on the path to a
                healthier and happier you.
              </p>
            </div>

            <button className="px-5 py-3 bg-lime-300 rounded hover:bg-lime-400 duration-150 font-semibold text-lg w-full lg:w-auto z-10">
              Join Us Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;
