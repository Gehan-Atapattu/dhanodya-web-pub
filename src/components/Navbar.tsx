import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import logo from "../img/logo22.png";

function Navbar(): React.JSX.Element {
  const { t, i18n } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576);

      if (window.innerWidth > 576) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        (window.innerWidth < 768 && window.scrollY > 690) ||
        (window.innerWidth >= 768 && window.scrollY > 220)
      ) {
        document.querySelector(".gotop")?.classList.add("display");
        document.querySelector(".navbar")?.classList.add("navopened");
      } else {
        document.querySelector(".gotop")?.classList.remove("display");
        document.querySelector(".navbar")?.classList.remove("navopened");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = (): void => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = (): void => {
    if (isMobile) {
      setMenuOpen(false);
    }
  };

  const handleLanguageChange = (lang: string): void => {
    i18n.changeLanguage(lang);

    if (isMobile) {
      setMenuOpen(false);
    }
  };

  const languageButtons = (
    <>
      <button
        type="button"
        className={`lang-button ${
          i18n.language === "en" ? "active" : ""
        }`}
        onClick={() => handleLanguageChange("en")}
      >
        {t("nav.english")}
      </button>

      <button
        type="button"
        className={`lang-button ${
          i18n.language === "si" ? "active" : ""
        }`}
        onClick={() => handleLanguageChange("si")}
      >
        {t("nav.sinhala")}
      </button>

      <button
        type="button"
        className={`lang-button ${
          i18n.language === "ta" ? "active" : ""
        }`}
        onClick={() => handleLanguageChange("ta")}
      >
        {t("nav.tamil")}
      </button>
    </>
  );

  return (
    <nav className="navbar">
      <div className="container">
        <div className="row">
          <Link
            spy
            smooth
            duration={1000}
            to="headerbg"
            className="navbar-logo-link"
            style={{ cursor: "pointer" }}
          >
            <img
              src={logo}
              alt="Dhanodya Logo"
              className="navbar-logo-img"
            />
          </Link>

          <ul className={`bar ${menuOpen ? "opened" : ""}`}>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="active"
                spy
                smooth
                duration={1000}
                to="headerbg"
              >
                {t("nav.home")}
              </Link>
            </li>

            <li>
              <Link
                onClick={closeMenu}
                activeClass="active"
                to="services"
                spy
                smooth
                duration={1000}
              >
                {t("nav.services")}
              </Link>
            </li>

            <li>
              <Link
                onClick={closeMenu}
                activeClass="active"
                to="opportunities"
                spy
                smooth
                duration={1000}
              >
                {t("nav.opportunities")}
              </Link>
            </li>

            <li>
              <Link
                onClick={closeMenu}
                activeClass="active"
                to="success-stories"
                spy
                smooth
                duration={1000}
              >
                {t("nav.success")}
              </Link>
            </li>

            <li>
              <Link
                onClick={closeMenu}
                activeClass="active"
                to="about-scroll"
                spy
                smooth
                duration={1000}
              >
                {t("nav.about")}
              </Link>
            </li>

            <li>
              <Link
                onClick={closeMenu}
                activeClass="active"
                to="contact"
                spy
                smooth
                duration={1000}
              >
                {t("nav.contact")}
              </Link>
            </li>

            {isMobile && (
              <li className="nav-lang">
                <div className="lang-switch">
                  {languageButtons}
                </div>
              </li>
            )}
          </ul>

          {!isMobile && (
            <div className="lang-switch desktop-lang">
              {languageButtons}
            </div>
          )}

          <div
            className="button"
            onClick={toggleMenu}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                toggleMenu();
              }
            }}
          >
            <div className="burger" />
            <div className="burger" />
            <div className="burger" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;