import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 px-4">
          <h2
            className="text-3xl text-red-600 font-bold mb-8"
           
          >
            - Our Services
          </h2>
          <p
           style={{
            fontFamily: "Space Grotesk",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: " 50px",
            lineHeight: "62px",
            /* or 124% */

            letterSpacing: "-0.02em",

            /* P/2 */

            color: "#0F0F0F",
          }}
          >Providing all Console Solution</p>
          <p className="mb-9">
            Business consultants provide management consulting to help
            businesses organizations improve performance and efficiency.
          </p>
          <div className="flex items-center mt-4">
            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold mr-2">
              98%
            </div>
            <p className="text-gray-700">Satisfaction rate</p>
          </div>
          <div className="flex items-center mt-4">
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-2">
              25M
            </div>
            <p className="text-gray-700">Registered users</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
            <div className="border border-gray-300 rounded p-4">
              <img
                src="/src/assets/analysis.png"
                alt="Image 1"
                className="w-20 h-20"
              />
              <h3 className="text-xl font-bold mt-2">Title 1</h3>
              <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum scelerisque, nunc et imperdiet vestibulum, lectus sem
                facilisis nisl.
              </p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Read More
              </button>
            </div>
            <div className="border border-gray-300 rounded p-4">
              <img
                src="/src/assets/analysis2.png"
                alt="Image 2"
                className="w-20 h-20"
              />
              <h3 className="text-xl font-bold mt-2">Title 2</h3>
              <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum scelerisque, nunc et imperdiet vestibulum, lectus sem
                facilisis nisl.
              </p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Read More
              </button>
            </div>
            <div className="border border-gray-300 rounded p-4">
              <img
                src="/src/assets/management.png"
                alt="Image 3"
                className="w-20 h-20"
              />
              <h3 className="text-xl font-bold mt-2">Title 3</h3>
              <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum scelerisque, nunc et imperdiet vestibulum, lectus sem
                facilisis nisl.
              </p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Read More
              </button>
            </div>
            <div className="border border-gray-300 rounded p-4">
              <img
                src="/src/assets/support.png"
                alt="Image 4"
                className="w-20 h-20"
              />
              <h3 className="text-xl font-bold mt-2">Title 4</h3>
              <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum scelerisque, nunc et imperdiet vestibulum, lectus sem
                facilisis nisl.
              </p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
