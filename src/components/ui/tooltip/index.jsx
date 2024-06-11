import React from 'react'

const Tooltip = ({children , className , tooltip}) => {
    return (
        <div class="group relative flex justify-center">
            <span>{children}</span>
            <span class={`absolute -top-7 scale-0 group-hover:scale-100  rounded-md border dark:border-neutral-800 dark:bg-dark_bg_grey bg-dark_primary_label px-2 py-1.5 text-xs dark:text-dark_tertiary_label text-light_primary_label ${className}`}>{tooltip}</span>
        </div>
    )
}

export default Tooltip