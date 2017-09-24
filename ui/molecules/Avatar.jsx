import React from 'react';
import {mixClass} from 'class-lib';
import SemanticUI from '../molecules/SemanticUI';

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
