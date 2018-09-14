import React from 'react';
import {mixClass} from 'class-lib';
import SemanticUI from '../molecules/SemanticUI';

const Content = ({className, style, ...props}) => {
  const classes = mixClass(className, 'content');
  return (
    <SemanticUI
      ui={false}
      {...props}
      className={classes}
      style={{...style, boxSizing: 'inherit'}}
    />
  );
};
export default Content;
