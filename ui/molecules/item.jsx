/* jshint esnext: true */
import React, {Component} from 'react'; 
import {
    mixClass,
    SemanticUI
} from '../../src/index';

const Item = (props) =>
{
    const classes = mixClass (
        props.className,
        'item'
    );
    return (
      <SemanticUI {...props}
        className={classes}
      />
    );
}

export default Item;
