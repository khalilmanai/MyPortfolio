import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] sm:px-20 text-gray-300'>
      <div className='flex flex-col sm: px-20 justify-center items-center w-full h-full'>
        <div className='max-w-[1000px]  w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#FFB012]'>
              About
            </p>

          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Khalil, nice to meet you. Please have a look around</p>
          </div>
          <div>
            <p>
              Highly self-motivated to consistently improve skills and grow professionally in tech stack , Experienced in
              UI/UX and Mobile Developement , interested in Decentralized systems and apps seeking to improve my
              knowledge and skills in with in-depth dive in the world of blockchain and various technologies

            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About