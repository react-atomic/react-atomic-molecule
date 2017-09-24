import React from 'react'; 
import {mixClass} from 'class-lib';
import SemanticUI from '../molecules/SemanticUI';

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
            style={{
                display: 'inline-block',
                ...style
            }}
        />
    );
}

export default Icon;
