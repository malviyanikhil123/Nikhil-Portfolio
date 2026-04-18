import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import "../styles/ProjectDetails.css";

// --- IMPORTS ---
import p1Dashboard from "../assets/Book-Store/Screenshot 2026-04-17 232310.png";
import p1Mob1 from "../assets/Book-Store/Screenshot 2026-04-17 232328.png";

import p2Dashboard from "../assets/Ecommerce-App/Screenshot 2026-04-17 232130.png";
import p2Mob1 from "../assets/Ecommerce-App/Screenshot 2026-04-17 232155.png";

import p3Dashboard from "../assets/Go-Food/Screenshot 2026-04-17 231002.png";
import p3Mob1 from "../assets/Go-Food/Screenshot 2026-04-17 231012.png";

import p4Dashboard from "../assets/ngo-saathi/Screenshot 2026-04-17 225634.png";
import p4Mob1 from "../assets/ngo-saathi/Screenshot 2026-04-17 225647.png";
import p4Mob2 from "../assets/ngo-saathi/Screenshot 2026-04-17 225713.png";

import p5Dashboard from "../assets/Real-Estate-Marketplace/Screenshot 2026-04-17 230311.png";
import p5Mob1 from "../assets/Real-Estate-Marketplace/Screenshot 2026-04-17 230319.png";

import p6Dashboard from "../assets/user-clone/Screenshot 2026-04-17 230047.png";
import p6Mob1 from "../assets/user-clone/Screenshot 2026-04-17 230055.png";
import githubIcon from "../assets/Skills/GitHub.png";

type Project = {
  id: number;
  title: string;
  introHeading: string;
  description: string;
  subDescription: string;
  features: string[];
  role: string;
  tools: string;
  timeline: string;
  githubLink: string;
  designSystem?: {
    font: string;
    colors: string[];
  };
  dashboardImage: string;
  mobileImage1?: string;
  mobileImage2?: string;
  mobileImage3?: string;
};

// --- DATA ---
const projectsData: Project[] = [
  {
    id: 1,
    title: "NGO Saathi Portal",
    introHeading:
      "A connected two-portal ecosystem for NGO discovery, volunteering, donations, and NGO operations.",
    description:
      "NGO Saathi is built as two connected web portals. The first portal works like a social discovery platform where users can search NGOs, explore causes, read updates, join volunteer opportunities, and donate to verified organizations.",
    subDescription:
      "The second portal is an NGO management software panel where organizations manage donations, track inventory, monitor volunteers, and view key insights through dashboards. Both portals are connected in one flow so public activity and NGO operations stay synchronized.",
    features: [
      "NGO Search and Discovery Feed",
      "Volunteer, Story, and Donation Flows",
      "NGO Donation and Inventory Management",
      "Insights Dashboard Across Both Portals",
    ],
    role: "Full-Stack Developer",
    tools: "React, Node.js, REST API, Dashboard Analytics",
    timeline: "6 Months",
    githubLink: "https://github.com/malviyanikhil123/Ngo-Saathi",
    designSystem: {
      font: "Playfair Display",
      colors: ["#E8E0EF", "#B79CE8", "#2C213F", "#F7F4FB"],
    },
    dashboardImage: p4Dashboard,
    mobileImage1: p4Mob1,
    mobileImage2: p4Mob2,
  },
  {
    id: 2,
    title: "Ecommerce",
    introHeading:
      "A minimal commerce front page focused on product discovery and clarity.",
    description:
      "This project explores a lightweight ecommerce shell where users can quickly orient themselves using a simple top navigation and minimal visual clutter. The composition prioritizes whitespace and immediate access to core browsing actions.",
    subDescription:
      "The visual approach is intentionally restrained to improve scanability and reduce cognitive load. It serves as a strong foundation for scaling into collections, product details, and account modules.",
    features: [
      "Minimal Navigation Bar",
      "Clear Entry Point Layout",
      "Whitespace-driven Structure",
      "Fast Content Scannability",
    ],
    role: "Full-Stack Developer",
    tools: "React, CSS",
    timeline: "1 Week",
    githubLink: "https://github.com/malviyanikhil123/Ecommerce-App",
    designSystem: {
      font: "Poppins",
      colors: ["#F3F3F3", "#4F4F4F", "#222222", "#FFFFFF"],
    },
    dashboardImage: p2Dashboard,
    mobileImage1: p2Mob1,
  },
  {
    id: 3,
    title: "GoFood Ordering System",
    introHeading:
      "A food-ordering interface with practical onboarding and account flows.",
    description:
      "GoFood Ordering System streamlines user registration and login with straightforward form interactions and strong visual contrast. The layout combines utility-first structure with familiar ecommerce behavior.",
    subDescription:
      "The design emphasizes speed: users can sign up, confirm key details, and continue into ordering without unnecessary steps. Real-world form patterns are used to improve completion rate and usability.",
    features: [
      "Authentication-first Flow",
      "Location-ready Form Inputs",
      "High Contrast CTA Actions",
      "Background-led Branding",
    ],
    role: "Full-Stack Developer",
    tools: "MongoDB, Express, React, Node.js",
    timeline: "2 Weeks",
    githubLink: "https://github.com/malviyanikhil123/Go-Food",

    dashboardImage: p3Dashboard,
    mobileImage1: p3Mob1,
  },
  {
    id: 4,
    title: "BookStore",
    introHeading:
      "An online learning storefront with clean navigation and guided user journeys.",
    description:
      "BookStore Learning Platform is designed as a modern educational interface where users can browse courses, search quickly, and move through account actions without friction. The dark visual system keeps focus on the core content blocks and call-to-action elements.",
    subDescription:
      "I focused on balancing readability and conversion. From hero hierarchy to login modal behavior, each section is structured to help users understand the offering at a glance and take the next step confidently.",
    features: [
      "Hero-first Content Layout",
      "Search-led Navigation",
      "Modal Login Experience",
      "Dark Theme Readability",
    ],
    role: "Full-Stack Developer",
    tools: "React, CSS, Framer Motion",
    timeline: "2 Weeks",
    githubLink: "https://github.com/malviyanikhil123/Book-Store",
    designSystem: {
      font: "Poppins",
      colors: ["#0B1220", "#1B2432", "#F43F9E", "#B6C0D1"],
    },
    dashboardImage: p1Dashboard,
    mobileImage1: p1Mob1,
  },
  {
    id: 5,
    title: "Real Estate Marketplace",
    introHeading:
      "A property listing platform that simplifies discovery and account access.",
    description:
      "Real Estate Marketplace presents a clean entry point for users searching homes and apartments. With straightforward navigation and focused hero copy, it reduces friction in the browsing phase.",
    subDescription:
      "The interface was crafted to support trust and speed: users can search, explore, and proceed to sign in without clutter. It is built to expand into listing filters, saved properties, and map-based browsing.",
    features: [
      "Property Discovery Hero",
      "Simple Search Experience",
      "Account Access Flow",
      "Scalable Listing Foundation",
    ],
    role: "Full-Stack Developer",
    tools: "React, CSS",
    timeline: "2 Weeks",
    githubLink: "https://github.com/malviyanikhil123/Real-Estate-Marketplace",
    designSystem: {
      font: "Inter",
      colors: ["#CFD6E2", "#334155", "#94A3B8", "#EEF2F7"],
    },
    dashboardImage: p5Dashboard,
    mobileImage1: p5Mob1,
  },
  {
    id: 6,
    title: "Uber Clone",
    introHeading:
      "A ride-share inspired authentication experience with modern UI patterns.",
    description:
      "Uber Auth Clone recreates a familiar onboarding and sign-in flow using clean typography, bold CTA treatment, and step-by-step progression. The interface emphasizes confidence and task completion.",
    subDescription:
      "This project focuses on practical UX details: spacious form fields, predictable interactions, and clear action labels. It demonstrates how recognizable patterns can still feel polished and intentional.",
    features: [
      "Two-step Onboarding",
      "High Visibility CTA Buttons",
      "Sign-in and Captain Modes",
      "Responsive Form Layout",
    ],
    role: "Full-Stack Developer",
    tools: "React, CSS",
    timeline: "1 Week",
    githubLink: "https://github.com/malviyanikhil123/Uber-Clone",
    designSystem: {
      font: "Inter",
      colors: ["#000000", "#FFFFFF", "#1DBF73", "#F3F4F6"],
    },
    dashboardImage: p6Dashboard,
    mobileImage1: p6Mob1,
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const project = projectsData.find((p) => p.id === Number(id));
  const projectImages = [
    project?.dashboardImage,
    project?.mobileImage1,
    project?.mobileImage2,
    project?.mobileImage3,
  ].filter((image): image is string => Boolean(image));

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const stagger: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  if (!project) {
    return (
      <div className="pd-not-found">
        <h2>Project not found!</h2>
      </div>
    );
  }

  return (
    <div className="pd-main">
      {/* Background Glowing Orbs */}
      <div className="pd-orb pd-orb-1"></div>
      <div className="pd-orb pd-orb-2"></div>

      {/* 
        PATTERN: IMMERSIVE EDITORIAL LAYOUT
        Centered huge hero -> Full width image -> Left Label / Right Content Rows
      */}

      {/* 1. HERO SECTION */}
      <motion.section
        className="pd-hero"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={stagger}
      >
        <div className="pd-container">
          <motion.div className="pd-hero-center" variants={fadeUp}>
            <span className="pd-badge">Case Study</span>
            <h1 className="pd-title">{project.title}</h1>
            <p className="pd-subtitle">{project.introHeading}</p>
          </motion.div>

          <motion.div className="pd-meta-bar" variants={fadeUp}>
            <div className="pd-meta-item">
              <span className="pd-meta-label">Role</span>
              <span className="pd-meta-value">{project.role}</span>
            </div>
            <div className="pd-meta-item">
              <span className="pd-meta-label">Tools</span>
              <span className="pd-meta-value">{project.tools}</span>
            </div>
            <div className="pd-meta-item">
              <span className="pd-meta-label">Timeline</span>
              <span className="pd-meta-value">{project.timeline}</span>
            </div>
            <div className="pd-meta-item">
              <span className="pd-meta-label">GitHub</span>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="pd-meta-link"
                aria-label="View GitHub repository"
                title="View GitHub repository"
              >
                <img src={githubIcon} alt="GitHub" className="pd-github-icon" />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 2. CONTENT ROWS (Left Label, Right Value) */}
      <section className="pd-content">
        <div className="pd-container">
          {/* Overview Row */}
          <motion.div
            className="pd-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <div className="pd-col-label">
              <h3>Overview</h3>
            </div>
            <div className="pd-col-content">
              <p className="pd-text-large">{project.description}</p>
              <p className="pd-text-regular">{project.subDescription}</p>
            </div>
          </motion.div>

          {/* Features Row */}
          <motion.div
            className="pd-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <div className="pd-col-label">
              <h3>Key Features</h3>
            </div>
            <div className="pd-col-content">
              <div className="pd-features-grid">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="pd-feature-card">
                    <span className="pd-feature-dot"></span>
                    <span className="pd-feature-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Desktop Showcase Row */}
          {projectImages.length > 0 && (
            <motion.div
              className="pd-row no-border last-row"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div className="pd-col-label">
                <h3>Desktop View</h3>
              </div>
              <div className="pd-col-content">
                <div className="pd-desktop-gallery">
                  {projectImages.map((image, index) => (
                    <div key={index} className="pd-main-image-wrap">
                      <img
                        src={image}
                        alt={`${project.title} preview ${index + 1}`}
                        className="pd-main-img"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
