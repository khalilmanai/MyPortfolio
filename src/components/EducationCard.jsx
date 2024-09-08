import React from 'react';

function EducationCard({ img, title, desc, link, url }) {
    return (
        <div className="max-w-md p-4  w-full lg:max-w-full lg:flex border-2 shadow-lg rounded-lg overflow-hidden">
            <img
                className="h-48 lg:h-auto lg:w-48 object-contain"
                src={img}
                alt={title}
            />
            <div className=" p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <h2 className=" font-bold text-xl mb-2">{title}</h2>
                    <p className=" text-base">{desc}</p>
                </div>
                <div className=" w-[200px] p-2 justify-center hover:bg-gray-300  flex items-center border-2 rounded">
                    <a href={url} target="_blank" rel="noreferrer noopener" >{link}</a>
                </div>
            </div>
        </div>
    );
}

export default EducationCard;
