import AOS from "aos";
import "aos/dist/aos.css";
import { ScrollParallax } from "react-just-parallax";
import { Benefit1, Benefit1Mobile, Benefit2, ImageShadow, ImageRow } from "../assets";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Benefits = ({ renderText }) => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      offset: 200,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="background-shadows " id="benefit-section">
        <div className="left-shadow hidden md:flex">
          <img src={ImageShadow} alt="Card Image" />
        </div>
        <div className="right-shadow">
          <img src={ImageShadow} alt="Card Image" />
        </div>
        <div className="bg-[#1682BE]/10 m-4 lg:m-8 xl:mx-44 xl:my-16 sm:px-5 py-10 backdrop-blur-md rounded-[2rem]">
          <div className="max-w-[1100px] mx-auto px-5 lg:px-10">
            <div className="max-w-[650px] py-10 orbitron max-sm:mx-5">
              <h1 className="text-white leading-10 max-sm:text-2xl text-4xl py-2">
                {t("benefits.title")}
              </h1>
              <p className="text-white text-md quicksand-md">
                {renderText(t("benefits.description"))}
              </p>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-[60%,40%] gap-4 justify-center">
              <div
                data-aos="fade-up"
                className="relative flex flex-col md:block shadow-xl bg-dark text-white rounded-xl overflow-hidden max-sm:mx-5"
              >
                <img
                  src={Benefit1}
                  alt="Card Image"
                  className="hidden md:block lg:w-[800px] h-full object-cover opacity-90 card-image"
                  style={{
                    transformOrigin: "start",
                  }}
                />
                <div className="relative md:hidden">
                  <img
                    src={Benefit1Mobile}
                    alt="Card Image"
                    className="w-full h-[450px] object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark/90"></div>
                </div>
                <div className="md:absolute inset-y-0 w-full max-sm:relative sm:right-5 flex items-center md:w-auto">
                  <div className="w-full md:w-auto bg-white/20 quicksand-reg rounded-xl px-8 py-5 md:p-6 backdrop-blur-md max-sm:-mt-24 relative z-10">
                    <h5 className="text-2xl md:text-2xl mb-2 orbitron">
                      {renderText(t("benefits.groundbreakingTechnology"))}
                    </h5>
                    <p className="border-b-[1px] py-1 md:py-0 pb-3 text-md">
                      {renderText(t("benefits.bestTools"))}
                    </p>
                    <p className="border-b-[1px] py-2 bullet-text text-sm">
                      <span className="bullet"></span>
                      <span> {renderText(t("benefits.gtTrends"))} </span>
                    </p>
                    <p className="border-b-[1px] py-2 bullet-text text-sm">
                      <span className="bullet"></span>
                      <span> {renderText(t("benefits.gtTasks"))}</span>
                    </p>
                    <p className="py-3 md:py-2 bullet-text text-sm">
                      <span className="bullet"></span>
                      <span> {renderText(t("benefits.gtAnimations"))}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="500"
                className="max-h-[400px] shadow-xl relative bg-dark text-white rounded-xl max-sm:mx-5 overflow-hidden"
              >
                <img
                  src={Benefit2}
                  alt="Card Image"
                  className="w-full justify-start opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end items-start">
                  <ScrollParallax>
                    <h5 className="max-w-44 translate-y-28 text-xs backdrop-blur-md orbitron border py-2 px-6 rounded-xl mb-2">
                      AI is Generating
                    </h5>
                  </ScrollParallax>
                  <p className="text-start orbitron text-md md:text-2xl py-3">
                    Generative AI
                  </p>
                  <p className="text-sm quicksand-reg font-extralight">
                    {renderText(t("benefits.aiDescription"))}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 md:mt-0 md:pb-14 flex flex-col h-full md:grid md:grid-cols-[40%,60%] gap-4 justify-center">
              <div
                data-aos="fade-up"
                className="h-full bg-blue-grad border text-white rounded-xl md:my-6 shadow-md max-sm:mx-5 flex flex-col"
              >
                <div className="flex-1 p-10">
                  <h5 className="text-2xl mb-2 orbitron">
                    {t("benefits.unlimitedReviews")}
                  </h5>
                  <p className="text-white quicksand-sb text-md my-4">
                    {renderText(t("benefits.unlimitedReviewsDescription"))}
                  </p>
                  <div className="mt-5">
                    <a
                      href="#calendar-section"
                      className="border border-[#C6EBFF] bg-black/20 backdrop-blur-xl text-xs py-2 px-3 rounded-lg ButtonHoverShadow"
                    >
                      {t("hero.bookCall")}
                    </a>
                  </div>
                </div>
              </div>
              <div className="max-sm:mx-5 gap-10">
                <div
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="bg-black/20 h-full backdrop-blur-lg border md:my-6 text-white rounded-xl shadow-md overflow-hidden flex flex-col"
                >
                  <div className="flex-1 p-10">
                    <h5 className="text-2xl mb-2 orbitron">
                      {t("benefits.technicalSupport")}
                    </h5>
                    <p className="text-white quicksand-reg mb-4">
                      {renderText(t("benefits.technicalSupportDescription"))}
                    </p>
                    <div className="flex justify-center">
                      <img src={ImageRow} alt="Card Image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;