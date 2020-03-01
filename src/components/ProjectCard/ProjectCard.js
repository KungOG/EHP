import React from "react";
import Card from "../Card/Card";

const ProjectCard = ({ isActive }) => {
  return (
    <div className={[`project ${isActive ? "-active" : ""}`]}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default ProjectCard;
