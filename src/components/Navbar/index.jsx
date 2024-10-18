import { useState } from "react";
import "../Css/style.css";
import { logo } from "../../assets";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="w-full flex gap-8 flex-col-reverse items-center lg:flex-row justify-center mt-5 lg:mx-0 text-center px-2">
        <div className=" bg-black rounded-lg shadow-custom flex-wrap ">
          <img src={logo} className="w-[40px]" />
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
            <span className="cursor-pointer">{t("footer.menu.benefits")}</span>
          </a>
          <a href="#process-section">
            <span className="cursor-pointer">{t("footer.menu.process")}</span>
          </a>
          <a href="#testimonial-section">
            <span className="cursor-pointer">
              {t("footer.menu.testimonials")}
            </span>
          </a>
          <a href="#portfolio-section">
            <span className="cursor-pointer">{t("footer.menu.portfolio")}</span>
          </a>
          <a href="#support-section">
            <span className="cursor-pointer">{t("footer.menu.support")}</span>
          </a>
          <a href="#calendar-section">
            <span className="text-[11px] underline cursor-pointer">
              {t("hero.bookCall")}
            </span>
          </a>
        </div>
      </nav>
      {isOpen && (
        <div className="w-full absolute top-14 flex justify-end px-10 ">
          <div className="lg:hidden flex flex-col  w-full gap-4 justify-center items-center h-auto bg-black px-10 py-3 justify-center-center opacity-[0.9] rounded-[0.7rem] shadow-custom flex-wrap text-[10px] ">
            <a href="#benefit-section">
              <span className="cursor-pointer">
                {t("footer.menu.benefits")}
              </span>
            </a>
            <a href="#process-section">
              <span className="cursor-pointer">{t("footer.menu.process")}</span>
            </a>
            <a href="#testimonial-section">
              <span className="cursor-pointer">
                {" "}
                {t("footer.menu.testimonials")}
              </span>
            </a>
            <a href="#portfolio-section">
              <span className="cursor-pointer">
                {t("footer.menu.portfolio")}
              </span>
            </a>
            <a href="#support-section">
              <span className="cursor-pointer">{t("footer.menu.support")}</span>
            </a>
            <a href="#calendar-section">
              <span className="text-[11px] underline cursor-pointer">
                {t("hero.bookCall")}
              </span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
