import React, { useState } from "react";

import { Rate } from "antd";
import { useApi } from "../context/ApiContext";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ProductReviews = ({ product }) => {
  const navigate = useNavigate()
  const { Reviews, setReviews, IsReview, setIsReview, User, AllReviews, setAllReviews } = useApi();

  const handleReview = (e) => {
    e.preventDefault();
    if (User) {
      const data = {
        review: Reviews.review,
        rating: Reviews.rating,
        product_id: product.id,
        token: JSON.parse(localStorage.getItem("token"))
      };
      axios.get("/sanctum/csrf-cookie").then((response) => {
        axios
          .post(`/api/product/reviews/management/review`, data,{
            headers:{
              Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
            }
          })
          .then((res) => {
            console.log(res);
            setIsReview(!IsReview);
          });
      });
      console.log(Reviews);
      setReviews({
        rating: 0,
        review: "",
      });
    }else{
      // alert("Plz Login first")
      Swal.fire({
        icon: 'error',
        title: 'Please Login first',
        // text: 'Something went wrong!',
        // footer: '<a href="">Why do I have this issue?</a>'
      })
      setReviews({
        rating: 0,
        review: "",
      });
      navigate("/login")
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-start items-start w-full space-x-4">
      {/* //! Users review */}
      <form
        onSubmit={handleReview}
        className="flex flex-col justify-start items-start w-full"
      >
        <div className="flex justify-center my-5 text-4xl font-bold text-center w-full">
          <h1>Your Review</h1>
        </div>
        <div>
          <div>
            <h2>Your Rating</h2>
          </div>
          <div>
            <Rate
              onChange={(value) => setReviews({ ...Reviews, rating: value })}
              allowHalf
              style={{ color: "red" }}
              allowClear={false}
            />
          </div>
        </div>
        <div className="flex flex-col items-start my-4 w-full">
          <label htmlFor="address">Your Review</label>
          <textarea
            onChange={(e) => setReviews({ ...Reviews, review: e.target.value })}
            value={Reviews.review}
            className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner"
            type="text"
            name="review"
            placeholder="Enter Your Review"
            id="review"
            required
          />
        </div>
        <div className="w-full flex text-sm sm:text-xl justify-center my-4">
          <button className="w-1/3 bg-red-500 px-2 sm:px-4 text-white py-2 rounded-full hover:bg-red-600 transition-all duration-300">
            Submit
          </button>
        </div>
      </form>
      {/* //! Others Review */}
      <div className="flex flex-col justify-start items-start w-full">
        <div className="flex justify-center my-5 text-4xl font-bold text-center w-full">
          <h1>Reviews</h1>
        </div>
        <div className="space-y-2 w-full h-[40vh] overflow-auto">
          {product.reviews.map((review, index) => {
            return (
              <div
                key={index}
                className="border w-[100%] py-2 px-4 flex flex-col justify-start items-start space-y-4"
              >
                <div className="flex justify-start items-center space-x-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden">
                    <img
                      className="scale-100"
                      src="https://thumbs.dreamstime.com/b/man-portrait-young-happy-man-smiling-face-male-model-blue-shirt-crossed-arms-pose-violet-background-guy-casual-fashion-187062144.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <h2> {review.get_user.name} </h2>
                  </div>
                </div>
                <div>
                  <div>
                    <p>{review.review}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;
