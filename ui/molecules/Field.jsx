/* jshint esnext: true */
import React, {cloneElement} from 'react';
import {mixClass} from 'class-lib';
import get from 'get-object-value';
import SemanticUI from '../molecules/SemanticUI';

const Field = props => {
  const {
    className,
    fieldClassName,
    fieldStyle,
    fieldStyles,
    children,
    inline,
    type,
    inputComponent,
    inputWrapper,
    inputWrapperAttr,
    label,
    labelStyle,
    labelStyles,
    style,
    styles,
    styleOrder,
    required,
    ...others
  } = props;
  const isGroup = !(props.atom || inputComponent);
  const classes = mixClass(fieldClassName, {
    required: !!required,
    field: !isGroup,
    fields: isGroup,
    inline: !!inline,
  });
  let oLabel = null;
  if (label) {
    let thisLabelStyle = get(labelStyle, null, {});
    if (props.id) {
      thisLabelStyle.cursor = 'pointer';
    }
    oLabel = (
      <SemanticUI
        atom="label"
        key="label"
        htmlFor={props.id}
        style={thisLabelStyle}
        styles={labelStyles}
        styleOrder={styleOrder}>
        {label}
      </SemanticUI>
    );
  }
  let input = null;
  let thisFieldStyles = fieldStyles;
  let thisFieldStyle = fieldStyle;
  let thisChildren = children;
  if (isGroup) {
    if (!thisFieldStyles) {
      thisFieldStyles = styles;
    }
    if (!thisFieldStyle) {
      thisFieldStyle = style;
    }
  } else {
    let inputChildren = null;
    const isSelect = 'select' === props.atom;
    if (isSelect) {
      thisChildren = null;
      inputChildren = children;
    }
    input = inputComponent ? inputComponent : <SemanticUI />;
    const inputClasses = mixClass(
      className,
      get(input, ['props', 'className']),
      {
        dropdown: isSelect,
      },
    );
    input = cloneElement(
      input,
      {
        ...others,
        style: {
          boxSizing: 'inherit',
          ...get(input, ['props', 'style']),
          ...style,
        },
        key: 'input',
        className: inputClasses,
        styles,
        styleOrder,
        required,
        type,
      },
      inputChildren,
    );
  }
  let inputs;
  if ('checkbox' === type || 'radio' === type) {
    inputs = [input, oLabel];
  } else {
    inputs = [oLabel, input];
  }
  if (inputWrapper) {
    inputs = cloneElement(inputWrapper, inputWrapperAttr, inputs);
  }

  return (
    <SemanticUI
      className={classes}
      style={thisFieldStyle}
      styles={thisFieldStyles}
      styleOrder={styleOrder}>
      {inputs}
      {thisChildren}
    </SemanticUI>
  );
};

export default Field;
