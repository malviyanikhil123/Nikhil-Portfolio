import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import "../styles/Projects.css";
import { useLoader } from "../context/LoaderContext";

// Images
import BookStoreProject from "../assets/Book-Store/Screenshot 2026-04-17 232310.png";
import EcommerceProject from "../assets/Ecommerce-App/Screenshot 2026-04-17 232130.png";
import GoFoodProject from "../assets/Go-Food/Screenshot 2026-04-17 231002.png";
import NgoSaathiProject from "../assets/ngo-saathi/Screenshot 2026-04-17 225634.png";
import RealEstateProject from "../assets/Real-Estate-Marketplace/Screenshot 2026-04-17 230311.png";
import UberCloneProject from "../assets/user-clone/Screenshot 2026-04-17 230047.png";

type GridProject = {
  id: number;
  num: string;
  category: string;
  title: string;
  image: string;
};

type FolderCardProps = {
  project: GridProject;
  onClick: () => void;
};

const gridProjects = [
  {
    id: 1,
    num: "04",
    category: "Social Impact",
    title: "NGO Saathi Portal",
    image: NgoSaathiProject,
  },
  {
    id: 2,
    num: "02",
    category: "MERN App",
    title: "Ecommerce",
    image: EcommerceProject,
  },
  {
    id: 3,
    num: "03",
    category: "MERN App",
    title: "GoFood Ordering System",
    image: GoFoodProject,
  },
  {
    id: 4,
    num: "01",
    category: "MERN App",
    title: "BookStore",
    image: BookStoreProject,
  },
  {
    id: 5,
    num: "05",
    category: "MERN App",
    title: "Real Estate Marketplace",
    image: RealEstateProject,
  },
  {
    id: 6,
    num: "06",
    category: "MERN App",
    title: "Uber Clone",
    image: UberCloneProject,
  },
];

/* Folder card with 3-layer stack */
const FolderCard = ({ project, onClick }: FolderCardProps) => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };
  return (
    <motion.div
      variants={cardVariants}
      className="folder-item"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      <div className="card-stack">
        <div className="s-card s-back">
          {" "}
          <img src={project.image} alt="" draggable="false" />
        </div>
        <div className="s-card s-mid">
          {" "}
          <img src={project.image} alt="" draggable="false" />
        </div>
        <div className="s-card s-front">
          {" "}
          <img src={project.image} alt={project.title} draggable="false" />
        </div>
      </div>
      <div className="folder-info">
        <div className="folder-top-row">
          <span className="folder-num">{project.num}</span>
          <span className="folder-arrow">↗</span>
        </div>
        <h3 className="folder-title">{project.title}</h3>
        <span className="folder-tag">{project.category}</span>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const navigate = useNavigate();
  const { triggerLoading } = useLoader();

  const goProject = (id: number) => {
    triggerLoading(() => {
      navigate(`/project-details/${id}`);
      window.scrollTo(0, 0);
    });
  };

  return (
    <section className="proj-section" id="projects">
      <div className="proj-blob1" />
      <div className="proj-blob2" />

      <div className="proj-inner">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="proj-header"
        >
          <div>
            <span className="proj-eyebrow">Portfolio</span>
            <h2 className="proj-title">
              Selected <span className="underline-accent">Projects</span>
            </h2>
          </div>
          <span className="proj-count">{gridProjects.length} Projects</span>
        </motion.div>

        {/* ── Folder Grid ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="portfolio-grid"
        >
          {gridProjects.map((p) => (
            <FolderCard
              key={p.id}
              project={p}
              onClick={() => goProject(p.id)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
