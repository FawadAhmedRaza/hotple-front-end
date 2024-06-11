import React from 'react'
import H5 from '../../Typography/h5'
import Iconify from '../../Iconify-icons/Iconify'

const BgButtonOption = ({ children, className, icon, onClick }) => {
    return (
        <div className="group flex justify-between items-center dark:hover:bg-brown hover:bg-light_bg_grey h-10 p-2 cursor-pointer rounded-lg" onClick={onClick}>
            <H5 className={'!text-nowrap !font-normal  group-hover:!text-light_primary_label dark:group-hover:!text-dark_primary_label dark:!text-dark_secondary_label !text-light_secondary_label'}>
                {children}
            </H5>
            {
                icon && (
                <Iconify icon={icon} className={' !w-18wd dark:!text-neutral-500  text-neutral-400'}/>
            )
             
            }
        </div>
    )
}

export default BgButtonOption