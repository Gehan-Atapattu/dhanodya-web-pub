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

import ShimmerText from "./ShimmerText";

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
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="relative inline-block overflow-hidden text-white"
>
  {/* Base text */}
  <span className="relative z-10">{slide.subtitle}</span>

  {/* Glass ribbon */}
  <motion.div
    className="absolute inset-0 pointer-events-none"
    initial={{ x: "-150%" }}
    animate={{ x: "150%" }}
    transition={{
      duration: 2.5,
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
    }}
  >
    <div
      className="h-full w-24 -skew-x-12"
      style={{
        background: `
          linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,.15),
            rgba(255,255,255,.95),
            rgba(255,255,255,.15),
            transparent
          )
        `,
        filter: "blur(6px)",
        mixBlendMode: "screen",
      }}
    />
  </motion.div>
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