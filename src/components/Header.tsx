import React, { useState, useEffect, useRef } from "react";
import {
  House,
  BriefcaseBusiness,
  Wrench,
  FolderKanban,
  Mail,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import imglogo from "../assets/dark-mode-logo.png";
import "../styles/Header.css";
import { useLoader } from "../context/LoaderContext";

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [activeMobileLink, setActiveMobileLink] = useState("About");
  const location = useLocation();
  const lastScrollY = useRef(0);
  const navigate = useNavigate();
  const { triggerLoading } = useLoader();

  useEffect(() => {
    const handleNavbarScroll = () => {
      const currentScrollY = window.scrollY;

      // Keep navbar visible near the top for easy navigation.
      if (currentScrollY < 24) {
        setIsNavVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleNavbarScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleNavbarScroll);
    };
  }, []);

  // Scroll to Top Function (Modified to use Loader if navigating)
  const handleScrollToTop = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      triggerLoading(() => {
        navigate("/");
        window.scrollTo(0, 0);
      });
    } else {
      window.scrollTo(0, 0);
    }
  };

  const handleNavLinkClick = (e, link) => {
    if (link.type === "route") {
      e.preventDefault();
      if (location.pathname !== link.href) {
        triggerLoading(() => {
          navigate(link.href);
          window.scrollTo(0, 0);
        });
      } else {
        window.scrollTo(0, 0);
      }
    }
  };

  const handleMobileLinkClick = (e, link) => {
    setActiveMobileLink(link.name);
    handleNavLinkClick(e, link);
  };

  const isHomePage = location.pathname === "/";

  const navLinks = isHomePage
    ? [
        { name: "About", href: "#about", type: "scroll", icon: House },
        { name: "Experience", href: "#experience", type: "scroll", icon: BriefcaseBusiness,},
        { name: "Projects", href: "#projects", type: "scroll",icon: FolderKanban,},
        { name: "Skills", href: "#tools", type: "scroll", icon: Wrench },
        { name: "Contact", href: "#contact", type: "scroll", icon: Mail },
      ]
    : [{ name: "Home", href: "/", type: "route", icon: House }];

  return (
    <>
      <nav className={`navbar ${isNavVisible ? "navbar-show" : "navbar-hide"}`}>
        <div className="container">
          <div className="nav-content">
            <a href="/" className="logo" onClick={handleScrollToTop}>
              <div className="logo-wrapper">
                <img src={imglogo} alt="Brand Logo" className="logo-image" />
                <div
                  className="logo-gradient-overlay"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--grad-start), var(--grad-end))",
                    WebkitMaskImage: `url("${imglogo}")`,
                    maskImage: `url("${imglogo}")`,
                  }}
                ></div>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="desktop-menu">
              {navLinks.map((link) =>
                link.type === "route" ? (
                  <a
                    key={link.name}
                    href={link.href}
                    className="nav-link"
                    onClick={(e) => handleNavLinkClick(e, link)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <a key={link.name} href={link.href} className="nav-link">
                    {link.name}
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="mobile-bottom-nav-wrap">
        <div
          className={`mobile-bottom-nav ${
            isNavVisible ? "mobile-nav-show" : "mobile-nav-hide"
          }`}
        >
          {navLinks.map((link) => {
            const Icon = link.icon || House;
            const isActive = activeMobileLink === link.name;

            return (
              <a
                key={link.name}
                href={link.href}
                className={`mobile-bottom-link ${isActive ? "active" : ""}`}
                onClick={(e) => handleMobileLinkClick(e, link)}
                aria-label={link.name}
              >
                <Icon size={16} strokeWidth={2} />
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Header;
