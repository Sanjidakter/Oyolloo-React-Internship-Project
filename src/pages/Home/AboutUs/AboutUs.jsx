import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-8 mt-32">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 p-8" style={{ background: "#FFF5DA" }}>
          <img src="/src/assets/about.png" alt="Company Image" className="w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-400">-About Us</h2>
          <p className="text-gray-700 mb-4">
            We are aware for our quality to successful business. Learn how to start your own business consulting firm.
            Effective strategies for business consultants and things to consider before becoming a consultant.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <hr className="mb-4 md:mb-8" />
              <h3 className="text-2xl md:text-4xl font-bold text-orange-500">2760+</h3>
              <p className="text-orange-500">Total Customers</p>
            </div>
            <div className="text-center">
              <hr className="mb-4 md:mb-8" />
              <h3 className="text-2xl md:text-4xl font-bold text-orange-500">25+</h3>
              <p className="text-orange-500">Years Experience</p>
            </div>
            <div className="text-center">
              <hr className="mb-4 md:mb-8" />
              <h3 className="text-2xl md:text-4xl font-bold text-orange-500">328+</h3>
              <p className="text-orange-500">Team Members</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
