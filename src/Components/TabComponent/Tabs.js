import React, { useState } from "react";

const Tabs = ({ children, tabs = [] }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);
  const handleTabs = (newActiveTab) => {
    setActiveTab(newActiveTab);
  };
  return (
    <div className="Tabs">
      <ul className="nav">
        {tabs.map((tab) => (
          <li
            key={tab.label}
            className={tab.label === activeTab ? "active" : ""}
            onClick={() => handleTabs(tab.label)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      <div className="outlet">
        {activeTab === tabs[0].label
          ? tabs[0].component
          : tabs.map((data) => {
              if (activeTab === data.label) {
                return data.component;
              }
              return false;
            })}
      </div>
    </div>
  );
};

export default Tabs;
