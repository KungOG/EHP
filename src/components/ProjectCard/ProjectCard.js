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
      {/* {example.map((item, key) => {
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
      })} */}

      {/* <div className="container">
        <div className="stage">
          <div className="shape">
            <div className="plane one">1</div>
            <div className="plane two">2</div>
            <div className="plane three">3</div>
            <div className="plane four">4</div>
            <div className="plane five">5</div>
            <div className="plane six">6</div>
            <div className="plane seven">7</div>
            <div className="plane eight">8</div>
            <div className="plane nine">9</div>
            <div className="plane ten">10</div>
            <div className="plane eleven">11</div>
            <div className="plane twelve">12</div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export { ProjectCard };
