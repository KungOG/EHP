import React, { useState } from "react";
import PropTypes from "prop-types";
import { ProjectCard } from "../ProjectCard";

const Slider = ({ children, bullets }) => {
  const [activeSlide, setActiveSlide] = useState(1);
  return (
    <>
      <div className={[`slider ${activeSlide ? `slide-${activeSlide}` : ""}`]}>
        {children.map((item, key) => {
          return (
            <ProjectCard
              key={item.id}
              projectName={item.projectName}
              projectContent={item.projectContent}
              projectLink={item.projectLink}
              projectTag={item.projectTag}
              active={activeSlide - 1 === key}
            />
          );
        })}
      </div>
      {bullets && (
        <div className="slider__bullets">
          {children.map((child, key) => {
            return (
              <button
                key={key}
                className={[
                  `slider__bullet${activeSlide - 1 === key ? " active" : ""}`,
                ]}
                onClick={() => setActiveSlide(key + 1)}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

Slider.propTypes = {
  bullets: PropTypes.bool,
  children: PropTypes.array,
};

export { Slider };
