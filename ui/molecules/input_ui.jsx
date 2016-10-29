import React from 'react'; 
import {
    mixClass,
    SemanticUI
} from '../../src/index';

const InputUI = (props) =>
{
    const classes = mixClass (
        props.className,
        'input action'
    );
    return (
      <SemanticUI {...props}
        className={classes}
      />
    );
}

export default InputUI;
