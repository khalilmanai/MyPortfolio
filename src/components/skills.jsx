import React from "react";
import Card from "./Card";
import { useTranslation } from "react-i18next";
import { frameworks, languages, tools } from "../utils/Skillset";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <div name="skills">
      <div className="max-w-full px-4 py-8 mx-auto flex flex-col justify-center w-full h-full">
        <div className="w-full">
          <div className="sm:text-center pb-8">
            <p className="text-4xl font-bold inline border-b-4">
              {t("skills.title")}
            </p>
          </div>
        </div>
        <p className="py-4 text-center">{t("skills.technologies")}</p>
        <Card title={t("skills.languages")} items={languages} />
        <Card title={t("skills.frameworks")} items={frameworks} />
        <Card title={t("skills.tools")} items={tools} />
      </div>
    </div>
  );
};

export default Skills;
