import React, { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0); // Initial active tab index

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="justify-center gap-5 flex flex-row w-full h-[65%]">
      <ul className="grid grid-cols-2 gap-3 ">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green  w-full  border border-gray-200 rounded-lg shadow dark:bg-gray-800 
             dark:border-gray-700 px-2 flex flex-1 items-center 
             justify-center cursor-pointer	font-roboto font-medium ${
               activeTab === index ? "active bg-green" : "bg-white"
             }`}
            onClick={() => handleClick(index)}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div class=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tabs__content-item  px-5 py-5  flex flex-col items-center   ${
              activeTab === index ? "active" : "hidden"
            }`}
          >
            <img
              class="w-auto h-24 mb-3 l shadow-lg"
              src={tab.logo}
              alt="Partner"
            />
            <h5 class="mb-1 text-xl font-medium text-gray-900  font-roboto">
              {tab.title}
            </h5>
            <p className="text-sm text-wrap font-montserrat">{tab.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
