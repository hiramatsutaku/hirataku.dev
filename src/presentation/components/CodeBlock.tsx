import React, { HTMLAttributes } from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';

export const CodeBlock: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children, className }) => {
  const language = className?.replace(/language-/, '');
  return (
    <Highlight {...defaultProps} code={children as string} language={language as Language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
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
