import React from "react";
import "../styles/About.css";

// Import images from assets folder
import medha from "../assets/medha.jpg";
import nihar from "../assets/nihar.jpg";
import riya from "../assets/riya.jpg";

const teamMembers = [
  {
    role: "Frontend Designer",
    name: "MEDHA MANSI",
    description:
      "Final-year Computer Science student at VIT Vellore,passionate about crafting intuitive and engaging user interfaces, with a focus on clean design and seamless user experiences.",
    imgSrc: medha,
    instaLink: "#",
    linkedinLink: "https://www.linkedin.com/in/medha-mansi-45633b276/",
  },
  {
    role: "ML Engineer",
    name: "NIHAR THAPLIYAL",
    description:
      "Final-year Computer Science student at VIT Vellore,exploring the power of machine learning to solve real-world problems with data-driven insights and intelligent models.",
    imgSrc: nihar,
    instaLink: "#",
    linkedinLink: "#",
  },
  {
    role: "Backend Designer",
    name: "RIYA JAIN",
    description:
      "Final-year Computer Science student at VIT Vellore,building robust and scalable backend systems to ensure smooth functionality and reliable performance of applications.",
    imgSrc: riya,
    instaLink: "#",
    linkedinLink: "https://www.linkedin.com/in/riya-jain-6a6805321/",
  },
];

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {teamMembers.map(({ role, name, description, imgSrc, instaLink, linkedinLink }) => (
          <div className="team-member" key={name}>
            <img src={imgSrc} alt={name} className="profile-pic" />
            <p className="role">{role}</p>
            <h3 className="name">{name}</h3>
            <p className="description">{description}</p>
            <div className="social-icons">
              <a href={instaLink} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href={linkedinLink} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
