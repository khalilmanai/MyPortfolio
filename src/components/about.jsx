import React from "react";
import myImg from "../assets/khalil_manai.png";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div name="about" className="w-full min-h-screen flex justify-center">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="max-w-[1000px] w-full">
          <div className="text-center pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4">
              {t("About")}
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 items-center">
          <div className=" w-full text-center sm:text-justify font-bold">
            <p>{t("about.greeting")}</p>
          </div>
          <div className="mx-auto">
            <div className="w-70 sm:w-auto mask mask-squircle">
              <img src={myImg} alt="Khalil Manai" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
