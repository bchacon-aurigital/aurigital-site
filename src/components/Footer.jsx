import { logo, linkedin2, instagram2, facebook2, whatsapp2 } from "../assets";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const scrollTopRef = useRef(null);

  // Show or hide the "Back to top" button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        scrollTopRef.current.style.display = "inline-block";
      } else {
        scrollTopRef.current.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-blue-grad m-5">
      <div className="flex justify-center -translate-y-[50%] ">
        <img
          src={logo}
          alt="aurigital"
          className="shadow-custom rounded-lg"
          width={65}
        />
      </div>
      <div className="m-10 mt-5 flex flex-col text-start sm:flex-row gap-5">
        <div className="flex flex-col text-white text-glow orbitron text-md tracking-wide">
          <div className="max-w-[350px] text-center sm:text-start">
            <p className="pb-2">{t("footer.quote.text")}</p>
            <p>{t("footer.quote.author")}</p>
          </div>
          <div className="flex flex-row justify-center pb-10 sm:justify-start py-3">
            <a
              href="https://www.linkedin.com/company/aurigital/"
              target="_blank"
            >
              <img src={linkedin2} alt="linkedin" width={45} />
            </a>
            <a href="https://www.instagram.com/aurigital/" target="_blank">
              <img src={instagram2} alt="instagram" width={45} />
            </a>
            <a href="https://www.facebook.com/aurigital/" target="_blank">
              <img src={facebook2} alt="facebook" width={45} />
            </a>
            <a href="https://wa.me/+50688888169" target="_blank">
              <img src={whatsapp2} alt="whatsapp" width={45} />
            </a>
          </div>
        </div>
        <div className="flex flex-row quicksand-md text-xs mx-auto gap-10 text-white text-glow">
          <div className="flex flex-col gap-1">
            <p className="quicksand-b">{t("footer.site")}</p>
            <a href="#hero-section">{t("footer.menu.home")}</a>
            <a href="#benefit-section">{t("footer.menu.benefits")}</a>
            <a href="#process-section">{t("footer.menu.process")}</a>
            <a href="#testimonial-section">{t("footer.menu.testimonials")}</a>
            <a href="#portfolio-section">{t("footer.menu.portfolio")}</a>
            <a href="#support-section">{t("footer.menu.support")}</a>
            <a href="#calendar-section">{t("footer.menu.agenda")}</a>
          </div>
          <div className="flex flex-col gap-1">
            {" "}
            <p className="quicksand-b">{t("footer.socials")}</p>
            <a href="https://www.instagram.com/aurigital/n" target="_blank">
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/aurigital/"
              target="_blank"
            >
              Linkedin
            </a>
            <a href="https://www.facebook.com/aurigital/" target="_blank">
              Facebook
            </a>
            <a href="https://wa.me/+50688888169" target="_blank">
              Whatsapp
            </a>
          </div>
          <div className="flex flex-col gap-1">
            {" "}
            <p className="quicksand-b">{t("footer.resources")}</p>
            <a href="https://portfolio.aurigital.com" target="_blank">
              {t("footer.resourcesLinks.portfolio")}
            </a>
            <a href="https://bookings.aurigital.com" target="_blank">
              {t("footer.resourcesLinks.bookings")}
            </a>
            <a href="https://terms.aurigital.com/" target="_blank">
              {t("footer.resourcesLinks.terms")}
            </a>
          </div>
        </div>
      </div>
      <div className=" text-center">
        <button
          onClick={scrollToTop}
          className="back-to-top flex items-center hover:text-glow text-sm mb-5 bg-black/20 backdrop-blur-3xl ButtonHoverShadow" // Ensures icon and text are centered vertically
          ref={scrollTopRef}
          style={{ display: "flex", alignItems: "center" }} // Additional inline flex styles for alignment
        >
          <span className="inline-block quicksand-b ">
            {t("footer.backToTop")}
          </span>{" "}
          {/* Ensures text is inline */}
        </button>
      </div>
    </div>
  );
};

export default Footer;
