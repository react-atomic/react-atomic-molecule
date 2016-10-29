/* jshint esnext: true */
import React from 'react'; 
import {
    mixClass,
    SemanticUI
} from '../../src/index';

const InputBox = (props) =>
{
    const classes = mixClass (
        props.className,
        'input'
    );
    return (
      <SemanticUI className={classes} style={{width:"100%"}}>
        <SemanticUI atom='input' {...props} ui={false}  />
      </SemanticUI>
    );
}

export default InputBox;
