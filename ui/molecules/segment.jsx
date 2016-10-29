import React, {Component} from 'react'; 
import {
    mixClass,
    SemanticUI
} from '../../src/index';

const Segment = (props) =>
{
    const classes = mixClass (
        props.className,
        'segment'
    );
    return (
      <SemanticUI {...props}
        className={classes}
      />
    );
}

export default Segment;
