import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import img1 from "../img/img1.png";

function About(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <div
        style={{ marginTop: "15rem", width: "100%", height: "10px" }}
        className="about-scroll"
      ></div>

      <div className="container about">
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <motion.img
              src={img1}
              alt="about"
              className="img-fluid"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            />
          </div>

          <div className="col-md-6">
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="main-title about-h2">
                {t("about.title")}
              </h2>

              <p className="main-p">
                {t("about.description")}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;