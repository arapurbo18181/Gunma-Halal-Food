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
  <footer className="text-gray-600 body-font mb-20 xl:mb-0">
    <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <div className="w-full bg-gray-100 px-2 py-1 rounded-xl">
          <img src={Logo} alt="Main Logo" className="" />
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Fresh groceries delivered straight to your door, shop now and save
          time!
        </p>
      </div>
      <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-base mb-3">
            <span className="underline decoration-red-500 underline-offset-8">
              Co
            </span>
            ntact Info
          </h2>
          <nav className="list-none mb-10">
            <li>
              <Link
                to={"/contact"}
                className="text-gray-600 hover:text-gray-800"
              >
                Contact Us
              </Link>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-base mb-3">
            <span className="underline decoration-red-500 underline-offset-8">
              Ab
            </span>
            out
          </h2>
          <nav className="list-none mb-10">
            <li>
              <Link to={"/about"} className="text-gray-600 hover:text-gray-800">
                About Us
              </Link>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-base mb-3">
            <span className="underline decoration-red-500 underline-offset-8">
              Us
            </span>
            eful Links
          </h2>
          <nav className="list-none mb-10">
            <li>
              <Link
                to={"/shippingpolicy"}
                className="text-gray-600 hover:text-gray-800"
              >
                Shipping Policy
              </Link>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-base mb-3">
            <span className="underline decoration-red-500 underline-offset-8">
              So
            </span>
            cial Links
          </h2>
          <nav className="list-none mb-10">
            {" "}
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a
                href="https://www.facebook.com/gunmahalalfood/"
                target="_blank"
                className="text-gray-500"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/gunmahalalfood/"
                target="_blank"
                className="ml-3 text-gray-500"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
            </span>
          </nav>
        </div>
      </div>
    </div>
    <div className="">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-gray-500 text-sm text-center sm:text-left">
          © Copyright 2022 Reserved by Gunma Halal Food
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <h2>
            Design and developed by{" "}
            <a
              className="hover:underline hover:text-blue-500 underline-offset-2"
              target="_blank"
              href="https://softtech-it.com/"
            >
              SOFTTECH-IT
            </a>{" "}
          </h2>
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
