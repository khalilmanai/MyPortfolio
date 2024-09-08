import React from 'react';
import EducationCard from './EducationCard';
import esprit from '../assets/esprit.png';
import esen from '../assets/esen.png'
import { useTranslation } from 'react-i18next';

export default function Education() {
    const { t } = useTranslation();

    return (
        <div name="Education">
            <div className="max-w-full sm:px-20 mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className=" w-full">
                    <div className="sm:text-center pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4">
                            {t("education.title")}
                        </p>
                    </div>
                </div>
                <p className="py-4 text-center">{t("education.description")}</p>
                <div className='flex flex-row gap-10 '>
                    <EducationCard
                        img={esprit}
                        title={t("education.esprit.title")}
                        desc={t("education.esprit.desc")}
                        link={t("education.esprit.link")}
                        url="https://esprit.tn/"
                    />
                    <EducationCard
                        img={esen}
                        title={t("education.esen.title")}
                        desc={t("education.esen.desc")}
                        link={t("education.esen.link")}
                        url="https://www.esen.tn/portail/"
                    />
                </div>
            </div>
        </div>
    );
}
