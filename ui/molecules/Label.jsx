import React from 'react'; 
import {
    mixClass,
    SemanticUI
} from '../../src/index';

const Label = (props)=>
{
    const classes = mixClass (
        props.className,
        'label'
    );
    return (
        <SemanticUI
            {...props}
            className={classes}
        />
    );
}

export default Label;
