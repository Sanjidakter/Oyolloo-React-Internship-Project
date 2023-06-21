import React from "react";
import "./Footer.css";
import Logo from "../../assets/Logo.png"

const Footer = () => {
  return (
    <div>
      <div>
        <footer className="footer p-10 bg-black text-white">
          <div>
            <h2
              style={{
                fontFamily: "Space Grotesk'",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "38px",
                lineHeight: "30px",
                /* identical to box height, or 79% */

                /* Neutral/Pure white */

                color: "#FFFFFF",
              }}
            >
              Subscribe Our Newsletter
            </h2>
            <p className="mt-5">
              Enter your details to get business inspiration, trending <br />{" "}
              solutions, and consulting tips delivered to your inbox
            </p>
          </div>
          <div className="md:place-self-center md:justify-self-end text-white">
            <span className="footer-title">Newsletter</span>
            <div className="form-control w-80">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="input input-bordered w-full pr-16"
                />
                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <hr />
      <footer className="footer p-10 bg-black text-white">
        <div>
          <img className="w-full" src={Logo} alt="" />
          <p>
            Business consultants provide management <br /> consulting to help
            businesses and <br /> organizations improve performance .
          </p>
          <div className="mt-3">
            <div className="grid grid-flow-col gap-4">
              <a>
                <div class="icon-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="icon-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="fill-current text-gray-500"
                  >
                    <path d="M20.197,2H3.797C2.762,2,2,2.772,2,3.797v16.406C2,21.227,2.772,22,3.797,22h16.406c1.026,0,1.797-0.773,1.797-1.797V3.797C22,2.772,21.227,2,20.197,2z M7.25,18.156H4.844V9.625H7.25V18.156zM5.047,8.078h-0.03c-0.933,0-1.516-0.641-1.516-1.437c0-0.813,0.583-1.438,1.47-1.438c0.937,0,1.515,0.625,1.546,1.438C6.516,7.422,5.985,8.078,5.047,8.078zM18.156,18.156h-2.407v-4.235c0-1.063-0.382-1.79-1.343-1.79c-0.733,0-1.167,0.498-1.365,0.977c-0.07,0.172-0.09,0.408-0.09,0.644v4.404H10.75V9.625h2.156v1.406h0.03c0.302-0.573,1.043-1.176,2.156-1.176c2.312,0,2.733,1.52,2.733,3.488V18.156z" />
                  </svg>
                </div>
              </a>

              <a
                href="https://www.pinterest.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="icon-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="fill-current text-gray-500"
                  >
                    <path d="M12,2C6.479,2,2,6.479,2,12c0,4.255,2.784,7.879,6.648,9.14c-0.085-0.776-0.164-1.966,0.032-2.816 c0.178-0.778,1.154-4.946,1.154-4.946s-0.297-0.593-0.297-1.468c0-1.374,0.796-2.398,1.785-2.398c0.841,0,1.248,0.634,1.248,1.396 c0,0.85-0.542,2.119-0.821,3.297c-0.235,0.993,0.499,1.798,1.466,1.798c1.757,0,3.109-1.85,3.109-4.521 c0-1.863-1.343-3.159-3.262-3.159c-2.193,0-3.41,1.625-3.41,3.287c0,0.658,0.252,1.373,0.566,1.759 c0.063,0.082,0.072,0.155,0.056,0.242c-0.062,0.287-0.204,0.91-0.235,1.04c-0.033,0.132-0.101,0.156-0.239,0.095 c-0.798-0.368-1.298-1.523-1.298-2.53c0-1.965,1.416-3.764,4.102-3.764c2.139,0,3.586,1.519,3.586,3.352 c0,2.508-1.115,4.451-2.769,4.451c-0.898,0-1.642-0.741-1.419-1.645c0.272-1.067,0.803-2.215,0.803-2.982 c0-0.688-0.367-1.266-1.128-1.266c-0.891,0-1.606,0.924-1.606,2.166c0,0.789,0.27,1.322,0.27,1.322 s-0.73,3.1-0.855,3.64c-0.256,1.127-0.02,2.516-0.01,2.657c0.007,0.093,0.13,0.115,0.178,0.042 c0.078-0.104,1.078-1.313,1.443-2.48c0.098-0.27,0.57-1.664,0.57-1.664c0.283,0.538,1.114,1.014,2.003,1.014 c2.637,0,4.43-2.677,4.43-6.079C21.994,6.479,17.516,2,12,2L12,2z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">FAQ's</a>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Latest Posts</a>
        </div>
        <div>
          <span className="footer-title">Our Services</span>
          <a className="link link-hover">Business planning</a>
          <a className="link link-hover">Tax strategy</a>
          <a className="link link-hover">Financial advices</a>
          <a className="link link-hover">Insurance strategy</a>
          <a className="link link-hover">Manage investment</a>
        </div>
        <div>
          <span className="footer-title">Contact Info.</span>
          <a className="link link-hover">(303) 555-0105</a>
          <a className="link link-hover">(303) 555-0105</a>
          <a className="link link-hover">sara.cruz@example.com</a>
          <a className="link link-hover">3517 W. Gray St. Utica, </a>
          <a className="link link-hover">Pennsylvania 57867</a>
        </div>
      </footer>
      <div className="footer items-center p-4 bg-neutral text-neutral-content">
        <div className="items-center grid-flow-col">
          <p> © 2022 CreativePeoples. All Rights Reserved</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="">
            <u>Privacy Policy</u>
          </a>
          <a href="">
            <u>Cookie Policy</u>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
