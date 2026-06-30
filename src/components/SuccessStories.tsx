import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

function SuccessStories(): React.JSX.Element {
  const { t } = useTranslation();

  const [selectedStory, setSelectedStory] = useState<{
    title: string;
    text: string;
  } | null>(null);

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedStory(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
              <div
                className="success-card"
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedStory(story)}
              >
                <h3 className="card-title">{story.title}</h3>
                <p className="card-text">
                  {story.text.length > 120
                    ? `${story.text.substring(0, 120)}...`
                    : story.text}
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedStory && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedStory(null)}
          >
            <motion.div
              className="story-modal"
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                y: 40,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 22,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-btn"
                onClick={() => setSelectedStory(null)}
              >
                ✕
              </button>

              <h2 className="card-title">{selectedStory.title}</h2>

              <p className="card-text">{selectedStory.text}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SuccessStories;