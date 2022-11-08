import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import Node from '../assets/node.png'
import Firebase from '../assets/firebase.png'
import GitHub from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import ReactImg from '../assets/react.png'
import Mongo from '../assets/mongo.png'
import Dart from '../assets/dart.png'
import Flutter from '../assets/flutter.png'
const Skills = () => {
  return (
    <div name='skills' className=' bg-[#0a192f] text-gray-300'  >
      {/* Container */}

      <div className='max-w-[1000px]  sm:px-20 mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <p className='text-4xl font-bold inline border-b-4 w-[90px] border-[#FFB012]' >Skills</p>
        <p className='py-4' >These are the technologies i've worked with </p>
      </div>
      <div className='w-full sm:px-20 grid  grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={HTML} alt="html-img" />
          <p className='my-4'> HTML</p>

        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={CSS} alt="html-img" />
          <p className='my-4'> CSS</p>

        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={JavaScript} alt="html-img" />
          <p className='my-4'> JavaScript</p>

        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={Tailwind} alt="html-img" />
          <p className='my-4'> Tailwind</p>

        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={ReactImg} alt="html-img" />
          <p className='my-4'> react</p>

        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={Flutter} alt="html-img" />
          <p className='my-4'> Flutter</p>

        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={Dart} alt="html-img" />
          <p className='my-4'> Dart</p>

        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={Firebase} alt="html-img" />
          <p className='my-4'> Firebase</p>

        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={GitHub} alt="html-img" />
          <p className='my-4'> Github</p>

        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={Mongo} alt="html-img" />
          <p className='my-4'> MongoDB</p>

        </div>
      </div>
    </div>
  )
}

export default Skills