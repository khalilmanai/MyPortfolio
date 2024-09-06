import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import ReactJS from '../assets/react.png';
import ReactNative from '../assets/react-native.png';
import MongoDB from '../assets/mongo.png';
import ExpressJS from '../assets/express.png';
import Axios from '../assets/axios.png';
import Redux from '../assets/redux.png';
import symfony from '../assets/symfony.png'
import spring from '../assets/spring.png'
import sql from '../assets/sql.png'

export default function Card() {
  const skills = [
    {
      id: 1,
      name: 'HTML',
      href: '#',
      imageSrc: HTML,
    },
    {
      id: 2,
      name: 'CSS',
      href: '#',
      imageSrc: CSS,
    },
    {
      id: 3,
      name: 'Tailwind',
      href: '#',
      imageSrc: Tailwind,
    },
    {
      id: 4,
      name: 'JavaScript',
      href: '#',
      imageSrc: JavaScript,
    },
    {
      id: 5,
      name: 'ReactJS',
      href: '#',
      imageSrc: ReactJS,
    },
    {
      id: 6,
      name: 'React Native',
      href: '#',
      imageSrc: ReactNative,
    },
    {
      id: 7,
      name: 'Redux',
      href: '#',
      imageSrc: Redux,
    },
    {
      id: 8,
      name: 'Axios',
      href: '#',
      imageSrc: Axios,
    },
    {
      id: 9,
      name: 'ExpressJS',
      href: '#',
      imageSrc: ExpressJS,
    },
    {
      id: 10,
      name: 'github',
      href: '#',
      imageSrc: GitHub,
    },
    {
      id: 11,
      name: 'mongoDB',
      href: '#',
      imageSrc: MongoDB,
    },
    {
      id: 11,
      href: "#",
      imageSrc: sql,
      name: "SQL"
    },
    {
      id: 12,
      href: "#",
      imageSrc: spring,
      name: "Spring Boot"
    },
    {
      id: 13,
      href: '#',
      imageSrc: symfony,
      name: 'Symfony',
    }
  ];

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {skills.map((skill) => (
          <div key={skill.id} className="group relative flex flex-col items-center">
            <div className="overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-40">
              <img
                src={skill.imageSrc}
                alt={skill.name}
                className="h-17 w-17 object-contain lg:h-32 lg:w-32"
              />
            </div>
            <div className="mt-2">
              <h3 className="text-sm text-center">
                <a href={skill.href}>{skill.name}</a>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
