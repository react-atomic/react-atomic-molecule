/* jshint esnext: true */
import React, {cloneElement} from 'react';
import {mixClass} from 'class-lib';
import get from 'get-object-value';
import SemanticUI from '../molecules/SemanticUI';
import Message from '../molecules/Message';
import Label from '../molecules/Label';

const Field = props => {
  const {
    className,
    fieldClassName,
    fieldStyle,
    fieldStyles,
    fieldProps,
    children,
    inline,
    type,
    inputComponent,
    inputWrapper,
    inputWrapperAttr,
    label,
    labelStyle,
    labelStyles,
    labelWrap,
    style,
    styles,
    styleOrder,
    required,
    messageType,
    messageProps,
    message,
    topTip,
    bottomTip,
    rightTip,
    ...others
  } = props;
  const isGroup = !(props.atom || inputComponent);
  const classes = mixClass(fieldClassName, {
    'label-wrap': labelWrap,
    required: !!required,
    field: !isGroup,
    fields: isGroup,
    inline: !!inline,
    info: messageType === 'info',
    error: messageType === 'error',
    success: messageType === 'success',
    warning: messageType === 'warning',
  });
  let oLabel = null;
  if (label) {
    const thisLabelStyle = {...get(labelStyle, null, {})};
    if (props.id) {
      thisLabelStyle.cursor = 'pointer';
    }
    if (labelWrap) {
      thisLabelStyle.flex = '0 1 100%';
      messageProps.style = {...messageProps.style};  
      messageProps.style.flex = '0 1 100%'; 
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
      thisFieldStyle = style || {};
    }
    if (label && labelWrap) {
      thisFieldStyle.flexWrap = 'wrap';
    }
  } else {
    const isSelect = 'select' === props.atom;
    input = inputComponent ? inputComponent : <SemanticUI />;
    const inputProps = get(input, ['props'], {});

    // set inputChildren
    let inputChildren = inputProps.children || null;
    if (isSelect) {
      thisChildren = null;
      inputChildren = children;
    }

    const inputClasses = mixClass(className, inputProps.className, {
      dropdown: isSelect,
    });

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
  let topTipEl;
  if (topTip) {
    topTipEl = (
      <Label key="topTip" className="pointing below prompt">
        {topTip}
      </Label>
    );
  }
  let inputs;
  if ('checkbox' === type || 'radio' === type) {
    inputs = [topTipEl, input, oLabel];
  } else {
    inputs = [oLabel, topTipEl, input];
  }
  if (inputWrapper) {
    inputs = cloneElement(inputWrapper, inputWrapperAttr, inputs);
  }
  let messageEl;
  let bottomTipEl;
  let rightTipEl;
  if (message) {
    messageEl = (
      <Message messageType={messageType} {...messageProps}>
        {message}
      </Message>
    );
  }
  if (bottomTip) {
    bottomTipEl = <Label className="above pointing prompt">{bottomTip}</Label>;
  }
  if (rightTip) {
    rightTipEl = <Label className="left pointing prompt">{rightTip}</Label>;
  }

  return (
    <SemanticUI
      {...fieldProps}
      className={classes}
      style={thisFieldStyle}
      styles={thisFieldStyles}
      styleOrder={styleOrder}>
      {inputs}
      {thisChildren}
      {rightTipEl}
      {bottomTipEl}
      {messageEl}
    </SemanticUI>
  );
};

export default Field;
