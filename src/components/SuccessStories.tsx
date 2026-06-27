import { useTranslation } from "react-i18next";

function SuccessStories(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <div id="success-stories" className="container success-stories">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2 className="main-title">{t("success.title")}</h2>
          <p className="main-p">{t("success.subtitle")}</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 mb-2">
          <div className="success-card">
            <h3 className="card-title">
              {t("success.ecommerce.title")}
            </h3>
            <p className="card-text">
              {t("success.ecommerce.text")}
            </p>
          </div>
        </div>

        <div className="col-md-4 mb-2">
          <div className="success-card">
            <h3 className="card-title">
              {t("success.brand.title")}
            </h3>
            <p className="card-text">
              {t("success.brand.text")}
            </p>
          </div>
        </div>

        <div className="col-md-4 mb-2">
          <div className="success-card">
            <h3 className="card-title">
              {t("success.performance.title")}
            </h3>
            <p className="card-text">
              {t("success.performance.text")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessStories;