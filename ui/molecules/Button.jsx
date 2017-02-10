import React from 'react'; 
import {
    mixClass,
    Icon,
    SemanticUI
} from '../../src/index';

const Button = (props) =>
{
    const {className, children, icon, style, ...others} = props;
    const classes = mixClass (
        className,
        'button'
    );
    let thisIcon;
    let buttonWithIconStyle;
    if (icon) {
        thisIcon = <Icon style={Styles.icon}>{icon}</Icon>;
        buttonWithIconStyle = Styles.buttonWithIcon; 
    }
    return (
        <SemanticUI
            atom="button"
            {...others}
            className={classes}
            style={{
               ...buttonWithIconStyle,
               ...style 
            }}
        >
            {thisIcon}
            {children}
        </SemanticUI>
    );
}

Button.defaultProps = {
    type: 'button'
};

export default Button;

const Styles = {
    icon: {
        width: 25,
        height: 25,
        left: 20,
        top: 7,
        fill: '#fff',
        position: 'absolute'
    },
    buttonWithIcon: {
        position: 'relative',
        paddingLeft: 44 
    }
};
