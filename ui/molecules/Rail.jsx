/* jshint esnext: true */
import React from 'react'; 
import {mixClass} from 'class-lib';
import SemanticUI from '../molecules/SemanticUI';

const Rail = (props) =>
{
    const {left, ...others} = props;
    const classes = mixClass (
        props.className,
        'rail',
        {
            left: left
        }
    );
    return (
      <SemanticUI {...others}
        className={classes}
      />
    );
}

Rail.defaultProps = {left: true};

export default Rail;
