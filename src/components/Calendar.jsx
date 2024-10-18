import { ImageShadow } from "../assets";
import { useTranslation } from "react-i18next";

const Calendar = ({ renderText }) => {
  const { t } = useTranslation();
  return (
    <div className="background-shadows " id="calendar-section">
      <div className="absolute -top-44 -z-40 ">
        <img src={ImageShadow} alt="Card Image" />
      </div>
      <div className=" gap-10 flex flex-col lg:mx-40 sm:m-20 m-10 text-[2.5rem]">
        <div className="my-5 p-10">
          <h1 className="orbitron text-white text-center text-glow tracking-wide ">
            {" "}
            {renderText(t("calendar.title"))}
          </h1>
          <p className="text-center text-white quicksand-md text-base pt-5">
            {renderText(t("calendar.description"))}
          </p>
        </div>
        <div>
          <iframe
            src="https://app.simplymeet.me/andresariasvirtual?is_widget=1&view="
            className="w-full h-[650px] sm:h-[750px] rounded-2xl"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
