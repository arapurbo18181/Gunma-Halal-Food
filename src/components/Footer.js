import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

const year = new Date().getFullYear();

const Footer = () => (
  // <footer className="mt-32 flex justify-center items-start mx-4">
  //   <div className="container xl:divide-y-2 divide-gray-300">
  //     <div className="flex flex-col justify-start items-start space-y-10 md:flex-row md:justify-center md:items-start md:space-x-20 py-32">
  //       {/*//! Branding  */}
  //       <div className="flex flex-1 flex-col space-y-8">
  //         {" "}
  // <div className="w-[200px]">
  //   <img src={Logo} alt="Main Logo" />
  // </div>
  //         <div className="flex flex-col space-y-4">
  //           <p className="w-[80%] text-lg">
  //             Fresh groceries delivered straight to your door, shop now and save
  //             time!
  //           </p>
  //           <div className="flex space-x-6">
  //             <FaFacebookSquare
  //               size={40}
  //               className="text-red-500 transition-all duration-300 hover:text-red-600"
  //             />
  //             <FaInstagramSquare
  //               size={40}
  //               className="text-red-500 transition-all duration-300 hover:text-red-600"
  //             />
  //             <FaTwitterSquare
  //               size={40}
  //               className="text-red-500 transition-all duration-300 hover:text-red-600"
  //             />
  //           </div>
  //         </div>
  //       </div>

  //       {/*//! Contact Info  */}
  //       <div className="flex flex-1 flex-col justify-start items-start space-y-8">
  //         <h1 className="text-2xl font-bold text-gray-700">
  //           <span className="underline decoration-red-500 underline-offset-8">
  //             Co
  //           </span>
  //           ntact Info
  //         </h1>
  //         <div className="flex flex-col space-y-2">
  //           <p className="flex space-x-4 text-lg">
  //             <FaPhone size={20} className="text-red-500" />{" "}
  //             <span>+880 123 456 789</span>
  //           </p>
  //           <p className="flex space-x-4 text-lg">
  //             <FaEnvelope size={20} className="text-red-500" />
  //             <span>gunmahalalfood@gmail.com</span>
  //           </p>
  //           <p className="flex space-x-4 text-lg">
  //             <MdLocationOn size={20} className="text-red-500" />{" "}
  //             <span>Tokyo, Japan</span>
  //           </p>
  //         </div>
  //       </div>

  //       {/*//! Company */}
  //       <div className="flex flex-1 flex-col space-y-8">
  //         <h1 className="text-2xl font-bold text-gray-700">
  //           <span className="underline decoration-red-500 underline-offset-8">
  //             Co
  //           </span>
  //           mpany
  //         </h1>
  //         <div className="flex flex-col space-y-2">
  //           <p>About Us</p>
  //           <p>All Products</p>
  //           <p>Terms & Conditions</p>
  //           <p>Privacy & Policy</p>
  //         </div>
  //       </div>

  //       {/*//! Quick Links*/}
  //       <div className="flex flex-1 flex-col space-y-8">
  //         <h1 className="text-2xl font-bold text-gray-700">
  //           <span className="underline decoration-red-500 underline-offset-8">
  //             Qu
  //           </span>
  //           ick Links
  //         </h1>
  //         <div className="flex flex-col space-y-2">
  //           <Link to="/about">About</Link>
  //           <Link to="/contact">Contact</Link>
  //           <Link to="/privacypolicy">Privacy Policy</Link>
  //           <Link to="/categories">Categories</Link>
  //         </div>
  //       </div>
  //     </div>

  //     <div className="flex justify-between py-8">
  //       <h4 className="text-sm font-semibold tracking-wide text-gray-500">
  //         All Rights Reserved &copy; Gunma Halal Food {year}
  //       </h4>
  //     </div>
  //   </div>
  // </footer>
  <footer class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <div className="w-full bg-gray-100 px-2 py-1 rounded-xl">
          <img src={Logo} alt="Main Logo" className="" />
        </div>
        <p class="mt-2 text-sm text-gray-500">
          Fresh groceries delivered straight to your door, shop now and save
          time!
        </p>
      </div>
      <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-semibold text-gray-900 tracking-widest text-base mb-3">
          <span className="underline decoration-red-500 underline-offset-8">
              Co
            </span>
            ntact Info
          </h2>
          <nav class="list-none mb-10">
            <li>
              <a class="text-gray-600 hover:text-gray-800">First Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Second Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Third Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
            </li>
          </nav>
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-semibold text-gray-900 tracking-widest text-base mb-3">
          <span className="underline decoration-red-500 underline-offset-8">
              Co
            </span>
            mpany
          </h2>
          <nav class="list-none mb-10">
            <li>
              <a class="text-gray-600 hover:text-gray-800">First Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Second Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Third Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
            </li>
          </nav>
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-base mb-3">
          <span className="underline decoration-red-500 underline-offset-8">
              Co
            </span>
            ntact Info
          </h2>
          <nav class="list-none mb-10">
            <li>
              <a class="text-gray-600 hover:text-gray-800">First Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Second Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Third Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
            </li>
          </nav>
        </div>
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-base mb-3">
            <span className="underline decoration-red-500 underline-offset-8">
              Qu
            </span>
            ick Links
          </h2>
          <nav class="list-none mb-10">
            <li>
              <a class="text-gray-600 hover:text-gray-800">First Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Second Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Third Link</a>
            </li>
            <li>
              <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
            </li>
          </nav>
        </div>
      </div>
    </div>
    <div class="">
      <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p class="text-gray-500 text-sm text-center sm:text-left">
          © 2023 — Gunma Halal Food
        </p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <a class="text-gray-500">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-500">
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
