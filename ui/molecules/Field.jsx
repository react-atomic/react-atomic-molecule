/* jshint esnext: true */
import React, {cloneElement} from 'react'; 
import {
    mixClass,
    SemanticUI,
} from '../../src/index';

const Field = (props) => {
    const {fieldClassName, fieldStyles, type, inputWrapper, label, labelStyles, style, styleOrder, ...others} = props;
    const isGroup = !props.atom; 
    const classes = mixClass(
        fieldClassName,
        {
            field: !isGroup,
            fields: isGroup
        }
    );
    let oLabel = null;
    if (label) {
        let labelStyle = {};
        if (props.id) {
            labelStyle = {cursor:'pointer'};
        }
        oLabel = 
            <SemanticUI
                atom="label"
                key="label"
                htmlFor={props.id}
                style={labelStyle}
                styles={labelStyles}
            >
                {label}
            </SemanticUI>;
    }
    let input = null;
    let thisFieldStyles = null;
    if (isGroup) {
        thisFieldStyles = props.styles;
    } else {
        thisFieldStyles = fieldStyles;
        input = <SemanticUI
            {...others} 
            style={{boxSizing:'border-box', ...style}}
            styleOrder={styleOrder}
            key="input"
            type={type}
        />;
    }
    let inputs;
    if ('checkbox'===type || 'radio'===type) { 
        inputs = [
            input,
            oLabel,
        ];
    } else {
        inputs = [
            oLabel,
            input,
        ];
    }
    if (inputWrapper) {
        inputs = cloneElement(
            inputWrapper,
            {},
            inputs
        );
    }
    return (
        <SemanticUI
            className={classes}
            styles={thisFieldStyles}
            styleOrder={styleOrder}
        >
            {inputs}
            {props.children}
        </SemanticUI>
    );
};

export default Field;
