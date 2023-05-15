import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useApi } from "../context/ApiContext";

const BreadCrumbs = ({name, url}) => {
  const location = useLocation();
  const {BreadCrumbs, setBreadCrumbs} = useApi()
  const to = url.split("/");
  // console.log(url);
  // console.log(to);

  let currentLink = ``;


  // console.log(BreadCrumbs)

  if (name) {
    const crumb = name.split("/").map((item, index) => {
      // console.log(to[index]);
      return (
        <li key={item}>
          <div className="flex items-center">
            <svg
              aria-hidden="true"
              className="w-6 h-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <Link
              // to={`${index === 0 ? `/${to[index]}` : `/${to[index - 1]}/${to[index]}`}`}
              to={`${ index === 2 ? `/${to[index - 2]}/${to[index - 1]}/${to[index]}` : `${index === 0 ? `/${to[index]}` : `/${to[index - 1]}/${to[index]}`}`}`}
              className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
            >
              {item}
            </Link>
          </div>
        </li>
      );
    });

    return (
      <nav
        className={`w-full flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                aria-hidden="true"
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Home
            </Link>
          </li>
          {crumb}
        </ol>
      </nav>
    );
  }
};

export default BreadCrumbs;
