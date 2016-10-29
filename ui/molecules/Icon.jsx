import React from 'react'; 
import {
    mixClass,
    SemanticUI
} from '../../src/index';

const Icon = (props) =>
{
    const {className, ...others} = props;
    const classes = mixClass (
        className,
        'icon'
    );
    return (
        <SemanticUI
            atom="i"
            ui={false}
            {...others}
            className={className}
        />
    );
}

export default Icon;
