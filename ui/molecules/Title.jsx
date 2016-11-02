import React from 'react'; 
import {
    mixClass,
    SemanticUI
} from '../../src/index';
const Title = (props) =>
{
    const classes = mixClass (
        props.className,
        'title'
    );
    return (
      <SemanticUI {...props}
        className={classes}
      />
    );
}

export default Title;
