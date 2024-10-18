import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Don't forget to import AOS CSS
import {
  Process1,
  Process2,
  Process3,
  Process4,
  ProgressBar,
  logo,
} from "../assets";
import { useTranslation } from "react-i18next";

const Process = ({ renderText }) => {
  const { t } = useTranslation();

  useEffect(() => {
    const scrollBtn = document.getElementById("scrollBtn");

    const handleClick = () => {
      // Only trigger on larger screens
      const isSmallDevice = window.matchMedia("(max-width: 768px)").matches;
      if (!isSmallDevice) {
        document.querySelectorAll(".timeline-animation").forEach((el) => {
          el.classList.add("show-animation");
        });
      }
    };

    scrollBtn.addEventListener("click", handleClick);

    // Clean up event listener on component unmount
    return () => {
      scrollBtn.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    const checkDeviceSize = () => {
      const isSmallDevice = window.matchMedia("(max-width: 768px)").matches;

      if (isSmallDevice) {
        // Initialize AOS only for small devices
        AOS.init({
          duration: 1500,
          easing: "ease-in-out",
          offset: 200, // Adjust the offset to trigger animations at the right time
        });
      } else {
        // On larger devices, don't initialize AOS, but you can refresh if needed
        AOS.refresh();
      }
    };

    checkDeviceSize(); // Check on mount

    window.addEventListener("resize", checkDeviceSize); // Check on resize

    return () => {
      window.removeEventListener("resize", checkDeviceSize); // Cleanup listener on unmount
    };
  }, []);

  return (
    <>
      <div
        className="max-w-[1100px] mx-10 lg:mx-auto px-5 lg:px-10"
        id="process-section"
      >
        <div className="max-w-[650px] lg:py-32 sm:py-24">
          <h1 className="text-white leading-10 max-sm:text-2xl text-4xl py-2 orbitron">
            {t("process.title")}
          </h1>
          <p className="text-white text-md quicksand-md">
            {renderText(t("process.description"))}
          </p>
        </div>
        <div className="timeline-animation relative mb-20 py-20">
          <div className="absolute left-1/2 -translate-x-1/2 h-[100%] top-0 hidden md:flex">
            <img className="h-[110%]" src={ProgressBar} alt="progressbar" />
          </div>
          {/* <p className="text-white orbitron scrollBtnLabel hidden md:flex">
            Click To Play{" "}
            <span>
              {">"}
              {">"}
              {">"}
            </span>
          </p> */}
          <div
            className="absolute top-[-40px] -translate-x-1/2 left-1/2 cursor-pointer hidden md:flex z-50"
            id="scrollBtn"
          >
            <img
              className=""
              src={logo}
              alt="#"
              style={{
                width: 62,
                height: 62,
                boxShadow: "0px 0px 65px 0px #3BB9FF",
                borderRadius: "10%",
              }}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-10 justify-between text-white text-center md:scrollCardShowDiv1">
            <div
              data-aos="fade-up"
              className="w-full md:w-5/12 md:scrollCardShow"
            >
              <div className="flex flex-col gap-5">
                <div className="min-h-[230px] flex border border-white justify-center rounded-lg shadow-2xl overflow-hidden relative">
                  <video
                    src={Process1}
                    alt="Card Video"
                    className="w-full h-full object-cover absolute -z-10"
                    autoPlay
                    playsInline
                    loop
                    muted
                  ></video>
                  <div className="absolute inset-0 bg-black/70" />
                  <div className="relative self-center py-8 px-10">
                    <div>
                      <p className="text-[white] m-0 text-4xl text-center orbitron ps-4">
                        1
                      </p>
                      <p className="text-[white] m-0 ps-4 pb-3">
                        {t("process.step1Subtitle")}
                      </p>
                      <p className="text-[white] text-center text-sm m-0 ps-4 pb-3">
                        {t("process.step1Description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="w-full md:w-5/12 md:scrollCardShow md:mt-24"
            >
              <div className="flex flex-col gap-5">
                <div className="min-h-[230px] flex border border-white justify-center rounded-lg shadow-2xl overflow-hidden relative">
                  <video
                    src={Process2}
                    alt="Card Video"
                    className="w-full h-full object-cover absolute -z-10"
                    autoPlay
                    playsInline
                    loop
                    muted
                  ></video>
                  <div className="absolute inset-0 bg-black/70" />
                  <div className="relative self-center py-8 px-10">
                    <div>
                      <p className="text-[white] m-0 text-4xl text-center orbitron ps-4">
                        2
                      </p>
                      <p className="text-[white] text-center m-0 ps-4 pb-3">
                        {renderText(t("process.step2Subtitle"))}
                      </p>
                      <p className="text-[white] text-center text-sm m-0 ps-4 pb-3">
                        {renderText(t("process.step2Description"))}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10 ms:mt-0 mt-10 justify-between text-white text-center md:scrollCardShowDiv2">
            <div
              data-aos="fade-up"
              className="w-full md:w-5/12 md:scrollCardShow"
            >
              <div className="flex flex-col gap-5">
                <div className="min-h-[230px] flex border border-white justify-center rounded-lg shadow-2xl overflow-hidden relative">
                  <video
                    src={Process3}
                    alt="Card Video"
                    className="w-full h-full object-cover absolute -z-10"
                    autoPlay
                    playsInline
                    loop
                    muted
                  ></video>
                  <div className="absolute inset-0 bg-black/70" />
                  <div className="relative self-center py-8 px-10">
                    <div>
                      <p className="text-[white] m-0 text-4xl text-center orbitron ps-4">
                        3
                      </p>
                      <p className="text-[white] m-0 ps-4 pb-3">
                        {renderText(t("process.step3Subtitle"))}
                      </p>
                      <p className="text-[white] text-center text-sm m-0 ps-4 pb-3">
                        {renderText(t("process.step3Description"))}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="w-full md:w-5/12 md:mt-24 md:scrollCardShow"
            >
              <div className="flex flex-col gap-5">
                <div className="min-h-[230px] flex border border-white justify-center rounded-lg shadow-2xl overflow-hidden relative">
                  <video
                    src={Process4}
                    alt="Card Video"
                    className="w-full h-full object-cover absolute -z-10"
                    autoPlay
                    playsInline
                    loop
                    muted
                  ></video>
                  <div className="absolute inset-0 bg-black/70" />
                  <div className="relative self-center py-8 px-10">
                    <div>
                      <p className="text-[white] m-0 text-4xl text-center orbitron ps-4">
                        4
                      </p>
                      <p className="text-[white] m-0 ps-4 pb-3 text-center">
                        {renderText(t("process.step4Subtitle"))}
                      </p>
                      <p className="text-[white] text-center text-sm m-0 ps-4 pb-3">
                        {renderText(t("process.step4Description"))}
                      </p>
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

export default Process;
