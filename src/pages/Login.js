import React, { useState } from 'react'

const Login = () => {
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();

  const login = () =>{

  }

  return (
    <section className="bg-[#f9fafb] w-[100%] h-[90vh] flex justify-center items-center">
    <form
      onSubmit={login}
      className="w-[500px] h-[500px] bg-white drop-shadow-2xl rounded-lg border border-emerald-300"
    >
      <div className="flex justify-center my-5 text-4xl font-bold">
        <h1>Log In</h1>
      </div>
      <div className="px-10">
        <div className="flex flex-col items-start my-4">
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={Email}
            className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-emerald-500 my-1 shadow-inner"
            type="email"
            name="email"
            placeholder="Enter Your Email"
            id=""
            required
          />
        </div>
        <div className="flex flex-col items-start my-4">
          <label htmlFor="passsword">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={Password}
            className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-emerald-500 my-1 shadow-inner"
            type="password"
            name="password"
            placeholder="Enter Your Password"
            id=""
            required
          />
        </div>
        <div className="flex justify-end">
          <h2 className="cursor-pointer">Forgot Your Password?</h2>
        </div>
        <div className="w-full flex justify-center my-4">
          <button className="w-full bg-emerald-500 text-white py-2 rounded-full hover:bg-emerald-600 transition-all duration-300">
            Log In
          </button>
        </div>
      </div>
    </form>
  </section>
  )
}

export default Login