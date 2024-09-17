import React, { useState } from "react";

interface TabsProps {
  children: React.ReactNode;
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="tab-headers">
        {React.Children.map(children, (child, index) => (
          <button
            className={`tab-header ${index === activeTab ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {(child as React.ReactElement).props.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {React.Children.toArray(children)[activeTab]}
      </div>
    </div>
  );
};

export default Tabs;
