import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function Opportunities() {
  const { t } = useTranslation();

  const opportunities = [
    {
      title: t("opportunities.growth"),
      text: t("opportunities.growthText"),
    },
    {
      title: t("opportunities.brand"),
      text: t("opportunities.brandText"),
    },
    {
      title: t("opportunities.optimization"),
      text: t("opportunities.optimizationText"),
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
    <div id="opportunities" className="container opportunities">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2 className="main-title">{t("opportunities.title")}</h2>
          <p className="main-p">{t("opportunities.subtitle")}</p>
        </div>
      </div>

      <div className="row">
        {opportunities.map((opportunity, index) => (
          <div className="col-md-4 mb-2" key={opportunity.title}>
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
              <div className="card opportunity-card">
                <h3 className="card-title">{opportunity.title}</h3>
                <p className="card-text">{opportunity.text}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Opportunities;