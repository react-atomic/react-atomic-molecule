import React from 'react'; 
import {
    mixClass,
    Icon,
    SemanticUI
} from '../../src/index';

const Button = (props) =>
{
    const {className, children, icon, ...others} = props;
    const classes = mixClass (
        className,
        'button'
    );
    let thisIcon;
    if (icon) {
        thisIcon = <Icon>{icon}</Icon>;
    }
    return (
        <SemanticUI atom="button" {...others} className={classes}>
            {thisIcon}
            {children}
        </SemanticUI>
    );
}

export default Button;
