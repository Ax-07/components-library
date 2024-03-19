import { NavLink } from "react-router-dom";
import { CodepenIcon, GithubIcon, LinkedinIcon } from "../../icons/iconsStack";

export const SocialNav = () => {
  const lienCodePen = "https://codepen.io/ax-07";
  const lienLinkedIn = "https://linkedin.com/in/xavier-affringue-374937267";
  const lienGitHub = "https://github.com/Ax-07";

  return (
    <nav className="socialNav">
      <ul className="socialNav__list">
        <li className="socialNav__item">
          <a
            className="socialNav__link"
            href={lienCodePen}
            target="_blank"
            rel="noreferrer"
            aria-label="Lien vers mon profil CodePen"
          >
            <CodepenIcon />
          </a>
        </li>
        <li className="socialNav__item">
          <a
            className="socialNav__link"
            href={lienLinkedIn}
            target="_blank"
            rel="noreferrer"
            aria-label="Lien vers mon profil LinkedIn"
          >
            <LinkedinIcon />
          </a>
        </li>
        <li className="socialNav__item">
          <a
            className="socialNav__link"
            href={lienGitHub}
            target="_blank"
            rel="noreferrer"
            aria-label="Lien vers mon profil GitHub"
          >
            <GithubIcon />
          </a>
        </li>
      </ul>
    </nav>
  );
};
