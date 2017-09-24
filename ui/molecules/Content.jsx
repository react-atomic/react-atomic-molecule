import React from 'react'; 
import {mixClass} from 'class-lib';
import SemanticUI from '../molecules/SemanticUI';

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

