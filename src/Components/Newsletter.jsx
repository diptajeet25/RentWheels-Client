import React from "react";

const Newsletter = () => {
  return (
    <div className="w-[95%] lg:w-[80%] mx-auto my-16 p-10 bg-primary/10 rounded-2xl text-center">
      <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
        Subscribe to Our <span className="text-primary">Newsletter</span>
      </h2>
      <p className="text-gray-600 mb-6">
        Get the latest updates, offers, and car rental tips delivered directly
        to your inbox.
      </p>

      <form className="flex flex-col sm:flex-row justify-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="input input-bordered w-full sm:w-2/3 lg:w-1/2"
          required
        />
        <button
          type="submit"
          className="btn btn-primary w-full sm:w-auto"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
