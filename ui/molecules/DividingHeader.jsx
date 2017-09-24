import React from 'react'; 
import {mixClass} from 'class-lib';
import SemanticUI from '../molecules/SemanticUI';

const DividingHeader = (props)=>
{
    const classes = mixClass(
        props.className,
        'dividing header'
    );
    return <SemanticUI {...props} className={classes} />;
}

export default DividingHeader;
