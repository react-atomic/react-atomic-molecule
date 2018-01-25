/* jshint esnext: true */
import React from 'react'; 
import {mixClass} from 'class-lib';
import SemanticUI from '../molecules/SemanticUI';

const Rail = (props) =>
{
    const {attached, left, ...others} = props;
    const classes = mixClass (
        props.className,
        'rail',
        {
            left,
            attached
        }
    );
    return (
      <SemanticUI {...others}
        className={classes}
      />
    );
}

Rail.defaultProps = {
    attached: true,
    left: true
};

export default Rail;
