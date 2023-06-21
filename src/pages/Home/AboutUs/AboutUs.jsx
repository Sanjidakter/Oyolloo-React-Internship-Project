import React, { useState } from "react";
import playi1 from "../../../assets/Play icon1.png";
import about from "../../../assets/about.png";

const AboutUs = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="bg-gray-100 py-8 mt-32">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 p-8" style={{ background: "#FFF5DA" }}>
          <div className="relative">
            <div className="flex flex-col ">
              <div className="flex items-center mb-4">
                {!isPopupOpen && (
                  <button
                    onClick={openPopup}
                    className="bg-transparent border-none outline-none cursor-pointer"
                  >
                    <img src={playi1} alt="Play Button" />
                  </button>
                )}
                {isPopupOpen && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <div className="relative">
                      <button
                        onClick={closePopup}
                        className="absolute top-0 right-0 p-4 text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6"
                        >
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </button>
                      <iframe
                        src="https://www.youtube.com/watch?v=7b1qBE_Icbw"
                        title="YouTube Video"
                        width="560"
                        height="315"
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}
                <p className="text-black font-bold py-2 px-4 rounded ">
                  More <br /> About CP
                </p>
              </div>
            </div>

            <img
              src={about}
              alt="Company Image"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              {!isPopupOpen && (
                <button
                  onClick={openPopup}
                  className="bg-transparent border-none outline-none cursor-pointer"
                >
                  <img src={playi1} alt="Play Button" />
                </button>
              )}
              {isPopupOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                  <div className="relative">
                    <button
                      onClick={closePopup}
                      className="absolute top-0 right-0 p-4 text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                    <iframe
                      src="https://www.youtube.com/watch?v=7b1qBE_Icbw"
                      title="YouTube Video"
                      width="560"
                      height="315"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h2 className="font-bold  mb-4 text-red-600">
            -About Us
          </h2>
          <h2 className="text-black mb-4 font-space-grotesk font-bold text-4xl leading-tight">
            We are aware for our <br /> quality to successful <br /> business. 
          </h2>
          <p>Learn how to start your own business consulting firm. Effective strategies for business consultants and things to consider before becoming a consultant</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <hr className="mb-4 md:mb-8" />
              <h3 className="text-2xl md:text-4xl font-bold text-orange-500">
                2760+
              </h3>
              <p className="text-orange-500">Total Customers</p>
            </div>
            <div className="text-center">
              <hr className="mb-4 md:mb-8" />
              <h3 className="text-2xl md:text-4xl font-bold text-orange-500">
                25+
              </h3>
              <p className="text-orange-500">Years Experience</p>
            </div>
            <div className="text-center">
              <hr className="mb-4 md:mb-8" />
              <h3 className="text-2xl md:text-4xl font-bold text-orange-500">
                328+
              </h3>
              <p className="text-orange-500">Team Members</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
