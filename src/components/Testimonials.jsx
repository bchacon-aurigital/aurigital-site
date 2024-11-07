import { Abraham, Tulsi, Calo, ImageShadow, BGTestimonials, bgtestimonialsPoster } from "../assets";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 710,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0px",
          arrows: true,
        },
      },
    ],
  };

  const testimonials = [
    {
      image: Abraham,
      content: t("testimonials.abraham.content"),
    },
    {
      image: Tulsi,
      content: t("testimonials.tulsi.content"),
    },
    {
      image: Calo,
      content: t("testimonials.calo.content"),
    },
  ];

  useEffect(() => {
    if (!isMobile) {
      const videoHoverCards = document.querySelectorAll(".videoHoverCard");

      videoHoverCards.forEach((card) => {
        const video = card.querySelector("video");

        card.addEventListener("mouseover", () => {
          video.play();
        });

        card.addEventListener("mouseout", () => {
          video.pause();
        });
      });

      // Clean up event listeners on component unmount
      return () => {
        videoHoverCards.forEach((card) => {
          const video = card.querySelector("video");

          card.removeEventListener("mouseover", () => {
            video.play();
          });

          card.removeEventListener("mouseout", () => {
            video.pause();
          });
        });
      };
    }
  }, [isMobile]);

  return (
    <>
      <div className="background-shadows" id="testimonial-section">
        <div className="left-shadow">
          <img src={ImageShadow} alt="Card Image" />
        </div>
        <div className="bg-[#1682BE]/10 m-4 lg:mt-8 xl:mt-28 px-5 pt-20 pb-5 overflow-hidden backdrop-blur-2xl rounded-[2rem]">
          <div className="max-w-[1100px] px-5 lg:px-10 lg:mx-auto">
            <div className="max-w-[650px] lg:py-5 max-sm:pb-5">
              <h1 className="text-white leading-10 max-sm:text-2xl text-4xl py-2 orbitron">
                {t("testimonials.title")}
              </h1>
              <p className="text-white text-md quicksand-md mb-5">
                {t("testimonials.description")}
              </p>
            </div>

            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-2 text-white flex justify-center">
                  <div className="flex flex-col w-auto h-[510px] max-w-[280px] min-w-[280px] mx-auto rounded-lg my-10 overflow-hidden shadow-xl relative videoHoverCard">
                    <video
                      src={BGTestimonials}
                      poster={bgtestimonialsPoster}
                      className="w-full h-full object-cover rounded-xl absolute -z-10"
                      loop
                      playsInline
                      muted
                      autoPlay={isMobile}
                    ></video>
                    <div className="relative">
                      <div className="img-div flex justify-center">
                        <img
                          src={testimonial.image}
                          alt="Card Image"
                          className="max-w-[80px] shadow-custom cover-full rounded-full"
                        />
                      </div>
                      <div>
                        <p className="text-xs text-center px-4 py-2">
                          {testimonial.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            <div className="flex lg:mb-20 mb-14 justify-center pt-10">
              <a
                href="#calendar-section"
                className="border text-white border-[#C6EBFF] text-xs py-2 px-3 rounded-lg bookCallButton"
              >
                {t("hero.bookCall")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
