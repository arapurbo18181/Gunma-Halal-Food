import React, { useEffect, useState } from "react";
import { useApi } from "../context/ApiContext";

const UserProfile = () => {
  const { UserImage, setUserImage } = useApi();
  // const [Image, setImage] = useState();

  // const handleSubmit = (e) => {
  //   e.PreventDefault();
  //   setUserImage(Image);
  // };

  // useEffect(() => {
  //   console.log(Image);
  // }, [UserImage, Image]);

  return (
    <section className="w-[100%] h-[100%] flex justify-center items-center">
      <form className="w-[1000px] h-[550px]">
        <div className="flex justify-center my-5 text-4xl font-bold">
          <h1>Your Profile</h1>
        </div>
        <div className="px-10">
        <div className="flex flex-col items-start my-4 w-full">
              <label htmlFor="email">Image</label>
              <input
                // onChange={e=>setInfo({...Info ,myName:e.target.value})}
                // value={Info.myName}
                className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                type="file"
                name="image"
                id="image"
                required
              />
            </div>
          <div className="flex justify-start items-center">
            <div className="flex flex-col items-start my-4 w-full">
              <label htmlFor="email">First Name</label>
              <input
                // onChange={e=>setInfo({...Info ,myName:e.target.value})}
                // value={Info.myName}
                className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                type="text"
                name="name"
                placeholder="Enter Your Name"
                id="name"
                required
              />
            </div>
            <div className="flex flex-col items-start my-4 w-full ml-4">
              <label htmlFor="email">Last Name</label>
              <input
                // onChange={e=>setInfo({...Info ,email:e.target.value})}
                // value={Info.email}
                className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                type="text"
                name="name"
                placeholder="Enter Your Email"
                id="name"
                required
              />
            </div>
          </div>
            <div className="flex flex-col items-start my-4 w-full">
              <label htmlFor="email">Email</label>
              <input
                // onChange={e=>setInfo({...Info ,email:e.target.value})}
                // value={Info.email}
                className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                id="email"
                required
              />
            </div>
          <div className="flex flex-col items-start my-4">
            <label htmlFor="address">Street</label>
            <textarea
              // onChange={e=>setInfo({...Info ,address:e.target.value})}
              // value={Info.address}
              className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
              type="text"
              name="street"
              placeholder="Enter Your Address"
              id="street"
              required
            />
          </div>

          <div className="flex justify-start items-center">
            <div className="flex flex-col items-start my-4 w-full">
              <label htmlFor="phone">Phone</label>
              <input
                // onChange={e=>setInfo({...Info ,phoneNumber: parseInt(e.target.value)})}
                // value={Info.phoneNumber}
                className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                type="number"
                name="phone"
                placeholder="Enter Your phone number"
                id="phone"
                required
              />
            </div>
            <div className="flex flex-col items-start my-4 w-full ml-4">
              <label htmlFor="city">City</label>
              <input
                // onChange={e=>setInfo({...Info ,city:e.target.value})}
                // value={Info.city}
                className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                type="text"
                name="city"
                placeholder="Enter Your city"
                id="city"
                required
              />
            </div>
          </div>
          <div className="flex justify-start items-center">
            <div className="flex flex-col items-start my-4 w-full">
              <label htmlFor="district">Country</label>
              <input
                // onChange={e=>setInfo({...Info ,district:e.target.value})}
                // value={Info.district}
                className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                type="text"
                name="country"
                placeholder="Enter Your district"
                id="country"
                required
              />
            </div>
            <div className="flex flex-col items-start my-4 w-full ml-4">
              <label htmlFor="postcode">Post Code</label>
              <input
                // onChange={e=>setInfo({...Info ,postCode:parseInt(e.target.value)})}
                // value={Info.postCode}
                className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                type="number"
                name="postcode"
                placeholder="Enter Your postcode"
                id="postcode"
                required
              />
            </div>
          </div>
          <div className="w-full flex text-sm sm:text-xl justify-center my-4">
            <button
              // onClick={handleSubmit}
              className="w-full bg-red-500 px-2 sm:px-4 text-white py-2 rounded-full hover:bg-red-600 transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <div></div>
    </section>
  );
};

export default UserProfile;
