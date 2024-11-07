import { logo, linkedin2, instagram2, facebook2, whatsapp2, pyme } from "../assets";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const scrollTopRef = useRef(null);

  const termsUrl =
    i18n.language === "es" ? "/terminosycondiciones" : "/termsandconditions";

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
      <div className="m-10 mt-5 flex flex-col md:flex-row text-start gap-5">
        <div className="flex flex-col text-white text-glow orbitron text-lg tracking-wide items-center md:items-start">
          <div className="max-w-[420px] text-center mx-auto md:text-start">
            <p className="pb-2">{t("footer.quote.text")}</p>
            <p>{t("footer.quote.author")}</p>
          </div>
          <div className="flex flex-row justify-center pb-10 md:justify-start py-3">
            <a href="https://www.linkedin.com/company/aurigital/" target="_blank">
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
        <div className="flex flex-col sm:flex-row quicksand-md text-md gap-10 text-white text-glow mx-auto">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <p className="quicksand-b">{t("footer.site")}</p>
            <a href="#hero-section">{t("footer.menu.home")}</a>
            <a href="#benefit-section">{t("footer.menu.benefits")}</a>
            <a href="#process-section">{t("footer.menu.process")}</a>
            <a href="#testimonial-section">{t("footer.menu.testimonials")}</a>
            <a href="#portfolio-section">{t("footer.menu.portfolio")}</a>
            <a href="#support-section">{t("footer.menu.support")}</a>
            <a href="#calendar-section">{t("footer.menu.agenda")}</a>
          </div>
          <div className="flex flex-col gap-2 items-center md:items-start">
            <p className="quicksand-b">{t("footer.socials")}</p>
            <a href="https://www.instagram.com/aurigital/" target="_blank">Instagram</a>
            <a href="https://www.linkedin.com/company/aurigital/" target="_blank">Linkedin</a>
            <a href="https://www.facebook.com/aurigital/" target="_blank">Facebook</a>
            <a href="https://wa.me/+50688888169" target="_blank">Whatsapp</a>
          </div>
          <div className="flex flex-col gap-2 items-center md:items-start">
            <p className="quicksand-b">{t("footer.resources")}</p>
            <a href="https://portfolio.aurigital.com" target="_blank">
              {t("footer.resourcesLinks.portfolio")}
            </a>
            <a href="https://bookings.aurigital.com" target="_blank">
              {t("footer.resourcesLinks.bookings")}
            </a>
            <a href={termsUrl} target="_blank">
              {t("footer.resourcesLinks.terms")}
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-white items-center md:items-end">
          <img src={pyme} alt="PYME Costa Rica" className="w-[90px] h-30" />
          <iframe
            className="rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d245.64185011191577!2d-84.13823768717309!3d9.911489479401487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2scr!4v1730819321777!5m2!1ses!2scr"
            width="100%"
            height="40%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <p className="text-lg quicksand-b">{t("footer.location")}</p>
        </div>
      </div>
      <div className="text-center">
        <button
          onClick={scrollToTop}
          className="back-to-top flex items-center hover:text-glow text-sm mb-5 bg-black/20 backdrop-blur-3xl ButtonHoverShadow"
          ref={scrollTopRef}
        >
          <span className="inline-block quicksand-b ">
            {t("footer.backToTop")}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Footer;
