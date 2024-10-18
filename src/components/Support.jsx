import { useEffect } from "react";
import { Support1, Support2, ImageShadow } from "../assets";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { GoArrowRight } from "react-icons/go";

const Support = ({ renderText }) => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      offset: 200, // Adjust the offset to trigger animations at the right time
    });
    AOS.refresh(); // Optional: Refresh AOS to ensure it picks up new content
  }, []);

  return (
    <>
      <div className="background-shadows " id="support-section">
        <div className="right-shadow top-80 ">
          <img src={ImageShadow} alt="Card Image" />
        </div>
        <div className="max-w-[1100px] flex flex-col mx-auto px-5 lg:px-10">
          <div className="max-w-[650px] lg:pt-32 pt-20 pb-14">
            <h1 className="text-white leading-10 max-sm:text-2xl text-4xl py-2 orbitron">
              {t("support.title")}
            </h1>
            <p className="text-white text-md quicksand-md mb-5 ">
              {t("support.description")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:h-[400px] max-sm:mx-5 relative bg-dark text-white rounded-xl mb-10 gap-5">
            <div
              data-aos="fade-up"
              className="flex flex-col w-full max-h-screen border border-white rounded-xl shadow-custom relative"
            >
              <video
                src={Support1}
                alt="Card Video"
                className="w-full rounded-xl h-full object-cover absolute -z-10"
                autoPlay
                playsInline
                loop
                muted
              ></video>
              <div className="max-w-[650px] relative px-2 pt-64">
                <div>
                  <p className="text-lg px-3 pt-4 quicksand-b">
                    {t("support.alwaysFreshTitle")}
                  </p>
                  <p className="text-sm px-3 pb-4 quicksand-md">
                    {t("support.alwaysFreshDescription")}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-5">
              <div data-aos="fade-up" className="p-5 bg-blue-grad  rounded-xl">
                <p className="text-white m-0 text-md quicksand-b">
                  {t("support.regularUpdatesTitle")}
                </p>
                <p className="text-white text-sm quicksand-reg m-0">
                  {t("support.regularUpdatesDescription")}
                </p>
              </div>
              <div data-aos="fade-up" className="p-5 bg-blue-grad rounded-xl">
                <p className="text-white m-0 text-md quicksand-b">
                  {t("support.technicalSupportTitle")}
                </p>
                <p className="text-white text-sm quicksand-reg m-0">
                  {t("support.technicalSupportDescription")}
                </p>
              </div>
              <div
                data-aos="fade-up"
                className=" border p-5 backdrop-blur-3xl border-white rounded-xl shadow-custom"
              >
                <div>
                  <p className="text-white m-0 text-md quicksand-b ">
                    {t("support.webSecurityTitle")}
                  </p>
                  <p className="text-white text-sm quicksand-reg m-0">
                    {t("support.webSecurityDescription")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:grid-cols-3 gap-5 max-sm:mx-5 text-white">
            <div>
              <div className="flex flex-col w-full gap-5">
                <div
                  data-aos="fade-up"
                  className=" bg-blue-grad rounded-xl shadow-md overflow-hidden relative"
                >
                  <div className="relative text-center p-3">
                    <div>
                      <p className="text-white m-0 text-md quicksand-b text-center">
                        {t("support.manageIntegrationsTitle")}
                      </p>
                      <p className="text-white text-sm m-0 text-center">
                        {renderText(t("support.manageIntegrationsDescription"))}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  className="p-2 border shadow-custom backdrop-blur-3xl border-white rounded-xl"
                >
                  <p className="text-white m-0 py-2 text-md  quicksand-b text-center">
                    {renderText(t("support.readyToWork"))}
                  </p>
                  <div className="flex justify-center pb-1">
                    <a
                      href="https://wa.me/+50688888169"
                      target="_blank"
                      className="text-white bg-blue-grad text-sm border p-2 rounded-xl ButtonHoverShadow"
                    >
                      {t("support.messageAurigital")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div
                data-aos="fade-up"
                className="flex border border-white rounded-xl shadow-custom relative"
              >
                <video
                  src={Support2}
                  alt="Card Video"
                  className="w-full rounded-xl h-full object-cover absolute -z-10"
                  autoPlay
                  playsInline
                  loop
                  muted
                ></video>
                <div className="max-w-[650px] relative pt-40 px-2 ">
                  <div>
                    <p className="text-lg px-3 quicksand-b">
                      {t("support.personalizedServiceTitle")}
                    </p>
                    <p className="text-sm quicksand-md px-3 pb-4">
                      {t("support.personalizedServiceDescription")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-content-img rounded-[2rem] relative nav_blue lg:pt-32 mt-20"
          data-aos="fade-up"
        >
          <div className="lg:max-w-[1100px] mx-auto px-16">
            <div>
              <p className="text-white lg:text-2xl pb-5 orbitron">
                {renderText(t("support.notSureTitle"))}
              </p>
            </div>
            <div>
              <button className="border rounded-xl px-6 py-2 flex gap-1 items-center text-sm text-[#C6EBFF] ButtonHoverShadow">
                {t("hero.findWebsite")}
                <GoArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
