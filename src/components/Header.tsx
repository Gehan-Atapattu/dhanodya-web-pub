import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import image1 from "../img/image1.jpg";
import image2 from "../img/image2.jpg";
import image3 from "../img/image3.jpg";
import image5 from "../img/image5.jpg";
import image6 from "../img/image6.png";



interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

function Header(): React.JSX.Element {
  const { t } = useTranslation();

  const slides: Slide[] = [
    {
      image: image1,
      title: t("header.title"),
      subtitle: t("header.subtitle"),
    },
    {
      image: image2,
      title: t("header.title"),
      subtitle: t("header.subtitle"),
    },
    {
      image: image3,
      title: t("header.title"),
      subtitle: t("header.subtitle"),
    },
    {
      image: image5,
      title: t("header.title"),
      subtitle: t("header.subtitle"),
    },
    {
      image: image6,
      title: t("header.title"),
      subtitle: t("header.subtitle"),
    },
  ];

  return (
    <header className="hero-section">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide">
              <img
                src={slide.image}
                alt={slide.title}
                className="slide-image"
              />

              <div className="overlay" />

              <div className="hero-content">
                <h1>{slide.title}</h1>
            

                <motion.p
                  className="text-white"
                  style={{
                          textShadow: `
                          0 0 20px #fff,
                          0 0 40px #fff,
                          0 0 80px rgba(255,255,255,.8),
                          0 0 120px rgba(255,255,255,.5)
                          `,
                        }}
                  animate={{
                  scale: [1, 1.015, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {slide.subtitle}
                </motion.p>


                <div className="hero-buttons">
                  <button className="btn">
                    {t("header.signup")}
                  </button>

                  <button className="btn btn-outline">
                    {t("header.login")}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
}

export default Header;