import React from 'react'; 
import {mixClass} from 'class-lib';
import Label from '../molecules/Label';

const Ribbon = (props) =>
{
    const classes = mixClass(
        props.className,
        'ribbon'
    );
    return <Label {...props} clssName={classes} />
}
export default Ribbon;
