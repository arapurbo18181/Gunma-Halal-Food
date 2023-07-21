import React, { useEffect, useRef, useState } from "react";
import { useApi } from "../context/ApiContext";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const UserProfile = () => {
  const { UserImage, setUserImage, UserData, States,
    UserProfile, 
    setUserProfile,
    updateProfile } = useApi();
  const [ShowState, setShowState] = useState(false);
  const ref = useRef();

  // const handleSubmit = (e) => {
  //   e.PreventDefault();
  //   setUserImage(Image);
  // };

  useEffect(() => {
    setUserProfile({
      image: "",
      first_name: UserData.name,
      last_name: UserData.last_name,
      email: UserData.email,
      phone: UserData.phone,
      state: UserData.state,
      city: UserData.city,
      zip_code: UserData.zip
    })
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowState(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <section className="w-full h-full flex justify-center items-center mb-20">
      <form onSubmit={updateProfile} className="w-full h-full">
        <div className="flex justify-center my-5 text-2xl md:text-4xl font-bold">
          <h1>Your Profile</h1>
        </div>
        <div className="px-2 md:px-10">
          {/* <div className="flex flex-col items-start my-4 w-full">
            <label htmlFor="email">Image</label>
            <input
              onChange={e=>setUsersImage(e.target.files[0])}
              className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
              type="file"
              name="image"
              id="image"
              // required
            />
          </div> */}
          <div className="flex justify-start items-center">
            <div className="flex flex-col items-start my-4 w-full">
              <label htmlFor="email">First Name</label>
              <input
              onChange={e=>setUserProfile({...UserProfile ,first_name:e.target.value})}
                value={UserProfile.first_name}
                className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                type="text"
                name="name"
                placeholder="Enter Your First Name"
                id="first_name"
                required
              />
            </div>
            <div className="flex flex-col items-start my-4 w-full ml-4">
              <label htmlFor="email">Last Name</label>
              <input
              onChange={e=>setUserProfile({...UserProfile ,last_name:e.target.value})}
                value={UserProfile.last_name}
                className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                type="text"
                name="last_name"
                placeholder="Enter Your Last Name"
                id="name"
                required
              />
            </div>
          </div>
          <div className="flex flex-col items-start my-4 w-full">
            <label htmlFor="email">Email</label>
            <input
              // onChange={e=>setInfo({...Info ,email:e.target.value})}
              value={UserProfile.email}
              className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              id="email"
              required
              readOnly
            />
          </div>
          <div className="flex flex-col items-start my-4 w-full">
            <label htmlFor="phone">Phone</label>
            <input
              onChange={e=>setUserProfile({...UserProfile ,phone:e.target.value})}
              value={UserProfile.phone}
              className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
              type="number"
              name="phone"
              placeholder="Enter Your phone number"
              id="phone"
              required
            />
          </div>

          <div className="flex flex-col items-start my-4 relative">
            <label htmlFor="state">State</label>
            <div
              onClick={(e) => setShowState(true)}
              className="w-full flex justify-between items-center px-4 bg-gray-100 py-2 cursor-pointer"
            >
              <h2>
                {UserProfile.state ? UserProfile.state : "Select State"}
              </h2>{" "}
              <MdOutlineKeyboardArrowDown />
            </div>
            {ShowState ? (
              <div ref={ref} className="absolute w-full top-16">
                <input
                  onChange={(e) => {
                    setUserProfile({
                      ...UserProfile,
                      state: e.target.value,
                    });
                  }}
                  value={UserProfile.state}
                  autoComplete="off"
                  className="w-full rounded-md bg-white px-3 py-2 text-sm md:text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                  type="text"
                  name="state"
                  placeholder="Enter Your State"
                  id="state"
                  required
                />
                <div className="w-full h-[200px] bg-white z-10 overflow-y-auto border shadow-md">
                  {States.map((item, i) => {
                    return (
                      <div key={i}
                        onClick={(e) => {
                          setUserProfile({
                            ...UserProfile,
                            state: item.name,
                          });
                          setShowState(false);
                        }}
                        className="border-b px-2 py-2 cursor-pointer hover:bg-gray-200"
                      >
                        <h2>{item.name}</h2>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="flex flex-col items-start my-4 w-full">
            <label htmlFor="city">City</label>
            <input
                onChange={e=>setUserProfile({...UserProfile ,city:e.target.value})}
              value={UserProfile.city}
              className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
              type="text"
              name="city"
              placeholder="Enter Your city"
              id="city"
              required
            />
          </div>
          <div className="flex justify-start items-center">
            <div className="flex flex-col items-start my-4 w-full">
              <label htmlFor="postcode">Zip Code</label>
              <input
                onChange={e=>setUserProfile({...UserProfile ,zip_code:e.target.value})}
                value={UserProfile.zip_code}
                className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner border-2 border-gray-100"
                type="number"
                name="zipcode"
                placeholder="Enter Your Zip Code"
                id="zipcode"
                required
              />
            </div>
          </div>
          <div className="w-full flex text-sm sm:text-xl justify-center my-4">
            <button
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
