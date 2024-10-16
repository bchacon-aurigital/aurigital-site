import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";
import { GoArrowUpRight } from "react-icons/go";
import { ScrollParallax } from "react-just-parallax";
import { linkedin1, instagram1, facebook1, whatsapp1 } from "../assets";
import Statement from "./Statement";
import { ImageShadow, HeroVideo } from "../assets";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import HeroModel from "./HeroModel";
import { useEffect } from "react";

const Hero = () => {
  //   const controlsRef = useRef();
  //   const currentAngleRef = useRef(0); // Use ref instead of state for currentAngle
  //   const [targetAngle, setTargetAngle] = useState(0); // State for target angle

  //   // Define rotation limits
  //   const minAngle = -Math.PI / 2;
  //   const maxAngle = Math.PI / 2;
  //   const bounceIntensity = 0.5; // Adjust bounce intensity

  //   // Handle mouse movement
  //   const handleMouseMove = (event) => {
  //     const canvas = event.target;
  //     const { clientX } = event;

  //     const mouseX = (clientX / canvas.clientWidth) * 2 - 1;
  //     const newTargetAngle = mouseX * Math.PI; // Full horizontal rotation
  //     setTargetAngle(newTargetAngle);
  //   };

  //   useEffect(() => {
  //     const canvas = document.querySelector("canvas");
  //     canvas.addEventListener("mousemove", handleMouseMove);

  //     return () => {
  //       canvas.removeEventListener("mousemove", handleMouseMove);
  //     };
  //   }, []);

  //   // Smooth rotation update with bounce effect
  //   useEffect(() => {
  //     const updateRotation = () => {
  //       if (controlsRef.current) {
  //         const difference = targetAngle - currentAngleRef.current;

  //         // Calculate a bounce factor based on proximity to the target
  //         let bounceFactor = 0;
  //         if (Math.abs(difference) < 0.1) {
  //           bounceFactor = bounceIntensity * Math.sin(difference * 15); // Adjust for bounce when close to the target
  //         }

  //         // Smoothly interpolate towards the target angle
  //         const smoothAngle =
  //           currentAngleRef.current + difference * 0.1 + bounceFactor;

  //         // Clamp the angle to the defined limits
  //         const clampedAngle = Math.max(
  //           minAngle,
  //           Math.min(maxAngle, smoothAngle)
  //         );

  //         // Update controls with the new angle
  //         controlsRef.current.setAzimuthalAngle(clampedAngle);
  //         controlsRef.current.update();

  //         // Update the current angle (ref, not state)
  //         currentAngleRef.current = clampedAngle;
  //       }

  //       requestAnimationFrame(updateRotation);
  //     };

  //     updateRotation();
  //   }, [targetAngle]); // Run when targetAngle changes

  useEffect(() => {
    AOS.init({
      duration: 1500, // Adjust the animation duration
    });
  }, []);

  return (
    <div className="background-shadows relative" id="hero-section">
      <div className=" relative h-[90vh] m-5 lg:m-9 z-30">
        <div className="absolute lg:top-6 xl:top-10 inset-0 w-full text-white z-20 max-h-[350px] ">
          <Navbar />
        </div>

        <video
          src={HeroVideo} // Replace with your video file path
          className="w-full h-full rounded-[2rem]"
          style={{
            objectFit: "cover", // Ensures the video covers the whole div
            transformOrigin: "center",
          }}
          autoPlay
          muted
          playsInline
        />
        {/* <Canvas
          className="rounded-[40px]"
          style={{ height: "100%", width: "100%" }}
        >
       
          <ambientLight intensity={0.5} />


          <directionalLight position={[0, 50, 30]} intensity={1} />

       
          <HeroModel />


          <OrbitControls
            ref={controlsRef}
            enableZoom={false} // Allows zooming in and out
            minPolarAngle={Math.PI / 2} // Limit vertical rotation to 45 degrees
            maxPolarAngle={Math.PI / 2} // Limit vertical rotation to 90 degrees
            minAzimuthAngle={-Math.PI / 16}
            maxAzimuthAngle={Math.PI / 16}
            enablePan={false}
          />
        </Canvas> */}

        <div className="w-full px-2 top-[15%] lg:top-[20%] flex-col justify-center items-center text-center absolute z-10">
          <div
            className="2xl:text-[42px] lg:text-[35px] md:text-[28px] max-sm:pt-10 orbitron tracking-wide text-white"
            data-aos="fade-up"
          >
            Web Development for outstanding
          </div>
          <div
            className="brands-gradient 2xl:text-[42px] lg:text-[35px] md:text-[28px] tracking-wide orbitron"
            data-aos="fade-up"
          >
            personal brands
          </div>
          <div
            className="px-4 quicksand-md text-[13px] lg:text-[16px] text-white"
            data-aos="fade-up"
          >
            Embrace Individuality! <br />
            Define how the internet sees you with a website made by experts
          </div>
          <div
            className="mt-5 flex flex-row justify-center gap-1"
            data-aos="fade-up"
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
          </div>
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
