import React from 'react'; 
import {
    mixClass,
    SemanticUI
} from '../../src/index';

const DividingHeader = (props)=>
{
    const classes = mixClass(
        props.className,
        'dividing header'
    );
    return <SemanticUI {...props} className={classes} />;
}

export default DividingHeader;
