import { createPlanSection, getPlanById, updatePlanSection } from '@/api/plan'
import Accordion from '@/components/accordian/customAccordian'
import PersonAvator from '@/components/avatars/person-avatar'
import PostAvatar from '@/components/avatars/post-avatar'
import SolidButton from '@/components/ui/Buttons/solid-button'
import Iconify from '@/components/ui/Iconify-icons/Iconify'
import Paragraph from '@/components/ui/Typography/paragraph'
import React, { use, useEffect, useState } from 'react'

const PlanSection = ({id}) => {
    const [plan,setPlan] = useState(null)
    const [sections, setSections] = useState([]);
    const [loading,setLoading] = useState(false);
    const [refetch,setRefetch]=useState(false)
    const fetchPlanById=async()=>{
        setLoading(true)
        try{
            const res = await getPlanById(id)
            if(res.status===200){
                console.log("get plan by id in status 200",res.data[0])
                setPlan(res.data[0])
                setSections(res.data[0].planSections)
                setLoading(false)
                // console.log("get plan by id in status 200",res)
            }
        }
        catch(err){
            setLoading(false)
            console.log(err)
        }
    }
    useEffect(()=>{
        fetchPlanById();
    },[refetch])
    const [inputValue, setInputValue] = useState('');
    const [sectionType, setSectionType] = useState('')
    const [sectionTitle, setSectionTitle] = useState('')
    const [currentSection, setCurrentSections] = useState(null);
    console.log("section array", sections);

    // console.log("plan in section inputValue", inputValue)
    console.log("plan in section", plan)
    const handleAddSection = async (value) => {
        console.log("value in handleAddSection", value);
        setSectionType(value);
        const Data = { sectionType: value, planId: id };
        const res = await createPlanSection(Data);
        console.log("res before refetch", res.data);
        if (res.status === 201) {
            setRefetch(true)
        }
    }
    const handleInputChange = (id, value) => {
        setSections(sections.map(section => section.id === id ? { ...section, 
            // inputValue: value 
        } : section));
    }
    const handletitleInputChange = (id, value) => {
        console.log("id and value in title", id, value)
        setSections(sections.map(section => section.id === id ? { ...section, name: value } : section));
    }

    const handleSubmit = async (e, sectionId) => {
        e.preventDefault();
        const section = sections.find(section => section.id === sectionId);
        const {name}=section;
        const res = await updatePlanSection(sectionId,{name:name});
      };

    return (
        <>
        
        
            {loading?<p>....loding</p>:    <div className='w-full flex flex-col justify-start items-center'>
                <div className='w-full h-full relative '>
                    <img className='w-full h-64 object-fill z-10' src={plan?.coverImage} />
                    <div className=' z-50 py-2 px-2 flex items-start justify-between flex-col w-3/4 h-32 shadow-lg dark:bg-brownish_black bg-white rounded-lg absolute -bottom-20 left-[12.5%] right-[12.5%]  ' >
                        <Paragraph className=' text-left w-full !text-3xl font-semibold dark:text-dark_primary_label text-light_primary_label '>
                            {plan?.name}
                        </Paragraph>
                        <div className='flex flex-row  justify-end items-center -space-x-1 rtl:space-x-reverse  w-full'>
                            {plan?.planSharedWith?.map((sharedUser) => (
                                <PersonAvator
                                    url={sharedUser?.user?.profilePicture}
                                    alt={sharedUser?.user?.username}
                                    height={30}
                                    width={30}
                                />
                            ))}
                        </div>
    
                    </div>
                </div>
                <div className='flex justify-between items-center mt-24 w-full  px-2 py-2 h-full'>
                    <div className='flex justify-start items-center'>
                        <div className='flex justify-center items-center'>
                            <PersonAvator
                                url={plan?.user?.profilePicture}
                                alt={plan?.user?.username}
                                height={40}
                                width={40}
                            />
                        </div>
                        <div className='flex justify-center items-end dark:text-dark_primary_label  text-light_primary_label  '>
                            <Paragraph className='pl-2 font-medium'>
                                {plan?.user?.username}
                            </Paragraph>
                        </div>
                    </div>
                    <div className='flex justify-center items-center mr-3 '>
                        <Iconify
                            icon={"emojione-monotone:yellow-heart"}
                            className={`!w-7  dark:!text-dark_primary_label !text-light_primary_label `}
                            onClick={() => console.log("i am click")}
                        />
                    </div>
                </div>
                <div className='flex justify-center items-start flex-col w-full'  >
                    <div className='w-full'>
                        {sections?.map((section) => (
                            <form key={section?.id} onSubmit={(e) => handleSubmit(e, section.id)} >
                                <Accordion
                                    key={section?.id}
                                    title={section?.name}
                                    setSectionTitle={(value) => handletitleInputChange(section.id,value)}
                                    place={section?.inputValue}
                                    setInputValue={(value) => handleInputChange(section.id, value)}
                                />
                            </form>
    
                        ))}
                    </div>
                    <div className=' flex justify-start items-center my-4'>
                        <button className='w-28 px-2 py-2 rounded-3xl  bg-red  text-white mx-1 font-bold' onClick={() => handleAddSection("List")}>+ New List</button>
                        <button className='w-28 px-2 py-2 rounded-3xl border-red border-[1px]' onClick={() => handleAddSection("Route")}>+ New Route</button>
                    </div>
                </div>
            </div>
        }
    </>
    )
}

export default PlanSection