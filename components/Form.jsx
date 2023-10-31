import React from "react";

function Form() {
  return (
    <form className="space-y-5">
      <div className="flex flex-col items-center space-y-4 md:space-x-4 md:flex-row md:space-y-0">
        <div className="flex flex-col w-full space-y-1">
          <label htmlFor="fullName" className="text-lg font-semibold">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="Full Name"
            autoComplete="off"
            placeholder="Enter your Name"
            className="w-full h-12 border border-lime-300 rounded-sm outline-none px-4 text-lg font-medium"
          />
        </div>
        <div className="flex flex-col w-full space-y-1">
          <label htmlFor="email" className="text-lg font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="Email"
            autoComplete="off"
            placeholder="Enter your Email"
            className="w-full h-12 border border-lime-300 rounded-sm outline-none px-4 text-lg font-medium"
          />
        </div>
      </div>

      <div className="flex flex-col w-full space-y-1">
        <label htmlFor="phoneNumber" className="text-lg font-semibold">
          Phone Number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="Phone Number"
          autoComplete="off"
          placeholder="Enter your Number"
          className="w-full h-12 border border-lime-300 rounded-sm outline-none px-4 text-lg font-medium"
        />
      </div>

      <div className="flex flex-col w-full space-y-1">
        <label htmlFor="message" className="text-lg font-semibold">
          Message
        </label>
        <textarea
          name="Message"
          id="message"
          cols="30"
          rows="5"
          placeholder="Message"
          className="w-full h-full border border-lime-300 rounded-sm outline-none p-4 text-lg font-medium"
        />
      </div>

      <button
        type="button"
        className="bg-lime-300 w-full h-14 rounded-sm text-lg font-semibold hover:bg-lime-400 duration-200">
        Send Message
      </button>
    </form>
  );
}

export default Form;
