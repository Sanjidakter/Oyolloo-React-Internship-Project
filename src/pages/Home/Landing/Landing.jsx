import React from "react";

const Landing = () => {
  return (
    <div>
     <div className="container mx-auto">
  <div className="flex flex-col md:flex-row">
    <div className="w-full md:w-1/2 p-8 md:order-1">
      <h2 className="text-7xl font-bold mb-4">
        <span style={{ color: "#FD9C06" }}>Hire consultant</span> <br />
        for boost your business
      </h2>
      <p className="text-lg mb-8">
        Consultancy firm established by professionals with the intention
        to identify and unlock potential avenues for innovative ideas
      </p>
      <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
        Discover More
      </button>
      <img
        className="mt-8 md:hidden"
        style={{ width: "372.11px", height: "66.61px" }}
        src="/src/assets/Five Star Review.png"
        alt=""
      />
    </div>
    <div className="w-full md:w-1/2 md:order-2">
      <div className="flex flex-col">
        <img
          className="hidden md:block"
          style={{ width: "520px", height: "618px" }}
          src="/src/assets/person.jpg"
          alt=""
        />
        <img
          className="w-full h-auto md:hidden"
          src="/src/assets/person.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</div>


      <div className="allLogo">
        <img
          className="mt-8"
          style={{ width: "1200px", height: "100px" }}
          src="/src/assets/All Logo.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Landing;
