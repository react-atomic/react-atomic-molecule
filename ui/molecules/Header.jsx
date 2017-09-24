import React from 'react'; 
import {mixClass} from 'class-lib';
import SemanticUI from '../molecules/SemanticUI';

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
