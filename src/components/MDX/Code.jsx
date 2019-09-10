/* eslint react/jsx-props-no-spreading: 0 */
/* eslint react/no-array-index-key: 0 */

import React from 'react';
import t from 'prop-types';
import styled from 'styled-components';
import Highlight, { defaultProps } from 'prism-react-renderer';
import prism from '../Theme/prism';

const Pre = styled.pre`
  font-size: ${({ theme }) => theme.font.size.small};
  margin-top: ${({ theme }) => theme.space.normal};
  overflow: auto;
  padding: ${({ theme }) => theme.space.normal};
`;

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
        <Pre className={className} style={{ ...style }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};

Code.propTypes = {
  children: t.node.isRequired,
  className: t.string.isRequired
};

export default Code;
