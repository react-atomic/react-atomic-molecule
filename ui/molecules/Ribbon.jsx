import React from 'react'; 
import {
    mixClass,
    Label
} from '../../src/index';

const Ribbon = (props) =>
{
    const classes = mixClass(
        props.className,
        'ribbon'
    );
    return <Label {...props} clssName={classes} />
}
export default Ribbon;
