/* jshint esnext: true */
import React, {Component} from 'react'; 
import {
    mixClass,
    SemanticUI,
} from '../../src/index';

const Field = (props) => {
    const {fieldClassName, fieldStyles, label, labelStyles, styleOrder, ...others} = props;
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
        oLabel = 
            <SemanticUI atom="label" htmlFor={props.id} styles={labelStyles}>
                {label}
            </SemanticUI>;
    }
    let input = null;
    let thisFieldStyles = null;
    if (isGroup) {
        thisFieldStyles = props.styles;
    } else {
        thisFieldStyles = fieldStyles;
        input = <SemanticUI {...others} styleOrder={styleOrder} />;
    }
    return (
        <SemanticUI
            className={classes}
            styles={thisFieldStyles}
            styleOrder={styleOrder}
        >
            {oLabel}
            {input}
            {props.children}
        </SemanticUI>
    );
};

export default Field;