import React from 'react'; 
import {
    mixClass,
    Image
} from '../../src/index';

const CircularImage = (props) =>
{
    const classes = mixClass(
        props.className,
        'circular'
    );
    return (
        <Image {...props} className={classes} />
    );
}

export default CircularImage;
