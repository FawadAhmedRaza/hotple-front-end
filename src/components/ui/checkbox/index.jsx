import React from 'react'
import Iconify from '../Iconify-icons/Iconify'
import Span from '../Typography/span'
import AnchotTag from '../Typography/anchor-tag'

const CheckBox = ({ label, anchorTag }) => {
  return (
    <div class="inline-flex items-start gap-2 w-full">
      
      <label class="relative flex items-center  rounded-full cursor-pointer" htmlFor="checkbox">
        <input type="checkbox"
          class="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:dark:border-dark_quaternary_label checked:dark:bg-transparent checked:border-gray-300  checked:bg-gray-100 "
          id="checkbox" />
        <span
          class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <Iconify icon={'mingcute:check-fill'} className={'!w-3.5 !h-3.5 dark:!text-dark_primary_label !text-light_primary_label'} />
        </span>
      </label>

      <div className='flex items-center'>
        <Span className={'!text-nowrap dark:!text-dark_tertiary_label'}>
          {label}
          <AnchotTag className={'!text-xs !leading-14lh text-wrap'}>{anchorTag}</AnchotTag>
          </Span>
      </div>
    </div>
  )
}

export default CheckBox