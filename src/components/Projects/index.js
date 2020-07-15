import React from "react";
import { Slider } from "../Slider";

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
  {
    id: 5,
    projectName: "Project Name",
    projectContent:
      "Lorem ipsum yadhe yadhelr hadjaeu eyadehehe yueha Lorem ipsum yadh yadhelr hadjaeu eyadehehe yuehas",
    projectLink: "https://kungog.se/",
    projectTag: "Link to your project",
  },
  {
    id: 45,
    projectName: "Project Name",
    projectContent:
      "Lorem ipsum yadhe yadhelr hadjaeu eyadehehe yueha Lorem ipsum yadh yadhelr hadjaeu eyadehehe yuehas",
    projectLink: "https://kungog.se/",
    projectTag: "Link to your project",
  },
  {
    id: 55,
    projectName: "Project Name",
    projectContent:
      "Lorem ipsum yadhe yadhelr hadjaeu eyadehehe yueha Lorem ipsum yadh yadhelr hadjaeu eyadehehe yuehas",
    projectLink: "https://kungog.se/",
    projectTag: "Link to your project",
  },
];

const Projects = ({ isActive }) => {
  return (
    <div className={[`projects${isActive ? " -show" : ""}`]}>
      <Slider bullets children={example} />
    </div>
  );
};

export { Projects };
