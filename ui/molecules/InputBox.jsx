/* jshint esnext: true */
import React from 'react'; 
import {mixClass} from 'class-lib';
import SemanticUI from '../molecules/SemanticUI';
import Button from '../molecules/Button';
import Label from '../molecules/Label';

const InputBox = (props) =>
{
    const {button, buttonProps, children, leftLabel, rightLabel, ...others} = props;
    const classes = mixClass (
        props.className,
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
      <SemanticUI className={classes}>
        {thisLeftLabel}
        <SemanticUI atom='input' {...others} ui={false}  />
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
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    }
};
