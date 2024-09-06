import React from "react";
import Card from "./Card";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <div name="skills">
      <div className="max-w-[1000px] sm:px-20 mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="max-w-[1000px] w-full">
          <div className="sm:text-center pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4">
              {t("skills.title")}
            </p>
          </div>
        </div>
        <p className="py-4 text-center">{t("skills.technologies")}</p>
      </div>
      <Card />
    </div>
  );
};

export default Skills;
