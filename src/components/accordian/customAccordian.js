// components/Accordion.js
import { useState } from 'react';
import Iconify from '../ui/Iconify-icons/Iconify';

const Accordion = ({ place, setInputValue, title, setSectionTitle }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex w-full flex-col">
            <div
                className="flex justify-between items-center p-4 cursor-pointer w-full "
                onClick={() => setIsOpen(!isOpen)}
            >
                <button className="focus:outline-none">
                    {isOpen ? (
                        <Iconify icon={"iconamoon:arrow-down-2-light"}
                            className={`!w-7  dark:!text-dark_primary_label !text-light_primary_label `}
                            onClick={() => console.log("i am click")} />
                    ) : (
                        <Iconify icon={"iconamoon:arrow-right-2-light"}
                            className={`!w-7  dark:!text-dark_primary_label !text-light_primary_label `}
                            onClick={() => console.log("i am click")} />
                    )}
                </button>
                <input
                    type="text"
                    placeholder='add a title'
                    className=" hover:bg-gray-100 outline-none border-none w-full px-3 py-2 border border-gray-300 rounded-md"
                    value={title}
                    onChange={(e) => setSectionTitle(e.target.value)}
                />
            </div>
            {isOpen && (
                <div className="p-4 w-full relative">
                    <Iconify icon={"humbleicons:location"} className={' absolute left-6 top-7 hover:text-light_primary_label text-light_secondary_label!w-6'} onClick={() => setSectionTitle('')} />
                    <input
                        type="text"
                        placeholder="Add a place"
                        className=" focus:outline-blue-300 bg-gray-100 pl-7 w-full px-3 py-2 border border-gray-300 rounded-md"
                        value={place}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </div>
            )}
        </div>
    );
};

export default Accordion;
