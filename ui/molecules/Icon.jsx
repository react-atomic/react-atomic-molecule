import React from 'react'; 
import {
    assign,
    mixClass,
    SemanticUI
} from '../../src/index';

const Icon = (props) =>
{
    const {className, style, ...others} = props;
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
            style={assign(
                {display: 'inline-block'},
                style
            )}
        />
    );
}

export default Icon;
