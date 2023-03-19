import axios from "axios";
import React, { useEffect, useState } from "react";
import { useProduct } from "../context/ProductContext";

const Signup = () => {

  const {Register, setRegister} = useProduct();

  const signUp = (e) => {
    e.persist();
    setRegister({ ...Register, [e.target.name]: [e.target.value] });
  };
  useEffect(() => {
    // axios.get('/sanctum/csrf-cookie').then(response => {
      axios.get(`http://localhost:8000/api/`).then((res) => {
    
        console.log(res.data)
      //   // if (res.status === 200) {
      //   // }else{
      //   //   setRegister({...Register, error_list: res.data.validation_erros});
      //   // }
    
      });
      // const data = async ()=> {
      //   await fetch("http://localhost:8000/api/").then(res=>res.json()).then(data=>{console.log(data)})
      // }
      // data();
  // });
    // axios.get("/sanctum/csrf-cookie").then((response) => {
    // });
  }, [])
  

  const registerSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: Register.name,
      email: Register.email,
      password: Register.password,
    };
    axios.get("/sanctum/csrf-cookie").then((response) => {
      axios.get(`http://localhost:8000/api/`).then((res) => {

        console.log(res.data)
        if (res.status === 200) {
        }else{
          setRegister({...Register, error_list: res.data.validation_erros});
        }

      });
    });
  };
  return (
    <section className="bg-[#f9fafb] w-[100%] h-[90vh] flex justify-center items-center">
      <form
        onSubmit={registerSubmit}
        className="w-[500px] h-[500px] bg-white drop-shadow-2xl rounded-lg border border-red-300 container"
      >
        <div className="flex justify-center my-5 text-4xl font-bold">
          <h1>Sign Up</h1>
        </div>
        <div className="px-10">
          <div className="flex flex-col items-start my-4">
            <label htmlFor="email">Name</label>
            <input
              onChange={signUp}
              value={Register.name}
              className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner"
              type="text"
              name="name"
              placeholder="Enter Your Name"
              id="name"
              required
            />
            <span> {Register.error_list.name} </span>
          </div> 
          <div className="flex flex-col items-start my-4">
            <label htmlFor="email">Email</label>
            <input
              onChange={signUp}
              value={Register.email}
              className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              id="email"
              required
            />
            <span> {Register.error_list.email} </span>
          </div>
          <div className="flex flex-col items-start my-4">
            <label htmlFor="passsword">Password</label>
            <input
              onChange={signUp}
              value={Register.password}
              className="w-full rounded-md bg-white px-3 py-2 text-lg outline-none transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-0 focus:outline-red-500 my-1 shadow-inner"
              type="password"
              name="password"
              placeholder="Enter Your Password"
              id="password"
              required
            />
            <span> {Register.error_list.password} </span>
          </div>
          <div className="w-full flex justify-center my-4">
            <button className="w-full bg-red-500 text-white py-2 rounded-full hover:bg-red-600 transition-all duration-300">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Signup;
