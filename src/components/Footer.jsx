import React from 'react'
import { useTranslation } from 'react-i18next'



function Footer() {

    const { t } = useTranslation();
    return (
        <div className='flex items-center justify-center w-full border border-t-1 '>
            <p className='text-sm'> <strong>{t("footer.text")} &copy;  2024</strong> </p>
        </div>
    )
}

export default Footer
