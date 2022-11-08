import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className=' w-full h-screen bg-[#0a192f]'>


      {/* Container */}

      <div className='max-w-[1000px] mx-auto sm:py-0   sm: px-20 flex flex-col justify-center h-full'>
        <p className='text-[#FFB012]'> Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'> Khalil Manai</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'> I'm a Full Stack Developer. </h2>
        <div className='sm:min-w-[500px] max-w-[700px]'>
        <p className=' text-[#ccd6f6] py-4 '>
          Highly self-motivated to consistently improve skills and grow professionally in tech stack , Experienced in
          UI/UX and Mobile Developement , interested in Decentralized systems and apps seeking to improve my
          knowledge and skills in with in-depth dive in the world of blockchain and various technologies

        </p>
        </div>
        <div >
          <button className='group text-white border-2 flex  px-6  my-2 py-3  items-center hover:bg-[#FFB012] hover:border-[#FFB012] hover:space-x-3 duration-200'>
            <Link className='flex items-center ml-1' to="work" smooth={true} duration={800} >
              View Work

              <span className='group-hover:rotate-90  duration-300'>
                <HiArrowNarrowRight className='ml-2' />
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home