import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { GoArrowUpRight } from "react-icons/go";
import { ScrollParallax } from "react-just-parallax";
import { linkedin1, instagram1, facebook1, whatsapp1 } from "../assets";
import Statement from "./Statement";
import { ImageShadow } from "../assets";
import { div } from "framer-motion/client";

const Hero = () => {
  return (
    <div className="background-shadows relative" id="hero-section">
      <div className=" relative h-[90vh] m-5 lg:m-9 z-30">
        <div className="absolute lg:top-6 xl:top-10 inset-0 w-full text-white z-20 max-h-[350px] ">
          <Navbar />
        </div>
        <Spline
          className="rounded-[40px]"
          scene="https://draft.spline.design/0mHohl5GO4BcTySD/scene.splinecode"
        />

        <div className="w-full px-2 top-[15%] lg:top-[20%] flex-col justify-center items-center text-center absolute z-10">
          <motion.div
            className="2xl:text-[42px] lg:text-[35px] md:text-[28px] max-sm:pt-10 orbitron tracking-wide text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            Web Development for outstanding
          </motion.div>
          <motion.div
            className="brands-gradient 2xl:text-[42px] lg:text-[35px] md:text-[28px] tracking-wide orbitron"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            personal brands
          </motion.div>
          <motion.p
            className="px-4 quicksand-md text-[13px] lg:text-[16px] text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Embrace Individuality! <br />
            Define how the internet sees you with a website made by experts
          </motion.p>
          <motion.div
            className="relative flex gap-3 max-sm:flex-col items-center w-full mt-5 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <a
              href="#calendar-section"
              className="transparent-blur-button text-sm shadow-custom ButtonHoverShadow"
            >
              BOOK A CALL
            </a>
            <button className="transparent-blur-button2 text-sm shadow-custom flex items-center gap-1">
              Find the website for me <GoArrowUpRight />
            </button>
          </motion.div>
          <div className="absolute right-5">
            <ScrollParallax strength={0.3}>
              <div
                className="relative hidden md:flex shadow-custom p-3 rounded-[10px] border border-white flex-col justify-center items-center gap-[1rem] z-[30]"
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
      <Statement className="relative" />
    </div>
  );
};

export default Hero;
