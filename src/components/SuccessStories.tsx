import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function SuccessStories(): React.JSX.Element {
  const { t } = useTranslation();

  const stories = [
    {
      title: t("success.ecommerce.title"),
      text: t("success.ecommerce.text"),
    },
    {
      title: t("success.brand.title"),
      text: t("success.brand.text"),
    },
    {
      title: t("success.performance.title"),
      text: t("success.performance.text"),
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
    <div id="success-stories" className="container success-stories">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2 className="main-title">{t("success.title")}</h2>
          <p className="main-p">{t("success.subtitle")}</p>
        </div>
      </div>

      <div className="row">
        {stories.map((story, index) => (
          <div className="col-md-4 mb-2" key={story.title}>
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
              <div className="success-card">
                <h3 className="card-title">{story.title}</h3>
                <p className="card-text">{story.text}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuccessStories;