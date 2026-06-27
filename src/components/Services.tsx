import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Card from "./Card";

import card1 from "../img/card1.png";
import card2 from "../img/card2.png";
import card3 from "../img/card3.png";

function Services(): React.JSX.Element {
  const { t } = useTranslation();

  const cards = [
    {
      title: t("services.cards.web.title"),
      text: t("services.cards.web.text"),
      img: card1,
    },
    {
      title: t("services.cards.ecommerce.title"),
      text: t("services.cards.ecommerce.text"),
      img: card2,
    },
    {
      title: t("services.cards.security.title"),
      text: t("services.cards.security.text"),
      img: card3,
    },
  ];

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="container services">
      <h2 className="main-title text-center">
        {t("services.title")}
      </h2>

      <div className="card-cover">
        <div className="row">
          {cards.map((card, index) => (
            <div className="col-md-4 mb-2" key={card.title}>
              <motion.div
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover={{
                  scale: 1.05,
                  y: -8,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card
                  title={card.title}
                  img={card.img}
                  text={card.text}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;