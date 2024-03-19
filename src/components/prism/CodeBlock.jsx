import { useRef, useState } from 'react';

import Prism from 'prismjs';
import 'prismjs/components/prism-jsx.min.js'; // Import JSX language
import 'prismjs/themes/prism.css'; // Importez le fichier CSS de Prism
import PropTypes from "prop-types";

export const CodeBlockJsx = ({ code }) => {
  const codeRef = useRef(null);
  const [copySuccess, setCopySuccess] = useState('');

  const html = Prism.highlight(code, Prism.languages.jsx, 'jsx');

  const handleCopy = () => {
    console.log()
    if (codeRef.current) {
      navigator.clipboard.writeText(codeRef.current.innerText)
        .then(() => {
          setCopySuccess('Copié!');
          console.log('code copier!')
        })
        .catch((error) => {
          console.error('Failed to copy code to clipboard: ', error);
          alert('Failed to copy code to clipboard!');
        });
    }
  };

  return (
    <>    
    <pre className='language-jsx'>
    <button className='copy-button' onClick={handleCopy}>Copier</button>
    {copySuccess && <div style={{ color: 'green' }}>{copySuccess}</div>}
      <code ref={codeRef} dangerouslySetInnerHTML={{ __html: html }} />
    </pre>
    </>

  );
};

CodeBlockJsx.propTypes = {
  code: PropTypes.string.isRequired,
};
