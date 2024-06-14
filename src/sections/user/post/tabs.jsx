import { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  const handleTabClick = (label) => {
    setActiveTab(label);
  };

  return (
    <div className="w-full max-w-4xl mx-auto  ">
      <div className="flex ">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => handleTabClick(tab.label)}
            className={`py-2 px-4 focus:outline-none font-semibold ${
              activeTab === tab.label
                ? 'border-b-2 border-red text-red'
                : 'text-gray-500'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs.map((tab) => (
          <div
            key={tab.label}
            className={`${
              activeTab === tab.label ? 'block' : 'hidden'
            }`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
