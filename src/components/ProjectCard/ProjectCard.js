import React, { useState } from "react";
import Card from "../Card/Card";

const example = [
  {
    id: 35,
    projectName: "Project Name",
    projectContent:
      "Lorem ipsum yadhe yadhelr hadjaeu eyadehehe yueha Lorem ipsum yadh yadhelr hadjaeu eyadehehe yuehas",
    projectLink: "https://kungog.se/",
    projectTag: "Link to your project",
  },
  {
    id: 25,
    projectName: "Project Name",
    projectContent:
      "Lorem ipsum yadhe yadhelr hadjaeu eyadehehe yueha Lorem ipsum yadh yadhelr hadjaeu eyadehehe yuehas",
    projectLink: "https://kungog.se/",
    projectTag: "Link to your project",
  },
  {
    id: 15,
    projectName: "Project Name",
    projectContent:
      "Lorem ipsum yadhe yadhelr hadjaeu eyadehehe yueha Lorem ipsum yadh yadhelr hadjaeu eyadehehe yuehas",
    projectLink: "https://kungog.se/",
    projectTag: "Link to your project",
  },
];

const ProjectCard = ({ isActive }) => {
  const [active, setActiveCard] = useState("");

  const showProjects = (item) => {
    if (active === item) {
      setActiveCard("");
    } else setActiveCard(item);
  };

  return (
    <div className={[`project ${isActive ? "-active" : ""}`]}>
      {example.map((item, key) => {
        return (
          <Card
            key={item.id}
            ProjectName={item.projectName}
            ProjectContent={item.projectContent}
            ProjectLink={item.projectLink}
            ProjectTag={item.projectTag}
            handleClick={() => {
              showProjects(key);
            }}
            active={isActive && active === key}
          />
        );
      })}
    </div>
  );
};

export default ProjectCard;
