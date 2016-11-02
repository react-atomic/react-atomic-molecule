/* jshint esnext: true */
import React from 'react'; 
import {
    mixClass,
    SemanticUI
} from '../../src/index';

const Rail = (props) =>
{
    const {left, ...others} = props;
    const classes = mixClass (
        props.className,
        'card',
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
