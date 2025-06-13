import React from "react";
import { Link } from "react-router-dom";
import DownloadImage from "../Images/Download-rafiki.png";
import Mailpana from "../Images/Mail-pana.png";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* Hero Section */}
      <section className="flex flex-col-reverse sm:flex-row items-center justify-between px-4 sm:px-16 py-16">
        {/* Text */}
        <div className="text-center sm:text-left space-y-6 sm:max-w-md">
          <h2 className="text-4xl font-bold sm:text-5xl">
            Download Now
            <div className="text-4xl">Lorem Ipsum</div>
          </h2>

          <Link
            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
            to="/"
          >
            <svg
              fill="white"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
            </svg>
            &nbsp; Download now
          </Link>
        </div>

        {/* Image */}
        <div className="mb-10 sm:mb-0">
          <img src={DownloadImage} alt="Download illustration" className="w-80 sm:w-96 transition duration-300 ease-in-out hover:scale-105" />
        </div>
      </section>

      {/* Secondary Image */}
      <div className="grid place-items-center mt-10 sm:mt-20">
        <img src={Mailpana} alt="Mail illustration" className="w-48 sm:w-96 transition duration-300 ease-in-out hover:scale-105" />
      </div>

      {/* Footer */}
      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
        Lorem Ipsum Yojo
      </h1>
    </div>
  );
}
