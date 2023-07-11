import React from "react";
import { useTranslation } from "react-i18next";
import { projects } from "../utils/projects";

export default function WorkCard() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="carousel w-full overflow-hidden">
        {projects.map((project, index) => (
          <div
            id={`item${index + 1}`}
            className="carousel-item w-full rounded-xl transform transition-transform duration-500 relative"
            key={index}
          >
            <div className="relative">
              <img
                src={project.image}
                className="w-full rounded-xl"
                alt={`Project ${index + 1}`}
              />
              <div className=" rounded-xl absolute glass inset-0 flex justify-center items-center opacity-0 bg-opacity-20 transition-opacity duration-300 hover:opacity-100">
                <div className="text-center">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.link} target="_blank"  className="btn btn-primary mt-4">
                    {t("View Repository")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {projects.map((_, index) => (
          <a href={`#item${index + 1}`} className="btn btn-xs" key={index}>
            {index + 1}
          </a>
        ))}
      </div>
    </div>
  );
}