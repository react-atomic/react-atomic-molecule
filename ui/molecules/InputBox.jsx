/* jshint esnext: true */
import React from 'react'; 
import {
    mixClass,
    Button,
    Label,
    SemanticUI
} from '../../src/index';

const InputBox = (props) =>
{
    const {button, buttonProps, children, label, ...others} = props;
    const classes = mixClass (
        props.className,
        'input action',
        {
            labeled: label,
            ['right labeled']: children
        }
    );
    let thisLabel;
    if (label) {
        thisLabel = <Label>{label}</Label>;
    }
    let thisChildren;
    if (children) {
        thisChildren = <Label style={Styles.rightLabel} className="basic">{children}</Label>;
    }
    return (
      <SemanticUI className={classes}>
        {thisLabel}
        <SemanticUI atom='input' {...others} ui={false}  />
        {thisChildren}
        <Button {...buttonProps}>{button}</Button>
      </SemanticUI>
    );
}

InputBox.defaultProps = {
    button: 'Search'
};

export default InputBox;

const Styles = {
    rightLabel: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    }
};
