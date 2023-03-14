import React from 'react'

const UserSettings = () => {
  return (
    <section className="w-[100%] h-[100%] flex justify-center items-center">
      <form className="w-[1000px] h-[550px]">
        <div className="flex justify-center my-5 text-4xl font-bold">
          <h1>Change Password</h1>
        </div>
        <div className="px-10">
          <div className="flex flex-col items-start my-4">
            <label htmlFor="email">Old Password</label>
            <input
              className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner"
              type="password"
              name="password"
              placeholder="Old Password"
              id="password"
              required
            />
          </div>
          <div className="flex flex-col items-start my-4">
            <label htmlFor="email">New Password</label>
            <input
              className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner"
              type="password"
              name="new password"
              placeholder="New Password"
              id="new password"
              required
            />
          </div>
          <div className="flex flex-col items-start my-4">
            <label htmlFor="passsword">Confirm Password</label>
            <input
              className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner"
              type="password"
              name="confirm password"
              placeholder="Confirm Password"
              id="confirm password"
              required
            />
          </div>
          <div className="w-full flex justify-center my-4">
            <button className="w-full bg-red-500 text-white py-2 rounded-full hover:bg-red-600 transition-all duration-300">
              Submit
            </button>
          </div>
        </div>
      </form>
      <div></div>
    </section>
  )
}

export default UserSettings