import React from "react";
import "./Update.css";

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
          <div class="card-body">
            <p>What is a business consultant?</p>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-start">
              <a href="">Read More-> </a>
            </div>
          </div>
        </div>

        <div class="card w-96 bg-base-100 shadow-xl">
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
          <div class="card-body">
            <p>What is a business consultant?</p>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-start">
              <a href="">Read More -></a>
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
          <div class="card-body">
            <p>What is a business consultant?</p>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-start">
              <a href="">Read More-> </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
