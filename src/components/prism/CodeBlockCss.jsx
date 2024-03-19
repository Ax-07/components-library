import { useRef } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-scss"; // Import JSX language
import "prismjs/themes/prism.css"; // Importez le fichier CSS de Prism
import PropTypes from "prop-types";

export const CodeBlockCss = ({ code }) => {
  const codeRef = useRef(null);

  const html = Prism.highlight(code, Prism.languages.scss, "scss");

  const handleCopy = () => {
    console.log();
    if (codeRef.current) {
      navigator.clipboard
        .writeText(codeRef.current.innerText)
        .then(() => {
          alert("Code copied to clipboard!");
          console.log("code copier!");
        })
        .catch((error) => {
          console.error("Failed to copy code to clipboard: ", error);
          alert("Failed to copy code to clipboard!");
        });
    }
  };

  return (
    <>
      <pre className="language-jsx">
      <button className="copy-button" onClick={handleCopy}>
        Copy code
      </button>
        <code ref={codeRef} dangerouslySetInnerHTML={{ __html: html }} />
      </pre>
    </>
  );
};

CodeBlockCss.propTypes = {
  code: PropTypes.string.isRequired,
};
