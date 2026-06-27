import { useTranslation } from "react-i18next";
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
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src={img1} className="img-fluid" />
          </div>

          <div className="col-md-6">
            <h2 className="main-title about-h2">
              {t("about.title")}
            </h2>

            <p className="main-p">
              {t("about.description")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;