import React, { useState } from "react";
import "./ClientSatisfaction.css";

const ClientSatisfaction = () => {
  const [showVideo, setShowVideo] = useState(false);

  const playVideo = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  return (
    <div className="mt-16 flex flex-col ">
      <div className="flex ">
        <p
          style={{
            fontFamily: "Space Grotesk",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "54px",
            lineHeight: "62px",
            letterSpacing: "-0.02em",
            color: "#0F0F0F",
          }}
        >
          Our Client Says Their <br /> Satisfaction
        </p>
        <button
          style={{
            width: "150px",
            height: "50px",
            background: "#495AF0",
          }}
          className="mt-4 mx-auto"
        >
          Discover More
        </button>
      </div>
      <div className="mt-4 ">
        <div className="flex justify-center">
          <div className="flex flex-wrap -mx-2">
            <div className="w-1/2 px-2">
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
                  ) :(
                    <div className="thumbnail-container" onClick={playVideo}>
                      <img
                        src="/src/assets/cs1.png"
                        alt="Image 1"
                        className="object-cover object-center w-full h-full"
                      />
                      <img
                        src="/src/assets/Play Icon.png"
                        alt="Play Icon"
                        className="play-icon"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="w-1/2 px-2">
              <div className="aspect-w-2 aspect-h-1">
                <img
                  src="/src/assets/cs2.png"
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
