import RHFTextInput from '@/components/rhf-hooks/RHFTextfiels'
import RHFTextArea from '@/components/rhf-hooks/rhf-textarea'
import React from 'react'
import DescriptionPopover from './text-area-popover'

const TitleDescSection = () => {
  return (
    <div>
       <RHFTextInput name="title" placeholder="제목을 입력하세요. 좋아요가 더 많을 수 있습니다" />
        <DescriptionPopover />
    </div>
  )
}

export default TitleDescSection
