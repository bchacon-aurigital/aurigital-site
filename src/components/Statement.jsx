import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import { StatementVideo } from "../assets";
import { useTranslation } from "react-i18next";

const Statement = (renderText) => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Set the playback rate once the component has mounted
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // Adjust the speed here (e.g., 0.5 for slower)
    }
  }, []);
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 1000, // Adjust the animation duration
    });
  }, []);

  return (
    <div className="relative lg:mb-20 nav_blue hero-section items-center justify-center">
      <div id="benefit-section">
        <div className="text-white text-center">
          <div className="p-6 ">
            <div className="py-10">
              <div className="text-[45px] orbitron flex flex-col-reverse pb-10 max-sm:text-[30px]">
                <div className="flip-text text-glow " data-aos="fade-up">
                  <span>Be found</span>
                  <span>Be known</span>
                  <span>Be recognized</span>
                </div>
              </div>
              <p
                className="quicksand-md text-lg max-sm:text-sm"
                data-aos="fade-up"
              >
                {t("statement.reflectWebsite")}
              </p>

              <p
                className="quicksand-md text-md py-3 max-sm:text-xs"
                data-aos="fade-up"
              >
                {t("statement.transformDigital")}
              </p>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center mt-10 gap-10 ">
              <div className="md:w-[70%] xl:w-[50%] max-w-[500px] min-h-[280px] lg:min-h-[400px] bg-blue-grad content-start relative flex items-center justify-center overflow-hidden p-0">
                <video
                  ref={videoRef}
                  src={StatementVideo} // Replace with your video file path
                  className="w-full h-full "
                  style={{
                    objectFit: "cover", // Ensures the video covers the whole div
                    transform: "scale(1.2)", // Adjust the scaling if necessary
                    transformOrigin: "center",
                  }}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
              <div
                className="flex flex-col mb-20 mt-10 gap-5 justify-center"
                data-aos="fade-up"
              >
                <div className="bullet-text pb-2 text-start">
                  <span className="bullet"></span>
                  <div>
                    <h4 className="quicksand-b text-xl">
                      {t("statement.standOutTitle")}
                    </h4>
                    <p className="quicksand-reg text-[16px] max-sm:text-[14px]">
                      {t("statement.standOutDescription")}
                    </p>
                  </div>
                </div>

                <div className="bullet-text pb-2 text-start">
                  <span className="bullet"></span>
                  <div>
                    <h4 className="quicksand-b text-xl">
                      {t("statement.makeItYoursTitle")}
                    </h4>
                    <p className="quicksand-reg text-[16px] max-sm:text-[14px]">
                      {t("statement.makeItYoursDescription")}
                    </p>
                  </div>
                </div>
                <div className="bullet-text pb-2 text-start">
                  <span className="bullet"></span>
                  <div>
                    <h4 className="quicksand-b text-xl">
                      {t("statement.makeItFunctionalTitle")}
                    </h4>
                    <p className="quicksand-reg text-[16px] max-sm:text-[14px]">
                      {t("statement.makeItFunctionalDescription")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statement;
