import { useTranslation } from "react-i18next";
import Card from "./Card";
import card1 from "../img/card1.png";
import card2 from "../img/card2.png";
import card3 from "../img/card3.png";

function Services(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="container services">
      <h2 className="main-title text-center">
        {t("services.title")}
      </h2>

      <div className="card-cover">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4 mb-2">
              <Card
                title={t("services.cards.web.title")}
                img={card1}
                text={t("services.cards.web.text")}
              />
            </div>

            <div className="col-md-4 mb-2">
              <Card
                title={t("services.cards.ecommerce.title")}
                img={card2}
                text={t("services.cards.ecommerce.text")}
              />
            </div>

            <div className="col-md-4 mb-2">
              <Card
                title={t("services.cards.security.title")}
                img={card3}
                text={t("services.cards.security.text")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;