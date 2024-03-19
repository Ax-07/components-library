import { NavLink } from "react-router-dom";
import { GithubIcon } from "../../icons/iconsStack";
import PropTypes from "prop-types";


export const SimpleHero = ({data}) => {
  return (
    <section className="simpleHero">
      <h1 className="simpleHero__title">{data.title}</h1>
      <p className="simpleHero__description">{data.description}</p>
      <p className="simpleHero__description">{data.description2}</p>
      <div className="simpleHero__wrapper">
        <NavLink to="/components">
          <button>Get started</button>
        </NavLink>
          <a href="">
        <button>
            <GithubIcon />
          <p>Github</p>
        </button>
          </a>
      </div>
    </section>
  );
};

SimpleHero.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    description2: PropTypes.string,
  })
}

export const codeSimpleHeroJsx = `
import { NavLink } from "react-router-dom";
import { GithubIcon } from "../../icons/iconsStack";

// const data = {
//   title: "<Ax-ui/>",
//   description: "Encore une librairie de composants React !!",
//   description2: "Pour prendre des p'tits bouts d'trucs et puis les assembler ensemble 🎵."
// }

export const SimpleHero = (data) => {
  return (
    <section className="simpleHero">
      <h1 className="simpleHero__title">{data.title}</h1>
      <p className="simpleHero__description">{data.description}</p>
      <p className="simpleHero__description">{data.description2}</p>
      <div className="simpleHero__wrapper">
        <NavLink to="/documentations">
          <button>Get started</button>
        </NavLink>
          <a href="">
        <button>
            <GithubIcon />
          <p>Github</p>
        </button>
          </a>
      </div>
    </section>
  );
};`;

export const codeSimpleHeroScss = `
.simpleHero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 100px auto;

  &__title {
      font-size: 3rem;
      margin-bottom: 1rem;
  }
  &__description {
      font-size: 1.5rem;
      margin-bottom: 1rem;
  }
  &__wrapper {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-top: 1rem;
      gap: 1rem;
  }
}`

export const codeExemple = ''