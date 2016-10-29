import React from 'react'; 
import {
    mixClass,
    SemanticUI
} from '../../src/index';

const Header = (props) =>
{
    const classes = mixClass (
        props.className,
        'header'
    );
    return (
      <SemanticUI {...props}
        className={classes}
      />
    );
}

export default Header;
