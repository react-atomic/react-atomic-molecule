import React from 'react'; 
import {
    mixClass,
    SemanticUI,
} from '../../src/index';

const Divider = (props) => {
        const classes = mixClass(
            props.className,
            'divider'
        );

        return (
            <SemanticUI
                {...props}
                className={classes}
            />
        );
};

export default Divider;

