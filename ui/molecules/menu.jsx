import React, {Component} from 'react'; 
import {
    mixClass,
    SemanticUI
} from '../../src/index';

const Menu = (props) =>
{
    const classes = mixClass (
        props.className,
        'menu'
    );
    return (
      <SemanticUI {...props}
        className={classes}
      />
    );
}

export default Menu;
