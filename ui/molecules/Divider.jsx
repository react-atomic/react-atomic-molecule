import React from 'react'; 
import {mixClass} from 'class-lib';
import SemanticUI from '../molecules/SemanticUI';

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

