import {
  SimpleHero,
  codeSimpleHeroJsx,
  codeSimpleHeroScss,
} from "../components/hero/simpleHero/SimpleHero";
import { CodeBlockJsx } from "../components/prism/CodeBlock";
import PropTypes from "prop-types";
import { Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";
import { CodeBlockCss } from "../components/prism/CodeBlockCss";

const data = {
  title: "<Ax-ui/>",
  description: "Encore une librairie de composants React !!",
  description2:
    "Pour prendre des p'tits bouts d'trucs et puis les assembler ensemble 🎵.",
};

const components = [
  {
    name: "Simple-hero",
    route: "simple-hero",
    component: <SimpleHero data={data} />,
    codeJsx: <CodeBlockJsx code={codeSimpleHeroJsx} />,
    codeCss: <CodeBlockCss code={codeSimpleHeroScss} />,
    description:
      "A simple hero with a title, description and two call to action buttons.",
    utilisation: "utilisation",
  },
];

export const Components = () => {
  const [index, setIndex] = useState(null);
  const onSetIndex = (i) => {
    setIndex(i);
    console.log(components[i].route);
  };
  return (
    <>
      <section className="sideNavLayout">
        <aside className="sideNavLayout__nav">
          <ul className={`sideNavLayout__list`}>
            {components.map((component, i) => (
              <NavLink
                key={i}
                className={`sideNavLayout__item${
                  i === index ? "--active" : ""
                }`}
                to={`/components/${component.route}`}
                onClick={() => onSetIndex(i)}
              >
                {component.name}
              </NavLink>
            ))}
          </ul>
        </aside>
        <div className="sideNavLayout__content">
          <header className="sideNavLayout__content__header">
            <p className="sideNavLayout__content__location">
              {`components >  ${
                index !== null || undefined ? components[index].name : ""
              } `}
            </p>
            <hr />
            <h2 className="sideNavLayout__content__title">
              {components[index]?.name}
            </h2>
            <p>{components[index]?.description}</p>
          </header>
          <div className="sideNavLayout__content__main">
            <Routes>
              <Route
                path={`/${components[index]?.route}`}
                element={<ComponentRender component={components[index]} />}
              />
            </Routes>
          </div>
        </div>
      </section>
    </>
  );
};

export const ComponentRender = ({ component }) => {
  const [render, setRender] = useState("preview");
  const [isActive, setIsActive] = useState({
    preview: true,
    jsx: false,
    scss: false,
  });
  console.log("composant rendu");

  const onSelectRender = (value) => {
    setRender(value);
    setIsActive({
      preview: value === "preview",
      jsx: value === "jsx",
      scss: value === "scss",
    });
  };

  return (
    <div>
      <div className="componentRender__btn-container">
        <div className={`componentRender__btn-wrapper`}>
          <span
            className={`componentRender__btn`}
            onClick={() => onSelectRender("preview")}
          >
            Preview
          </span>
          <span className={`componentRender__btn-underline ${isActive.preview ? "active" : ""}`}></span>
        </div>
        <div className={`componentRender__btn-wrapper`}>
          <span
            className={`componentRender__btn`}
            onClick={() => onSelectRender("jsx")}
          >
            Jsx
          </span>
          <span className={`componentRender__btn-underline ${isActive.jsx ? "active" : ""}`}></span>
        </div>
        <div className={`componentRender__btn-wrapper`}>
          <span
            className={`componentRender__btn`}
            onClick={() => onSelectRender("scss")}
          >
            Scss
          </span>
          <span className={`componentRender__btn-underline ${isActive.scss ? "active" : ""}`}></span>
        </div>
      </div>
      <div className="componentRender__container">
        {render === "preview" && component.component}
        {render === "jsx" && component.codeJsx}
        {render === "scss" && component.codeCss}
      </div>
    </div>
  );
};

ComponentRender.propTypes = {
  component: PropTypes.object,
};
