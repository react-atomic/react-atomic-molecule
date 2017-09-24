import React from 'react'; 
import {mixClass} from 'class-lib';
import SemanticUI from '../molecules/SemanticUI';

const Title = (props) =>
{
    const classes = mixClass (
        props.className,
        'title'
    );
    return (
      <SemanticUI {...props}
        className={classes}
      />
    );
}

export default Title;
