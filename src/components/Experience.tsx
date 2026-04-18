import React from "react";
import { motion } from "framer-motion";

const bmsImage =
  "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1200";

const iptvImage =
  "https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=1200";

const integrationImage =
  "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200";

const caseStudiesTimeline = [
  {
    id: "cs1",
    title: "BMS",
    desc: "(Broadband Management System) is a complete platform for Internet Service Providers to manage customer onboarding, plan activation, billing, payment tracking, and support tickets in one place. This product was built using React for the frontend and Express for backend APIs, helping teams monitor active connections and improve day-to-day broadband operations.",
    image: bmsImage,
  },
  {
    id: "cs2",
    title: "IPTV Platform",
    desc: "was built from scratch as an Internet Protocol Television platform. The backend architecture was developed in NestJS to handle channel management, content delivery flows, subscription logic, and scalable API services for a production-ready streaming experience.",
    image: iptvImage,
  },
  {
    id: "cs3",
    title: "Third-Party API Integrations",
    desc: "focused on integrating BMS with multiple external systems and providers. I implemented integrations for BMS to RSoft, BMS to Inventory Management System, BMS to Lead Management System, BMS to Ticketing Module, BMS to OTT providers, and BMS to BMS connections. This included API mapping, authentication flows, payload transformation, and reliable error handling across services.",
    image: integrationImage,
  },
];

export const Experience = () => {
  return (
    <div id="experience" className="cs-section-gap">
      <div className="cs-heading">
        <span className="proj-eyebrow">Experience</span>
        <h2 className="proj-title">
          Selected <span className="underline-accent">Experience</span>
        </h2>
      </div>
      <div className="cs-timeline-container">
        {/* Central vertical line */}
        <div className="cs-timeline-line" />

        {caseStudiesTimeline.map((cs, i) => (
          <motion.div
            key={cs.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className={`cs-timeline-row ${i % 2 === 1 ? "cs-row-reverse" : ""}`}
            style={{ animation: "none" }} // Prevents CSS animations from fighting frame-motion
          >
            {/* Circle Number */}
            <div className="cs-timeline-circle">{i + 1}</div>

            {/* Content Side */}
            <div className="cs-timeline-content">
              <h2 className="cs-name">{cs.title}</h2>
              <p className="cs-desc">
                <span className="cs-brand">{cs.title}</span> {cs.desc}
              </p>
            </div>

            {/* Image Side */}
            <div className="cs-timeline-img-wrap">
              <img src={cs.image} alt={cs.title} className="cs-timeline-img" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
