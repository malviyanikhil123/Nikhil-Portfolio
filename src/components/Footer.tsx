import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  const location = useLocation();
  const isProject = location.pathname.includes("/project-details");
  const year = new Date().getFullYear();

  const scrollTo = (e, id) => {
    e.preventDefault();
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="page-wrapper">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />

      <footer className="footer-section">
        {/* ── Bottom Bar ── */}
        <div className="footer-bottom">
          <div className="footer-inner">
            {/* Left: Brand */}
            <div className="footer-brand">
              <div className="footer-brand-name">
                Nikhil <span>Malviya</span>
              </div>
              <div className="footer-brand-tagline">
                Software Engineer & Aspiring DevOps Engineer
              </div>
            </div>

            {/* Right: Socials + copyright */}
            <div className="footer-right">
              <div className="footer-socials">
                <a
                  href="https://www.instagram.com/_malviya_nikhil/"
                  className="social-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i className="fa-brands fa-instagram" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nikhil-malviya-80a6a0326/"
                  className="social-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin-in" />
                </a>
                <a
                  href="https://github.com/malviyanikhil123"
                  className="social-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <i className="fa-brands fa-github" />
                </a>
                <a
                  href="tel:+8000215545"
                  className="social-btn"
                  aria-label="Phone"
                >
                  <i className="fa-solid fa-phone" />
                </a>
              </div>
              <div className="footer-copy">
                © {year} Nikhil Malviya · All rights reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
