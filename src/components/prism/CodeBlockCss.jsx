import { useRef, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-scss"; // Import JSX language
import "prismjs/themes/prism.css"; // Importez le fichier CSS de Prism
import PropTypes from "prop-types";
import { icons } from "../icons/icons";

export const CodeBlockCss = ({ code }) => {
  const codeRef = useRef(null);
  const [copySuccess, setCopySuccess] = useState("");
  const html = Prism.highlight(code, Prism.languages.scss, "scss");

  const handleCopy = () => {
    if (codeRef.current) {
      navigator.clipboard
        .writeText(codeRef.current.innerText)
        .then(() => {
          setCopySuccess("Copié!");
          setTimeout(() => setCopySuccess(""), 2000); // Réinitialise 'copySuccess' après 2 secondes
        })
        .catch((error) => {
          console.error("Failed to copy code to clipboard: ", error);
          alert("Failed to copy code to clipboard!");
        });
    }
  };

  return (
    <>
      <pre className="language-scss">
      <span className="copy-button" onClick={handleCopy}>
          {copySuccess || icons.copy}
        </span>
        <code ref={codeRef} dangerouslySetInnerHTML={{ __html: html }} />
      </pre>
    </>
  );
};

CodeBlockCss.propTypes = {
  code: PropTypes.string.isRequired,
};
