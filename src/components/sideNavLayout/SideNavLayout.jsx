// import { Routes, Route, NavLink } from "react-router-dom";
// import { Home } from "../../pages/Home";
// import { CodeBlock } from "../prism/CodeBlock";
// import {
//   SimpleHero,
//   codeSimpleHeroJsx,
//   codeSimpleHeroScss,
// } from "../hero/simpleHero/SimpleHero";
// import { useState } from "react";



// export const SideNavLayout = (component) => {
//   const [render, setRender] = useState('preview');

//   console.log(component.route);
//   return (
//     <div className="tabs">
//       <aside className="tabs__nav">{component.link}</aside>
//       <section className="tabs__content">
//         <button
//           className="btn btn--primary"
//           onClick={() => setRender("preview")}
//         >Preview</button>
//         <button
//           className="btn btn--primary"
//           onClick={() => setRender("jsx")}
//         >Code JSX</button>
//         <button
//           className="btn btn--primary"
//           onClick={() => setRender("scss")}
//         >Code SCSS</button>
//         {render === "preview" && {component.route}}
//         {render === "jsx" && <div>{component.codeJsx }</div>}
//         {render === "scss" && <div>{component.codeCss }</div>}
//       </section>
//     </div>
//   );
// };

