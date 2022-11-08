import React from 'react'
import workImg from '../assets/workImg.jpeg'
import realEstate from '../assets/realestate.jpg'

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] sm:mx-auto px-20 flex flex-col justify-center w-full h-full'>
                <div className='pb-3'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#FFB012] '>Work</p>
                    <p className='py-2 '> Check out some of recent work</p>
                </div>
                {/* Container */}

                <div
                    className='grid sm: px-10 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${workImg})` }}
                        className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                        {/* Hover Effects */}

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>ReactJs Application</span>
                            <div className='pt-4 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${realEstate})` }}
                        className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                        {/* Hover Effects */}

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>ReactJs Application</span>
                            <div className='pt-4 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${workImg})` }}
                        className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                        {/* Hover Effects */}

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>ReactJs Application</span>
                            <div className='pt-4 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${realEstate})` }}
                        className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                        {/* Hover Effects */}

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>ReactJs Application</span>
                            <div className='pt-4 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${workImg})` }}
                        className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                        {/* Hover Effects */}

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>ReactJs Application</span>
                            <div className='pt-4 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${realEstate})` }}
                        className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                        {/* Hover Effects */}

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>ReactJs Application</span>
                            <div className='pt-4 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-300 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



        </div>
    )
}

export default Work