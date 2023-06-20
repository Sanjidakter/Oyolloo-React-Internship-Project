import React from "react";
import "./Update.css";
import { FaEye, FaRegFileAlt, FaArrowRight } from "react-icons/fa";

const Update = () => {
  return (
    <div className="mt-16 mb-8">
      <h2
        style={{
          fontFamily: "Space Grotesk",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: " 50px",
          lineHeight: "62px",
          /* identical to box height, or 115% */
          marginBottom: "4%",
          textAlign: "center",
          letterSpacing: "-0.02em",

          color: "#0F0F0F",
        }}
      >
        Regular Get Update{" "}
      </h2>
      <div class="flex flex-wrap">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div className="image-container relative">
            <img
              className="card-image"
              src="/src/assets/card1.png"
              alt="Shoes"
            />
            <img
              className="small-image"
              src="/src/assets/Date.png"
              alt="Small Image"
            />
          </div>
          <div className="flex md:flex-row mt-3">
            <p className="mr-16 p-3">Consultant</p>
            <div className="ml-auto flex items-center p-3">
              <FaEye className="mx-2" /> 25
              <FaRegFileAlt className="mx-2" /> 32k
            </div>
          </div>
          <hr />
          <div class="card-body">
            <p>What is a business consultant?</p>
            <p>
              A business consultant is a professional with a wide array of
              skills who assists business owners{" "}
            </p>
            <div className="card-actions justify-start">
              <a href="" style={{ display: "flex", alignItems: "center" }}>
                Read More <FaArrowRight style={{ marginLeft: "5px" }} />
              </a>
            </div>
          </div>
        </div>

        <div class="card w-96 bg-base-100 shadow-xl gap-4">
          <div className="image-container relative">
            <img
              className="card-image"
              src="/src/assets/card2.png"
              alt="Shoes"
            />
            <img
              className="small-image"
              src="/src/assets/Date.png"
              alt="Small Image"
            />
          </div>
          <div className="flex md:flex-row mt-3">
            <p className="mr-16 p-3">Consultant</p>
            <div className="ml-auto flex items-center p-3">
              <FaEye className="mx-2" /> 25
              <FaRegFileAlt className="mx-2" /> 32k
            </div>
          </div>
          <hr />
          <div class="card-body">
            <p>What is a business consultant?</p>
            <p>
              A business consultant is a professional with a wide array of
              skills who assists business owners{" "}
            </p>
            <div className="card-actions justify-start">
              <a href="" style={{ display: "flex", alignItems: "center" }}>
                Read More <FaArrowRight style={{ marginLeft: "5px" }} />
              </a>
            </div>
          </div>
        </div>

        <div class="card w-96 bg-base-100 shadow-xl">
          <div className="image-container relative">
            <img
              className="card-image"
              src="/src/assets/card3.png"
              alt="Shoes"
            />
            <img
              className="small-image"
              src="/src/assets/Date.png"
              alt="Small Image"
            />
          </div>
          <div className="flex md:flex-row mt-3">
            <p className="mr-16 p-3">Consultant</p>
            <div className="ml-auto flex items-center p-3">
              <FaEye className="mx-2" /> 25
              <FaRegFileAlt className="mx-2" /> 32k
            </div>
          </div>
          <hr />
          <div class="card-body">
            <p>What is a business consultant?</p>
            <p>
              A business consultant is a professional with a wide array of
              skills who assists business owners{" "}
            </p>
            <div className="card-actions justify-start">
              <a href="" style={{ display: "flex", alignItems: "center" }}>
                Read More <FaArrowRight style={{ marginLeft: "5px" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
