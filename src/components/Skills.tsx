import React from "react";
import { motion } from "framer-motion";
import "../styles/Skills.css";

const skillImages = import.meta.glob<string>("../assets/Skills/*.png", {
  eager: true,
  import: "default",
});

const tools = Object.entries(skillImages)
  .map(([path, image]) => {
    const fileName = path.split("/").pop()?.replace(".png", "") || "Skill";
    const normalizedName = fileName === "java-script" ? "JavaScript" : fileName;

    return { name: normalizedName, image };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

const Pill = ({ name, image }: { name: string; image: string }) => (
  <div className="tool-pill">
    <img src={image} alt={name} />
    <span>{name}</span>
  </div>
);

// Duplicate track for seamless loop
const Track = ({ reversed = false }: { reversed?: boolean }) => (
  <div className={`marquee-track ${reversed ? "reverse" : ""}`}>
    {[...tools, ...tools, ...tools, ...tools].map((t, i) => (
      <Pill key={i} name={t.name} image={t.image} />
    ))}
  </div>
);

export const Skills = () => (
  <div id="tools" className="tools-wrap">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.42 } },
      }}
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <motion.span
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.75, ease: "easeOut" },
          },
        }}
        className="tools-tag"
      >
        My Skills
      </motion.span>
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.75, ease: "easeOut" },
          },
        }}
        className="tools-heading"
      >
        Development <em>&</em> DevOps Stack
      </motion.h2>
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.75, ease: "easeOut" },
          },
        }}
        className="tools-sub"
      >
        Modern tools and technologies powering my work
      </motion.p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.9, ease: "easeOut", delay: 0.6 }}
      className="marquee-outer"
    >
      <div className="marquee-row">
        <Track />
      </div>
      <div className="marquee-row">
        <Track reversed />
      </div>
    </motion.div>
  </div>
);

export default Skills;
