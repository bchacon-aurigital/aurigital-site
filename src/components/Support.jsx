import { useEffect } from "react";
import { Support1, Support2, ImageShadow } from "../assets";
import AOS from "aos";
import "aos/dist/aos.css";

const Support = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      offset: 200, // Adjust the offset to trigger animations at the right time
    });
    AOS.refresh(); // Optional: Refresh AOS to ensure it picks up new content
  }, []);

  return (
    <>
      <div className="background-shadows " id="support-section">
        <div className="right-shadow top-80 ">
          <img src={ImageShadow} alt="Card Image" />
        </div>
        <div className="max-w-[1100px] flex flex-col mx-auto px-5 lg:px-10">
          <div className="lg:pt-32 pt-20 pb-14">
            <h1 className="text-white leading-10 max-sm:text-2xl text-4xl py-2 orbitron">
              Peace Of Mind Plan
            </h1>
            <p className="text-white text-md quicksand-md mb-5 ">
              Hassle-Free Website Management Content. Aurigital actively hosts,
              manages, <br /> secures and update your website, so you can focus
              on growing your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:h-[400px] max-sm:mx-5 relative bg-dark text-white rounded-xl mb-10 gap-5">
            <div
              data-aos="fade-up"
              className="flex flex-col w-full max-h-screen border border-white rounded-xl shadow-custom relative"
            >
              <video
                src={Support1}
                alt="Card Video"
                className="w-full rounded-xl h-full object-cover absolute -z-10"
                autoPlay
                loop
                muted
              ></video>
              <div className="relative px-2 pt-64">
                <div>
                  <p className="text-lg px-3 pt-4 quicksand-b">
                    Always Fresh, Always Relevant
                  </p>
                  <p className="text-sm px-3 pb-4 quicksand-md">
                    We keep your website evolving by updating it with the latest
                    media assets, promotions, and information, ensuring it
                    always represents your brand at its best.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-5">
              <div data-aos="fade-up" className="p-5 bg-blue-grad  rounded-xl">
                <p className="text-white m-0 text-md quicksand-b">
                  Regular Updates
                </p>
                <p className="text-white text-sm quicksand-reg m-0">
                  Keep you customer engaged with new content and ideas. Add new
                  functionalities that help you manage your business as it
                  grows.
                </p>
              </div>
              <div data-aos="fade-up" className="p-5 bg-blue-grad rounded-xl">
                <p className="text-white m-0 text-md quicksand-b">
                  Technical Support
                </p>
                <p className="text-white text-sm quicksand-reg m-0">
                  Whether it's visual or functional, we troubleshoot, assess,
                  and correct any issues your site may encounter.
                </p>
              </div>
              <div
                data-aos="fade-up"
                className=" border p-5 backdrop-blur-3xl border-white rounded-xl shadow-custom"
              >
                <div>
                  <p className="text-white m-0 text-md quicksand-b ">
                    Web Security
                  </p>
                  <p className="text-white text-sm quicksand-reg m-0">
                    We provide and renew your SSL certificate, building trust
                    with your visitors and search engines, so your site won't be
                    flagged as dangerous.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:grid-cols-3 gap-5 max-sm:mx-5 text-white">
            <div>
              <div className="flex flex-col w-full gap-5">
                <div
                  data-aos="fade-up"
                  className=" bg-blue-grad rounded-xl shadow-md overflow-hidden relative"
                >
                  <div className="relative text-center p-3">
                    <div>
                      <p className="text-white m-0 text-md quicksand-b text-center">
                        Manage and Update of Integrations
                      </p>
                      <p className="text-white text-sm m-0 text-center">
                        Everything working together <br /> smoothly.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  className="p-2 border shadow-custom backdrop-blur-3xl border-white rounded-xl"
                >
                  <p className="text-white m-0 py-2 text-md  quicksand-b text-center">
                    Are you ready to work <br /> with us?
                  </p>
                  <div className="flex justify-center pb-1">
                    <a
                      href="https://wa.me/+50688888169"
                      target="_blank"
                      className="text-white bg-blue-grad text-sm border p-2 rounded-xl ButtonHoverShadow"
                    >
                      Message Aurigital
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div
                data-aos="fade-up"
                className="flex border border-white rounded-xl shadow-custom relative"
              >
                <video
                  src={Support2}
                  alt="Card Video"
                  className="w-full rounded-xl h-full object-cover absolute -z-10"
                  autoPlay
                  loop
                  muted
                ></video>
                <div className="relative pt-40 px-2 ">
                  <div>
                    <p className="text-lg px-3 quicksand-b">
                      Personalized Service
                    </p>
                    <p className="text-sm quicksand-md px-3 pb-4">
                      You get a direct contact assigned to help you with your
                      requests. <br /> No more searching endlessly through the
                      web for support channels. We're just a message away!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-content-img rounded-[2rem] relative nav_blue lg:pt-32 mt-20"
          data-aos="fade-up"
        >
          <div className="lg:max-w-[1100px] mx-auto px-16">
            <div>
              <p className="text-white lg:text-2xl  orbitron">
                NOT SURE FOR WHAT KIND OF WEBSITE <br /> IS RIGHT FOR YOU?
              </p>
              <p className="text-white quicksand-reg text-lg py-2 ">
                Find out now!
              </p>
            </div>
            <div>
              <button className="border rounded-xl px-6 py-2  text-sm text-[#C6EBFF] ButtonHoverShadow">
                Find the website for me
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
