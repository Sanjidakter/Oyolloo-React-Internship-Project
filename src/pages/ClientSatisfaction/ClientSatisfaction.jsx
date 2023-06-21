import React, { useState } from "react";
import "./ClientSatisfaction.css";
import { FaArrowUp, FaArrowRight } from "react-icons/fa";
import cs1 from "../../assets/cs1.png";
import cs2 from "../../assets/cs2.png";
import play from "../../assets/Play Icon.png";

const ClientSatisfaction = () => {
  const [showVideo, setShowVideo] = useState(false);

  const playVideo = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  return (
    <div className="mt-16 flex flex-col bg-yellow-50">
      <div className="flex flex-col md:flex-row p-5">
        <p className="font-space-grotesk font-semibold text-5xl leading-14 tracking-tighter text-black">
          Our Client Says Their <br /> Satisfaction
        </p>
        <button className="mt-4 md:mt-0 ml-auto p-3 bg-blue-500 text-white rounded h-14 md:h-66">
          <span className="flex items-center">
            Discover More
            <FaArrowRight className="ml-2 transform -rotate-45" />
          </span>
        </button>
      </div>
      <div className="mt-4 ">
        <div className="flex justify-center">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2">
              <div className="aspect-w-2 aspect-h-1">
                <div>
                  {showVideo ? (
                    <div className="video-popup">
                      <div className="video-overlay" onClick={closeVideo}></div>
                      <div className="video-wrapper">
                        <iframe
                          title="YouTube Video"
                          width="560"
                          height="315"
                          src="https://www.youtube.com/embed/Rh3tobg7hEo?autoplay=1"
                          frameBorder="0"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  ) : (
                    <div className="thumbnail-container" onClick={playVideo}>
                      <img
                        src={cs1}
                        alt="Image 1"
                        className="object-cover object-center w-full h-full"
                      />
                      <img
                        src={play}
                        alt="Play Icon"
                        className="play-icon"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-2">
              <div className="aspect-w-2 aspect-h-1">
                <img
                  src={cs2}
                  alt="Image 2"
                  className="object-cover object-center w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSatisfaction;
