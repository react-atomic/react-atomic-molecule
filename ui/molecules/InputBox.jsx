/* jshint esnext: true */
import React from 'react'; 
import {mixClass} from 'class-lib';
import SemanticUI from '../molecules/SemanticUI';
import Button from '../molecules/Button';
import Label from '../molecules/Label';

const InputBox = (props) =>
{
    const {
        button,
        buttonProps,
        className,
        children,
        messageType,
        leftLabel,
        rightLabel,
        style,
        inputStyle,
        ...others
    } = props;
    const classes = mixClass (
        className,
        messageType,
        'input action',
        {
            labeled: leftLabel || rightLabel,
            right: rightLabel
        }
    );
    let thisLeftLabel;
    if (leftLabel) {
        thisLeftLabel = <Label>{leftLabel}</Label>;
    }
    let thisRightLabel;
    if (rightLabel) {
        thisRightLabel = <Label style={Styles.rightLabel} className="basic">{rightLabel}</Label>;
    }
    return (
      <SemanticUI className={classes} style={style}>
        {thisLeftLabel}
        <SemanticUI atom='input' {...others} style={inputStyle} ui={false} />
        {thisRightLabel}
        {children}
        <Button {...buttonProps}>{button}</Button>
      </SemanticUI>
    );
}

InputBox.defaultProps = {
    button: 'Submit'
};

export default InputBox;

const Styles = {
    rightLabel: {
        borderRadius: 0,
    }
};
