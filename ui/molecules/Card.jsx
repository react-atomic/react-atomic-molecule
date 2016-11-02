import React from 'react'; 
import {
    mixClass,
    SemanticUI
} from '../../src/index';

const Card = (props) =>
{
    const classes = mixClass (
        props.className,
        'card'
    );
    return (
      <SemanticUI {...props}
        className={classes}
      />
    );
}

export default Card;
