import { useTranslation } from "react-i18next";

function Contact(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="container contact">
      <h2 className="main-title text-center">
        {t("contact.title")}
      </h2>

      <div className="col-md-12">
        <div className="row">
          <div className="col-md-4 mb-1">
            <input
              name="name"
              placeholder={t("contact.name")}
              className="contact-input"
            />
          </div>

          <div className="col-md-4 mb-1">
            <input
              name="email"
              placeholder={t("contact.email")}
              className="contact-input"
            />
          </div>

          <div className="col-md-4 mb-1">
            <input
              name="subject"
              placeholder={t("contact.subject")}
              className="contact-input"
            />
          </div>
        </div>
      </div>

      <br />

      <div className="col-md-12">
        <textarea
          name="message"
          placeholder={t("contact.message")}
          className="contact-textarea"
        />
      </div>

      <br />

      <div className="row">
        <div className="col-md-12">
          <input
            className="btn"
            type="submit"
            value={t("contact.submit")}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;