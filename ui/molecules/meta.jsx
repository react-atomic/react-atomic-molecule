import React, {Component} from 'react'; 
import {
    mixClass,
    SemanticUI
} from '../../src/index';

const Meta = (props) =>
{
    const classes = mixClass (
        props.className,
        'meta'
    );
    return (
      <SemanticUI {...props}
        ui={false}
        className={classes}
      />
    );
}

export default Meta;

