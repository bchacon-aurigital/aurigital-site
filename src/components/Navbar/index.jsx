import { useState } from "react";
import "../Css/style.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="w-full flex gap-8 flex-col-reverse items-center lg:flex-row justify-center mt-5 lg:mx-0 text-center px-2">
        <div className=" bg-black rounded-lg shadow-custom flex-wrap ">
          <img src="/src/assets/icons/logo.svg" className="w-[40px]" />
        </div>
        <div className="lg:hidden self-end pr-5">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="lg:flex hidden gap-8 isopen bg-black px-10 py-3 items-center opacity-[0.9] rounded-[0.7rem] shadow-custom flex-wrap text-[10px] ">
          <a href="#benefit-section">
            <span className="cursor-pointer">Benefits</span>
          </a>
          <a href="#process-section">
            <span className="cursor-pointer">Process</span>
          </a>
          <a href="#testimonial-section">
            <span className="cursor-pointer">Testimonials</span>
          </a>
          <a href="#portfolio-section">
            <span className="cursor-pointer">Portfolio</span>
          </a>
          <a href="#support-section">
            <span className="cursor-pointer">Support</span>
          </a>
          <a href="#calendar-section">
            <span className="text-[11px] underline cursor-pointer">
              BOOK A CALL
            </span>
          </a>
        </div>
      </nav>
      {isOpen && (
        <div className="w-full absolute flex justify-center px-14 ">
          <div className="lg:hidden flex flex-col max-w-[400px] w-full gap-4 justify-center items-center h-auto bg-black px-10 py-3 justify-center-center opacity-[0.9] rounded-[0.7rem] shadow-custom flex-wrap text-[10px] ">
            <a href="#benefit-section">
              <span className="cursor-pointer">Benefits</span>
            </a>
            <a href="#process-section">
              <span className="cursor-pointer">Process</span>
            </a>
            <a href="#testimonial-section">
              <span className="cursor-pointer">Testimonials</span>
            </a>
            <a href="#portfolio-section">
              <span className="cursor-pointer">Portfolio</span>
            </a>
            <a href="#support-section">
              <span className="cursor-pointer">Support</span>
            </a>
            <a href="#calendar-section">
              <span className="text-[11px] underline cursor-pointer">
                BOOK A CALL
              </span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
