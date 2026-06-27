import { Link, animateScroll as scroll } from "react-scroll";
import { useTranslation } from "react-i18next";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

import "../css/Footer.css";


function Footer(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-section">
          <h2 className="footer-logo">{t("footer.brand")}</h2>
          <p>{t("footer.tagline")}</p>
        </div>

        {/* Navigation */}
        <div className="footer-section">
          <h3>{t("footer.quickLinks")}</h3>
          <ul>
            <li>
              <Link to="headerbg" smooth duration={800}>
                {t("nav.home")}
              </Link>
            </li>
            <li>
              <Link to="services" smooth duration={800}>
                {t("nav.services")}
              </Link>
            </li>
            <li>
              <Link to="about-scroll" smooth duration={800}>
                {t("nav.about")}
              </Link>
            </li>
            <li>
              <Link to="contact" smooth duration={800}>
                {t("nav.contact")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>{t("footer.contact")}</h3>
          <p>{t("footer.email")}</p>
          <p>{t("footer.phone")}</p>
          <p>{t("footer.location")}</p>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h3>{t("footer.followUs")}</h3>

          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>{t("footer.copy", { year: new Date().getFullYear() })}</p>
      </div>

      {/* Back To Top */}
      <button
        className="go-top"
        onClick={() => scroll.scrollToTop({ duration: 1000 })}
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}

export default Footer;