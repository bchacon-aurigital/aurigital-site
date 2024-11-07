import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";
import { GoArrowRight } from "react-icons/go";
import { ScrollParallax } from "react-just-parallax";
import { linkedin1, instagram1, facebook1, whatsapp1 } from "../assets";
import Statement from "./Statement";
import { ImageShadow, HeroVideo, aurigitalHeroMob, aurigitalHeroMobPoster } from "../assets";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import WebsiteForm from "./Form";


const Hero = ({ renderText }) => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleForm = () => {
    setFormVisible(!isFormVisible);
  };

  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    navigate(`/${lng}`);
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="background-shadows relative" id="hero-section">
      <div
        className={`form-container ${isFormVisible ? "open" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          right: "-100%",
          width: "100%",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          backdropFilter: 'blur(20px)',
          zIndex: 9999,
          transition: "transform 0.4s ease-in-out",
          overflowY: "auto",
        }}
      >
        <button
          className="close-button"
          onClick={toggleForm}
          style={{ zIndex: 10000 }}
        >
          &times;
        </button>
        <WebsiteForm />
      </div>
      <div className="relative h-[90vh] m-5 lg:m-9">
        <div className="absolute lg:top-6 xl:top-10 inset-0 w-full text-white max-h-[250px] z-40">
          <Navbar />
        </div>

        <video
          src={isMobile ? aurigitalHeroMob : HeroVideo}
          poster={isMobile ? aurigitalHeroMobPoster : undefined}
          className="w-full h-full rounded-[2rem]"
          style={{
            objectFit: "cover",
            transformOrigin: "center",
          }}
          autoPlay
          muted
          playsInline
          preload="auto"
        />

        <div className="w-full px-2 top-[15%] lg:top-[20%] flex-col justify-center items-center text-center absolute z-30">
          <div
            className="2xl:text-[42px] lg:text-[35px] md:text-[28px] max-sm:text-[20px] max-sm:pt-10 orbitron tracking-wide text-white"
            data-aos="fade-up"
          >
            {t("hero.title")}
          </div>
          <div
            className="brands-gradient 2xl:text-[42px] lg:text-[35px] md:text-[28px] max-sm:text-[20px] tracking-wide orbitron"
            data-aos="fade-up"
          >
            {t("hero.titleHighlight")}
          </div>
          <div
            className="px-4 quicksand-md text-[13px] lg:text-[16px] text-white"
            data-aos="fade-up"
          >
            {renderText(t("hero.description"))}
          </div>
          <div
            className="mt-5 flex flex-row justify-center gap-1"
            data-aos="fade-up"
          >
            <a
              href="#calendar-section"
              className="transparent-blur-button max-sm:text-xs text-sm shadow-custom ButtonHoverShadow"
            >
              {t("hero.bookCall")}
            </a>
            <button
              onClick={toggleForm}
              className="transparent-blur-button2 max-sm:text-xs text-sm shadow-custom flex items-center gap-1"
            >
              {t("hero.findWebsite")} <GoArrowRight />
            </button>
          </div>

          <div className="absolute right-5 mt-5 z-50">
            <ScrollParallax strength={0.3}>
              <div className="my-4 flex flex-col gap-2 text-white orbitron text-xs ">
                <button
                  onClick={() => changeLanguage("en")}
                  className="language-button"
                >
                  EN
                </button>
                <button
                  onClick={() => changeLanguage("es")}
                  className="language-button"
                >
                  ES
                </button>
              </div>
              <div
                className="relative hidden sm:flex shadow-custom p-3 rounded-[10px] border border-white flex-col justify-center items-center gap-[1rem]"
                style={{
                  backgroundColor: "rgba(0,0,0,0.7)",
                }}
              >
                <a
                  href="https://www.linkedin.com/company/aurigital/"
                  target="_blank"
                >
                  <img src={linkedin1} alt="linkedin" width={17} />
                </a>
                <a href="https://www.instagram.com/aurigital/" target="_blank">
                  <img src={instagram1} alt="instagram" width={17} />
                </a>
                <a href="https://www.facebook.com/aurigital/" target="_blank">
                  <img src={facebook1} alt="facebook" width={17} />
                </a>
                <a href="https://wa.me/+50688888169" target="_blank">
                  <img src={whatsapp1} alt="whatsapp" width={17} />
                </a>
              </div>
            </ScrollParallax>
          </div>
        </div>
      </div>
      <div className="absolute bottom-96 translate-x-1/2 xl:translate-x-3/4 md:top-96 z-20 overflow-visible">
        <img src={ImageShadow} alt="Card Image" className="w-full h-auto" />
      </div>
      <Statement className="absolute" />
    </div>
  );
};

export default Hero;
