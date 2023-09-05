import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/project.css";
import CloudParking from "../../assets/imgCloudParking.PNG";
import ClassPlay from "../../assets/imgClassPlay.PNG"
import MysticCardspaceElementalBattle  from "../../assets/Mystic.PNG"
import ChatBot from "../../assets/ChatBot.PNG"

const CHB = ChatBot;
const CdP = CloudParking;
const ClP = ClassPlay;
const ElM = MysticCardspaceElementalBattle;

const ProjectsShowcase = () => {
  const projects = [
    {
      id: 1,
      title: "ClassPlay",
      link: "https://classplay.netlify.app",
      imageSrc: ClP,
      description: "ClassPlay is an educational game that makes it possible to play old competition and entrance exams.",
      tecnologies: "Tecnologies: Spring Boot, React, API´s, DB (Postgree), Styled Components.",
    }
    ,
    {
      id: 2,
      title: "Mystic Cardspace Elemental Battle",
      link: "https://mystic-cardscape-elemental-battle.netlify.app" ,
      imageSrc: ElM,
      description: "Mystic Cardspace Elemental Battle is a card game in which you must conquer territory, battling for power over land with your Deck.",
      tecnologies: "Tecnologies: React, Drag and Drop, API with Netfly (Axios), Using H2 for tests. "
    },
    {
      id: 3,
      title: "Chatbot Commercial Confectionery",
      link: null ,
      imageSrc: CHB,
      description: "Seller robot, to simulate an employee in conversations with the customer. It informs and sells to people who come from a funnel or elsewhere.",
      tecnologies: "Tecnologies: Spring Boot, API with Istagram, Library (LongPolingBoot) for construct the logic",
    },
    {
      id: 4,
      title: "Cloud Parking API",
      link: "https://github.com/TheDevCaio/Cloud-Parking-API",
      imageSrc: CdP,
      description: "Backend system for parking meters or other services for leasing/renting purposes.",
      tecnologies: "Tecnologies: Spring Boot, DB (Postgree), Model MVC, Unitary Tests and a Beta Payment System.",
    },
  ];

  return (
    <div className="projects-container">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsShowcase;