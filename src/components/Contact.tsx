import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { showEmailToast } from "../utils/toastUtils";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");
    showEmailToast.sending();

    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    if (!publicKey || !serviceId || !templateId) {
      console.log(
        "EmailJS configuration missing. Please check your .env file.",
      );
      setSubmitStatus("error");
      showEmailToast.configError();
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey,
      );

      setSubmitStatus("success");
      const userName = formData.name;
      setFormData({ name: "", email: "", message: "" });
      showEmailToast.success(userName);
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
      showEmailToast.error();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-cta">
        <span className="contact-label">Let's collaborate</span>
        <h2 className="contact-heading">Got a project in mind?</h2>
        <p className="contact-sub">
          I'm open to new opportunities. Let's build something amazing together.
        </p>

        <form className="contact-form" onSubmit={handleSendEmail}>
          <input
            type="text"
            name="name"
            className="contact-input"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            className="contact-input"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="message"
            className="contact-input contact-textarea"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            rows={5}
            required
          />

          <button
            type="submit"
            className="contact-email-btn"
            aria-busy={isSubmitting}
            disabled={isSubmitting}
          >
            <i className="fa-solid fa-envelope" />
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {submitStatus === "success" && (
            <div className="form-status success">
              Message sent successfully! I&apos;ll get back to you soon.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="form-status error">
              Failed to send message. Please try again.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
