import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <div name="contact" className='w-full h-screen sm: px-20 flex justify-center items-center p-4 '>
            <form method='POST' action='https://getform.io/f/80c5b892-1a13-4fa4-be51-4df14ab7a0e2' className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8 mt-7'>
                    <p className='text-4xl font-bold border-b-4 text-center'>{t('contact.Contact')}</p>
                    <p className= 'py-4 text-center' >{t('contact.SubmitForm')} <strong className='text-[#FFB012]'><a href="mailto:medkhalilmannai@gmail.com">medkhalilmannai@gmail.com</a></strong></p>
                </div>
                <input className='p-2 border-2' type="text" placeholder={t('contact.Name')} name='name' />
                <input className='my-4 p-2 border-2' type="email" placeholder={t('contact.Email')} name='email' />
                <textarea className="border-2" name="message" placeholder={t('contact.Message')} rows="10"></textarea>
                <button className='border-2 px-4 py-3 my-8 mx-auto flex items-center'>{t('contact.SendRequest')}</button>
            </form>
        </div>
    )
}

export default Contact;
