import React from 'react'

const Contact = () => {
    return (
        <div name="contact" className='w-full h-screen sm: px-20 bg-[#0a192f] flex justify-center items-center p-4 '>
            <form method='POST' action='https://getform.io/f/80c5b892-1a13-4fa4-be51-4df14ab7a0e2' className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8 mt-7'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#FFB012] text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4' > Sumbit the form below or get in touch with me on: <strong className='text-[#FFB012]'><a href="mailto:medkhalilmannai@gmail.com">medkhalilmannai@gmail.com</a></strong></p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6]' name="message" placeholder='Message' rows="10"></textarea>
                <button className='text-white border-2 hover:bg-[#FFB012] hover:border-[#FFB012] px-4 py-3 my-8 mx-auto flex items-center '> Let's Collaborate</button>

            </form>
        </div>
    )
}

export default Contact