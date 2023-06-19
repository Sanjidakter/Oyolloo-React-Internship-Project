import React, { useState } from "react";

const Features = () => {
  const [expanded, setExpanded] = useState({
    1: false,
    2: false,
    3: false,
  });

  const toggleContent = (boxId) => {
    setExpanded((prevState) => ({
      ...prevState,
      [boxId]: !prevState[boxId],
    }));
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-wrap ">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-orange-400">-Features</h2>
          <p className="font-space-grotesk font-bold text-4xl text-gray-900 leading-10 tracking-tight mb-4">Solve your business <br /> problems with our experts</p>
          <div className="space-y-4">
            <div className="border border-gray-300 rounded p-4">
              <div className="flex items-center justify-between">
                <p className="font-bold">Investing in Digital Company</p>
                <span
                  className={`cursor-pointer ${
                    expanded[1] ? "text-red-500" : "text-blue-500"
                  }`}
                  onClick={() => toggleContent(1)}
                >
                  {expanded[1] ? "-" : "+"}
                </span>
              </div>
              {expanded[1] && (
                <div className="mt-2">
                  Through our Connected Content™ approach, we unite
                  communications, digital experiences, and performance marketing
                  to help more than 1600 global companies.
                </div>
              )}
            </div>
            <div className="border border-gray-300 rounded p-4">
              <div className="flex items-center justify-between">
                <p className="font-bold">Building the idea of future</p>
                <span
                  className={`cursor-pointer ${
                    expanded[2] ? "text-red-500" : "text-blue-500"
                  }`}
                  onClick={() => toggleContent(2)}
                >
                  {expanded[2] ? "-" : "+"}
                </span>
              </div>
              {expanded[2] && (
                <div className="mt-2">
                  Content for "Building the idea of future"
                </div>
              )}
            </div>
            <div className="border border-gray-300 rounded p-4">
              <div className="flex items-center justify-between">
                <p className="font-bold">Accurate and friendly support</p>
                <span
                  className={`cursor-pointer ${
                    expanded[3] ? "text-red-500" : "text-blue-500"
                  }`}
                  onClick={() => toggleContent(3)}
                >
                  {expanded[3] ? "-" : "+"}
                </span>
              </div>
              {expanded[3] && (
                <div className="mt-2">
                  Content for "Accurate and friendly support"
                </div>
              )}
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-8 rounded">
            Discover More
          </button>
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0 ">
          <p className="mt-2 mb-8">
            Business consultants provide management consulting to help
            businesses and organizations improve performance and efficiency.
          </p>
          <img
            src="/src/assets/feature.png"
            alt="Image"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
