import Spline from "@splinetool/react-spline";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Statement = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Adjust the animation duration
    });
  }, []);

  return (
    <div className="relative min-h-[100vh] nav_blue hero-section items-center justify-center">
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
                Does your <strong>website</strong> reflect the{" "}
                <strong>excellence</strong> of your work, or is it holding you
                back?
              </p>

              <p
                className="quicksand-md text-md py-3 max-sm:text-xs"
                data-aos="fade-up"
              >
                LET'S TRANSFORM YOUR <strong>DIGITAL PRESENCE...</strong>
              </p>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center mt-10 gap-10 ">
              <div className="md:w-[70%] xl:w-[50%] max-w-[500px] min-h-[300px] lg:min-h-[400px] bg-blue-grad content-center relative flex items-center justify-center overflow-visible p-0">
                <Spline
                  scene="https://draft.spline.design/qLGh1lMPjfEJZbHI/scene.splinecode"
                  style={{
                    width: "100%",
                    height: "100%",
                    transform: "scale(0.6)",
                    transformOrigin: "center",
                    overflow: "visible",
                  }}
                />
              </div>
              <div
                className="flex flex-col mb-20 mt-10 gap-5 justify-center"
                data-aos="fade-up"
              >
                <div className="bullet-text pb-2 text-start">
                  <span className="bullet"></span>
                  <div>
                    <h4 className="quicksand-b text-xl">Stand Out!</h4>
                    <p className="quicksand-reg text-[16px] max-sm:text-[14px]">
                      Differentiate your craft, embrace your uniqueness.
                    </p>
                  </div>
                </div>

                <div className="bullet-text pb-2 text-start">
                  <span className="bullet"></span>
                  <div>
                    <h4 className="quicksand-b text-xl">Make It Yours</h4>
                    <p className="quicksand-reg text-[16px] max-sm:text-[14px]">
                      Unlike social media, you have unlimited options here.
                    </p>
                  </div>
                </div>
                <div className="bullet-text pb-2 text-start">
                  <span className="bullet"></span>
                  <div>
                    <h4 className="quicksand-b text-xl">Make It Functional</h4>
                    <p className="quicksand-reg text-[16px] max-sm:text-[14px]">
                      Automate everyday tasks on your site. Focus on your skill.
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
