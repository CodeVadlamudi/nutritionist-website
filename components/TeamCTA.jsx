import React from "react";

function TeamCTA() {
  return (
    <div>
      <section className="my-12 sm:my-24 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="p-5 bg-lime-100 relative overflow-hidden border border-lime-300 rounded-md">
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
              <div className="lg:w-9/12 space-y-5 z-10">
                <h2 className="font-semibold text-2xl sm:text-4xl">
                  Join Our Team
                </h2>
                <p>
                  We are always on the lookout for talented individuals who are
                  enthusiastic about making a difference. Explore our career
                  opportunities and join us in our mission to help people
                  achieve their health and wellness goals.
                </p>
              </div>

              <button className="px-5 py-3 bg-lime-300 rounded hover:bg-lime-400 duration-150 font-semibold sm:text-lg w-full lg:w-auto z-10">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TeamCTA;
