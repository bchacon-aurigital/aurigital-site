import { Abraham, Tulsi, Calo, ImageShadow, BGTestimonials } from "../assets";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 0,
    centerMode: false, // Enable centering of the visible card
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true, // Enable centering of the visible card
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 710,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true, // Enable centering of the visible card
          centerPadding: "0px",
        },
      },
    ],
  };

  const testimonials = [
    {
      image: Abraham,
      content:
        "He sido barbero profesional por más de 8 años y mi mayor problema ha sido el manejo de citas para mis clientes. Muchos me escribían o llamaban durante mis horas de trabajo, y se me complicaba atender sus consultas, lo que ocasionaba la pérdida de clientes. Aurigital me ha ahorrado tiempo, facilitando la agenda con un solo click. Su diseño web y facilidad de uso logran que la experiencia sea siempre positiva. Yo personalmente solo puedo compartir felicidad y completo respaldo y admiración a esta gran empresa. Siempre agradecido y recomendado, Gracias Aurigital.",
    },
    {
      image: Tulsi,
      content:
        "Aurigital me ayudó a conocer mis necesidades en el mundo digital y se han encargado de acompañarme en el proceso, junto a ellos he podido desarollar no solo una página web estética sino funcional, me ayudaron a ordenar mi proceso de agendar clientes, venta de libros, promoción de talleres nuevos y creación de un blog para explotar mi creatividad. Estoy segura de que puedo seguir confiando en su trabajo para seguir construyendo plataformas de crecimiento, conocimiento y amor.		",
    },
    {
      image: Calo,
      content:
        "En Servidental CR, contratamos los servicios de Aurigital para la actualización de nuestro sitio web, y no podríamos estar más satisfechos. Desde el primer momento, el equipo demostró gran profesionalismo y tiempos de respuesta sumamente eficientes. Nos acompañaron en todo el proceso, escuchando nuestras ideas y ayudándonos a plasmarlas de manera clara y efectiva en la web. Gracias a su atención personalizada, logramos transmitir nuestro mensaje a los clientes tal como lo habíamos imaginado. Recomiendo a Aurigital sin reservas; su servicio es excepcional.",
    },
  ];

  useEffect(() => {
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
  }, []);

  return (
    <>
      <div className="background-shadows " id="testimonial-section">
        <div className="left-shadow ">
          <img src={ImageShadow} alt="Card Image" />
        </div>
        <div className="bg-[#1682BE]/10 m-4 lg:mt-8 xl:mt-28 px-5 pt-20 pb-5 overflow-hidden backdrop-blur-2xl rounded-[2rem]">
          <div className="max-w-[1100px] px-5 lg:px-10 lg:mx-auto ">
            <div className="lg:py-5 max-sm:pb-5">
              <h1 className="text-white leading-10 max-sm:text-2xl text-4xl py-2 orbitron">
                Committed To Delivering Delight
              </h1>
              <p className="text-white text-md quicksand-md mb-5">
                We're all about creating customer wows! Read what our customers
                are saying <br className="hidden md:flex" /> and see why we're
                so passionate about exceeding expectations!
              </p>
            </div>

            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-2 text-white flex ">
                  <div className="flex flex-col max-w-[280px] min-w-[280px] min-h-[510px] rounded-lg  my-10 mx-auto overflow-hidden shadow-xl relative videoHoverCard">
                    <video
                      src={BGTestimonials}
                      alt="Card Video"
                      className="w-full h-full object-cover rounded-xl absolute -z-10"
                      loop
                      muted
                    ></video>
                    <div className="relative">
                      <div className="img-div">
                        <img
                          src={testimonial.image}
                          alt="Card Image"
                          className="max-w-[100px] shadow-custom cover-full rounded-full"
                        />
                      </div>
                      <div>
                        <p className="text-xs text-center px-5 py-2">
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
                BOOK A CALL
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
