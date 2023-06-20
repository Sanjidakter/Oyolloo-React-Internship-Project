import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGoogle, faPinterest } from '@fortawesome/free-brands-svg-icons';


const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/pricing">Pricing</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );

  return (
    <>
      <nav className="bg-black p-2">
        <div className="flex items-center justify-between px-5 py-3">
          <div className="flex items-center space-x-4 text-ash">
          <a href="#" className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={faPinterest} />
          </a>
          </div>
          <div className="text-white mr-16">
            info.pix@gmail.com
            <span className="ml-2">(209) 555-0104</span>
          </div>
        </div>
      </nav>
      <div className="navbar bg-white text-black p-5">
        {/* Mobile */}
        <div className="lg:hidden">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
        </div>

        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="btn btn-ghost text-xl">
            <img src="/src/assets/Logo.png" alt="Logo" className="logo-image" />
          </Link>
        </div>

        {/* Desktop */}
        <div className="hidden ml-14 px-16 lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>

        {/* CTA */}
        <div className="hidden ml-16 lg:flex">
          <a className="btn">Free Consultation</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
