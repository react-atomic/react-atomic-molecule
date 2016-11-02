/* jshint esnext: true */
import React from 'react'; 
import {
    mixClass,
    Button,
    SemanticUI
} from '../../src/index';

const InputBox = (props) =>
{
    const classes = mixClass (
        props.className,
        'input action'
    );
    return (
      <SemanticUI className={classes}>
        <SemanticUI atom='input' {...props} ui={false}  />
        <Button>Search</Button>
      </SemanticUI>
    );
}

export default InputBox;
