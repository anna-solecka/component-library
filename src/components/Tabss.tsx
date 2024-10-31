import { FC, ReactNode, useState } from "react";
import "./tabs.scss";
interface TabItemProps {
  id: string;
  title: string;
  content: ReactNode;
}

interface TabProps {
  items: TabItemProps[];
}

const Tabs: FC<TabProps> = ({ items }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div>
      <h1>Tab</h1>
      <ul className="tabs__nav ">
        {items.map((item, index) => (
          <li
            key={index}
            className={
              selectedTab === index
                ? "tabs__nav__selected"
                : "tabs__nav__not__selected"
            }
          >
            <a
              onClick={() => setSelectedTab(index)}
              href={`#${item.id}`}
              className="tabs__nav__a"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="tabs__content">
        {items.map(
          (item, index) =>
            selectedTab === index && (
              <div className="tabs__nav-item" id={item.id} key={index}>
                <h2>{item.title}</h2>
                <p>{item.content}</p>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Tabs;
