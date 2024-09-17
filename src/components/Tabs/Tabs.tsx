import React, { useState } from "react";

interface TabsProps {
  children: React.ReactNode;
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };
  console.log(React.Children.toArray(children)[0]);

  return (
    <div className="ds_tabs js-initialised" data-module="ds-tabs">
      <nav className="ds_tabs__navigation" aria-labelledby="ds_tabs__title">
        <h2 id="ds_tabs__title" className="ds_tabs__title">
          Contents
        </h2>
        <ul className="ds_tabs__list" id="tablist" role="tablist">
          {React.Children.toArray(children).map((child, index) => (
            <li
              role="presentation"
              className={`ds_tabs__tab ${
                index === activeTab ? "ds_current" : ""
              }`}
              onClick={() => handleTabClick(index)}
            >
              <a
                className={"ds_tabs__tab-link"}
                href={`#tab${index}`}
                role="tab"
                aria-controls={`tab${index}`}
                aria-selected="true"
                tabIndex={index}
                data-navigation={"tab-link-1-1" + `${index}`}
              >
                {(child as React.ReactElement).props.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div
        className="ds_tabs__content  ds_tabs__content--bordered"
        id={`tab${activeTab}`}
      >
        {React.Children.toArray(children)[activeTab]}
      </div>
    </div>
  );
};

export default Tabs;
