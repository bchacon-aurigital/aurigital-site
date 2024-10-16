import { PortfolioImg, PortfolioMob } from "../assets";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Adjust the animation duration
    });
  }, []);

  return (
    <div
      className="flex flex-col lg:grid lg:grid-cols-[45%,55%] bg-blue-grad mx-4  px-5 pt-20 overflow-hidden rounded-[2rem]"
      id="portfolio-section"
    >
      <div className="px-4">
        <h1 className="orbitron text-glow text-white leading-10 max-sm:text-2xl text-3xl ">
          Check our portfolio
        </h1>
        <p className="quicksand-sb text-white mb-10 sm:mr-20 mt-2 lg:mt-4">
          We are up to the challenge of creating each project better than the
          last, <br className="flex lg:hidden" /> and then we upgrade the
          existing ones constantly to keep up. <br />
          Check our portfolio and to find what's new!
        </p>
        <div className="flex justify-start mb-10">
          <a
            href="https://portfolio.aurigital.com"
            className="border text-white border-[#C6EBFF] text-xs py-2 px-3 rounded-lg bookCallButton"
            target="_blank"
          >
            Go to Portfolio
          </a>
        </div>
      </div>

      <div className=" flex justify-center text-center">
        <img
          src={PortfolioImg}
          alt="portfolio"
          className="hidden lg:flex w-[70%] lg:w-full shadow-xl transform transition-transform duration-500 ease-in-out translate-y-[30%] hover:translate-y-0"
        />
        <img
          src={PortfolioImg}
          alt="portfolio"
          className="hidden sm:flex lg:hidden w-[80%] lg:w-full shadow-xl"
          data-aos="fade-up"
        />
        <img
          src={PortfolioMob}
          alt="portfolio"
          className="flex sm:hidden w-[85%] rounded-t-2xl lg:w-full shadow-xl"
          data-aos="fade-up"
        />
      </div>
    </div>
  );
};

export default Portfolio;
