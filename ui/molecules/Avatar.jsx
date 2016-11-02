import React from 'react'; 
import {
    mixClass,
    SemanticUI
} from '../../src/index';

const Avatar = (props) =>
{
    const classes = mixClass (
        props.className,
        'avatar'
    );
    return (
        <Image
            {...props}
            className={classes}
        />
    );
}

export default Avatar;
