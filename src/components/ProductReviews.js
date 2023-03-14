import React from "react";

import { Rate } from "antd";

const ProductReviews = () => {
  return (
    <div className="flex flex-col md:flex-row justify-start items-start w-full space-x-4">
      {/* //! Users review */}
      <div className="flex flex-col justify-start items-start w-full">
        <div className="flex justify-center my-5 text-4xl font-bold text-center w-full">
          <h1>Your Review</h1>
        </div>
        <div>
        <div>
            <h2>Your Rating</h2>
        </div>
          <div>
            <Rate
              onChange={(value) => console.log(value)}
              allowHalf
              style={{ color: "red" }}
              allowClear={false}
            />
          </div>
        </div>
        <div className="flex flex-col items-start my-4 w-full">
          <label htmlFor="address">Your Review</label>
          <textarea
            className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner"
            type="text"
            name="review"
            placeholder="Enter Your Review"
            id="review"
            required
          />
        </div>
        <div className="flex justify-start items-center w-full">
          <div className="flex flex-col items-start my-4 w-full">
            <label htmlFor="email">Name</label>
            <input
              className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner"
              type="text"
              name="name"
              placeholder="Enter Your Name"
              id="name"
              required
            />
          </div>
          <div className="flex flex-col items-start my-4 w-full ml-4">
            <label htmlFor="email">Email</label>
            <input
              className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              id="email"
              required
            />
          </div>
        </div>
        <div className="w-full flex text-sm sm:text-xl justify-center my-4">
          <button className="w-1/3 bg-red-500 px-2 sm:px-4 text-white py-2 rounded-full hover:bg-red-600 transition-all duration-300">
            Submit
          </button>
        </div>
      </div>
      {/* //! Others Review */}
      <div className="flex flex-col justify-start items-start w-full">
        <div className="flex justify-center my-5 text-4xl font-bold text-center w-full">
          <h1>Reviews</h1>
        </div>
        <div className="space-y-2">
          <div className="border w-full py-2 px-4 flex flex-col justify-start items-start space-y-4">
            <div className="flex justify-start items-center space-x-4">
              <div className="h-16 w-16 rounded-full overflow-hidden">
                <img
                  className="scale-100"
                  src="https://thumbs.dreamstime.com/b/man-portrait-young-happy-man-smiling-face-male-model-blue-shirt-crossed-arms-pose-violet-background-guy-casual-fashion-187062144.jpg"
                  alt=""
                />
              </div>
              <div>
                <h2>John Smith</h2>
              </div>
            </div>
            <div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci in libero culpa temporibus, voluptatum voluptas
                  molestiae unde error quo sed?
                </p>
              </div>
            </div>
          </div>
          <div className="border w-full py-2 px-4 flex flex-col justify-start items-start space-y-4">
            <div className="flex justify-start items-center space-x-4">
              <div className="h-16 w-16 rounded-full overflow-hidden">
                <img
                  className="scale-100"
                  src="https://thumbs.dreamstime.com/b/man-portrait-young-happy-man-smiling-face-male-model-blue-shirt-crossed-arms-pose-violet-background-guy-casual-fashion-187062144.jpg"
                  alt=""
                />
              </div>
              <div>
                <h2>John Smith</h2>
              </div>
            </div>
            <div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci in libero culpa temporibus, voluptatum voluptas
                  molestiae unde error quo sed?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;
