import React from "react";
import { withTranslation } from "react-i18next";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = ({ t }) => {
  return (
    <div name="home" className="sm:flex sm:justify-center sm:items-center w-full h-screen flex justify-center items-center">
      {/* Container */}
      <div className="sm:py-0 sm:items-center flex flex-col justify-center h-full text-center">
        <p className="text-base sm:text-lg">{t('home.greeting')}</p>
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold">{t('home.name')}</h1>
        <h2 className="text-xl sm:text-3xl md:text-5xl font-bold">{t('home.profession')}</h2>
        <div className="sm:min-w-[500px] max-w-[700px]">
          <p className="py-4 text-sm">{t('home.description')}</p>
        </div>
   
        <div className="flex justify-center mt-4">
          <Link className="flex items-center" to="work" smooth={true} duration={800}>
            <button className="group border-2 flex px-6 my-2 py-3 items-center hover:bg-gray-500 hover:border-gray-500 hover:space-x-3 duration-200">
              {t('home.viewWork')}
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-2" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(Home);
