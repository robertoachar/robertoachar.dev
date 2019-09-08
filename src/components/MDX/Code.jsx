/* eslint react/jsx-props-no-spreading: 0 */
/* eslint react/no-array-index-key: 0 */

import React from 'react';
import t from 'prop-types';
import Highlight, { defaultProps } from 'prism-react-renderer';
import prism from '../Theme/prism';

const Code = ({ children, className: codeClassName }) => {
  const language = codeClassName.replace(/language-/, '');

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={prism}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{ ...style, overflow: 'auto', padding: '16px' }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

Code.propTypes = {
  children: t.node.isRequired,
  className: t.string.isRequired
};

export default Code;
