import React from 'react'; 
import {
    mixClass,
    SemanticUI
} from '../../src/index';

const Content = (props)=>
{
    const classes = mixClass (
        props.className,
        'content'
    );
    return (
      <SemanticUI {...props}
        ui={false}
        className={classes}
      />
    );
}
export default Content;

