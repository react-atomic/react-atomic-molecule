/* jshint esnext: true */
import React, {cloneElement} from 'react'; 
import {mixClass} from 'class-lib';
import SemanticUI from '../molecules/SemanticUI';

const Field = (props) => {
    const {
        className,
        fieldClassName,
        fieldStyles,
        children,
        inline,
        type,
        inputComponent,
        inputWrapper,
        inputWrapperAttr,
        label,
        labelStyles,
        style,
        styleOrder,
        ...others
    } = props;
    const isGroup = !(props.atom || inputComponent);
    const classes = mixClass(
        fieldClassName,
        {
            field: !isGroup,
            fields: isGroup,
            inline: !!inline
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
                styleOrder={styleOrder}
            >
                {label}
            </SemanticUI>;
    }
    let input = null;
    let thisFieldStyles = null;
    let thisChildren = children;
    if (isGroup) {
        thisFieldStyles = props.styles;
    } else {
        let inputChildren = null;
        const isSelect = 'select' === props.atom;
        const inputClasses = mixClass(
            className,
            {
                'dropdown': isSelect
            }
        );
        if (isSelect) {
            thisChildren = null;
            inputChildren = children;
        }
        thisFieldStyles = fieldStyles;
        input = (inputComponent) ? inputComponent : <SemanticUI />;
        input = cloneElement(input, { 
            ...others,
            style: {
                boxSizing: 'inherit',
                ...style
            },
            key: 'input',
            className: inputClasses,
            styleOrder,
            type,
        }, inputChildren);
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
            inputWrapperAttr,
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
            {thisChildren}
        </SemanticUI>
    );
};

export default Field;
