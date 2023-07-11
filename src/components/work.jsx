import React from "react";
import workImg from "../assets/workImg.jpeg";
import realEstate from "../assets/realestate.jpg";
import { useTranslation } from "react-i18next";
import WorkCard from "./WorkCard";
import { projects } from "../utils/projects";

const Work = () => {
  const { t } = useTranslation();
  return (
    <div name="work" className="w-full min-h-screen">
      <div className="max-w-[1000px] mx-auto px-20 flex flex-col justify-center h-full">
        <div className="max-w-[1000px] w-full">
          <div className="sm:text-center pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4">
              {t('work.title')}
            </p>
            <p className="py-4 text-2xl">{t('work.description')}</p>
          </div>
        </div>
        {/* Container */}
<WorkCard />
      </div>
    </div>
  );
};

export default Work;
