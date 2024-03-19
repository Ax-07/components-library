import React, { useState } from "react";
import PropTypes from "prop-types";

export const Tabs = ({ type, children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const toggle = (tabIndex) => {
    if (activeTab !== tabIndex) setActiveTab(tabIndex);
  };
  return (
    <div className="tabs">
      <aside className="tabs__nav">
        <ul className={`tabs__list${type === "left" ? "__left" : ""}`}>
          {React.Children.map(children, (child, index) => (
            <li
              key={index}
              className={`tabs__item ${activeTab === index ? "active" : ""}`}
              onClick={() => toggle(index)}
            >
              {child.props.title}
            </li>
          ))}
        </ul>
      </aside>
      <div className="tabs__content">{children[activeTab]}</div>
    </div>
  );
};

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  type: PropTypes.string,
};

export const TabsItem = ({ title, children }) => {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  );
};

TabsItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export const codeTabs = `
import React, { useState } from "react";

export const Tabs = ({ type, children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const toggle = (tabIndex) => {
    if (activeTab !== tabIndex) setActiveTab(tabIndex);
  };
  return (
    <div className="tabs">
      <aside className="tabs__nav">
        <ul className={\`tabs__list\${type === "left" ? "__left" : ""}\`}>
          {React.Children.map(children, (child, index) => (
            <li
              key={index}
              className={\`tabs__item \${activeTab === index ? "active" : ""}\`}
              onClick={() => toggle(index)}
            >
              {child.props.title}
            </li>
          ))}
        </ul>
      </aside>
      <div className="tabs__content">{children[activeTab]}</div>
    </div>
  );
};
`