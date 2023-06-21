import React from "react";
import { FaArrowUp, FaArrowRight } from "react-icons/fa";
import review from "../../../assets/Five Star Review.png";
import card1 from "../../../assets/card 01.png";
import card2 from "../../../assets/card 02.png";
import person from "../../../assets/person.jpg";
import alllogo from "../../../assets/All Logo.png";
import behance from "../../../assets/behance.png";
import dribbble from "../../../assets/dribbble.png";
import instagram from "../../../assets/instagram.png";
import stackoverflow from "../../../assets/stackoverflow.png";
import github from "../../../assets/github.png";
import bg from "../../../assets/bg-shape.png";
import Marquee from "react-fast-marquee";
import backgroundImg from "../../../assets/rectangle_bg.png";
import './Landing.css';

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
              <span style={{ display: "flex", alignItems: "center" }}>
                Discover More
                <FaArrowRight
                  style={{ marginLeft: "5px", transform: "rotate(-45deg)" }}
                />
              </span>
            </button>
            <img
              className="mt-8 "
              style={{ width: "372.11px", height: "66.61px" }}
              src={review}
              alt=""
            />
          </div>
          <div className="w-full md:w-1/2 md:order-2 mb-12">
            <div className="relative flex flex-col">
            <div className="md:w-full bg-rectangle">
            <img
                className="w-full h-auto absolute -top-8 -right-4 md:-top-12 md:-right-32 lg:-right-24 "
                style={{ width: "320px", height: "200px" }}
                src={card1}
                alt=""
              />
            <img
                className="w-full h-auto -bottom-28 -left-24  absolute md:-bottom-80 md:-left-24 lg:-bottom-24 lg:-left-24 "
                style={{ width: "300px", height: "308px" }}
                src={card2}
                alt=""
              />
              <img
                className="hidden md:block "
                // style={{ width: "520px", height: "618px" }}
                style={{
                  width: "520px",
                  height: "618px",
                }}
                src={person}
                alt=""
              />
              <img className="w-full h-auto md:hidden" src={person} alt="" />
            </div>
            
            </div>
          </div>
        </div>
      </div>

      <div className="relative mb-10 md:mb-0">
        <div className="container mx-auto">
          <Marquee gradient>
            <div className="md:p-10 lg:p-24 flex items-center gap-10 lg:gap-20">
              <img className="w-auto h-10" src={dribbble} alt="" />
              <img className="w-auto h-10" src={behance} alt="" />
              <img className="w-auto h-10" src={github} alt="" />
              <img className="w-auto h-10" src={instagram} alt="" />
              <img className="w-auto h-10" src={stackoverflow} alt="" />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Landing;
