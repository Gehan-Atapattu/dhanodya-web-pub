import { useTranslation } from "react-i18next";

function Opportunities() {
  const { t } = useTranslation();

  return (
    <div id="opportunities" className="container opportunities">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2 className="main-title">{t('opportunities.title')}</h2>
          <p className="main-p">{t('opportunities.subtitle')}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-2">
          <div className="card opportunity-card">
            <h3 className="card-title">{t('opportunities.growth')}</h3>
            <p className="card-text">{t('opportunities.growthText')}</p>
          </div>
        </div>
        <div className="col-md-4 mb-2">
          <div className="card opportunity-card">
            <h3 className="card-title">{t('opportunities.brand')}</h3>
            <p className="card-text">{t('opportunities.brandText')}</p>
          </div>
        </div>
        <div className="col-md-4 mb-2">
          <div className="card opportunity-card">
            <h3 className="card-title">{t('opportunities.optimization')}</h3>
            <p className="card-text">{t('opportunities.optimizationText')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Opportunities;
