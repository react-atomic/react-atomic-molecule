import React from 'react'; 
import {mixClass} from 'class-lib';
import SemanticUI from '../molecules/SemanticUI';

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
