import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ChevronUp } from "lucide-react";
import { Toaster } from "react-hot-toast";
import { LoaderProvider } from "./context/LoaderContext";

// Existing imports
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";
import { showSiteToast } from "./utils/toastUtils";

// Footer Wrapper Component
const FooterWrapper = () => {
  const location = useLocation();
  const isProjectPage = location.pathname.includes("/project-details");
  return (
    <>
      {!isProjectPage && <Contact />}
      <Footer />
    </>
  );
};

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    showSiteToast.welcome();
  }, []);

  useEffect(() => {
    // ===== CUSTOM CURSOR (Desktop Only) =====
    // Check if device has fine pointer (mouse) - skip on touch devices
    const isTouchDevice = !window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;

    let cursor, cursorDot, animationId;

    if (!isTouchDevice) {
      cursor = document.createElement("div");
      cursor.id = "custom-cursor";
      cursorDot = document.createElement("div");
      cursorDot.id = "cursor-dot";
      document.body.appendChild(cursor);
      document.body.appendChild(cursorDot);

      let mouseX = 0,
        mouseY = 0;
      let cursorX = 0,
        cursorY = 0;
      let dotX = 0,
        dotY = 0;

      const moveCursor = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      };

      const animate = () => {
        // Smooth follow effect
        cursorX += (mouseX - cursorX) * 0.2;
        cursorY += (mouseY - cursorY) * 0.2;
        dotX += (mouseX - dotX) * 0.4;
        dotY += (mouseY - dotY) * 0.4;

        cursor.style.left = cursorX + "px";
        cursor.style.top = cursorY + "px";
        cursorDot.style.left = dotX + "px";
        cursorDot.style.top = dotY + "px";

        animationId = requestAnimationFrame(animate);
      };

      document.addEventListener("mousemove", moveCursor);
      document.addEventListener("mousedown", () =>
        cursor.classList.add("click"),
      );
      document.addEventListener("mouseup", () =>
        cursor.classList.remove("click"),
      );
      animate();
    }

    // ===== SCROLL PROGRESS BAR & SCROLL TO TOP BUTTON =====
    const progressBar = document.createElement("div");
    progressBar.id = "scroll-progress";
    document.body.appendChild(progressBar);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      progressBar.style.width = scrollPercent + "%";

      // Show scroll-to-top button after 300px
      setShowScrollTop(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      window.removeEventListener("scroll", handleScroll);
      if (cursor && cursor.parentNode) cursor.parentNode.removeChild(cursor);
      if (cursorDot && cursorDot.parentNode)
        cursorDot.parentNode.removeChild(cursorDot);
      if (progressBar.parentNode)
        progressBar.parentNode.removeChild(progressBar);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <LoaderProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <div>
          <Header />

          <Routes>
            {/* Route 1: Home Page */}
            <Route
              path="/"
              element={
                <>
                  <div id="about-section">
                    <About />
                  </div>

                  <div id="experience-section">
                    <Experience />
                  </div>

                  <div id="project-section">
                    <Projects />
                  </div>

                  <div id="tools-section">
                    <Skills />
                  </div>
                </>
              }
            />

            {/* Route 2: Project Details Page */}
            <Route path="/project-details/:id" element={<ProjectDetails />} />
          </Routes>

          <FooterWrapper />

          {/* Scroll to Top Button */}
          <button
            className={`scroll-to-top ${showScrollTop ? "show" : ""}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </button>

          <Toaster
            position="top-center"
            gutter={10}
            toastOptions={{
              duration: 3500,
              style: {
                background: "#131020",
                color: "#f4f0ff",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "12px",
                boxShadow: "0 14px 34px rgba(0, 0, 0, 0.35)",
              },
              success: {
                iconTheme: {
                  primary: "#22c55e",
                  secondary: "#0b0f17",
                },
              },
              error: {
                iconTheme: {
                  primary: "#ef4444",
                  secondary: "#0b0f17",
                },
              },
            }}
          />
        </div>
      </Router>
    </LoaderProvider>
  );
}

export default App;
