import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

function Contact(): React.JSX.Element {
  const { t } = useTranslation();

  const formRef = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // Hide status message after 3 seconds
  useEffect(() => {
    if (!status) return;

    const timer = setTimeout(() => {
      setStatus("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [status]);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setLoading(true);
    setStatus("");

    try {
      // Send message to you
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Send auto-reply to user
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("✅ Message sent successfully.");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container contact">
      <h2 className="main-title text-center">
        {t("contact.title")}
      </h2>

      <form ref={formRef} onSubmit={sendEmail}>
        <div className="row">
          <div className="col-md-4 mb-1">
            <input
              type="text"
              name="name"
              placeholder={t("contact.name")}
              className="contact-input"
              required
            />
          </div>

          <div className="col-md-4 mb-1">
            <input
              type="email"
              name="email"
              placeholder={t("contact.email")}
              className="contact-input"
              required
            />
          </div>

          <div className="col-md-4 mb-1">
            <input
              type="text"
              name="subject"
              placeholder={t("contact.subject")}
              className="contact-input"
              required
            />
          </div>
        </div>

        <br />

        <div className="col-md-12">
          <textarea
            name="message"
            placeholder={t("contact.message")}
            className="contact-textarea"
            rows={6}
            required
          />
        </div>

        <br />

        <div className="row">
          <div className="col-md-12">
            <button
              className="btn"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : t("contact.submit")}
            </button>
          </div>
        </div>

        {status && (
          <div
            style={{
              marginTop: "15px",
              textAlign: "center",
              color: status.includes("✅") ? "green" : "red",
              fontWeight: "bold",
            }}
          >
            {status}
          </div>
        )}
      </form>
    </div>
  );
}

export default Contact;