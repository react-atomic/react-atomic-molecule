/* jshint esnext: true */
import React from 'react'; 
import {
    mixClass,
    SemanticUI
} from '../../src/index';

const Description = (props) => {
    const {children, className, ...others} = props;
    const classes = mixClass(
        className
        ,'description'
    );
    return (
      <SemanticUI {...others}
        ui={false}
        className={classes}
      >
        {
            (children && children.map) ? 
            children.map((v, k)=> <SemanticUI key={k}>{v}</SemanticUI>) : 
            children
        }
      </SemanticUI>
    );
};

export default Description;