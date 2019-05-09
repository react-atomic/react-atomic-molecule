import React from 'react';
import Svg from './Svg';
import Path from './Path';

const base = displayName => d => {
  const Element = ({type, ...props}) => (
    <Svg {...props} data-name={displayName}>
      <Path d={d[type] || d['_'] || d} />
    </Svg>
  );
  Element.displayName = displayName;
  return Element;
};

export default base;
