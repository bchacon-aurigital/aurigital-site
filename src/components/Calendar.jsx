import { ImageShadow } from "../assets";

const Calendar = () => {
  return (
    <div className="background-shadows " id="calendar-section">
      <div className="absolute -top-44 -z-40 ">
        <img src={ImageShadow} alt="Card Image" />
      </div>
      <div className=" gap-10 flex flex-col lg:mx-40 sm:m-20 m-10 text-[2.5rem]">
        <div className="my-5 p-10">
          <h1 className="orbitron text-white text-center text-glow tracking-wide ">
            {" "}
            Let's talk and <br /> create!
          </h1>
          <p className="text-center text-white quicksand-md text-base pt-5">
            Ready to get started? <br />
            We’re here to talk through your ideas and make them happen.
          </p>
        </div>
        <div>
          <iframe
            src="https://app.simplymeet.me/andresariasvirtual?is_widget=1&view="
            className="w-full h-[650px] sm:h-[750px] rounded-2xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
